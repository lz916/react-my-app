import React, { Component, Fragment } from "react";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "hello",
      list: ['学习英文', '学习英语'],
    };
  }
  render() {
    return (
      <Fragment>
        <div>
          <input type="text" value={this.state.inputValue} onChange={this.handleInputChange.bind(this)}/>
          <button onClick={this.handleClick.bind(this)}>提交</button>
        </div>
        <ul>
          {
              this.state.list.map((item, index) => {
                  return <li key={index} onClick={this.handleItemClick.bind(this, index)}>{item}</li>
              })
          }
        </ul>
      </Fragment>
    );
  }
  handleInputChange(e) {
      let value = e.target.value
      this.setState({
          inputValue: value
      })
  }

  handleClick() {
    this.setState({
        list: [...this.state.list, this.state.inputValue],
        inputValue: ''
    })
  }

  handleItemClick(index) {
      let newList = [...this.state.list]
      newList.splice(index, 1)
      this.setState({
          list: newList
      })
  }
}

export default TodoList;
