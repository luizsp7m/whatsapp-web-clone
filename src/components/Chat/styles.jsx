import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  padding-right: ${({ showChatSidebar }) => showChatSidebar ? "350px" : "0"};
  transition: padding .3s ease-in-out;
  overflow-x: hidden;
`;
