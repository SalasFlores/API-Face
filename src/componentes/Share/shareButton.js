import React from 'react';
import shareIcon from '../icons/s2.svg';

import './styles.css';

const shareButton = ({url, title}) =>{

    const onClick = () => {
        if (!window.FB) return;

        window.FB.ui({
            method: 'sahre',
            href: url
        });
    };

    return(
        <span 
            onClick={onClick} 
            title="Compartir en Facebook"
            className="share-btn"
        >
            <img src={shareIcon} alt={title}/>

        </span>
    );
};

export default shareButton;