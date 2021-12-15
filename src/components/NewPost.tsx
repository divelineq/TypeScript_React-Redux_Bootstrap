import React from 'react'
import { useForm } from 'react-hook-form'
import u from './UpdatePost.module.css'
import { useDispatch } from 'react-redux'
import { addNewPost } from './actions/actions'
import { Button } from 'react-bootstrap'

export default function NewPost() {
  const { register, handleSubmit } = useForm()
  const dispatch = useDispatch()

  const onSubmit = (data: any) => {
    dispatch(addNewPost(data))
    console.log(data)
  }

  return (
    <div className={u.divnewpost}>
      <form className={u.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={u.inputs}>
          <label className={u.label} htmlFor=''>
            Номер поста
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
        <Button className={u.button} variant='primary' type='submit'>
          Добавить новый пост
        </Button>
      </form>
    </div>
  )
}
