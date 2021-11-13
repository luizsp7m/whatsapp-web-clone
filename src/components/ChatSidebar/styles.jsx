import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.sidebar };
  position: absolute;
  top: 0; bottom: 0; right: 0;
  width: 350px;
  transform: ${({ showChatSidebar }) => showChatSidebar ? "translateX(0)" : "translateX(100%)"};
  border-left: 1px solid ${({ theme }) => theme.colors.sidebarGroup};
  transition: transform .3s ease-in-out;
`;
