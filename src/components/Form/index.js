import styled from 'styled-components';
import { shade } from 'polished';

const Form = styled.div`
  margin-top: 30px;
  max-width: 350px;
  display: flex;

  input {
    flex: 1;
    height: 50px;
    padding: 0 12px;
    border: 0;
    border-radius: 4px 0 0 4px;
    color: #3a3a3a;
    border: 2px solid ${({ theme }) => theme.colors.contrastText};
    border-right: 0;

    ::placeholder {
      color: ${({ theme }) => theme.colors.mainBg};
    }
  }

  button {
    width: 210px;
    height: 50px;
    background: ${({ theme }) => theme.colors.secondary};
    border: 0;
    border-radius: 0 4px 4px 0;
    color: ${({ theme }) => theme.colors.contrastText};
    font-weight: bold;
    transition: background-color 0.2s;
    &:hover {
      background: ${shade(0.2, '#1A472A')};
    }
    &:active {
      background: ${shade(0.5, '#1A472A')};
    }
  }
`;

export default Form;
