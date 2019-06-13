import React from 'react';
import nextCookie from 'next-cookies';
import cookie from "js-cookie";
import Layout from '../src/modules/layout';
import { LoremIpsum } from '../src/utils';

const Index = (props) => {
  console.log('props: ', props);

  return (
    <Layout leftbar={false} rightbar={false}>
      {/* <pre>{JSON.stringify(props, undefined, 2)}</pre> */}
      <p className="text-4xl pb-1 pt-3">Heading</p>
      <h1>h1 : Lorem ipsum dolor sit amet.</h1>
      <h2>h2 : Lorem ipsum dolor sit amet.</h2>
      <h3>h3 : Lorem ipsum dolor sit amet.</h3>
      <h4>h4 : Lorem ipsum dolor sit.</h4>
      <h5>h5 : Lorem ipsum dolor sit amet.</h5>
      <h6>h6 : Lorem ipsum dolor sit amet.</h6>

      <p className="text-4xl pb-1 pt-3">Button</p>
      <div className="flex">
        <button className="btn btn-primary">Button</button>
        <button className="btn btn-blue">Button</button>
        <button className="btn btn-gray">Button</button>
        <button className="btn btn-primary-outline">Button</button>
        <button className="btn btn-blue-outline">Button</button>
        <button className="btn btn-gray-outline">Button</button>
      </div>
      <br/>
      <div className="flex">
        <button className="btn btn-sm btn-primary">Button</button>
        <button className="btn btn-sm btn-blue">Button</button>
        <button className="btn btn-sm btn-gray">Button</button>
        <button className="btn btn-primary-outline btn-outline-sm">Button</button>
        <button className="btn btn-blue-outline btn-outline-sm">Button</button>
        <button className="btn btn-gray-outline btn-outline-sm">Button</button>
      </div>
      <br/>
      <p className="text-4xl pb-1 pt-3">Form</p>
      <form className="w-full">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="form-group md:w-1/2 mb-6 md:mb-0">
            <label className="control-label" htmlFor="email-address">Email Address</label>
            <input className="form-control" id="email-address" type="email" placeholder='Email Address' />
          </div>
          <div className="form-group md:w-1/2">
            <label className="control-label" htmlFor="username">Username</label>
            <input className="form-control" id="username" type="text" placeholder='Username'/>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="form-group-lg md:w-1/2 mb-6 md:mb-0">
            <label className="control-label" htmlFor="email-address">Email Address</label>
            <input className="form-control error" id="email-address" type="email" placeholder='Email Address' />
            <p className="text-red-500 text-xs italic">Please fill out this field.</p>
          </div>
          <div className="form-group-lg md:w-1/2">
            <label className="control-label" htmlFor="username">Username</label>
            <input className="form-control" id="username" type="text" placeholder='Username'/>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="form-group-lg md:w-1/2 mb-6 md:mb-0">
            <label className="control-label" htmlFor="password">Password</label>
            <input className="form-control" id="password" type="password" placeholder='Password'/>
          </div>
          <div className="form-group-lg md:w-1/2">
            <label className="control-label" htmlFor="confirm-password">Confirm Password</label>
            <input className="form-control" type="password" placeholder='Confirm Password'/>
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="form-group-lg">
            <label className="flex items-center text-gray-700 font-normal">
              <input className="mr-2 leading-tight" type="checkbox"/>
              <span className="text-base">I agree with the Terms and Conditions</span>
            </label>
            <p className="text-red-500 text-xs italic">Please accept the terms & conditions.</p>
          </div>
          <div className="form-group">
            <label className="flex items-center text-gray-700 font-normal">
              <input className="mr-2 leading-tight" type="radio"/>
              <span className="text-base">I agree with the Terms and Conditions</span>
            </label>
          </div>
        </div>
        <button className="btn btn-primary-outline" type='submit'>Sign Up</button>
      </form>

      
      <p className="text-4xl pb-1 pt-3">Chat Notification</p>
      <div className="max-w-sm mx-auto flex p-6 bg-white rounded-lg shadow-xl">
        <div className="flex-shrink-0">
          {/* <img className="h-12 w-12 text-blue-200" src="/static/assets/zondicons/add-solid.svg" alt="ChitChat Logo"/> */}
          <svg className="h-12 w-12" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a"><stop stopColor="#2397B3" offset="0%"></stop><stop stopColor="#13577E" offset="100%"></stop></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b"><stop stopColor="#73DFF2" offset="0%"></stop><stop stopColor="#47B1EB" offset="100%"></stop></linearGradient></defs><g fill="none" fillRule="evenodd"><path d="M28.872 22.096c.084.622.128 1.258.128 1.904 0 7.732-6.268 14-14 14-2.176 0-4.236-.496-6.073-1.382l-6.022 2.007c-1.564.521-3.051-.966-2.53-2.53l2.007-6.022A13.944 13.944 0 0 1 1 24c0-7.331 5.635-13.346 12.81-13.95A9.967 9.967 0 0 0 13 14c0 5.523 4.477 10 10 10a9.955 9.955 0 0 0 5.872-1.904z" fill="url(#a)" transform="translate(1 1)"></path><path d="M35.618 20.073l2.007 6.022c.521 1.564-.966 3.051-2.53 2.53l-6.022-2.007A13.944 13.944 0 0 1 23 28c-7.732 0-14-6.268-14-14S15.268 0 23 0s14 6.268 14 14c0 2.176-.496 4.236-1.382 6.073z" fill="url(#b)" transform="translate(1 1)"></path><path d="M18 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM24 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM30 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" fill="#FFF"></path></g></svg>
        </div>
        <div className="ml-6 pt-1">
          <h4 className="text-xl text-gray-900 leading-tight">ChitChat</h4>
          <p className="text-base text-gray-600 leading-normal">You have a new message!</p>
        </div>
      </div>

      <p className="text-4xl pb-1 pt-3">Cart</p>
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img className="rounded-lg md:w-56" src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80" alt="Woman paying for a purchase"/>
        </div>
        <div className="mt-4 md:mt-0 md:ml-6">
          <div className="uppercase tracking-wide text-sm text-indigo-600 font-bold">Marketing</div>
          <a href="#" className="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline">Finding customers for your new business</a>
          <p className="mt-2 text-primary-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
        </div>
      </div>


      <div className="relative flex">
        <input type="text" className="form-control bg-white border-grey"/>
      </div>
    </Layout>
  )
}

Index.getInitialProps = async function(ctx) {
  const { sessionId } = await nextCookie(ctx);
  await cookie.set("sessionId", sessionId, { maxAge: parseInt(process.env.COOKIE_MAXAGE, 10) });
  const {req, isServer} = ctx;
  console.log('isServer: ', isServer);
  let user = isServer ? req.user : undefined;
  console.log('user: ', user);


  return {
    user
  }
}

export default Index
