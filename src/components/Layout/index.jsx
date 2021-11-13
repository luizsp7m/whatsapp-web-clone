import Head from 'next/head';

import Sidebar from "../Sidebar";
import Chat from '../Chat';

import { Container } from "./styles";

export default function Layout() {
  return (
    <Container>
      <Head>
        <title>Chat</title>
      </Head>

      <Sidebar />

      <Chat />
    </Container>
  );
}