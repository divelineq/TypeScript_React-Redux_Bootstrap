import React from 'react'
import pag from './Paginations.module.css'
import Pagination from 'react-bootstrap/Pagination'
import { useDispatch } from 'react-redux'
import { paginate } from './actions/actions'

const Paginations = () => {
  const dispatch = useDispatch()
  let items: Array<any> = []
  for (let number = 1; number <= 10; number++) {
    let active: number = 1
    items.push(
      <Pagination.Item
        onClick={() => dispatch(paginate(number))}
        key={number}
        active={number == active}
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
