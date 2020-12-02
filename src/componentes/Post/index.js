import React from 'react';
import ShareButton from '../Share/shareButton';
import ShareSend from '../Share/ShareSend';
import ShareFeed from '../Share/ShareFeed';

const Post = () =>(
    <div className="blog-post">
        <h2 className="blog-post-title">Sample post</h2>
        <p className="blog-post-meta">18 febrero 2019</p>
        <p>Este es un programa que nos permite entrar a facebook y compartir contenido.</p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dictum, risus vel euismod condimentum, arcu massa tincidunt mi, id facilisis arcu odio sit amet neque. Aliquam sollicitudin nunc non est dictum scelerisque. Sed non enim vitae libero elementum laoreet. Ut fringilla, magna non ullamcorper mollis, nisl mauris tristique dolor, nec fringilla augue neque vel erat. Duis et ipsum nulla. Aenean.
        </p>
        <div>
            <span>Compartir post: </span>
            <div className="social">
                <ShareButton 
                url="IwAR08wfkpllMEQmjdMs7lBY4qMt11QXpmBV2R_pMpjr0HPxZmrAd48PvgGRU"
                title="Sample post"
                /> <>             </>

            
                <ShareSend 
                url="https://github.com/SalasFlores"
                title="Sample post"
                />

                <ShareFeed 
                url="https://github.com/SalasFlores"
                title="Sample post"
                />

                </div>
        </div>
    </div>
);

export default Post;