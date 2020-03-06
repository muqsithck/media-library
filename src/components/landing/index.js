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
  }, [dispatch]);


  const loadMore = page => {
    if(page <= 3){
    dispatch(getMovieList(page))
    }
  };

  return (
 

          
      <div style={{height:"80vh",overflow:"auto", backgroundColor:'red', width:'100vw'}}>  
      <InfiniteScroll
        pageStart={0}
        loadMore={loadMore}
        hasMore={isMore}
        loader={
          <div className="loader" key={0}>
            Wait ...
          </div>
        }
        useWindow={false}
      >
        
             <Item movieList={movieList} />

      </InfiniteScroll>
      </div>
    
  );
}
