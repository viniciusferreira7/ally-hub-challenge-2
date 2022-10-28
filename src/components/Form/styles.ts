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

export const ButtonContainer = styled.button`
  max-width: 20rem;
  width: 100%;
  height: 3rem;
  margin: auto;
  border-top-left-radius: 8px;
  border-bottom-right-radius: 8px;

  border: 3px solid ${(props) => props.theme['blue-500']};
  background: ${(props) => props.theme.white};
  color: ${(props) => props.theme['blue-500']};

  font-size: 1.2rem;

  &:hover {
    transition: all 0.3s ease-in-out;
    background: ${(props) => props.theme['blue-500']};
    color: ${(props) => props.theme.white};
  }

  @media screen and (max-width: 768px) {
    border-top-left-radius: 22px;
    border-bottom-right-radius: 22px;
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
  border: 2px solid ${(props) => props.theme.white};

  background: ${(props) => props.theme['gray-300']};

  &:focus-within {
    transition: border 0.3s ease-in-out;
    border: 2px solid ${(props) => props.theme['blue-500']};

    h2 {
      color: ${(props) => props.theme['blue-500']};
    }
  }

  h2 {
    display: flex;
    align-items: center;
    gap: 0.5rem;

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
