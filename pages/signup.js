import React from 'react'
import Layout from '../src/modules/layout';
import {SignUpForm} from '../src/modules';

const Index = () => (
  <Layout leftbar={false} rightbar={false} footer={false}>
    <SignUpForm/>
   </Layout>
)

export default Index
