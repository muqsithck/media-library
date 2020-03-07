import React, { useState } from "react";
import image from "../../assets/nav_bar.png";
import { MdSearch, MdClose , MdArrowBack } from "react-icons/md";

function App(props) {
  const [search, searchHandler] = useState(false);

  const toggleSearch = () => {
    searchHandler(!search);

    // if(search){
    //     props.searchClear()
    // }
  };

  return (
    <div className="fixed top-0">
      <img className="m-0 w-screen header-height" src={image} alt="" />
      <div className=" absolute top-0 p-1 pt-2 text-gray-500 text-centre" >
        <div className="flex flex-initial justify-center  items-center bg-transparent pr-4">
          <div className="flex-initial pr-2">
            <MdArrowBack className="text-white font-semibold .text-5xl" />
          </div>
          <div className="flex-initial pr-6">
            <h2 className="media-category">Romantic Comedy</h2>
          </div>

          {search ? (
            <input
              className="fixed right-0 mr-10 search-box"
              autoFocus
              onChange={props.handleChnage}
              type="text"
            ></input>
          ) : null}
          <div className="fixed right-0 p-2 pr-4" onClick={toggleSearch}>
          {search ? 
            <MdClose className="text-white text-2xl ml-1"  />  :
            <MdSearch  className="text-white" />
          } 
          </div>
        </div>
      </div>

       {/* <div 
       style={{position:"absolute", top:"0", left:"0", height:'70%', width:'100%', backgroundColor:"black", opacity:'.9', zIndex:"999" }}
       ></div> */}

    </div>
  );
}

export default App;
