import { Container } from 'react-bootstrap'
import styled from 'styled-components'

export const StyledNewPostButton = styled(Container)`
  padding-top: 20px;
  margin-left: 20px;
`

export const StyledPostsContainer = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 20px;
  padding: 20px;
  margin: 0px;
  .card {
    width: 280px;
    min-height: 400px;
  }
  .card-title {
    text-align: center;
    font-weight: bold;
    border-bottom: 1px solid black;
    min-height: 40px;
  }
  .title {
    text-align: center;
    font-weight: 600;
  }
  .look {
    padding: 5px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    a {
      text-decoration: none;
      color: white;
    }
  }
`
