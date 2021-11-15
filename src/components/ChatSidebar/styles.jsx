import styled, { keyframes } from 'styled-components';

import { MdClose } from 'react-icons/md';

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.sidebar };
  position: absolute;
  top: 0; bottom: 0; right: 0;
  width: 350px;
  transform: ${({ showChatSidebar }) => showChatSidebar ? "translateX(0)" : "translateX(100%)"};
  border-left: 1px solid ${({ theme }) => theme.colors.sidebarGroup};
  transition: transform .3s ease-in-out;
  cursor: default;
`;

export const Header = styled.div`
  height: 63px;
  padding: 0 2rem;
  background-color: ${({ theme }) => theme.colors.sidebarHeader};

  display: flex;
  align-items: center;
  gap: 2rem;

  > span {
    color: ${({ theme }) => theme.colors.textSecondary};
    font-weight: 500;
    font-size: 1.35rem;
  }
`

export const CloseButton = styled(MdClose)`
  cursor: pointer;
  transition: filter .3s;
  color: ${({ theme }) => theme.colors.textPrimary};

  &:hover {
    filter: brightness(.75);
  }
`

export const Wrapper = styled.div`
  height: calc(100vh - 63px);

  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.sidebarGroup};; 
    height: 10px;
  }
`

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 3rem;
  border-bottom: 8px solid ${({ theme }) => theme.colors.backgroundPrimary};

  > img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
  }

  > div {
    text-align: center;

    > h1 {
      color: ${({ theme }) => theme.colors.textSecondary};
      font-weight: 400;
    }

    > p {
      color: ${({ theme }) => theme.colors.textPrimary};
      font-size: 1.25rem;
    }
  }

  > p {
    color: ${({ theme }) => theme.colors.textPrimary};
    font-size: 1.35rem;
    width: 100%;
    margin: 0 auto;
    text-align: center;
  }
`

export const Members = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
  cursor: default;

  > h3 {
    padding: 0 3rem 1rem 3rem;
    color: ${({ theme }) => theme.colors.textPrimary};
    font-weight: 400;
    font-size: 1.35rem;
  }

  > div {
    display: flex;
    align-items: center;
    gap: 2rem;
    padding: 2rem 3rem;
    transition: background .3s;
    cursor: pointer;

    &:hover {
    background: ${({ theme }) => theme.colors.sidebarGroup};
  }

    > img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      object-fit: cover;
    }

    > div {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      > span {
        font-size: 1.35rem;
        color: ${({ theme }) => theme.colors.textSecondary};
      }

      > label {
        font-size: 1.15rem;
        color: ${({ theme }) => theme.colors.textPrimary};
        cursor: pointer;
      }
    }
  }
`