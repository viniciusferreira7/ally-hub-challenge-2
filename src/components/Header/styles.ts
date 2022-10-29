import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 1120px;
  margin: 1.2rem auto 2rem;

  @media screen and (max-width: 767px) {
    img {
      width: 20rem;
    }
  }
`
