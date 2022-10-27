import styled from 'styled-components'

export const PersonalDataFormContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;
  gap: 1.5rem;

  width: 100%;
  max-width: 30rem;
  height: 25rem;
  margin: auto;
  padding: 1.5rem;
  border-radius: 18px;

  background: ${(props) => props.theme['gray-300']};

  h2 {
    color: ${(props) => props.theme.white};

    text-transform: capitalize;
  }

  input {
    width: 90%;
    padding: 0.7rem;
    border-radius: 6px;

    border-color: ${(props) => props.theme['gray-900']};

    &:focus::placeholder {
      color: ${(props) => props.theme['blue-500']};
    }
  }
`
