import Head from 'next/head';

import Sidebar from "../Sidebar";
import Chat from '../Chat';

import { Container } from "./styles";

import { useApp } from '../../hooks/useApp';
import { useAuth } from '../../hooks/useAuth';

import Router from 'next/router';

import { useEffect } from 'react';

export default function Layout() {

  const { groupSelected } = useApp();

  const { user, loadingUser } = useAuth();

  useEffect(() => {
    !loadingUser && !user && Router.push('/signin')
  }, [loadingUser]);

  return (
    <Container>
      <Head>
        <title>Whatsapp Clone</title>
      </Head>

      {!loadingUser && user && <>
        <Sidebar />
        {groupSelected && <Chat />}
      </>}
    </Container>
  );
}