import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../static/vector/react.svg';
import { Container, Header, Intro, Logo } from './styled';

class Home extends Component {
  static async getInitialProps({ req, res, match, history, location, ...ctx }) {
    return { whatever: 'stuff' };
  }

  render() {
    return (
      <Container>
        <Header>
          <Logo src={logo} alt="logo" />
          <h2>Welcome to After.js</h2>
        </Header>
        <Intro>
          To get started, edit <code>src/Home.js</code> or{' '}
          <code>src/About.js</code>and save to reload.
        </Intro>
        <Link to="/about">About -></Link>
      </Container>
    );
  }
}

export default Home;
