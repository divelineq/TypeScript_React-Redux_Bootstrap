import React, { useEffect } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { showModal } from '../redux/actions/actions'
import { fetchSinglePost } from '../redux/actions/asyncAction'
import SinglePostModal from './SinglePostModal'
import { StyledSinglePostContainer } from './Styled'

export default function SinglePost() {
  const dispatch = useDispatch()
  const singlePost = useSelector((state: any) => state.singlePost)
  const handleShow = () => dispatch(showModal(true))
  const id = useParams()
  useEffect(() => {
    dispatch(fetchSinglePost(id.id))
  }, [])

  return (
    <StyledSinglePostContainer>
      <Link to='/posts'>
        <Button className='backButton'>Назад</Button>
      </Link>
      <Row>
        <Col>
          <Card border='primary'>
            <Card.Body>
              <Card.Title>Пост номер: {singlePost.id}</Card.Title>
              <Card.Text className='titleText'>{singlePost.title}</Card.Text>
              <Card.Text>{singlePost.body}</Card.Text>
              <Card.Text>Номер пользователя: {singlePost.userId}</Card.Text>
              <Button
                className='changeButton'
                onClick={handleShow}
                variant='primary'
              >
                Изменить
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Container>
        <SinglePostModal />
      </Container>
    </StyledSinglePostContainer>
  )
}
