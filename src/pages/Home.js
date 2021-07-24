import React from 'react'
import 'antd/dist/antd.css'
import { Layout } from 'antd'
import MyPagination from '../components/UI/Pagination/Pagination'

const { Content } = Layout

const Home = () => (
  <>
    <Content>Привет</Content>
    <MyPagination />
  </>
)

export default Home
