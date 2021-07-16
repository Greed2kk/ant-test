import { Menu, Dropdown, Button } from 'antd'
import React from 'react'
import classes from './AuthButton.module.scss'

const menu = (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="/login"
      >
        Login
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="/logout"
      >
        Logout
      </a>
    </Menu.Item>
  </Menu>
)

const AuthButton = ({ status }) => (
  <Dropdown
    overlay={menu}
    placement="bottomRight"
    arrow
    className={classes.authButton}
  >
    <Button>{status}</Button>
  </Dropdown>
)

export default AuthButton
