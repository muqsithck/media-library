import React, { useState } from "react";
import image from "../../assets/nav_bar.png";
import { MdSearch, MdClose, MdArrowBack } from "react-icons/md";

function Index(props) {
  const [isSearch, setIsSearch] = useState(false);
  return (
    <div className="fixed top-0">
      <img className="m-0 w-screen header-height" src={image} alt="" />
      <div className=" absolute top-0 p-1 pt-5 text-gray-500 text-centre">
        <div className="flex flex-initial justify-center  items-center bg-transparent pr-4" style={{height:'35px'}}>
          <div className="flex-initial pr-2">
            <p className="media-category">
              <MdArrowBack />
            </p>
          </div>

          {isSearch ? (
            <input
              className="fixed right-0 mr-10 search-box"
              onChange={props.handleChnage}
              type="text"
              placeholder="Search movies..."
              autoFocus
            ></input>
          ) : (
            <div className="flex-initial pr-6" >
              <p className="media-category">Romantic Comedy</p>
            </div>
          )}

          <div
            className="fixed right-0 p-2 pr-4"
            onClick={() => setIsSearch(!isSearch)}
          >
            {isSearch ? (
              <p className="media-category">
                <MdClose />
              </p>
            ) : (
              <p className="media-category">
                <MdSearch className="text-white" />
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
