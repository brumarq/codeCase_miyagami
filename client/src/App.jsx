import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { HiX } from 'react-icons/hi';
import Gallery from './components/Gallery';

function App() {
  const [tags, updateTags] = useState([]);
  const [images, setImages] = useState([]);

  const addTag = (ev) => {
    const inp = ev.target;
    const val = inp.value.trim();

    if ((ev.key === ' ' || ev.key === 'Enter') && val.split(' ')[0] !== '') {
      const valSpl = val.split(' ');
      if (!tags.includes(val)) {
        updateTags([...tags, valSpl[0]].reverse());
      }
      inp.value = valSpl[1] || '';
    }
  };

  const removeTag = (selectedTag) => {
    updateTags(tags.filter((tag) => tag !== selectedTag));
  };

  const loadImages = (givenTags) => {
    axios
      .get(`/api/images?tags=${givenTags}`)
      .then((answer) => {
        setImages(answer.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    loadImages(tags);
  }, [tags]);

  return (
    <>
      <nav id="header" className="fixed w-full z-10 top-0">
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
            <h1 className="font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-2xl">Search for keywords</h1>
            <input
              type="text"
              className=" block w-full px-3 py-1.5 text-gray-700 bg-clip-padding border border-solid border-gray-300 rounded m-0 focus:text-gray-700 focus:border-gray-900 focus:border-2 focus:outline-none"
              placeholder="'word [SPACE]' to add a keyword"
              onKeyUp={addTag}
            />
            <div className="mt-1 min-h-full">
              {tags.map((tag) => (
                <div
                  className="text-xs inline-flex mt-2 items-center font-bold leading-sm uppercase px-3 py-1 rounded-full bg-white text-gray-700 border"
                  key={tag}
                >
                  {tag}
                  <HiX className="ml-2 hover:stroke-2 cursor-pointer" onClick={() => removeTag(tag)} />
                </div>
              ))}
            </div>
            <h1 className="font-bold font-sans break-normal text-gray-900 pb-2 text-3xl md:text-2xl">Images</h1>
            <Gallery images={images} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
