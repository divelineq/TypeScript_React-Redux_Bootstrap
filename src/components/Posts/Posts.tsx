import React from 'react'
import { NavLink } from 'react-router-dom'
import Paginations from '../Pagination/Paginations'
import { useDispatch, useSelector } from 'react-redux'
import { addIdPost, deletePost, showModal } from '../redux/actions/actions'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import PostsModal from './PostsModal'
import { StyledPostsContainer, StyledNewPostButton } from './Styled'

export default function Posts({ currentPost }: any) {
  const dispatch = useDispatch()
  const post = useSelector((state: any) => state.post)
  const handleShow = () => dispatch(showModal(true))
  const deleteItem = (id: any) => {
    const indx = post.findIndex((el: any) => el.id === id)
    const before = post.slice(0, indx)
    const after = post.slice(indx + 1)
    const newArray = [...before, ...after]
    dispatch(deletePost(newArray))
  }

  return (
    <>
      <StyledNewPostButton>
        <Button onClick={handleShow} variant='primary'>
          Добавить новый пост
        </Button>
      </StyledNewPostButton>
      <StyledPostsContainer>
        {currentPost.map((post: any) => (
          <Container>
            <Row>
              <Col>
                <Card border='primary'>
                  <Card.Body>
                    <Card.Title>Пост номер: {post.id}</Card.Title>
                    <Card.Text className='title'>{post.title}</Card.Text>
                    <Card.Text>{post.body}</Card.Text>
                  </Card.Body>
                  <Container className='look'>
                    <NavLink
                      onClick={() => dispatch(addIdPost(post.id))}
                      to={`/singlePost/${post.id}`}
                    >
                      <Button variant='primary'>Посмотреть</Button>
                    </NavLink>
                    <Button
                      onClick={() => deleteItem(post.id)}
                      variant='danger'
                    >
                      Удалить
                    </Button>
                  </Container>
                </Card>
              </Col>
            </Row>
          </Container>
        ))}
      </StyledPostsContainer>
      <Container>
        <PostsModal />
      </Container>
      <Container>
        <Paginations />
      </Container>
    </>
  )
}
