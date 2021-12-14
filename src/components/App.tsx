import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import a from './App.module.css'
import { fetchPost } from './actions/asyncAction'
import Posts from './Posts'
import { Routes, Route, Link } from 'react-router-dom'
import StartPage from './StartPage'
import SinglePost from './SinglePost'

function App() {
  const dispatch = useDispatch()
  const post = useSelector((state: any) => state.post)
  const postPage = useSelector((state: any) => state.postPage)
  const postPerPage = useSelector((state: any) => state.postPerPage)

  useEffect(() => {
    dispatch(fetchPost())
  }, [])

  const lastPostIndex = postPage * postPerPage
  const firstPostIndex = lastPostIndex - postPerPage
  const currentPost = post.slice(firstPostIndex, lastPostIndex)

  return (
    <div>
      <h1 className={a.allPostsH1}>
        <Link to='/'>Начало</Link>
      </h1>
      <h1 className={a.allPostsH1}>
        <Link to='/posts'>Показать все посты</Link>
      </h1>
      <div>
        <Routes>
          <Route path='/' element={<StartPage />} />
          <Route path='/posts' element={<Posts post={currentPost} />} />
          <Route path={`/singlePost/:id`} element={<SinglePost />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
