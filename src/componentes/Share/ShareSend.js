import React from 'react';
import shareIcon from '../icons/m.svg';

import './styles.css';

const ShareSend = ({url, title})=>{
    const onClick = () => {
        if (!window.FB) return;

        window.FB.ui({
            method: 'send',
            link: url
        });
    };

    return(
        <span 
            onClick={onClick} 
            title="Enviar por Facebook"
            className="share-btn"
        >
            <img src={shareIcon} alt={title}/>

        </span>
    );
}

export default ShareSend;