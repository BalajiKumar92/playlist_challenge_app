import axios from 'axios';

const headers = {
  'Content-Type': 'application/json'
}

const fetchPlayListApi = (val) => {
  return { type: "PLAYLISTS", value: val }
}

const addPlayList = (val) => {
  return { type: "ADD_LIST", value: val }
}

const clearList = () => {
  return { type: "CLEAR_LIST" }
}

export const fetchPlayList = () => {
  return function (dispatch) {
    return axios.get('http://localhost:5000/playlist')
      .then(({ data }) => {
        dispatch(fetchPlayListApi(data));
      });
  };
}

export const createPlayList = (data) => {
  return  (dispatch) =>{
    return axios.post('http://localhost:5000/playlist', data, {
      headers: headers
    })
      .then(({ result }) => {
        dispatch(createPlayListApi(result));
      }).catch(e =>{
        console.log(e)
      });
  };
}

export const graphqlFetch = (query) => {
  return (dispatch) => {

    return axios.post('http://localhost:5000/graphql', {
      query: query
    }, {
      headers: headers
    })
      .then(({ result }) => {
        dispatch(createPlayListApi(result));
      }).catch(e => {
        console.log(e)
      });
  };
}

const createPlayListApi = (val) => {
  return { type: "CREATE_LIST", value: val }
}

export const addToList = (val) => {
  return dispach => {
    dispach(addPlayList(val.value))
  }
}

export const clearAddedList = () => {
  return dispach => {
    dispach(clearList())
  }
}


export const removeFromList = (val) => {
  return dispach => {
    dispach(removeFromListAction(val.value))
  }
}

const removeFromListAction = (val) => {
  return { type: "REMOVE_LIST", value: val }
}
