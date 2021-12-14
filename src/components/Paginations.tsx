import React from 'react'
import pag from './Paginations.module.css'
import Pagination from 'react-bootstrap/Pagination'
import { useDispatch } from 'react-redux'

const Paginations = () => {
  const dispatch = useDispatch()
  const paginate = (postNumber: any) => {
    dispatch({ type: 'CURRENT_PAGE', payload: postNumber })
  }
  let items: Array<any> = []
  for (let number = 1; number <= 10; number++) {
    let active: number = 1
    items.push(
      <Pagination.Item
        onClick={() => paginate(number)}
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
