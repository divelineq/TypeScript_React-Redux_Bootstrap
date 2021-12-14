import React from 'react'
import { Form, Button } from 'react-bootstrap'
import u from './UpdatePost.module.css'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { addSinglePost, addUpdateSinglePost } from './redux/redux'

export default function UpdatePost() {
  const dispatch = useDispatch()
  const updateSinglePost = useSelector((state: any) => state.updateSinglePost)
  const { register, handleSubmit } = useForm()

  const onSubmit = (data: any) => {
    let jsonSubmitPost = data
    console.log(updateSinglePost)
    dispatch(addUpdateSinglePost(jsonSubmitPost))
    dispatch(addSinglePost(updateSinglePost))
    console.log(updateSinglePost)
  }

  return (
    <form className={u.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={u.inputs}>
        <label className={u.label} htmlFor=''>
          Номер
        </label>
        <input className={u.input} type='text' {...register('id')} />
      </div>
      <div>
        <label className={u.label} htmlFor=''>
          Заголовок
        </label>
        <input className={u.input} type='text' {...register('title')} />
      </div>
      <div>
        <label className={u.label} htmlFor=''>
          Текст
        </label>
        <input className={u.input} type='text' {...register('body')} />
      </div>
      <input type='submit' />
    </form>
  )
}
