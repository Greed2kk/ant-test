import React from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router'
import NewPage from './components/Content/New/New'
import PopularPage from './components/Content/Popular/Popular'
import Home from './pages/Home'
import UploadPage from './components/Content/Upload/Upload'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
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
