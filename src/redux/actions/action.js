export const getListStart = () => {
    return {
        type: 'GET_LIST_START',
        payload: true
    }
}

export const getMovieList = (page) =>
    (dispatch) => {
        let jsonData = require(`../../api/CONTENTLISTINGPAGE-PAGE${page}.json`)
        let data = jsonData ? jsonData   :  null
        dispatch({ type: 'GET_LIST', payload: data.page['content-items'].content })
    }


