import React, { useReducer } from 'react'
import axios from '../../axios/axios-gallery'
import { ImagesContext } from './imagesContext'
import { imagesReducer } from './imagesReducer'
import { GET_PHOTOS, SET_LOADING } from '../types'

// const withCreds = url =>
//   `${url}client_id=${clientId}&client_secret=${clientSecret}`

const ImageState = ({ children }) => {
  const initialState = {
    data: {},
    loading: false,
  }

  const [state, dispatch] = useReducer(
    imagesReducer,
    initialState
  )

  const { data } = state

  // const setLoading = () => {
  //   dispatch({ type: SET_LOADING })
  // }

  const searchUsers = async (
    usersPerPage = 5,
    page = 1
  ) => {
    try {
      // setLoading()
      const response = await axios.get(
        `/media_objects?page=${page}&limit=${usersPerPage}`,
        {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        }
      )
      dispatch({
        type: GET_PHOTOS,
        payload: response.data,
      })
      return response.data
    } catch (e) {
      console.warn(e)
      throw e
    }
  }

  return (
    <ImagesContext.Provider
      value={{
        data,
        searchUsers,
      }}
    >
      {children}
    </ImagesContext.Provider>
  )
}

export default ImageState
