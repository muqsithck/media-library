import React, { useEffect } from "react";
import { getMovieList, getListStart } from "../../redux/actions/action";
import { useSelector, useDispatch } from "react-redux";
import InfiniteScroll from "react-infinite-scroller";
import Item from './item'

export default function Index() {
  const dispatch = useDispatch();
  let list = useSelector(({ list }) => list);
  let movieList = list.list;
  let isMore = list.loadMore;

  useEffect(() => {
    dispatch(getListStart());
    // dispatch(getMovieList("PAGE1"));

  }, [dispatch]);

  console.log("list:", list);

  const loadMore = page => {
    console.log("page :", page);
    dispatch(getMovieList("PAGE1"));
  };

  return (
    <div className="grid grid-cols-3 gap-1">
      <div className="col-span-3 bg-white">3</div>

          
      <div style={{height:"80vh",overflow:"auto", backgroundColor:'red', width:'100vw'}}>  
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
