import React from 'react'
import pag from './Paginations.module.css'
import Pagination from 'react-bootstrap/Pagination'
import { useDispatch, useSelector } from 'react-redux'
import { paginate } from './actions/actions'

const Paginations = () => {
  const dispatch = useDispatch()
  const postPage = useSelector((state: any) => state.postPage)
  let items: Array<any> = []
  for (let number = 1; number <= 10; number++) {
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
