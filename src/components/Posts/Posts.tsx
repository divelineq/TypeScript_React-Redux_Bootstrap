import React from 'react'
import { NavLink } from 'react-router-dom'
import p from './Post.module.css'
import Paginations from '../Pagination/Paginations'
import { useDispatch, useSelector } from 'react-redux'
import { addIdPost, deletePost, showModal } from '../redux/actions/actions'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'

import PostsModal from './PostsModal'

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
      <Container style={{ margin: '20px' }}>
        <Button
          onClick={handleShow}
          variant='primary'
          style={{ marginRight: '5px' }}
        >
          Добавить новый пост
        </Button>
      </Container>
      <Container style={{ margin: '0px' }} className={p.post}>
        {currentPost.map((post: any) => (
          <Container>
            <Row>
              <Col>
                <Card
                  border='primary'
                  style={{
                    width: '280px',
                    minHeight: '400px',
                  }}
                >
                  <Card.Body>
                    <Card.Title
                      style={{
                        textAlign: 'center',
                        fontWeight: 'bold',
                        borderBottom: '1px solid black',
                        minHeight: '40px',
                      }}
                    >
                      Пост номер: {post.id}
                    </Card.Title>
                    <Card.Text
                      style={{
                        textAlign: 'center',
                        fontWeight: '600',
                        color: 'black',
                      }}
                    >
                      {post.title}
                    </Card.Text>
                    <Card.Text style={{ color: 'black' }}>
                      {post.body}
                    </Card.Text>
                  </Card.Body>
                  <Container
                    style={{
                      padding: '5px',
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                    }}
                  >
                    <NavLink
                      style={{
                        textDecoration: 'none',
                        color: 'white',
                      }}
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
      </Container>
      <Container>
        <PostsModal />
      </Container>
      <Container>
        <Paginations />
      </Container>
    </>
  )
}
