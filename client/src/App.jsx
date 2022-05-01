import React, { useState } from 'react';

import Gallery from './components/Gallery';
import Tags from './components/Tags';

function App() {
  const [tags, updateTags] = useState([]);
  const [images, setImages] = useState([]);

  return (
    <>
      <nav id="header" className="bg-white fixed w-full z-10 top-0">
        <div className="w-full md:max-w-4xl mx-auto flex flex-wrap items-center justify-between mt-0 py-3">
          <div className="pl-4">
            <span className="text-gray-900 no-underline hover:no-underline font-extrabold text-3xl">
              Flickr Image Viewer
            </span>
          </div>
        </div>
      </nav>
      <div className="container w-full md:max-w-3xl mx-auto pt-20">
        <div className="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal">
          <div className="font-sans">
            <Tags tags={tags} updateTags={updateTags} setImages={setImages} />
            <Gallery images={images} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
