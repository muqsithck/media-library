import React from "react";
import { LazyLoadImage as Image } from "react-lazy-load-image-component";
import demo from "../../assets/placeholder_for_missing_posters.png";

export default function Item(props) {
  return (
    <div className="grid grid-cols-3 gap-2">
      {props.movieList.length > 0
        ? props.movieList.map((item, index) => {
            let img;
            if (item["poster-image"] !== "posterthatismissing.jpg") {
              img = require(`../../assets/${item["poster-image"]}`);
            } else {
              img = require(`../../assets/placeholder_for_missing_posters.png`);
            }
            return (
              <div key={index} className="col-span-1 bg-black item-wrapper">
                <Image
                  effect="blur"
                  height="80%"
                  width="100%"
                  placeholderSrc={demo}
                  src={img}
                  threshold={1000}
                />
                <p className="media-title">  {item.name} </p>
              </div>
            );
          })
        : null}
    </div>
  );
}
