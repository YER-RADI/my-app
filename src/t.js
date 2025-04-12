// Filename - index.js

import React from "react";
import ReactDOM from "react-dom/client";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }

    increment = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1,
        }));
    };

    decrement = () => {
        this.setState((prevState) => ({
            count: prevState.count - 1,
        }));
    };

    render() {
        return (
            <div>
                <h1>
                    The current count is :{" "}
                    {this.state.count}
                </h1>
                <button onClick={this.increment}>
                    Increase
                </button>
                <button onClick={this.decrement}>
                    Decrease
                </button>
            </div>
        );
    }
}

const root = ReactDOM.createRoot(
    document.getElementById("root")
);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);


<p>----------------------------------------------------------</p>

const Greeting_One = (props) => {
    return <h1>Hello, {props.name}!</h1>;
};

const Greeting = ({ name }) => <h1>Hello, {name}!</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Greeting_One user="World!!!" />
    </React.StrictMode>
);
export default Greeting_One;