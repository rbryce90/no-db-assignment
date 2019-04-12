import React, { Component } from "react";


export class PostsItem extends Component {
  getStyle = () => {
    return {
      background: this.props.post.read ? "red" : "white",
      padding:  '15px',
      borderBottom: '1px black solid ',
      
    };
  };



  render() {
    let {id, post} = this.props;
    return (
      <div style={this.getStyle()}>
        <p>
          <input type='checkbox' onChange={this.props.markRead.bind(this, this.props.post.id)} />
          {' '}
          {post.post}
          <button style={buttonStyle} onClick={this.props.deletePost.bind(this, post.id)}>X</button>
        </p>
      </div>
    );
  }
}

const buttonStyle = {
  background: 'red',
  color: 'white',
  padding: '5px 8px',
  borderRadius: '50%',
  cursor:  'pointer',
  float: 'right',
  
}


export default PostsItem;
