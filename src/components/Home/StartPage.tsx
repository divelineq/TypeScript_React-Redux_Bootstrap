import React, { useState } from 'react'
import { Carousel } from 'react-bootstrap'
export default function StartPage() {
  const [index, setIndex] = useState(0)
  const handleSelect = (selectedIndex: any, e: any) => {
    setIndex(selectedIndex)
  }

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item interval={3000} style={{ height: '792px' }}>
        <img
          className='d-block w-100'
          src='https://img2.goodfon.ru/original/1920x1080/6/a4/peyzazh-zarevo-ozero-mostik.jpg'
          alt='First slide'
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000} style={{ height: '792px' }}>
        <img
          className='d-block w-100'
          src='https://images.wallpaperscraft.ru/image/single/more_zakat_gorizont_nebo_119443_1920x1080.jpg'
          alt='Second slide'
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000} style={{ height: '792px' }}>
        <img
          className='d-block w-100'
          src='https://wallpapers777.com/wallpapers/big/background_zakat_reka_oblaka_1171271_pic_image_wallpaper_big_1920x1080.jpg'
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
