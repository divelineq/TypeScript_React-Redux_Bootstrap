import React from 'react'
import pag from './Paginations.module.css'
import Pagination from 'react-bootstrap/Pagination'
import { useDispatch, useSelector } from 'react-redux'
import { paginate } from './actions/actions'

const Paginations = () => {
  const dispatch = useDispatch()
  const post = useSelector((state: any) => state.post)
  const postPage = useSelector((state: any) => state.postPage)
  const postPerPage = useSelector((state: any) => state.postPerPage)

  let items: Array<any> = []
  for (
    let number = 1;
    number <= Math.ceil(post.length / postPerPage);
    number++
  ) {
    items.push(
      <Pagination.Item
        onClick={() => dispatch(paginate(number))}
        key={number}
        active={number == postPage}
      >
        {number}
      </Pagination.Item>
    )
  }
  return (
    <div className={pag.pagination}>
      <Pagination>{items}</Pagination>
    </div>
  )
}

export default Paginations
