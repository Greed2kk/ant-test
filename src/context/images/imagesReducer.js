import { GET_PHOTOS, SET_LOADING } from '../types'

const handlers = {
  [GET_PHOTOS]: (state, { payload }) => {
    const asd = 12
    return {
      ...state,
      data: payload.data,
      loading: false,
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
