const initialState = {
    playlist: [],
    list_item:[],
    create_list:{}
}

const playListReducer = (state = initialState, action) => {
    switch (action.type) {
        case "PLAYLISTS":
            return {
                ...state,
                playlist: action.value
            };       
            case "ADD_LIST":
                return {
                    ...state,
                    list_item: [...state.list_item, action.value,]
                };
            case "REMOVE_LIST":
                return {
                    ...state,
                    list_item: state.list_item.filter(list => list.id !== action.value.id)
                };
            case "CREATE_LIST":
                    return {
                      ...state,
                      create_list : state.create_list
                };
            case "CLEAR_LIST":
                return{
                    ...state,
                    list_item:[]
                }
        default:
            return state
    }
}

export default playListReducer