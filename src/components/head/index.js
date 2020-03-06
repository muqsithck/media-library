import React, { useState } from "react";
import image from "../../assets/nav_bar.png";
import { FaArrowLeft } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

function App(props) {
  const [search, searchHandler] = useState(false);

  const toggleSearch = () => {
    searchHandler(!search);

    // if(search){
    //     props.searchClear()
    // }
  };

  return (
    <div className="fixed  top-0 bg-transparent">
      <img className="m-0 w-screen header-height" src={image} alt="" />
      <div className=" absolute top-0 p-1 pt-2 text-gray-500 text-centre">
        <div className="flex flex-initial justify-center  items-center bg-transparent pr-4">
          <div className="flex-initial pr-4">
            <FaArrowLeft />
          </div>
          <div className="flex-initial pr-4">
            <h2 className="text-poster-title font-light">Romantic Comedy</h2>
          </div>

          {search ? (
            <input
              className="fixed right-0 mr-10"
              autoFocus
              onChange={props.handleChnage}
              style={{
                paddingLeft: "10px",
                paddingRight: "10px",
                width: "170px"
              }}
              type="text"
            ></input>
          ) : null}
          <div className="fixed right-0 p-2 pr-4" onClick={toggleSearch}>
            <FaSearch />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
