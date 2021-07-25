import React, {
  useContext,
  useEffect,
  useState,
} from 'react'
import { Content } from 'antd/es/layout/layout'
import { ImagesContext } from '../../../context/images/imagesContext'
import MyPagination from '../../UI/Pagination/Pagination'
import MyImage from '../../UI/Image/Image'
import { imageByName } from '../../../utils/imagePath'
import ImageContainer from '../../UI/imageContainer/ImageContainer'
import DataLoader from '../../UI/Loader/Loader'
import MyFooter from '../../Footer/Footer'

const NewPage = () => {
  const [page, setPage] = useState(1)
  const { data, searchPhotos, loading, totalItems } =
    useContext(ImagesContext)
  const itemsOnPage = 21
  useEffect(() => {
    searchPhotos(page, itemsOnPage)
  }, [page])

  function onChange(pageNumber) {
    setPage(pageNumber)
  }

  return (
    <>
      <Content
        style={{
          margin: '24px 16px 0',
          overflow: 'initial',
        }}
      >
        {loading ? (
          <DataLoader />
        ) : (
          <ImageContainer>
            {data &&
              Object.values(data).map((image, index) => (
                <MyImage
                  key={index}
                  image={imageByName(image.name)}
                  height="187px"
                  width="248px"
                  style={{ borderRadius: '6px' }}
                  preview={false}
                />
              ))}
          </ImageContainer>
        )}
      </Content>
      <MyFooter>
        <MyPagination
          total={totalItems}
          onChange={onChange}
          current={page}
          pageSize={itemsOnPage}
        />
      </MyFooter>
    </>
  )
}

export default NewPage
