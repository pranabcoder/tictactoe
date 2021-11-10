import React from 'react';
import { FaTimes, FaPen, FaRegCircle } from 'react-icons/fa';

const Icon = ({name}) => {
    switch (name) {
        case 'circle':
            return (
                <div><FaRegCircle className="icons"/></div>
            );
        case 'cross':
            return (
                <div><FaTimes className="icons"/></div>
            );
        default:
            return (
                <div><FaPen className="icons"/></div>
            );

    }
};

export default Icon;