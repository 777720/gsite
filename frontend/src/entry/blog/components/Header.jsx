import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

// const HeaderDiv = styled.div`
//   height: 49px;
//   background-color: #000000;
//   min-width: 980px;
// `
const ContentHeader = styled.div`
  width: 1240px;
  margin: 0 auto;
  position: relative;
`
const LeftDiv = styled.div`text-align: right;`
const YellowA = styled.button`
  margin-left: 5px;
  color: #ffe484;
  border-color: #ffe484;
  background-color: transparent;
  &: hover {
    background-color: #ffe484;
    color: black;
  }
`

export default class Header extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      user: props.user,
    }
  }
  waitLoginDom = () => (
    <div>
      <Link to={'/apps/gsite/login'}>
        <YellowA className="btn" href="#">
          登录
        </YellowA>
      </Link>
      <YellowA className="btn" href="#">
        注册
      </YellowA>
    </div>
  )
  loginDom = () => (
    <div>
      <YellowA className="btn" href="#">
        我的
      </YellowA>
    </div>
  )
  render() {
    const { user } = this.props
    return (
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="http://www.baidu.com">
          Navbar
        </a>
        <ContentHeader>
          <LeftDiv>{user ? this.loginDom() : this.waitLoginDom()}</LeftDiv>
        </ContentHeader>
      </nav>
    )
  }
}
Header.defaultProps = {
  user: null,
}
Header.propTypes = {
  user: PropTypes.objectOf(PropTypes.any),
}
