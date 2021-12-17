import React from 'react'
import Posts from '../Posts/Posts'
import { Routes, Route, Link } from 'react-router-dom'
import StartPage from '../Home/StartPage'
import SinglePost from '../SinglePost/SinglePost'
import { Container, Nav, Navbar } from 'react-bootstrap'
import styled from 'styled-components'
import SinglePhoto from '../SinglePost/SinglePhoto'

function App() {
  const StyledLink = styled(Nav.Link)`
    display: flex;
    a {
      text-decoration: none;
    }
  `
  return (
    <div>
      <Navbar bg='dark' expand='lg' variant='dark'>
        <Container>
          <Navbar.Brand>React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <StyledLink>
                <Nav.Link>
                  <Link to='/'>Главная</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to='/posts'>Показать все посты</Link>
                </Nav.Link>
              </StyledLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div>
        <Routes>
          <Route path='/' element={<StartPage />} />
          <Route path='/posts' element={<Posts />} />
          <Route path={`/singlePost/:id`} element={<SinglePost />} />
          <Route path={`/singlePhoto/:id`} element={<SinglePhoto />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
