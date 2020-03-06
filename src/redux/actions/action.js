// import jsonData from '../../api/CONTENTLISTINGPAGE-PAGE1.json'

export const getListStart = () => {
    return {
        type: 'GET_LIST_START',
        payload: true
    }
}

export const getMovieList = (page) =>
    (dispatch) => {
        let jsonData = require(`../../api/CONTENTLISTINGPAGE-${page}.json`)
        console.log("req", jsonData)
        let data = jsonData ? jsonData   :  null
        dispatch({ type: 'GET_LIST', payload: data.page['content-items'] })
    }


