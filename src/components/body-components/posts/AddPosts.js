import React, { Component } from "react";

export class AddPosts extends Component {
  state = {
    post: ""
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.addPost(this.state.post);
    this.setState({
      post: ""
    });
  };

  onChange = event => {
    this.setState({
      post: event.target.value
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
        <input
          type="text"
          name="post"
          placeholder="Add post ..."
          onChange={this.onChange}
          style={{ flex: "10", borderRadius: "5px" }}
        />
        <input
          type="submit"
          value="submit"
          className="button"
          style={{ flex: "1" }}
        />
      </form>
    );
  }
}

export default AddPosts;
