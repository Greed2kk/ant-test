import { Pagination } from 'antd'
import React from 'react'
import classes from './Pagination.module.scss'

const myPagination = ({
  total,
  onChange,
  current = 1,
  pageSize = 10,
}) => (
  <Pagination
    className={classes.pagination}
    current={current}
    defaultCurrent={1}
    total={total}
    showSizeChanger={false}
    pageSize={pageSize}
    onChange={onChange}
  />
)

export default myPagination
