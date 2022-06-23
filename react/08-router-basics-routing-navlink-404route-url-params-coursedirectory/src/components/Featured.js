import React from 'react';
import { useParams } from 'react-router-dom';

const Featured = () => {
  const { topic, lname, fname } = useParams();
  console.log(topic);
  console.log(lname);
  console.log(fname);
  return (
    <div className="main-content">
      <h2>Featuring <strong>{ `${fname} ${lname}` }</strong>: </h2>
      <p>A teacher who loves teaching courses about <strong>{ topic }</strong>!</p>
    </div>
  );
}

export default Featured;