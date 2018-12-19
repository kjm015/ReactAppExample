import React, {Component} from 'react';
import logo from './stalin.png';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        We have <i>seized</i> the <b>means of production</b>.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Join the React Revolution!
                    </a>
                </header>
            </div>
        );
    }
}

export default App;
