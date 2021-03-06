import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  background-color: #f0f0f5;
  border-radius: 1rem;

  max-width: 375px;
  width: 90%;
  margin: 0 auto;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  padding: 2rem;
  gap: 2rem;

  > h1 {
    font-size: 1.8rem;
    color: #222f3e;
  }

  > button {
    background-color: #54a0ff;
    color: #fafafa;
    font-weight: 500;
    font-size: 1.35rem;
    height: 50px;
    outline: 0;
    border: 0;
    border-radius: .5rem;
    cursor: pointer;
    transition: filter .3s ease-in-out;

    &:hover {
      filter: brightness(.9);
    }
  }

  > hr {
    border-top: 1px solid rgba(0, 0, 0, .08);
    width: 100%;
  }

  > button.signInWithGoogle {
    background-color: #E1E1E1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    color: #2f3640;

    > img {
      width: 20px;
      height: auto;
      object-fit: contain;
    }
  }

  > span {
    font-size: 1.35rem;
    text-align: center;
    color: #007fff;

    &:hover {
      cursor: pointer;
    }
  }

  .messageError {
    color: #c0392b;
    font-size: 1.35rem;
  }
`

export const Input = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  > label {
    font-size: 1.45rem;
    font-weight: 500;
    color: #34495e;
  }

  > input {
    font-size: 1.35rem;
    padding: 1.35rem;
    outline: 0;
    color: #34495e;
    border-radius: .5rem;
    border: 1px solid rgba(0, 0, 0, .1);
  }
`