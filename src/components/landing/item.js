import React from 'react'
import { LazyLoadImage as Image}from 'react-lazy-load-image-component';
import demo from '../../assets/placeholder_for_missing_posters.png'
import pic from '../../assets/poster1.jpg'


export default function Item(props) {
    return (
             <div className="grid grid-cols-3 gap-1">
            {props.movieList.length > 0
              ? props.movieList.map((item, index) => {
                  
                let img
                if(item['poster-image'] !== "posterthatismissing.jpg")
                {
                  img =  require(`../../assets/${item['poster-image']}`)  
                } 
                else
                {
                  img = require(`../../assets/placeholder_for_missing_posters.png`)
                }
        
                console.log("img", img)
                 
              return (
                <div key={index} className="col-span-1 bg-white item-wrapper">
              
               <Image
                    // alt="test"
                    effect="blur"
                    height="80%"
                    width="100%"
                    // key={this.props.src}
                    // afterLoad={this.imagedLoaded}
                    placeholderSrc={demo}
                    src={img}
                    threshold={500}
                />



                  {item.name}
                </div>
              );
            })
          : null}
        </div>
    )
}
