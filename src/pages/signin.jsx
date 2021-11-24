import Login from '../components/Login';

import Head from 'next/head';

import { Fragment } from 'react';

export default function SignIn() {
  return (
    <Fragment>
      <Head>
        <title>WhatsApp Clone - Sign In</title>
      </Head>

      <Login />
    </Fragment>
  );
}