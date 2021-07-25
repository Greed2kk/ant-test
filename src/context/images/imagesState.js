import React, { useReducer } from 'react'
import axios from '../../axios/axios-gallery'
import { ImagesContext } from './imagesContext'
import { imagesReducer } from './imagesReducer'
import {
  GET_ALL_PHOTOS,
  GET_PHOTOS,
  SET_LOADING,
} from '../types'

// const withCreds = url =>
//   `${url}client_id=${clientId}&client_secret=${clientSecret}`

const ImageState = ({ children }) => {
  const initialState = {
    data: {},
    loading: false,
    totalPhotos: {},
    totalItems: 0,
  }

  const [state, dispatch] = useReducer(
    imagesReducer,
    initialState
  )

  const { data, loading, totalItems } = state

  const setLoading = () => {
    dispatch({ type: SET_LOADING })
  }

  const getAllPhotos = async () => {
    try {
      setLoading()
      const response = await axios.get(`/media_objects`)
      dispatch({
        type: GET_ALL_PHOTOS,
        payload: response.data,
      })
      return response.data
    } catch (e) {
      console.warn(e)
      throw e
    }
  }

  const searchPhotos = async (
    page = 1,
    usersPerPage = 10
  ) => {
    try {
      setLoading()
      const response = await axios.get(
        `/media_objects?page=${page}&limit=${usersPerPage}`
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
        totalItems,
        searchPhotos,
        getAllPhotos,
        loading,
      }}
    >
      {children}
    </ImagesContext.Provider>
  )
}

export default ImageState
