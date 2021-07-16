import React from 'react'
import 'antd/dist/antd.css'
import Layout from 'antd/es/layout/layout'
import classes from './Footer.module.scss'

const { Footer } = Layout
const MyFooter = ({ children }) => (
  <Footer className={classes.footer}>{children}</Footer>
)

export default MyFooter
