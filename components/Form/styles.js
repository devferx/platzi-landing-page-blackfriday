import styled from '@emotion/styled'

export const FormContainer = styled.form`
  padding: 16px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`

export const Input = styled.input`
  padding: 1rem;
  background-color: #f5f0ec;
  border-radius: 8px;
  margin-top: 1rem;
  font-size: 14px;
  border: 1px solid #dbd4d5;

  &:focus {
    outline-color: #7e43b8;
  }
`

export const Button = styled.button`
  width: 100%;
  background-color: #98ca3f;
  color: white;
  padding: 1rem;
  margin-top: 1rem;
  font-weight: 700;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
  text-transform: uppercase;
  border: none;
  outline: none;

  &:hover {
    background-color: #c1df8b;
  }
`
