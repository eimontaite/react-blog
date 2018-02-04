import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {
    state = {
        loadedPost: null
    }

    //updating the component from componentDidUpdate causes an infinite loop
    componentDidMount() {
        console.log(this.props);
        this.loadData();
    }

    //handle changes here if the component is already oaded through routing, because the router does not unmount/remount, but reuses the same component and adjusts it
    componentDidUpdate() {
        this.loadData();
    }

    loadData() {
        if (this.props.match.params.id) {
            //checking if there is a new post to avoid infinite loop and if this post is not already rendered. 
            if (!this.state.loadedPost || (this.state.loadedPost &&this.state.loadedPost.id !== +this.props.match.params.id)) {

                axios.get('/posts/' + this.props.match.params.id).then(response => {
                    // console.log(response);
                    this.setState({ loadedPost: response.data })

                });
            }
        }
    }

    //DELETE request targets the specific item to be deleted, so does not need a second argument
    deletePostHandler = () => {
        axios.delete('/posts/' + this.props.match.id).then(response => {
            console.log(response);
        });
    }
    //selecting a post depending on whether I have an id
    render() {
        let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;
        //checking if this.props.id is true; initially is null, which is treated as false, not letting me get inside the 'if' block; if not, I want to output the post
        //due to asynchronous nature of axios requests, the posts are loaded a little bit later after I get the id. This is to avoid an error I guess (cuz JS cant read empty title property)
        if (this.props.match.id) {
            post = <p style={{ textAlign: 'center' }}>Loading...</p>;
        }
        if (this.state.loadedPost) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button onClick ={this.deletePostHandler} className="Delete">Delete</button>
                    </div>
                </div>

            );
        }
        return post;
    }
}

export default FullPost;