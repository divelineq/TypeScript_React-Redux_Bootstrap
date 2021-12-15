import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import p from './Post.module.css'
import Paginations from './Paginations'
import { useDispatch } from 'react-redux'
import { addIdPost, addNewPost } from './actions/actions'
import { Button, Card, Col, Container, Modal, Row, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

export default function Posts({ post }: any) {
  const dispatch = useDispatch()
  const { register, handleSubmit } = useForm()
  const onSubmit = (data: any) => {
    dispatch(addNewPost(data))
    console.log(data)
  }
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

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
        <Button variant='danger'>Удалить первый пост</Button>
      </Container>
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
      <Container>
        <Paginations />
      </Container>
    </>
  )
}
