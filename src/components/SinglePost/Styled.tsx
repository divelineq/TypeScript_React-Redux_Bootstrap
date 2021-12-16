import { Container } from 'react-bootstrap'
import styled from 'styled-components'

export const StyledSinglePostContainer = styled(Container)`
  display: grid;
  margin: 0px;
  max-width: 400px;
  padding: 40px;
  .backButton {
    width: 280px;
    margin-bottom: 10px;
  }
  .changeButton {
    padding: 5px;
    width: 246px;
  }
  .titleText {
    text-align: center;
    font-weight: 600;
  }
  .card-title {
    text-align: center;
    font-weight: bold;
    border-bottom: 1px solid black;
    min-height: 40px;
  }
  .card {
    width: 280px;
  }
`
