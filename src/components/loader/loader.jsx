import React from 'react'

function Loader() {
    return (
        <div className='loader-wrap'>
            <div className="loader">
                <div className="loader-inner triangle-skew-spin">
                <div></div>
                </div><span className="tooltip">
                <p></p></span>
            </div>
        </div>
    )
}

export default Loader
