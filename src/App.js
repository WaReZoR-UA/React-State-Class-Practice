import { Component } from 'react';
import './App.css';
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
            counter: this.props.counter,
        }
	}



	render() {
		const { counter } = this.state;
		return (
            <div className="app">
                <div className="counter">{counter}</div>
                <div className="controls">
                    <button>INC</button>
                    <button>DEC</button>
                    <button>RND</button>
                    <button>RESET</button>
                </div>
            </div>
        )
	}
}

export const StateChanger = ()=> {
	return <App counter={0} />
}

    // 1) Начальное значение счетчика должно передаваться через props
    // 2) INC и DEC увеличивают и уменьшают счетчик соответственно на 1. Без ограничений, но можете добавить границу в -50/50. По достижению границы ничего не происходит
    // 3) RND изменяет счетчик в случайное значение от -50 до 50. Конструкцию можете прогуглить за 20 секунд :) Не зависит от предыдущего состояния
    // 4) RESET сбрасывает счетчик в 0 или в начальное значение из пропсов. Выберите один из вариантов
