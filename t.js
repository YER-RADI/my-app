import React from 'react';

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: 'Firari', // Example property in the state
        };
 }
    
    render() {
        return (
            <div>
                <h1>My Car Is: {this.state.brand}</h1>
            </div>
        );
    }
}

export default MyComponent;