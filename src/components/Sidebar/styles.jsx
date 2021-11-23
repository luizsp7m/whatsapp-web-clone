import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.sidebar};
  position: relative;
  border-right: 1px solid ${({ theme }) => theme.colors.sidebarGroup};

  @media(max-width: 768px) {
    transition: transform .3s ease-in-out;
    width: 100%;
    position: fixed;
    /* transform: ${({ showChat }) => showChat ? 'translateX(-100%)' : 'translateX(0)'};     */
    /* display: ${({ showChat }) => showChat ? 'none' : 'block'}; */
  }
`;

export const SidebarContent = styled.div`
  overflow-y: auto;
  height: calc(100vh - 63px);

  display: flex;
  flex-direction: column;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.sidebarGroup};; 
    height: 10px;
  }
`