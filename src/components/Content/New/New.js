import React, { useContext, useEffect } from 'react'
import { ImagesContext } from '../../../context/images/imagesContext'

const NewPage = () => {
  const { data, searchUsers } = useContext(ImagesContext)
  useEffect(() => {
    searchUsers()
    // eslint-disable-next-line no-console
    console.log(data)
  })
  return <h1>New</h1>
}

export default NewPage
