import React, { Fragment } from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

import NavBar from './NavBar'
import LeftsideBar from './LeftsideBar'
import RightsideBar from './RightsideBar'
import Footer from './Footer'

import '../../../scss/index.scss';


const Layout = ({
  children,
  header,
  leftbar,
  rightbar,
  footer,
  title,
  className = ''
}) => {
  var contentClass = `flex flex-col w-4/5 h-full ${className}`;
  if(!leftbar && !rightbar) {
    contentClass = `flex flex-col w-full h-full ${className}`
  } else if(rightbar) {
    contentClass = `flex flex-col w-3/5 h-full ${className}`
  }

  return <Fragment>
    <Head>
      <title>{title}</title>
    </Head>
    {header && <NavBar/>}
    <div className="container">

      <div className="flex">
        {leftbar && <div className="flex flex-col w-1/5 sticky top-0 bg-white h-full">
          <LeftsideBar/>
        </div>}
        
        <div className={contentClass}>
            {children}
        </div>

        {rightbar && <div className="flex flex-col w-1/5 sticky top-0 bg-white h-full">
          <RightsideBar/>
        </div>}
      </div>

    </div>
    {footer && <Footer/>}
  </Fragment>
}

Layout.propTypes = {
  header: PropTypes.bool.isRequired,
  leftbar: PropTypes.bool.isRequired,
  rightbar: PropTypes.bool.isRequired,
  footer: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired
}

Layout.defaultProps = {
  header: true,
  leftbar: true,
  footer: true,
  rightbar: true,
  title: 'SnippetIn - Personalize your snippets and bookmark your links'
}
 
export default Layout;