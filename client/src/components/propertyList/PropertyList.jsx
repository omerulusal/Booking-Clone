import React from 'react'
import "./_propteryList.scss"
import useFetch from "../../hooks/useFetch.js"

const images = [
    "https://www.newworldhotels.com/wp-content/uploads/2014/05/Mobile-NWHBR-Exterior.jpg",
    "https://www.apartments.com/blog/sites/default/files/styles/x_large_hq/public/image/2023-06/ParkLine-apartment-in-Miami-FL.jpg?itok=kQmw64UU",
    "https://media.cnn.com/api/v1/images/stellar/prod/170629165903-seychelles-best-resorts-maia-luxury-resort-credit-tsogo-sun.jpg?q=w_1600,h_900,x_0,y_0,c_fill/h_618",
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/345769091.jpg?k=246aa2680453f328f53a3b15cde2eb0e988b5936aec2c957b22a3eb1a8178a7d&o=&hp=1",
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/383403441.jpg?k=0d70432ce7823f8c3db9ab7f5f71776f2c2d1ea51894802ef3932f147d0cdcfe&o=&hp=1",
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