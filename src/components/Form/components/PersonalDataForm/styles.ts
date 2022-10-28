import styled from 'styled-components'
import { BaseFormCardContainer } from '../../styles'

export const PersonalDataFormContainer = styled(BaseFormCardContainer)`
  grid-area: PersonalDataForm;

  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;

  @media screen and (max-width: 768px) {
    border-top-right-radius: 22px;
    border-bottom-right-radius: 22px;
  }
`
