import React from 'react'
import classes from './Loader.module.scss'
import { ReactComponent as Loader } from '../../../images/Loader.svg'

const DataLoader = () => (
  <div className={classes.loader}>
    <Loader />
  </div>
)

export default DataLoader
