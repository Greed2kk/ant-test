import React from 'react'
import 'antd/dist/antd.css'
import { Layout } from 'antd'
import { Link, BrowserRouter } from 'react-router-dom'
import MyBreadcrumb from '../components/UI/Breadcrumbs/Breadcrumbs'
import LogoImage from '../images/Logo.svg'

import MyHeader from '../components/Header/Header'
import Logo from '../components/UI/Logo/Logo'

const { Footer, Content } = Layout

const routes = [
  {
    path: '/new',
    breadcrumbName: 'New',
  },
  {
    path: '/popular',
    breadcrumbName: 'Popular',
  },
]

function itemRender(route, params, routes, paths) {
  return (
    <Link to={paths.join('/')}>{route.breadcrumbName}</Link>
  )
}

const Home = () => (
  <>
    <Layout
      style={{
        height: '100vh',
        width: '100%',
      }}
    >
      <MyHeader>
        <Logo image={LogoImage} />
        <BrowserRouter>
          {' '}
          <MyBreadcrumb
            itemRender={itemRender}
            routes={routes}
          />
        </BrowserRouter>
      </MyHeader>
      <Content>Привет</Content>
      <Footer>Footer</Footer>
    </Layout>
  </>
)

export default Home
