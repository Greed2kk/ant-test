import {
  GET_ALL_PHOTOS,
  GET_PHOTOS,
  SET_LOADING,
} from '../types'

const handlers = {
  [GET_PHOTOS]: (state, { payload }) => {
    const asd = 12
    return {
      ...state,
      data: payload.data,
      loading: false,
      totalItems: payload.totalItems,
    }
  },
  [GET_ALL_PHOTOS]: (state, { payload }) => {
    const aasd = 13
    return {
      ...state,
      totalPhotos: payload.data,
    }
  },
  [SET_LOADING]: state => ({
    ...state,
    loading: true,
  }),
  DEFAULT: state => state,
}

export const imagesReducer = (state, action) => {
  const handler = handlers[action.type || handlers.default]
  return handler(state, action)
}
