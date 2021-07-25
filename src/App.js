import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom'
import { Redirect, Route, Switch } from 'react-router'
import { Layout } from 'antd'
import classes from './App.module.scss'
import NewPage from './components/Content/New/New'
import PopularPage from './components/Content/Popular/Popular'
import Home from './pages/Home'
import UploadPage from './components/Content/Upload/Upload'
import MyHeader from './components/Header/Header'
import Logo from './components/UI/Logo/Logo'
import LogoImage from './images/Logo.svg'
import MyBreadcrumb from './components/UI/Breadcrumbs/Breadcrumbs'
import AuthButton from './components/Content/AuthButton/AuthButton'
import ImageState from './context/images/imagesState'
import MyPagination from './components/UI/Pagination/Pagination'
import MyFooter from './components/Footer/Footer'

const authed = false

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

function itemRender(route) {
  return <Link to={route.path}>{route.breadcrumbName}</Link>
}

function App() {
  return (
    <div className={classes.App}>
      <ImageState>
        <BrowserRouter>
          <MyHeader>
            <Logo image={LogoImage} />
            <MyBreadcrumb
              itemRender={itemRender}
              routes={routes}
            />
            <AuthButton status="Auth" />
          </MyHeader>
          <Layout
            style={{
              height: '94.5vh',
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              flexWrap: 'nowrap',
              alignItems: 'center',
            }}
          >
            <Switch>
              <Redirect exact from="/" to="/new" />
              <Route path="/new" component={NewPage} />
              <Route
                path="/popular"
                component={PopularPage}
              />
              <Route
                path="/upload"
                component={UploadPage}
              />
            </Switch>
          </Layout>
        </BrowserRouter>
      </ImageState>
    </div>
  )
}

export default App
