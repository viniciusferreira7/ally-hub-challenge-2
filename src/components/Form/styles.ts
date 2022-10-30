import styled from 'styled-components'

import * as Dialog from '@radix-ui/react-dialog'
import { BaseButton } from '../../pages/Home/styles'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;

  background: ${(props) => props.theme['blue-500']};
  opacity: 0.5;
`

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
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

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

export const CloseButton = styled(Dialog.Close)`
  width: 2rem;
  height: 2rem;
  position: absolute;
  top: 1rem;
  right: 0.8rem;

  background: transparent;
  border: 0;
  outline: 0;
  line-height: 0;
  cursor: pointer;

  border-radius: 8px;

  color: ${(props) => props.theme['blue-500']};

  &:hover {
    transition: all 0.3s ease-in-out;
    background: ${(props) => props.theme['blue-500']};
    color: ${(props) => props.theme.white};
  }
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
