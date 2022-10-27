import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;

  max-width: 1120px;
  width: 100%;
  margin: 2rem auto;

  @media screen and (max-width: 767px) {
    img {
      width: 20rem;
    }
  }
`
