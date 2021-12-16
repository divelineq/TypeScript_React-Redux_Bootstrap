import React from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { addNewPost, showModal } from '../redux/actions/actions'
import { useDispatch, useSelector } from 'react-redux'

export default function PostsModal() {
  const dispatch = useDispatch()
  const modal = useSelector((state: any) => state.modal)
  const { register, handleSubmit } = useForm()
  const handleClose = () => dispatch(showModal(false))
  const onSubmit = (data: any) => {
    dispatch(addNewPost(data))
  }

  return (
    <Modal show={modal} onHide={handleClose}>
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
  )
}
function dispatch(arg0: { type: string; payload: any }) {
  throw new Error('Function not implemented.')
}
