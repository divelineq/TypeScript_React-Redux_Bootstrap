import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { showModal } from '../redux/actions/actions'
import { fetchSinglePost } from '../redux/actions/asyncAction'
import s from './SinglePost.module.css'
import SinglePostModal from './SinglePostModal'

export default function SinglePost() {
  const dispatch = useDispatch()
  const singlePost = useSelector((state: any) => state.singlePost)
  const handleShow = () => dispatch(showModal(true))
  const id = useParams()
  useEffect(() => {
    dispatch(fetchSinglePost(id.id))
  }, [])

  return (
    <Container>
      <div className={s.post}>
        <Link
          style={{
            fontWeight: 'bold',
            color: 'white',
            textDecoration: 'none',
          }}
          to='/posts'
        >
          <Button style={{ width: '280px', marginBottom: '10px' }}>
            Назад
          </Button>
        </Link>
        <Row>
          <Col>
            <Card border='primary' style={{ width: '280px' }}>
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
                  onClick={handleShow}
                  style={{ padding: '5px', width: '246px' }}
                  variant='primary'
                >
                  Изменить
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
      <Container>
        <SinglePostModal />
      </Container>
    </Container>
  )
}
