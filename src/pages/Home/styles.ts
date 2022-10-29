import styled from 'styled-components'

export const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;
  margin: auto;

  background: ${(props) => props.theme.white};
`
export const BaseButton = styled.button`
  display: flex;
  gap: 0.8rem;
  justify-content: center;
  align-items: center;

  grid-area: SendButton;

  max-width: 20rem;
  width: 100%;
  height: 3rem;
  margin: auto;
  border-top-left-radius: 8px;
  border-bottom-right-radius: 8px;

  border: 2px solid ${(props) => props.theme['blue-500']};
  background: ${(props) => props.theme.white};
  color: ${(props) => props.theme['blue-500']};

  font-size: 1.2rem;

  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-in-out;
    background: ${(props) => props.theme['blue-500']};
    border-color: ${(props) => props.theme.white};
    color: ${(props) => props.theme.white};
  }

  @media screen and (max-width: 768px) {
    border-top-left-radius: 22px;
    border-bottom-right-radius: 22px;
  }
`
