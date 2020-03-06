import React, { useEffect, useState } from "react";
import { getMovieList, getListStart } from "../redux/actions/action";
import { useSelector, useDispatch } from "react-redux";
import InfiniteScroll from "react-infinite-scroller";
import Item from "./media/item"
import Head from "./head";

export default function Index() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListStart());
  }, [dispatch]);


   
  let list = useSelector(({ list }) => list);
  let movieList = list.list;
  let isMore = list.loadMore;

  const [search, setSearch] = useState("")
  const handleChnage = (e) => {
    setSearch(e.target.value)
  }

  if (search.length > 0) {
    let searchResult = movieList.filter(item =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
    movieList = searchResult;
  } else {
    movieList = list.list;
  }
 


  const loadMore = page => {
    if (page <= 3) {
      dispatch(getMovieList(page));
    }
  };


  
  


  return (
    <div className="grid grid-cols-3 app-wrapper">
      <div className="col-span-3">
        <Head search={search} handleChnage={handleChnage} />
      </div>
      <div className="col-span-3">
        <InfiniteScroll
          pageStart={0}
          loadMore={loadMore}
          hasMore={isMore}
          loader={
            <div className="loader" key={0}>
              Loading ...
            </div>
          }
          useWindow={false}
        >
          <Item movieList={movieList} />
        </InfiniteScroll>
      </div>
    </div>
  );
}
