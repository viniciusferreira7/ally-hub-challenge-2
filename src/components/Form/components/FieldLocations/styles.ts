import styled from 'styled-components'

export const FieldLocationsContainer = styled.div`
  width: 100%;
  max-width: 20rem;
  z-index: 999999;
  position: relative;

  input {
    &:focus {
      color: ${(props) => props.theme.white};
      outline: ${(props) => props.theme.white};
    }
  }
`
