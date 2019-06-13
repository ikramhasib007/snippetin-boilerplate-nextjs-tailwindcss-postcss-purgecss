import React, { Fragment } from 'react'
import { connect } from 'react-redux';
import Router from 'next/router';
import {minimalMargin} from '../../constants'
import { startSetPostUser } from '../../actions/users';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: 'Ikram',
      lastname: 'Hasib',
      email: 'ikramhasib007@gmail.com',
      username: 'ikramhasib007',
      password: '123456',
      confirm_password: '123456',
      terms_condition: false,
      error: [],
      submitting: false
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    var {error, password, confirm_password, submitting} = this.state;
    error = error.filter(err => err !== name);
    if(name === 'confirm_password' && password !== value && submitting) {
      error.push('wrong_password');
    } else if(name === 'password' && confirm_password !== value && submitting) {
      error.push('wrong_password');
    } else if(name === 'confirm_password' || (name === 'password' && confirm_password === value)) {
      error = error.filter(err => err !== 'wrong_password');
    }
    if((name === 'password' || name === 'confirm_password') && submitting && value.length >= 6) {
      error = error.filter(err => err !== 'too_short');
    }
    this.setState(() => ({[name]: value, error}));
  }

  handleTermsAndConditionChange = (e) => {
    const { checked } = e.target;
    var {error} = this.state;
    error = error.filter(err => err !== 'terms_condition');
    this.setState(() => ({terms_condition: checked, error}));
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({submitting: true});
    var {
      firstname,
      lastname,
      email,
      username,
      password,
      confirm_password,
      terms_condition,
      error
    } = this.state;
    if(!firstname ||
      !lastname ||
      !email ||
      !username ||
      !password ||
      !confirm_password ||
      !terms_condition) {
        error = ['firstname', 'lastname', 'email', 'username', 'password', 'confirm_password', 'terms_condition'];
        this.setState({error});
    } else if(password !== confirm_password) {
      error = ['password', 'confirm_password', 'wrong_password'];
      this.setState({error});
    } else if(password.length < 6) {
      error = ['too_short'];
      this.setState({error});
    } else {
      let data = {
        firstname,
        lastname,
        email,
        username,
        password,
        terms_condition
      };
      this.setState({error: []});
      this.props.startSetPostUser(data).then(({user}) => {
        if(user) {
          Router.replace('/');
        }
      })

    }
  }

  render() { 
    const {
      firstname,
      lastname,
      email,
      username,
      password,
      confirm_password,
      terms_condition,
      error,
      submitting
    } = this.state;
    return (
      <Fragment>
        <div className="flex m-8">
          <div className="flex flex-col w-1/2 h-full">
            <h2>SnippetIn</h2>
            Personalize your snippets and store your links
          </div>

          <div className="flex flex-col w-1/2 h-full">          
            <form className="w-full">
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="form-group-lg md:w-1/2 mb-6 md:mb-0">
                  <label className="control-label" htmlFor="first-name">
                    First Name
                  </label>
                  <input
                    className={`form-control${(error.includes('firstname') && submitting && !firstname) ? ' error' : ''}`}
                    id="first-name"
                    type="text"
                    placeholder='First Name'
                    name="firstname"
                    value={firstname}
                    onChange={this.handleChange}
                  />
                  {(error.includes('firstname') && submitting && !firstname) && <p className="text-red-500 text-xs italic">Please fill out this field</p>}
                </div>
                <div className="form-group-lg md:w-1/2">
                  <label className="control-label" htmlFor="last-name">
                    Last Name
                  </label>
                  <input
                    className={`form-control${(error.includes('lastname') && submitting && !lastname) ? ' error' : ''}`}
                    id="last-name"
                    type="text"
                    placeholder='Last Name'
                    name="lastname"
                    value={lastname}
                    onChange={this.handleChange}
                  />
                  {(error.includes('lastname') && submitting && !lastname) && <p className="text-red-500 text-xs italic">Please fill out this field</p>}
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="form-group-lg md:w-1/2 mb-6 md:mb-0">
                  <label className="control-label" htmlFor="email-address">
                    Email Address
                  </label>
                  <input
                    className={`form-control${(error.includes('email') && submitting && !email) ? ' error' : ''}`}
                    id="email-address"
                    type="email"
                    placeholder='Email Address'
                    name="email"
                    value={email}
                    onChange={this.handleChange}
                  />
                  {(error.includes('email') && submitting && !email) && <p className="text-red-500 text-xs italic">Please fill out this field</p>}
                </div>
                <div className="form-group-lg md:w-1/2">
                  <label className="control-label" htmlFor="username">
                    Username
                  </label>
                  <input
                    className={`form-control${(error.includes('username') && submitting && !username) ? ' error' : ''}`}
                    id="username"
                    type="text"
                    placeholder='Username'
                    name="username"
                    value={username}
                    onChange={this.handleChange}
                  />
                  {(error.includes('username') && submitting && !username) && <p className="text-red-500 text-xs italic">Please fill out this field</p>}
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="form-group-lg md:w-1/2 mb-6 md:mb-0">
                  <label className="control-label" htmlFor="password">
                    Password
                  </label>
                  <input
                    className={`form-control${(error.includes('password') && submitting && !password) ? ' error' : ''}`}
                    id="password"
                    type="password"
                    placeholder='Password'
                    name="password"
                    value={password}
                    onChange={this.handleChange}
                  />
                  {(error.includes('password') && submitting && !password) && <p className="text-red-500 text-xs italic">Please fill out this field</p>}
                  {error.includes('wrong_password') && <p className="text-red-500 text-xs italic">Password did not match!</p>}
                  {error.includes('too_short') && <p className="text-grey-dark text-xs italic">Make it as long and as crazy as you'd like. Minimum length is 6 character.</p>}
                </div>
                <div className="form-group-lg md:w-1/2">
                  <label className="control-label" htmlFor="confirm-password">
                    Confirm Password
                  </label>
                  <input
                    className={`form-control${(error.includes('confirm_password') && submitting && !confirm_password) ? ' error' : ''}`}
                    id="confirm-password"
                    type="password"
                    placeholder='Confirm Password'
                    name="confirm_password"
                    value={confirm_password}
                    onChange={this.handleChange}
                  />
                  {(error.includes('confirm_password') && submitting && !confirm_password) && <p className="text-red-500 text-xs italic">Please fill out this field</p>}
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="form-group-lg">
                  <label className="flex items-center text-gray-700 font-normal">
                    <input
                      className="mr-2 leading-tight"
                      type="checkbox"
                      checked={terms_condition}
                      required
                      onChange={this.handleTermsAndConditionChange}
                    />
                    <span className="text-base">
                    I agree with the Terms and Conditions
                    </span>
                  </label>
                  {(error.includes('terms_condition') && submitting && !terms_condition) && <p className="text-red-500 text-xs italic">Please accept the terms & conditions</p>}
                </div>
              {/* </div> */}
              </div>
              <button
                className="btn btn-primary-outline"
                type='submit'
                onClick={this.handleSubmit}
                // loading={!error.length && submitting}
              >
                Sign Up
              </button>
            </form>
          </div>
          
        </div>
        
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
  startSetPostUser: (user) => dispatch(startSetPostUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);