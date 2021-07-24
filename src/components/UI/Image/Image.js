import { Image } from 'antd'
import React from 'react'
import classes from './Image.module.scss'

const MyImage = ({ image, height, width }) => (
  <Image
    className={classes.image}
    preview={false}
    src={image}
    height={height}
    width={width}
  />
)

export default MyImage
