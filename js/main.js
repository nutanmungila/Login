import React from 'react';
import Login from './login';

class Homepage extends React.Component{
    constructor(props) {
        super(props);
        this.onloginhandler = this.onloginhandler.bind(this);
		}

	onloginhandler(nm,ps){
		console.log("User Name:"+nm);
		console.log("Password:"+ps);
	}

	render(){

		return(
			<div className="main-pg-ln">
			<Login onLogIn={this.onloginhandler}/>
			</div>
			);
	}

}

React.render(<Homepage />,document.getElementById("div-bx"));