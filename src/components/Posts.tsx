import React from 'react'
import { NavLink } from 'react-router-dom'
import p from './Post.module.css'
import Paginations from './Paginations'
import { useDispatch } from 'react-redux'
import { addIdPost } from './actions/actions'
import NewPost from './NewPost'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'

export default function Posts({ post }: any) {
  const dispatch = useDispatch()

  return (
    <>
      <Container style={{ margin: '0px' }} className={p.post}>
        {post.map((post: any) => (
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
                    <Button variant='danger'>Удалить</Button>
                  </Container>
                </Card>
              </Col>
            </Row>
          </Container>
        ))}
      </Container>
      <div></div>
      <div>
        <Paginations />
      </div>
    </>
  )
}
