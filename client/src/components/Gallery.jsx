import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';

function Gallery(props) {
  const { images } = props;

  return (
    <>
      <h1 className="font-bold font-sans break-normal text-gray-900 pb-2 text-3xl md:text-2xl">Images</h1>
      <div className="container grid md:grid-cols-2 sm:grid-cols-1 gap-2 mx-auto mb-20">
        {images.map((image) => (
          <LazyLoadImage
            className="w-full md:h-64 sm:h-max object-cover rounded"
            effect="opacity"
            src={image.image}
            alt={image.title}
            key={image.image}
          />
        ))}
      </div>
    </>
  );
}

export default Gallery;
