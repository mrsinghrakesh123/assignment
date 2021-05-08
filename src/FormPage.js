import React from 'react';

export default class FormPage extends React.Component{
handleSubmit=(e)=>{
    e.preventDefault();
}
    render(){
        return(
            <form action="#" onSubmit={(e)=>this.handleSubmit(e)}>
                <div className="form-group">
                    <label>First Name</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label>Last Name</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" />
                </div>
                <input type="submit" className="btn btn-primary" value="Submit" />
            </form>
        )
    }
}