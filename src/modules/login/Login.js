import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import Introducing from './Introducing';
import {minimalMargin} from '../../constants';
import { startSetPostLogin } from '../../actions/users';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signup: false,
      email: 'ikramhasib007@gmail.com',
      username: 'ikramhasib007',
      password: '123456',
    }
  }

  handleSignUp = (e) => {
    e.preventDefault();
    this.setState({signup: true});
  }

  handleChange = (e) => {
    console.log('e: ', e);
    const { name, value } = e.target;
    console.log('name: ', name);
    this.setState({[name]: value});
  }

  handleLogin = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    console.log('email: ', email);
    this.props.startSetPostLogin({email, password}).then((user) => {
      console.log('Login Components >> user: ', user);

    })
  }

  render() { 
    const { 
      signup,
      email,
      password
    } = this.state;
    return (
      <Fragment>

        <div className="bg-primary-200 custom-screen flex px-20 py-10">
          <div className="flex flex-col w-2/3">
            <h2>SnippetIn</h2>
            Personalize your snippets and store your links
          </div>

          <div className="flex flex-col w-1/3"> 
            <div className="w-full mx-auto">
              <form onSubmit={this.handleLogin} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                  <label className="block text-gray-800 text-sm font-bold mb-2" htmlFor="username">
                    Email
                  </label>
                  <input
                    className="form-control-lg"
                    type="text"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-gray-800 text-sm font-bold mb-2" htmlFor="password">
                    Password
                  </label>
                  <input
                    className="form-control-lg"
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={this.handleChange}
                  />
                  <p className="text-red-500 text-xs italic">Please choose a password</p>
                </div>
                <div className="flex items-center justify-between">
                  <button
                    className="btn btn-primary-outline"
                    type="button"
                    onClick={this.handleLogin}
                  >
                    Sign In
                  </button>
                  <a className="inline-block align-baseline font-bold text-sm text-gray-600 hover:text-gray-700" href="#">
                    Forgot Password?
                  </a>
                </div>
              </form>
            </div>
            <p className="text-center text-grey text-xs">
              ©2019 SnippetIn. All rights reserved.
            </p>
          </div>
        </div>

      </Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startSetPostLogin: (data) => dispatch(startSetPostLogin(data))
})
 
export default connect(undefined, mapDispatchToProps)(Login);