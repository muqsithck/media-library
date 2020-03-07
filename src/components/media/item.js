import React from "react";
import { LazyLoadImage as Image } from "react-lazy-load-image-component";
import ImageLoading from "../../assets/placeholder_for_missing_posters.png";

export default function Item(props) {
  return (
    <div className="grid grid-cols-6 gap-2">
      {props.movieList.length > 0
        ? props.movieList.map((item, index) => {
          
          let img;
            if (item["poster-image"] === "posterthatismissing.jpg" ||  item["poster-image"].length === 0) 
            {
              img = require(`../../assets/placeholder_for_missing_posters.png`);
            } else {
              img = require(`../../assets/${item["poster-image"]}`);
            }
            
            return (
              <div key={index} className="col-span-2 sm:col-span-2 md:col-span-1 lg:col-span-1 xl:col-span-1 bg-black media-wrapper">
                <Image
                  effect="blur"
                  width="100%"
                  placeholderSrc={ImageLoading}
                  src={img}
                  threshold={500}
                />
                <div className="ellipsis-text">
                <p className="media-title">  {item.name} </p>
                </div>
              </div>
            );
          })
        : null}
    </div>
  );
}
