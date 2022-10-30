import styled from 'styled-components'

export const FieldContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 0.6rem;

  width: 100%;

  label {
    color: ${(props) => props.theme['blue-500']};
  }

  input {
    flex: 1;

    width: 100%;
    max-width: 20rem;
    padding: 0.6rem;
    border-radius: 6px;

    border: 2px solid ${(props) => props.theme['blue-500']};
    background: ${(props) => props.theme.white};

    &:focus::placeholder {
      color: ${(props) => props.theme['blue-500']};
    }
  }
`
