import React, { useEffect } from 'react';
import axios from 'axios';
import { HiX } from 'react-icons/hi';

function Tags(props) {
  const { tags, updateTags, setImages } = props;

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

    </>
  );
}

export default Tags;
