import axios from 'axios';

const fetchLibraryApi = (val) => {
  return { type: "LIBRARYS", value: val }
}


export const fetchLibrary = () => {
  return function (dispatch) {
    return axios.get('http://localhost:5000/library')
      .then(({ data }) => {
        dispatch(fetchLibraryApi(data));
      });
  };
}


