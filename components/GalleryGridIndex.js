import React, { useState, useCallback } from 'react'
import Gallery from 'react-photo-gallery'
import Carousel, { Modal, ModalGateway } from 'react-images'

export default function GalleryGridIndex({ post }) {
  const photos = post.map(p => (
    {
      title: p.fields.title,
      src: p.fields.image[0].url,
      alt: p.fields.title,
      // alternatively one could grab height and width from post data
      width: 1,
      height: 1,
      key: p.sys.id
    }
  ))
  // console.log(post)
  
  const [currentImage, setCurrentImage] = useState(0)
  const [viewerIsOpen, setViewerIsOpen] = useState(false)
  
  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index)
    setViewerIsOpen(true)
  }, [])
  
  const closeLightbox = () => {
    setCurrentImage(0)
    setViewerIsOpen(false)
  }

  return (
    <>
      <Gallery photos={ photos } direction={ 'column' } margin={ 0 } onClick={ openLightbox } />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={ closeLightbox }>
            <Carousel
              currentIndex={ currentImage }
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </>
  )
}