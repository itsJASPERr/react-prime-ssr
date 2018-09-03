import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'common/Button';
import { Container, Header, Logo } from './styled';

class Home extends Component {
  // - These parameters are given to the method and shown as example
  // eslint-disable-next-line no-unused-vars
  static async getInitialProps({ req, res, match, history, location, ...ctx }) {
    return { whatever: 'stuff' };
  }

  render() {
    return (
      <Container>
        <Header>
          <Logo />
          <h2>Welcome to React Prime SSR</h2>
        </Header>
        <Link to="/about">About</Link>
        <div>
          <Button>Install</Button>
        </div>
      </Container>
    );
  }
}

export default Home;
