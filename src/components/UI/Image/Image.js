import { Image } from 'antd'
import React from 'react'
import classes from './Image.module.scss'

const MyImage = ({
  image,
  height,
  width,
  preview,
  style,
}) => (
  <div className={classes.image}>
    <Image
      preview={preview}
      src={image}
      height={height}
      width={width}
      style={style}
    />
  </div>
)

export default MyImage
