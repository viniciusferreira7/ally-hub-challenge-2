import styled from 'styled-components'

import { BaseButton } from '../../pages/Home/styles'

export const FormContainer = styled.form`
  display: grid;
  grid-template-areas:
    'PersonalDataForm  InterestDestinationsForm '
    'PersonalDataForm SendButton ';
  gap: 0.2rem;
  align-items: flex-start;

  width: 100%;
  max-width: 1120px;
  margin: auto;

  @media screen and (max-width: 768px) {
    grid-template-areas:
      'PersonalDataForm'
      'InterestDestinationsForm'
      'SendButton';
    gap: 0.4rem;
  }
`
export const ButtonContainer = styled(BaseButton)`
  grid-area: SendButton;
`

export const BaseFormCardContainer = styled.div`
  position: relative;

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
  border: 2px solid ${(props) => props.theme['blue-500']};

  background: ${(props) => props.theme.white};

  &:focus-within {
    transition: all 0.8s ease-in-out;
    border: 2px solid ${(props) => props.theme.white};
    background: ${(props) => props.theme['blue-500']};

    h2 {
      color: ${(props) => props.theme.white};
    }

    label {
      color: ${(props) => props.theme.white};
    }

    button {
      color: ${(props) => props.theme.white};

      &:hover {
        background: ${(props) => props.theme.white};
        color: ${(props) => props.theme['blue-500']};
      }
    }
  }

  h2 {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    color: ${(props) => props.theme['blue-500']};
    font-size: 1.5rem;

    text-transform: capitalize;
  }
`
