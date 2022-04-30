import React from 'react'

function Header() {
    return (
        <nav id="header" className="fixed w-full z-10 top-0">
            <div className="w-full md:max-w-4xl mx-auto flex flex-wrap items-center justify-between mt-0 py-3">
                <div className="pl-4">
                    <span className="text-gray-900 no-underline hover:no-underline font-extrabold text-3xl">					
                        Flickr Image Viewer
                    </span>
                </div>
            </div>
        </nav>
    )
}

export default Header