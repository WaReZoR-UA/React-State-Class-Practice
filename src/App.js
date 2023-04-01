import { Component } from 'react'
import './App.css'
class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: this.props.counter,
        }
    }

    incNum = () => {
        this.setState((state) => ({
            counter:
                state.counter !== 50 ? state.counter + 1 : state.counter,
        }))
    }

    decNum = () => {
        this.setState((state) => ({
            counter: state.counter !== -50 ? state.counter - 1 : state.counter,
        }))
	}
	
	rndNum = () => {
		this.setState(state => ({
			counter: state.counter = Math.floor(Math.random() * (50 - -50 + 1)) + -50,
		}))
	}

	resNum = () => {
		this.setState({
			counter: this.props.counter
		})
	}

    render() {
        const { counter } = this.state
        return (
            <div className="app">
                <div className="counter">{counter}</div>
                <div className="controls">
                    <button onClick={this.incNum}>INC</button>
                    <button onClick={this.decNum}>DEC</button>
                    <button onClick={this.rndNum}>RND</button>
                    <button onClick={this.resNum}>RESET</button>
                </div>
            </div>
        )
    }
}

export const StateChanger = () => {
    return <App counter={0} />
}
