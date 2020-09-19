import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import './Header.scss';

Header.propTypes = {};

function Header() {
  return (
    <header className="header">
      <Container>
        <Row className="justify-content-between">
          <Col xs="auto">
            <a
              className="header__link header__title"
              href="https://youtube.com/easyfrontend"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hello Word
            </a>
          </Col>

          <Col xs="auto">
            <Link
              exact
              className="header__link"
              to="/hihi/test"
              activeClassName="header__link--active"
            >
              tét
            </Link>
            <br />

          </Col>
        </Row>
        {/* <Link to="hihi/test3" >hejahsd</Link> */}
        <Link
          exact
          className="header__link"
          to="/hihi/test2"
          activeClassName="header__link--active"
        >
          test2
            </Link>
        <Link to="/hihi/test3">test3</Link>
      </Container>
    </header>
  );
}

export default Header;