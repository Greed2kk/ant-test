import React from 'react'
import 'antd/dist/antd.css'
import Layout from 'antd/es/layout/layout'
import classes from './Header.module.scss'

const { Header } = Layout
const MyHeader = ({ children }) => (
  <Header className={classes.header}>{children}</Header>
)

export default MyHeader
