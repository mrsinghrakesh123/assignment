import React from 'react';
import { Link } from "react-router-dom";

export default class ListPage extends React.Component{
    constructor(){
        super();
        this.state={};
    }
    componentDidMount(){
        fetch("https://reqres.in/api/users")
        .then(response=>response.json())
        .then(data=>this.setState(data));
    }
    
    render(){
        return (
            <table className="table">
                <thead>
                    <tr><th></th><th>First Name</th><th>Last name</th><th>Email</th></tr>
                </thead>
                <tbody>
        {this.state.data?.map(x=><tr key={x.id}><td><img src={x.avatar} width="100" alt={x.email} style={{borderRadius:50}} /></td><td><Link to={{pathname:`${'detail/'+x.id}`}}>{x.first_name}</Link></td><td>{x.last_name}</td><td>{x.email}</td></tr>)}
        </tbody>
        </table>
        )
            }
        
}