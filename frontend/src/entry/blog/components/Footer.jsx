import React from 'react'
import styled from 'styled-components'

const ReservedP = styled.p`
  line-height: 20px;
  color: #c5c6c8;
  font-size: 11px;
  text-align: center;
`
const FootLi = styled.li`
  display: inline-block;
  width: 110px;
  border-right: 1px solid #d9d9d9;
  line-height: 14px;
  height: 14px;
  zoom: 1;
`
const FootA = styled.a`
  color: #858585;
  font-size: 14px;
  &:hover {
    color: #f78200;
    text-decoration: underline;
  }
`

const Footer = () => (
  <div>
    <ul style={{ marginBottom: 15, textAlign: 'center' }}>
      <FootLi>
        <FootA href="http://www.sina.com">新浪微博</FootA>
      </FootLi>
      <FootLi>
        <FootA href="http://www.github.com">Github</FootA>
      </FootLi>
      <FootLi>
        <FootA href="http://www.jianshu.com">简书</FootA>
      </FootLi>
    </ul>
    <ReservedP>© 版权所有 2017 Geek720</ReservedP>
  </div>
)
export default Footer
