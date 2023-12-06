import React from "react";
import PropTypes from 'prop-types';

const Image = ({ImgSrc, alt='', className}) => <img src={ImgSrc} alt={alt} className={className} />


Image.prototype ={
    ImgSrc : PropTypes.string.isRequired,
    alt: PropTypes.string,
    className :PropTypes.any
}
export default Image;