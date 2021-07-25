import React from 'react'
import classes from './ImageContainer.module.scss'

const ImageContainer = ({ children }) => (
  <div className={classes.imageContainer}> {children} </div>
)
export default ImageContainer
