import React from 'react';

// Class Components
class Car extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            name: 'BMW',
            price: 20000,
            isDiskBrake:true
        }
    }

    priceChangeHanlder = () => {
        this.setState({ price: 500000 });
    }


    render() {
        return <div onClick={this.priceChangeHanlder}>
            <h1>Name : {this.state.name}</h1>
            <h2>Price : {this.state.price}</h2>
            <p>IsDiskBrake : { this.state.isDiskBrake ? 'Yes': 'No' }</p>
        </div>
    }

}



export default Car;