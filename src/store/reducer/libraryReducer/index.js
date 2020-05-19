const initialState = {
    musiceLibrary: []
}

const libraryReducer = (state = initialState, action) => {
    console.log( action)
    switch (action.type) {
        case "LIBRARYS":
            return {
                ...state,
                musiceLibrary: action.value
            };           
        default:
            return state
    }
}

export default libraryReducer