import React, { useState } from 'react'
import { Carousel } from 'react-bootstrap'
import './StartPage.module.css'
export default function StartPage() {
  const [index, setIndex] = useState(0)
  const handleSelect = (selectedIndex: any, e: any) => {
    setIndex(selectedIndex)
  }

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item style={{ height: '792px' }}>
        <img
          className='d-block w-100'
          src='https://mobimg.b-cdn.net/v3/fetch/53/53cbad6d18496d8e689ee4b170ec0712.jpeg'
          alt='First slide'
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: '792px' }}>
        <img
          className='d-block w-100'
          src='https://mobimg.b-cdn.net/v3/fetch/53/53cbad6d18496d8e689ee4b170ec0712.jpeg'
          alt='Second slide'
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: '792px' }}>
        <img
          className='d-block w-100'
          src='https://mobimg.b-cdn.net/v3/fetch/53/53cbad6d18496d8e689ee4b170ec0712.jpeg'
          alt='Third slide'
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}
