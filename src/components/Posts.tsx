import React, { useEffect } from 'react'
import { NavLink, useLocation, useParams } from 'react-router-dom'
import p from './Post.module.css'
import Paginations from './Paginations'
import { useDispatch } from 'react-redux'
import { addIdPost } from './actions/actions'

export default function Posts({ post }: any) {
  const dispatch = useDispatch()

  return (
    <div>
      <div className={p.post}>
        {post.map((post: any) => (
          <div className={p.postItem}>
            <h4 className={p.h4}>
              <NavLink
                onClick={() => dispatch(addIdPost(post.id))}
                to={`/singlePost/${post.id}`}
              >
                Пост номер: {post.id}
              </NavLink>
            </h4>
            <h6 className={p.title}>{post.title}</h6>
            <p className={p.body}>{post.body}</p>
          </div>
        ))}
      </div>
      <div>
        <Paginations />
      </div>
    </div>
  )
}
