import React from "react";
import PropTypes from 'prop-types';

const Button = ({
    children,handleClick = () => {}, className,...props}
    ) => (
    <button type="" onClick={handleClick} className={className}  {...props}>
        {children}
    </button>
)
Button.propTypes = {
    handleClick: PropTypes.func.isRequired,
    children : PropTypes.element,
}
export default Button