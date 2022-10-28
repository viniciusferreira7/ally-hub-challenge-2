import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 1120px;
  margin: auto;
  padding: 0 0 2rem 0;

  @media screen and (max-width: 767px) {
    img {
      width: 20rem;
    }
  }
`
