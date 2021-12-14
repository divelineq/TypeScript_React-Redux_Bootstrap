import React from 'react'
import u from './UpdatePost.module.css'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { addSinglePost } from './actions/actions'
import { Button } from 'react-bootstrap'

export default function UpdatePost() {
  const dispatch = useDispatch()
  const { register, handleSubmit } = useForm()

  const onSubmit = (data: any) => {
    let jsonSubmitPost = data
    dispatch(addSinglePost(jsonSubmitPost))
  }

  return (
    <form className={u.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={u.inputs}>
        <label className={u.label} htmlFor=''>
          Номер
        </label>
        <input
          className={u.input}
          type='text'
          {...register('id', { required: true })}
        />
      </div>
      <div>
        <label className={u.label} htmlFor=''>
          Заголовок
        </label>
        <input
          className={u.input}
          type='text'
          {...register('title', { required: true })}
        />
      </div>
      <div>
        <label className={u.label} htmlFor=''>
          Текст
        </label>
        <input
          className={u.input}
          type='text'
          {...register('body', { required: true })}
        />
      </div>
      <div>
        <label className={u.label} htmlFor=''>
          Номер пользователя
        </label>
        <input
          className={u.input}
          type='text'
          {...register('userId', { required: true })}
        />
      </div>
      <Button className={u.button} variant='primary' type='submit'>
        Изменить пост
      </Button>
    </form>
  )
}
