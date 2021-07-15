import { Pagination } from 'antd'
import React from 'react'
import classes from './Pagination.module.scss'

const myPagination = () => (
  <Pagination
    className={classes.pagination}
    defaultCurrent={6}
    total={500}
    showSizeChanger={false}
  />
)

export default myPagination
