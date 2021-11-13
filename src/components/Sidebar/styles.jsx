import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.sidebar};
  position: relative;
  border-right: 1px solid ${({ theme }) => theme.colors.sidebarGroup};
`;

export const SidebarContent = styled.div`
  overflow-y: auto;
  height: calc(100vh - 63px);

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.sidebarGroup};; 
    height: 10px;
  }
`