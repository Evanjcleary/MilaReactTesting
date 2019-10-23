import React, { Component } from 'react';
import fire from "../../config/Fire";
import './style.css';
import API from "../../utils/API";
import cogoToast from "cogo-toast";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  login = e => {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(() => {
      // u.status or u.email --> pass info into a create routeß

    }).catch((error) => {
      console.log(error);
    })
  }

  signup = e => {
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(data => {
        console.log(data.user.email);
        console.log(data.user.uid)
        API.createUser({
          email: data.user.email,
          uid: data.user.uid
        }).then(res => {
          cogoToast.success("You've created a user!")
        }
        )
          .catch(err => console.log(err))
      })
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };


  render() {
    return (
      <div className="login-form">
        <div id="login-welcome">
          Login or Sign up with MILA below.
      </div>
        <form>
          <br />
          <input value={this.state.email} onChange={this.handleChange} type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
          <br />
          <br />
          <input value={this.state.password} onChange={this.handleChange} type="password" name="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
          <br />
          <br />
          <button type="submit" onClick={this.login} className="btn">Login</button>
          <button onClick={this.signup} style={{ marginLeft: '25px' }} className="btn btn-success">Signup</button>

        </form>
      </div>
    )
  }
}

export default LoginForm