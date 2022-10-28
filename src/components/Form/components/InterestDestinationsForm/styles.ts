import styled from 'styled-components'
import { BaseFormCardContainer } from '../../styles'

export const InterestDestinationsFormContainer = styled(BaseFormCardContainer)`
  grid-area: InterestDestinationsForm;

  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;

  @media screen and (max-width: 768px) {
    border-top-left-radius: 22px;
    border-bottom-left-radius: 22px;
  }
`
