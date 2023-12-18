import React from 'react'
import "./_featured.scss"
import useFetch from '../../hooks/useFetch'
const Featured = () => {

    const { data, loading, error } = useFetch(
        "http://localhost:8800/api/hotels/countByCity?cities=berlin,madrid,london"
    );
    console.log(data, loading)
    return (
        <div className='featured'>
            {loading ? ("Loading please wait") : <>
                <div className="featuredItem">
                    <img className='featuredImage' src="https://a.cdn-hotels.com/gdcs/production154/d1887/471414c9-f456-4041-83f5-d7b61063d287.jpg?impolicy=fcrop&w=800&h=533&q=medium" alt="img" />
                    <div className="featuredTitles">
                        <h1>Berlin</h1>
                        <h2>{data[0]} properties</h2>
                    </div>
                </div>
                <div className="featuredItem">
                    <img className='featuredImage' src="https://blog.obilet.com/wp-content/uploads/2019/04/shutterstock_143885179.jpg" alt="img" />
                    <div className="featuredTitles">
                        <h1>Madrid</h1>
                        <h2>{data[1]} properties</h2>
                    </div>
                </div>
                <div className="featuredItem">
                    <img className='featuredImage' src="https://a.cdn-hotels.com/gdcs/production153/d1371/e6c1f55e-51ac-41d5-8c63-2d0c63faf59e.jpg" alt="img" />
                    <div className="featuredTitles">
                        <h1>London</h1>
                        <h2>{data[2]} properties</h2>
                    </div>
                </div>
            </>}
        </div>
    )
}

export default Featured