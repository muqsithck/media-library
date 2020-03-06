import React from 'react'

export default function Item(props) {
    return (
        <div>
            {props.movieList.length > 0
          ? props.movieList[0].map((item, index) => {
              return (
                <div key={index} className="col-span-1 bg-white item-wrapper">
                  {item.name}
                </div>
              );
            })
          : null}
        </div>
    )
}
