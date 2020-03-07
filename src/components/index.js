import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import InfiniteScroll from "react-infinite-scroller";
import { getMoreList, getFirstList } from "../redux/actions/action"; // Actions
import Media from "./media/";
import Head from "./head";

export default function Index() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFirstList());
  }, [dispatch]);

  // Fetch fruit list from redux state(Global State) using 'useSelector'
  let reduxList = useSelector(({ list }) => list);
  let mediaList = reduxList.list;
  let loadMore = reduxList.loadMore;

  // Search function
  const [search, setSearch] = useState("");
  const handleChnage = e => {
    setSearch(e.target.value);
  };

  if (search.length > 0) {
    let searchResult = mediaList.filter(item =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
    mediaList = searchResult;
  } else {
    mediaList = reduxList.list;
  }

  // on scroll page loading
  const loadMoreHandle = page => {
    if (page <= 3) {
      dispatch(getMoreList(page));
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
          loadMore={loadMoreHandle}
          hasMore={loadMore}
          loader={
            <div className="loader text-center" key={0}>
              <p className="media-title p-8"> Loading ..... </p>
            </div>
          }
          useWindow={false}
        >
          <Media mediaList={mediaList} />
        </InfiniteScroll>
      </div>
    </div>
  );
}
