import { Link } from "gatsby";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Menu } from "semantic-ui-react";

class Header extends Component {
  state = {};

  handleMenuState = (e, { name }) => this.setState({ activeItem: name });
  render() {
    const { activeItem } = this.state;
    const { siteTitle } = this.props;
    return (
      <Menu
        inverted
        vertical
        pointing
        style={{ borderRadius: "0%", width: "14%", height: "100%", position: "fixed" }}
        size="huge">
        <Link to="/">
          <Menu.Item as="div" header>
            {siteTitle}
          </Menu.Item>
        </Link>
        <Link to="/">
          <Menu.Item
            as="div"
            name="portfolio"
            active={activeItem === "portfolio"}
            onClick={this.handleMenuState}
          />
        </Link>
        <Link to="/blog">
          <Menu.Item
            as="div"
            name="blog"
            active={activeItem === "blog"}
            onClick={this.handleMenuState}
          />
        </Link>
        <Link to="/aboutMe">
          <Menu.Item
            as="div"
            name="aboutMe"
            active={activeItem === "aboutMe"}
            onClick={this.handleMenuState}
          />
        </Link>
        <Link to="/contact">
          <Menu.Item
            as="div"
            name="contactMe"
            active={activeItem === "contactMe"}
            onClick={this.handleMenuState}
          />
        </Link>
      </Menu>
    );
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
