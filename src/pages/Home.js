import React from 'react'
import 'antd/dist/antd.css'
import { Layout } from 'antd'
import MyPagination from '../components/UI/Pagination/Pagination'
import MyFooter from '../components/Footer/Footer'

const { Content } = Layout

const Home = () => (
  <>
    <Layout
      style={{
        height: '100vh',
        width: '100%',
      }}
    >
      <Content>Привет</Content>
      <MyFooter>
        <MyPagination />
      </MyFooter>
    </Layout>
  </>
)

export default Home
