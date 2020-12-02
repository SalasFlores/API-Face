import React from 'react';
import shareIcon from '../icons/s3.svg';

import './styles.css';

const ShareFeed = ({url, title}) =>{

    const onClick = () => {
        if (!window.FB) return;

        window.FB.ui({
            method: 'feed',
            link: url
        });
    };

    return(
        <span 
            onClick={onClick} 
            title="Compartir feed de  Facebook"
            className="share-btn"
        >
            <img src={shareIcon} alt={title}/>

        </span>
    );
};

export default ShareFeed;