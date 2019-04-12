import React, { Component } from 'react';
import PostsItem from './PostsItem.js';

function DisplayPosts (props){
    return props.posts.map( (post) => (
        <PostsItem post={post} key={post.id} markRead={props.markRead} deletePost={props.deletePost} />
    ))
}

export default DisplayPosts
