import React from 'react';
import {LazyLoadImage} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css'; //css styles
import DevImg from './img.jpg';

const MyLazyLoadedImage = () => {
  return (
    <div>
      <LazyLoadImage src={DevImg} alt="Dev_Img" height={300} effect="blur"/>
    </div>
  );
};

export default MyLazyLoadedImage;