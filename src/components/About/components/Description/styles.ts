import styled from 'styled-components'
import { BaseButton } from '../../../../pages/Home/styles'

export const DescriptionContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  max-width: 40rem;
  width: 100%;
  min-height: 10rem;
  padding: 1rem 2rem;
  box-shadow: 12px 12px 10px 4px ${(props) => props.theme['gray-300']};
  border: 2px solid transparent;

  &:hover {
    border: 2px solid ${(props) => props.theme['blue-500']};
    border-radius: 6px;
  }

  h1 {
    color: ${(props) => props.theme['blue-500']};

    font-size: 1.8rem;
  }

  p {
    color: ${(props) => props.theme['gray-900']};
    font-weight: 700;
    margin: 1rem 0;
  }
`
export const ButtonContainer = styled(BaseButton)``
