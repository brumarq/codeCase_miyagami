import React from 'react';

function Gallery(props) {
  const { images } = props;

  return (
    <div className="container grid grid-cols-3 gap-2 mx-auto">
      {images.length > 0 ? (
        images.map((image) => (
          <div className="w-full rounded">
            <img
              src={image.image}
              alt={image.title}
              key={image.title}
            />
          </div>
        ))
      ) : (
        <span> There are no images</span>
      )}
    </div>
  );
}

export default Gallery;
