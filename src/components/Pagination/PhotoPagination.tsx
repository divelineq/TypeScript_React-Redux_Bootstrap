import React from 'react'
import Pagination from 'react-bootstrap/Pagination'
import { useDispatch, useSelector } from 'react-redux'
import { paginate } from '../redux/actions/actions'
import styled from 'styled-components'

const PhotoPaginations = () => {
  const StyledPagination = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;
    padding: 10px;
  `
  const dispatch = useDispatch()
  const photoPage = useSelector((state: any) => state.postPage)

  let items: Array<any> = []
  for (let number = 1; number <= 10; number++) {
    items.push(
      <Pagination.Item
        onClick={() => dispatch(paginate(number))}
        key={number}
        active={number == photoPage}
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

export default PhotoPaginations
