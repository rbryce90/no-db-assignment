import React, { Component } from "react";
// import axios from 'axios'
import DisplayPosts from "../posts/DisplayPosts";
import AddPosts from "../posts/AddPosts";

export class Posts extends Component {


  render() {
    let { posts } = this.props;
    return (
      <div>
        <AddPosts addPost={this.props.addPost} />
        <DisplayPosts 
          key={posts.id}
          posts={posts}
          markRead={this.props.markRead}
          deletePost={this.props.deletePost}
        />
      </div>
    );
  }
}

export default Posts;
