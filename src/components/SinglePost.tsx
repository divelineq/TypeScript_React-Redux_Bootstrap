import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
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
      <Link className={s.link} to='/posts'>
        Назад
      </Link>
      <div className={s.postItem}>
        <h4 className={s.h4}>Пост номер: {singlePost.id}</h4>
        <h6 className={s.title}>{singlePost.title}</h6>
        <p className={s.body}>{singlePost.body}</p>
        <p className={s.userid}>Пользовательно номер: {singlePost.userId}</p>
      </div>
      <div>
        <UpdatePost />
      </div>
    </div>
  )
}
