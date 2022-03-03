import styled from 'styled-components';

export const Container = styled.div`
  padding: 1rem 2rem 63px 2rem;
  overflow-y: auto;
  height: calc(100vh - 146px);

  display: flex;
  flex-direction: column-reverse;  

  scroll-behavior: smooth;

  gap: 1rem;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.sidebarGroup};; 
    height: 10px;
  }
`;
