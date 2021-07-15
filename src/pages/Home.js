import React from 'react'
import 'antd/dist/antd.css'
import { Layout } from 'antd'
import { Link } from 'react-router-dom'
import MyBreadcrumb from '../components/UI/Breadcrumbs/Breadcrumbs'
import LogoImage from '../images/Logo.svg'

import MyHeader from '../components/Header/Header'
import Logo from '../components/UI/Logo/Logo'

const { Footer, Content } = Layout

const authed = true

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

if (authed) {
  routes.push({
    path: '/upload',
    breadcrumbName: 'Upload',
  })
}

function itemRender(route, params, routes, paths) {
  return <Link to={route.path}>{route.breadcrumbName}</Link>
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
        <MyBreadcrumb
          itemRender={itemRender}
          routes={routes}
        />
      </MyHeader>
      <Content>Привет</Content>
      <Footer>Footer</Footer>
    </Layout>
  </>
)

export default Home
