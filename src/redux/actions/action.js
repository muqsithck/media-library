export const getFirstList = () => {
  return {
    type: "GET_FIRST_LIST",
    payload: true
  };
};

export const getMoreList = page => dispatch => {
  let jsonData = require(`../../api/CONTENTLISTINGPAGE-PAGE${page}.json`);
  let data = jsonData ? jsonData : null;
  dispatch({
    type: "GET_MORE_LIST",
    payload: data.page["content-items"].content
  });
};
