import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;

  width: 100%;
  margin: 2rem auto 2rem;

  @media screen and (max-width: 767px) {
    img {
      width: 20rem;
    }
  }
`
