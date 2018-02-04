import React from 'react';
// import { withRouter } from 'react-router-dom';

import './Post.css';

const post = (props) => (
    //passing a reference to the method which should be executed upon a click - 'clicked'
    <article className="Post" onClick={props.clicked}>
        <h1>{props.title}</h1>
        <div className="Info">
            <div className="Author">{props.author}</div>
        </div>
    </article>
);

//withRouter adds props to the component it is wrapped with
export default post;