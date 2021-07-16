import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom'
import { Route, Switch } from 'react-router'
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
      <BrowserRouter>
        <MyHeader>
          <Logo image={LogoImage} />
          <MyBreadcrumb
            itemRender={itemRender}
            routes={routes}
          />
          <AuthButton status="Auth" />
        </MyHeader>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/new" component={NewPage} />
          <Route path="/popular" component={PopularPage} />
          <Route path="/upload" component={UploadPage} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
