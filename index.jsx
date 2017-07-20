import React, { Component } from 'react';


function Banner(props = {}) {
    return (
        <div>
            {"Banner:" + props.name}
        </div>
    )
}

export default Banner;