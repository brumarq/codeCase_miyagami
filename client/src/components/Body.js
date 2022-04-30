import React, { useState } from 'react'
import Gallery from './Gallery';
import { HiX } from "react-icons/hi";

function Body() {

    let [tags, updateTags] = useState([]);

    const addTag = (ev) => {
        const inp = ev.target;
        const val = inp.value.trim();

        if (ev.key === ' ' && val.split(' ')[0] !== '') {
            const valSpl = val.split(' ');
            updateTags([...tags, valSpl[0]].reverse());
            inp.value = valSpl[1] || '';
        }
    }

    const removeTag = (selectedTag) => {
        updateTags(tags.filter((tag) => tag !== selectedTag));
    }

    return (
        <div className="container w-full md:max-w-3xl mx-auto pt-20">

            <div className="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal">

                <div className="font-sans">
                    <h1 className="font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-2xl">Search for keywords</h1>
                    <input
                        type="text"
                        className="
                            form-control
                            block
                            w-full
                            px-3
                            py-1.5
                            text-base
                            font-normal
                            text-gray-700
                            bg-white bg-clip-padding
                            border border-solid border-gray-300
                            rounded
                            transition
                            ease-in-out
                            m-0
                            focus:text-gray-700 focus:bg-white focus:border-gray-900 focus:border-2 focus:outline-none
                        "
                        placeholder="Keyword"
                        onKeyUp={addTag}
                    />
                    <div className='mt-1 min-h-full'>
                        {tags.map((tag, key) => {
                            return (
                                <div
                                    className="text-xs inline-flex mt-2 items-center font-bold leading-sm uppercase px-3 py-1 rounded-full bg-white text-gray-700 border" key={key}
                                >
                                    {tag}  <HiX className='ml-2 hover:stroke-2 cursor-pointer' onClick={() => removeTag(tag)} />
                                </div>
                            )
                        })}
                    </div>
                    <h1 className="font-bold font-sans break-normal text-gray-900 pb-2 text-3xl md:text-2xl">Images</h1>
                    <Gallery />
                </div>
            </div>
        </div>
    )
}

export default Body