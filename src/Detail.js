import React from 'react';
export default class Detail extends React.Component{
    constructor() {
        
    }
    // componentDidMount(){
    //     fetch("https://reqres.in/api/users/"+this.props.id)
    //     .then(response=>response.json())
    //     .then(data=>this.setState(data));
    // }
    render(){
        return (<p>Detail Page</p>);
    }
}