import React, { useEffect } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink, useParams } from 'react-router-dom'
import { fetchSinglePost } from './actions/asyncAction'
import s from './SinglePost.module.css'
import UpdatePost from './UpdatePost'

export default function SinglePost() {
  const dispatch = useDispatch()
  const singlePost = useSelector((state: any) => state.singlePost)
  const id: any = useParams()

  useEffect(() => {
    dispatch(fetchSinglePost(id.id))
  }, [])

  return (
    <div className={s.post}>
      <Link
        style={{ fontWeight: 'bold', color: 'white', textDecoration: 'none' }}
        to='/posts'
      >
        <Button style={{ width: '280px', margin: '12px' }}>Назад</Button>
      </Link>

      <Container>
        <Row>
          <Col>
            <Card style={{ width: '280px' }}>
              <Card.Body>
                <Card.Title
                  style={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    borderBottom: '1px solid black',
                    minHeight: '40px',
                  }}
                >
                  Пост номер: {singlePost.id}
                </Card.Title>
                <Card.Text style={{ textAlign: 'center', fontWeight: '600' }}>
                  {singlePost.title}
                </Card.Text>
                <Card.Text>{singlePost.body}</Card.Text>
                <Card.Text>Номер пользователя: {singlePost.userId}</Card.Text>
                <Button
                  style={{ padding: '5px', width: '246px' }}
                  variant='primary'
                >
                  Изменить
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
