const initialState = {
    list: [],
    loader: false,
    loadMore: false
   
}

const familyReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case 'GET_LIST_START': {
            return {
                ...state,  loadMore: payload
            }
        }

        case 'GET_LIST': {
            return {
                ...state, list:  [...state.list, payload.content ],
            }
        }
        default:
            return state
    }
}

export default familyReducer
