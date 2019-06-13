import React, { Fragment } from 'react';
import { withRouter } from 'next/router';
import Link from 'next/link';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navbarCollapse: false
    }
  }

  handleSignUp = (e) => {
    e.preventDefault();
    this.props.router.push('/signup');
  }

  handleSignIn = (e) => {
    e.preventDefault();
    this.props.router.push('/login');
  }

  handleLogout = (e) => {
    e.preventDefault();
    this.props.router.push('/logout');
  }

  handleNavbarToggle = () => {
    this.setState({navbarCollapse: !this.state.navbarCollapse})
  }

  render() { 
    const {navbarCollapse} = this.state;
    var navbarClass = "w-full block flex-grow lg:flex lg:items-center lg:w-auto sm:hidden xs:hidden";
    if(navbarCollapse) {
      navbarClass = "w-full block flex-grow lg:flex lg:items-center lg:w-auto";
    }

    return <Fragment>
      <nav className="bg-primary-500 px-8 py-3">
        <div className="container flex items-center justify-between flex-wrap">
          <div
            className="flex items-center flex-no-shrink cursor-pointer text-white mr-6"
            onClick={() => window.location.href = '/'}
          >
            <img className="h-6 w-6 mr-2" src="static/assets/images/logo.png" width="50" height="50" alt="logo" />
            <span className="font-serif font-medium text-2xl leading-none tracking-tight">SnippetIn</span>
          </div>
          <div className="block lg:hidden" onClick={this.handleNavbarToggle}>
            <button className="flex items-center px-2 py-1 border rounded outline-disabled text-primary-200 border-primary-light hover:text-gray-200 hover:border-white">
              <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
          </div>
          <div className={navbarClass}>
            <div className="text-sm lg:flex-grow">
              <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-primary-200 hover:text-gray-200 mr-4">
                Docs
              </a>
              <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-primary-200 hover:text-gray-200 mr-4">
                Examples
              </a>
              <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-primary-200 hover:text-gray-200">
                Blog
              </a>
            </div>
            <div className="inline-block lg:flex items-center text-sm">
              <a
                href="#"
                className="block text-sm mt-4 lg:inline-block lg:mt-0 text-primary-200 hover:text-gray-200 mr-4"
                onClick={this.handleSignIn}
              >
                Sign In
              </a>
              <a
                href="#"
                className="block text-sm mt-4 lg:inline-block lg:mt-0 text-primary-200 hover:text-gray-200 mr-4"
                onClick={this.handleSignUp}
              >
                Sign Up
              </a>

              <div className="group relative text-sm mt-4 lg:mt-0">
                <div className="cursor-pointer">
                  <img src="https://placekitten.com/30/30" className="rounded-full"/>
                </div>
                <div className="items-center absolute lg:right-0 md:top-auto sm:inset-auto xs:inset-auto border border-t-0 bg-white invisible group-hover:visible z-50">
                  <ul>
                    <li><a href="#" className="px-4 py-1 block text-gray-800 hover:bg-gray-200 hover:text-gray-900">My account</a></li>
                    <li><a href="#" className="px-4 py-1 block text-gray-800 hover:bg-gray-200 hover:text-gray-900">Notifications</a></li>
                    <li><a href="#" className="px-4 py-1 block text-gray-800 hover:bg-gray-200 hover:text-gray-900">Logout</a></li>
                  </ul>
                </div>
              </div>
              {/* <a
                href="#"
                className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-primary hover:bg-white mr-4 mt-4 lg:mt-0"
                onClick={this.handleSignIn}
              >Sign In</a>
              <a
                href="#"
                className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-primary hover:bg-white mr-4 mt-4 lg:mt-0"
                onClick={this.handleSignUp}
              >Sign Up</a>
              <a
                href="#"
                className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-primary hover:bg-white mt-4 lg:mt-0"
                onClick={this.handleLogout}
              >Logout</a> */}
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  }
}
 
export default withRouter(NavBar);