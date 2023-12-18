import React from 'react'
import "./_propteryList.scss"
import useFetch from "../../hooks/useFetch.js"

const images = [
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg",
]
const PropertyList = () => {
    const { data, loading, error } = useFetch("http://localhost:8800/api/hotels/countByType");
    console.log(data)
    return (
        <div className='pList'>
            {loading ? ("Loading please wait") : <>
                {data && images.map((img, i) => (
                    <div className="plistItem" key={i}>
                        <img src={img} alt="img" />
                        <div className="pListTitles">
                            <h1>{data[i]?.type}</h1>
                            <h2>{data[i]?.count} {data[i]?.type}</h2>
                        </div>
                    </div>
                ))}
            </>}
        </div>
    )
}

export default PropertyList