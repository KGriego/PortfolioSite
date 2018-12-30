import { Link } from "gatsby";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Menu, Icon } from "semantic-ui-react";
import "./header.css";

class Header extends Component {
  state = {
    hidden: false,
    WindowSize: window.innerWidth
  };
  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }
  componentWillUnmount() {
    window.addEventListener("resize", null);
  }
  handleMenuState = (e, { name }) => this.setState({ activeItem: name });
  openMenu = e => {
    e.preventDefault();
    this.setState({ hidden: !this.state.hidden });
  };
  handleResize = () => {
    this.setState({ WindowSize: window.innerWidth });
  };
  render() {
    const { activeItem, hidden, WindowSize } = this.state;
    const { siteTitle } = this.props;
    let menuClass;
    if (WindowSize <= 780) {
      menuClass = false;
    } else {
      menuClass = true;
    }
    return (
      <Menu
        inverted
        vertical={menuClass}
        stackable
        pointing
        className={menuClass ? "desktopMenu" : hidden ? "openMobileMenu" : "hiddenMobileMenu"}
        size="huge">
        <Link to="/" style={{ width: "100%" }}>
          <Menu.Item as="div" className="menuHeader" header>
            {siteTitle}{" "}
            <Icon
              name="bars"
              className={menuClass ? "hamburgerHide" : "hamburgerShow"}
              onClick={this.openMenu}
              fitted
            />
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
