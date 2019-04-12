import React, { Component } from "react";
import Weather from "./body-components/weather/Weather";
import Posts from "./body-components/posts/Posts";
import "./stylesheets/body.css";
import axios from "axios";

export class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    axios.get("/api/posts").then(response => {
      console.log(response.data);
      this.setState({
        posts: response.data
      });
    });
  }

  markRead = id => {
    axios.put(`/api/posts/${id}`).then(response => {
      this.setState({
        posts: response.data
      });
    });

    // this.setState({
    //   posts: this.state.posts.map(posts => {
    //     if (posts.id === id) {
    //       posts.read = !posts.read;
    //     }
    //     return posts;
    //   })
    // });
  };

  deletePost = id => {
    axios.delete(`/api/posts/${id}`).then(response => {
      this.setState({
        posts: response.data
      });
    });

    // this.setState({
    //   posts: [...this.state.posts.filter(post => post.id !== id)]
    // });
  };

  addPost = post => {
    axios.post("/api/posts", { post }).then(response => {
      this.state.posts.unshift(response.data);
      this.setState({
        posts: this.state.posts
      });
    });
    this.setState({
      post: ""
    });
  };

  render() {
    let { weather, temp, humidity } = this.props;
    let { posts } = this.state;
    return (
      <main>
        <div>
          <Weather weather={weather} temp={temp} humidity={humidity} />

          <h2 style={{ fontSize: "18pt" }}>Comments:</h2>
          <br />
          <div className="post">
            <Posts
              key={posts.id}
              posts={posts}
              markRead={this.markRead}
              deletePost={this.deletePost}
              addPost={this.addPost}
            />
          </div>
          <img src="https://i.imgflip.com/e19qo.jpg" />
        </div>
      </main>
    );
  }
}
export default Body;
