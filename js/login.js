import React from 'react';

class Login extends React.Component{
    constructor(props) {
        super(props);
        this.onbtnClickhandler = this.onbtnClickhandler.bind(this);
		}

	onbtnClickhandler(e){
			var username = React.findDOMNode(this.refs.uname).value;
			var password = React.findDOMNode(this.refs.pass).value;
			React.findDOMNode(this.refs.uname).value = "";
			React.findDOMNode(this.refs.pass).value = "";
			this.props.onLogIn(username,password);
		}	

	render(){

		return(
			<div>
			   <div className="outer">
					<div>Username</div>
					<input type="text" className="input-txt" ref="uname"/>
					<div>Password</div>
					<input type="text" className="input-txt" ref="pass"/>
					<div className="btnbox">
						<button className="btn btn-info" onClick={this.onbtnClickhandler}>LOG IN</button>
					</div>
			   </div>	
			</div>
			);
	}

}
export default Login;