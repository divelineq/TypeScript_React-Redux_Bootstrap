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
    <div>
      <div className={p.post}>
        {post.map((post: any) => (
          <Container>
            <Row>
              <Col>
                <Card
                  style={{
                    width: '280px',
                    minHeight: '370px',
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
                      <NavLink
                        style={{ textDecoration: 'none' }}
                        onClick={() => dispatch(addIdPost(post.id))}
                        to={`/singlePost/${post.id}`}
                      >
                        Пост номер: {post.id}
                      </NavLink>
                    </Card.Title>
                    <Card.Text
                      style={{ textAlign: 'center', fontWeight: '600' }}
                    >
                      {post.title}
                    </Card.Text>
                    <Card.Text>{post.body}</Card.Text>
                  </Card.Body>
                  <Button style={{ margin: '5px' }}>Удалить пост</Button>
                </Card>
              </Col>
            </Row>
          </Container>
        ))}
      </div>
      <div></div>
      <div>
        <Paginations />
      </div>
      <div>
        <NewPost />
      </div>
    </div>
  )
}
