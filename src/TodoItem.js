import React from "react";
import PropTypes from "prop-types";
class TodoItem extends React.Component {
    constructor(props) {
        super(props)
        this.handleItemClick = this.handleItemClick.bind(this)
    }
    render() {
        console.log('child render')
        return <div onClick={this.handleItemClick}>{this.props.item}</div>
    }

    // shouldComponentUpdate(preProps, nextState) {
    //     // if (nextProps.item !== this.props.item) {
    //     //     return true
    //     // } else {
    //     //     return false
    //     // }
    // }

    handleItemClick() {
        this.props.deleteItem(this.props.index)
    }
}
TodoItem.propTypes = {
    item: PropTypes.string,
    deleteItem: PropTypes.func,
    index: PropTypes.number
}

export default TodoItem