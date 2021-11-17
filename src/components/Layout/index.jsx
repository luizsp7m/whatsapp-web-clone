import Head from 'next/head';

import Sidebar from "../Sidebar";
import Chat from '../Chat';

import { Container } from "./styles";

import { useAuth } from '../../hooks/useAuth';

import { Fragment, useEffect } from 'react';

import Router from 'next/router';

import { useApp } from '../../hooks/useApp';

export default function Layout() {

  const { user, loadingUser } = useAuth();

  useEffect(() => {
    !loadingUser && !user && Router.push('/signin');
  }, [loadingUser]);

  return (
    <Container>
      <Head>
        <title>Whatsapp Clone</title>
      </Head>

      {!loadingUser && user && (
        <Fragment>
          <Sidebar />
          <Chat />
        </Fragment>
      )}
    </Container>
  );
}