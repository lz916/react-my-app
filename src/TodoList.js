import React, { Component, Fragment } from "react";
import './style.css'
import TodoItem from "./TodoItem";
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "hello",
      list: ['学习英文', '学习英语'],
      show: true
    };
    this.handleItemClick = this.handleItemClick.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleToggle = this.handleToggle.bind(this)
  }
  // 在组件即将被挂载到页面的时候执行
  componentWillMount() {
    console.log('componentWillMount')
  }
  render() {
    console.log('render')
    return (
      <Fragment>
        <div>
          {/*这是一个input框*/}
          <label htmlFor="insertArea">输入内容</label>
          <input id="insertArea" className="input" type="text" value={this.state.inputValue} onChange={this.handleInputChange} ref={(input) => {this.input = input}}/>
          <button onClick={this.handleClick}>提交</button>
        </div>
        <ul>
          {
            this.getTodoItem()
          }
        </ul>
        <div className={this.state.show ? 'show' : 'hidden'}>hello</div>
        <button onClick={this.handleToggle}>toggle</button>
      </Fragment>
    );
  }
  componentDidMount() {
    console.log('componentDidMount')
  }

  // 组件被更新之前，shouldComponentUpdate返回true才执行
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate')
    return true
  }

  // 在组件被更新之前执行，如果
  componentWillUpdate() {
    console.log('componentWillUpdate')
  }

  getTodoItem() {
    return this.state.list.map((item, index) => {

      return <TodoItem item={item} index={index} deleteItem={this.handleItemClick} key={index} />

    })
  }

  handleInputChange() {
    let value = this.input.value
    this.setState(() => {
      return {
        inputValue: value
      }
    })
    // this.setState(() => { inputValue: value })
    // this.setState({
    //   inputValue: value
    // })
  }

  handleClick() {
    this.setState((preState) => (
      {
        list: [...preState.list, preState.inputValue],
        inputValue: ''
      }

    ))
    // this.setState({
    //   list: [...this.state.list, this.state.inputValue],
    //   inputValue: ''
    // })
  }

  handleItemClick(index) {
    let newList = [...this.state.list]
    newList.splice(index, 1)
    this.setState({
      list: newList
    })
  }

  handleToggle() {
    this.setState({
      show: !this.state.show
    })
  }
}

export default TodoList;
