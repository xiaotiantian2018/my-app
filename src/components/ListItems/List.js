
import React from 'react';
import './List.css';


class List extends React.Component {

  render() {
    const numbers = [1, 2, 3, 4, 5]
    // 给每个列表元素分配一个 key 属性,一个元素的 key 最好是这个元素在列表中拥有的一个独一无二的字符串。
    // 通常，我们使用数据中的 id 来作为元素的 key
    // 方法一：
    // const List= numbers.map((item,index)=><li key={item.toString()}>{item}</li>)
    return (
      <div className="list">
        <ul>
          {/* 方法一 */}
          {/* {List} */}
          {/* 方法二 */}
          {numbers.map((item) =>
            <li key={item.toString()}>{item}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default List;