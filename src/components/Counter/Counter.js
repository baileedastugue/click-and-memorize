import React from "react";


class Counter extends React.Component {
    state = {
        count: 0
    };

    handleIncrement = () => {
        this.setState({
            count: this.state.count + 1
        });
    }

    render () {
        return (
            <p count={this.state.count} handleIncrement={this.handleIncrement}>Click Counter</p>
        )
    }
}

export default Counter;