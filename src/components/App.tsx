import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import a from './App.module.css'
import { fetchPost } from './actions/asyncAction'
import Posts from './Posts'
import { Routes, Route, Link } from 'react-router-dom'
import StartPage from './StartPage'
import SinglePost from './SinglePost'
import NewPost from './NewPost'
import { Container, Nav, Navbar } from 'react-bootstrap'

function App() {
  const dispatch = useDispatch()
  const post = useSelector((state: any) => state.post)
  const postPage = useSelector((state: any) => state.postPage)
  const postPerPage = useSelector((state: any) => state.postPerPage)

  useEffect(() => {
    dispatch(fetchPost())
  }, [])

  const lastPostIndex = postPage * postPerPage
  const firstPostIndex = lastPostIndex - postPerPage
  const currentPost = post.slice(firstPostIndex, lastPostIndex)

  return (
    <div>
      <Navbar bg='light' expand='lg'>
        <Container>
          <Navbar.Brand href='#home'>React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link href='#home'>
                <Link className={a.start} to='/'>
                  Начало
                </Link>
              </Nav.Link>
              <Nav.Link href='#link'>
                <Link className={a.posts} to='/posts'>
                  Показать все посты
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div>
        <Routes>
          <Route path='/' element={<StartPage />} />
          <Route path='/posts' element={<Posts post={currentPost} />} />
          <Route path={`/singlePost/:id`} element={<SinglePost />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
