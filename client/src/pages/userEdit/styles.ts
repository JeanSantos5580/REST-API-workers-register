import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    margin-bottom: 1.5rem;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  button {
    background: ${({ theme }) => theme.colors.purple_500};
    border: none;
    padding: 6px 0;
    border-radius: 4px;
    cursor: pointer;

    color: #fff;
    font-weight: bold;
  }
`

export const Input = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  label {
    font-weight: bold;
  }

  input {
    border: none;
    outline: none;
    padding: 6px;
    border-radius: 4px;
  }
`

export const Checkbox = styled.div`
  display: flex;
  gap: 8px;
`
