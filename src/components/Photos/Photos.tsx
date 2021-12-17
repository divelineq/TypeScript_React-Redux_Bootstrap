import React, { useEffect } from 'react'
import { Button, Card, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPhoto } from '../redux/actions/asyncAction'
import styled from 'styled-components'
import PhotoPaginations from '../Pagination/PhotoPagination'
import { NavLink } from 'react-router-dom'
import { addIdPhoto } from '../redux/actions/actions'

export default function Photos() {
  const PhotoContainer = styled(Container)`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 20px;
    margin: 10px;
    padding: 10px;
  `
  const CardContainer = styled(Card)`
    width: 300px;
    .card-img-top {
      height: 250px;
    }
  `
  const dispatch = useDispatch()
  const photo = useSelector((state: any) => state.photo)
  const photoPage = useSelector((state: any) => state.postPage) // 1
  const photoPerPage = useSelector((state: any) => state.postPerPage) // 10
  const lastPhotoIndex = photoPage * photoPerPage
  const firstPhotoIndex = lastPhotoIndex - photoPerPage
  const currentPhoto = photo.slice(firstPhotoIndex, lastPhotoIndex)

  useEffect(() => {
    dispatch(fetchPhoto())
  }, [])

  return (
    <>
      <PhotoContainer>
        {currentPhoto.map((photo: any) => (
          <CardContainer>
            <Card.Img variant='top' src={`${photo.url}`} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>{photo.title}</Card.Text>
              <NavLink
                onClick={() => dispatch(addIdPhoto(photo.id))}
                to={`/singlePhoto/${photo.id}`}
              >
                <Button className='buttonPhoto' variant='primary'>
                  Посмотреть
                </Button>
              </NavLink>
            </Card.Body>
          </CardContainer>
        ))}
      </PhotoContainer>
      <Container>
        <PhotoPaginations />
      </Container>
    </>
  )
}
