import React from 'react'
import Pagination from 'react-bootstrap/Pagination'
import { useDispatch, useSelector } from 'react-redux'
import { paginate } from './../redux/actions/actions'
import styled from 'styled-components'

const Paginations = () => {
  const StyledPagination = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;
    padding: 10px;
  `

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
    <StyledPagination>
      <Pagination>{items}</Pagination>
    </StyledPagination>
  )
}

export default Paginations
