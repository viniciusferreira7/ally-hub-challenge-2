import styled from 'styled-components'

export const FormContainer = styled.form`
  display: grid;
  grid-template-areas:
    'PersonalDataForm InterestDestinationsForm'
    'PersonalDataForm button';
  gap: 0.2rem;
  align-items: flex-start;

  background: ${(props) => props.theme.white};

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

export const BaseFormCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;
  gap: 1.5rem;

  width: 100%;
  max-width: 30rem;
  margin: auto;
  padding: 1.5rem;
  border-radius: 22px;

  background: ${(props) => props.theme['gray-300']};

  h2 {
    color: ${(props) => props.theme.white};

    text-transform: capitalize;
  }

  input {
    width: 90%;
    padding: 0.6rem;
    border-radius: 6px;

    border-color: ${(props) => props.theme['gray-900']};

    &:focus::placeholder {
      color: ${(props) => props.theme['blue-500']};
    }
  }
`
