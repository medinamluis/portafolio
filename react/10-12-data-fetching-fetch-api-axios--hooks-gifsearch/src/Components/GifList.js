import React from 'react';
import Gif from './Gif';
import NoGifs from './NoGifs';

const GifList = props => { 
  
  const results = props.data;
  let gifs;
  if (results.length > 0) {
    gifs = results.map( gif =>
      <Gif url={gif.images.fixed_height.url}
           key={gif.id}   // most APIs return a unique ID that can be used as a key
      />
    );
  } else {
    gifs = <NoGifs key='none' />
  }

  return(
    <ul className="gif-list">
      { gifs }
    </ul> 
  );
}

export default GifList;
