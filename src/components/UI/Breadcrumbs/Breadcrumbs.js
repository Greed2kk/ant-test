import { Breadcrumb } from 'antd'
import React from 'react'
import classes from './Breadcrumps.module.scss'

const MyBreadcrumbs = ({ itemRender, routes }) => (
  <Breadcrumb
    className={classes.breadcrumbs}
    itemRender={itemRender}
    routes={routes}
    separator=" "
  />
)

export default MyBreadcrumbs
