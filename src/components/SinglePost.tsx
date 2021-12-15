import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row, Form, Modal } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { addSinglePost } from './actions/actions'
import { fetchSinglePost } from './actions/asyncAction'
import s from './SinglePost.module.css'

export default function SinglePost() {
  const dispatch = useDispatch()
  const { register, handleSubmit } = useForm()
  const singlePost = useSelector((state: any) => state.singlePost)
  const id: any = useParams()
  useEffect(() => {
    dispatch(fetchSinglePost(id.id))
  }, [])
  const onSubmit = (data: any) => {
    let jsonSubmitPost = data
    dispatch(addSinglePost(jsonSubmitPost))
  }
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
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
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Изменение поста</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group>
                <Form.Label>Изменить номер поста</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Введите новый номер'
                  {...register('id', { required: true })}
                ></Form.Control>
              </Form.Group>
              <Form.Group style={{ marginTop: '5px' }}>
                <Form.Label>Изменить заголово поста</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Введите новый заголовок'
                  {...register('title', { required: true })}
                ></Form.Control>
              </Form.Group>
              <Form.Group style={{ marginTop: '5px' }}>
                <Form.Label>Изменить текст поста</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Введите новый текст'
                  {...register('body', { required: true })}
                ></Form.Control>
              </Form.Group>
              <Form.Group style={{ marginTop: '5px' }}>
                <Form.Label>Изменить id пользователя</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Введите новый id пользователя'
                  {...register('userId', { required: true })}
                ></Form.Control>
              </Form.Group>
              <Button
                style={{ marginTop: '5px', display: 'block' }}
                variant='primary'
                type='submit'
              >
                Изменить
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </Container>
    </>
  )
}
