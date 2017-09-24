import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import WelcomePage from '../containers/WelcomePage'
import LoginOrRegisterPage from '../containers/LoginOrRegisterPage'

const DadDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  background: url('../../../../resource/image/banner.jpg') no-repeat 0px 0px;
`

const HeaderDiv = styled.div``
const ContentDiv = styled.div`flex: 1;`
const FooterDiv = styled.div``

class BlogApp extends React.PureComponent {
  render() {
    return (
      <Router>
        <DadDiv>
          <HeaderDiv>
            <Header />
          </HeaderDiv>
          <ContentDiv>
            <Switch>
              <Route exact path="/apps/gsite" render={() => <WelcomePage />} />
              <Route
                exact
                path="/apps/gsite/login"
                render={() => <LoginOrRegisterPage status="login" />}
              />
            </Switch>
          </ContentDiv>
          <FooterDiv>
            <Footer />
          </FooterDiv>
        </DadDiv>
      </Router>
    )
  }
}

export default BlogApp
