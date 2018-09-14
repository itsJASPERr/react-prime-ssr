import React, { Component } from 'react';
import PT from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { install } from 'ducks/demo';
import Button from 'common/Button';
import { Container, Header, Logo } from './styled';

class Home extends Component {
  // - These parameters are given to the method by default
  // eslint-disable-next-line no-unused-vars
  static async getInitialProps({ req, res, match, history, location, ...ctx }) {
    return { whatever: 'stuff' };
  }

  render() {
    const { demo } = this.props;

    return (
      <Container>
        <Header>
          <Logo />
          <h2>Welcome to React Prime SSR</h2>
        </Header>
        <Link to="/about">About</Link>
        <div>
          {demo.passed ? (
            <h1>Installed succesfully!</h1>
          ) : (
            <Button onClick={this.props.install}>
              {demo.loading ? 'Installing...' : 'Install'}
            </Button>
          )}
        </div>
      </Container>
    );
  }
}

Home.propTypes = {
  install: PT.func,
  demo: PT.shape({
    install: PT.func,
  }),
};

const mapStateToProps = state => ({
  demo: state.demo,
});

export default connect(mapStateToProps, { install })(Home);
