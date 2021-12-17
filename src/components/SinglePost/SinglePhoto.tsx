import React, { useEffect } from 'react'
import { Button, Card, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { fetchSinglePhoto } from '../redux/actions/asyncAction'
import SinglePostModal from './SinglePostModal'
import { StyledSinglePostContainer, CardContainer } from './Styled'
import { addComment, toggleLike } from '../redux/actions/actions'

export default function SinglePhoto() {
  const dispatch = useDispatch()
  const singlePost = useSelector((state: any) => state.singlePost)
  const like = useSelector((state: any) => state.like)
  const comment = useSelector((state: any) => state.comment)
  const id = useParams()
  let clazzName = like ? 'noLike' : 'like'
  const comments = () => {
    dispatch(addComment(prompt('Введите комментарий')))
  }
  const liked = () => {
    dispatch(toggleLike())
  }
  useEffect(() => {
    dispatch(fetchSinglePhoto(id.id))
  }, [])

  return (
    <StyledSinglePostContainer>
      <Link to='/'>
        <Button className='backButton'>Назад</Button>
      </Link>
      <CardContainer>
        <Card.Img variant='top' src={`${singlePost.url}`} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>{singlePost.title}</Card.Text>
          <Card.Text className='buttons'>
            <Button className={clazzName} onClick={liked}>
              &#9825;
            </Button>
            <Button onClick={comments} className='button' variant='primary'>
              Добавить комментарий
            </Button>
          </Card.Text>
        </Card.Body>
      </CardContainer>
      <Container className='comments'>
        <p>Комментарии:</p>
        {comment.map((com: any, index: any) => (
          <Container>
            <p>
              {index + 1}: {com}
            </p>
          </Container>
        ))}
      </Container>

      <Container>
        <SinglePostModal />
      </Container>
    </StyledSinglePostContainer>
  )
}
