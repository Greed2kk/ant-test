import { Image } from 'antd'
import React from 'react'
import classes from './Logo.module.scss'

const Logo = ({ image }) => (
  <Image
    className={classes.logo}
    preview={false}
    src={image}
  />
)

export default Logo
