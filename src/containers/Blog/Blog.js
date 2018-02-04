import React, { Component } from 'react';
// import axios from 'axios';
// import axios from '../../axios';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import './Blog.css';
import Posts from '../Posts/Posts';
//import NewPost from './NewPost/NewPost';
import asyncComponent from '../../hoc/asyncComponent';

//when using arrow functions, if keeping stuff in one line, stuff to the right of the arrow gets returned immediately, with curly braces you have to use the return keyword
const AsyncNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost'); 
});

class Blog extends Component {
    state = {
        auth: true
    }

    //"title" is a property of the object
    //"clicked" here holds the method reference that should be executed upon a click
    //passing an arrow function as a reference; passing id as an argument to postSelectedHandler
    render() {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            {/*{{}}: outer braces - dynamic content, inner braces - object*/}
                            {/*to leads to absolute path, this.props.match.url takes the path I'm currently on and appends the thing*/}
                            {/* use the NavLink object when I want to style*/}
                            <li><NavLink to="/posts/" exact
                                activeClassName="my-active"
                                activeStyle={{
                                    color: 'orange',
                                    textDecoration: 'underline'
                                }}>Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={() => <h1>Home</h1>} />
                <Route path="/" render={() => <h1>Home 2</h1>} /> */}
                {/* component is a reference to a function or class */}
                {/* :id creates a dynamic url. Positions are important */}
                {/*Switch only loads the first matching route*/}
                <Switch>
                    {/* guard */}
                    {this.state.auth ? <Route path="/new-post" component={AsyncNewPost} /> : null}
                    <Route path="/posts" component={Posts} />
                    {/* 404 handling */}
                    <Route render={() => <h1
                    >Not found</h1>} />
                    {/* outside the Switch statement I can only redirect from, not to */}
                    {/* <Redirect from="/" to="/posts" /> */}
                    {/* <Route path="/" component={Posts} /> */}
                    {/*id gives param the name id and the corresponding value (from the link, ergo /2 - id = 2*/}
                </Switch>
            </div>
        );
    }
}

export default Blog;