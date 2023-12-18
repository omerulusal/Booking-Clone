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
                    <img className='featuredImage' src="https://cf.bstatic.com/xdata/images/city/600x600/977192.jpg?k=9b5deb1736f05b131436cd8ee666e23a766e74c39720fce87cec8677238fe207&o=" alt="img" />
                    <div className="featuredTitles">
                        <h1>Berlin</h1>
                        <h2>{data[0]} properties</h2>
                    </div>
                </div>
                <div className="featuredItem">
                    <img className='featuredImage' src="https://cf.bstatic.com/xdata/images/city/600x600/977192.jpg?k=9b5deb1736f05b131436cd8ee666e23a766e74c39720fce87cec8677238fe207&o=" alt="img" />
                    <div className="featuredTitles">
                        <h1>Madrid</h1>
                        <h2>{data[1]} properties</h2>
                    </div>
                </div>
                <div className="featuredItem">
                    <img className='featuredImage' src="https://cf.bstatic.com/xdata/images/city/600x600/977192.jpg?k=9b5deb1736f05b131436cd8ee666e23a766e74c39720fce87cec8677238fe207&o=" alt="img" />
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