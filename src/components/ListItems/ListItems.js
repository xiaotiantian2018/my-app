
import React from 'react';

class ListItems extends React.Component {

  render() {
    const { post } = this.props

    return (
      <li className='list_items'>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
      </li>
    );
  }
}

export default ListItems;