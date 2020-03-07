const initialState = {
    list: [],
    loadMore: false
   
}

const familyReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case 'GET_FIRST_LIST': {
            return {
                ...state,  loadMore: payload
            }
        }

        case 'GET_MORE_LIST': {
            return {
                ...state, list:[...state.list, ...payload ],
            }
        }
        default:
            return state
    }
}

export default familyReducer
