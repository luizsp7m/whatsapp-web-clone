import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  padding-right: ${({ showChatSidebar }) => showChatSidebar ? "350px" : "0"};
  transition: padding .3s ease-in-out;
  overflow-x: hidden;

  @media(max-width: 768px) {
    padding: 0;
    transition: transform .3s ease-in-out;
    width: 100%;
    transform: ${({ showChat }) => showChat ? 'translateX(0)' : 'translateX(100%)'};  
    position: fixed;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.sidebar};
  }
`;

/* display: ${({ showChat }) => showChat ? 'block' : 'none'}; */