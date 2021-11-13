import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 63px;
  padding: 0 1rem;
  background-color: ${({ theme }) => theme.colors.sidebarHeader};
`;

export const ProfileImage = styled.div`
  > img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    cursor: pointer;
  }
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  > button {
    background: none;
    outline: none;
    font-size: 0;
    border: 0;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.textPrimary};
    transition: filter .3s;

    &:hover {
      filter: brightness(.75);
    }
  }
`