import React from 'react'
import PropTypes from 'prop-types'

export default class LoginOrRegisterPage extends React.PureComponent {
  loginDom = () => <div>登录！</div>
  registerDom = () => <div>注册！</div>

  render() {
    const { status } = this.props
    return status === 'login' ? this.loginDom() : this.registerDom()
  }
}
LoginOrRegisterPage.propTypes = {
  status: PropTypes.oneOf(['login', 'register']),
}
