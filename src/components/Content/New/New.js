import React, { useContext, useEffect } from 'react'
import { Content } from 'antd/es/layout/layout'
import { ImagesContext } from '../../../context/images/imagesContext'
import MyPagination from '../../UI/Pagination/Pagination'
import MyImage from '../../UI/Image/Image'
import { imageByName } from '../../../utils/imagePath'

const NewPage = () => {
  const { data, searchUsers } = useContext(ImagesContext)
  useEffect(() => {
    searchUsers()
  }, [])
  // eslint-disable-next-line no-debugger
  debugger
  return (
    <>
      <Content>
        {data &&
          Object.values(data).map((image, index) => (
            <MyImage
              key={index}
              image={imageByName(image.name)}
              height="248px"
              width="187px"
            />
          ))}
      </Content>
      <MyPagination />
    </>
  )
}

export default NewPage
