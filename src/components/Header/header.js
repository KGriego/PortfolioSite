import { Link } from "gatsby";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Menu, Icon } from "semantic-ui-react";
import "./header.css";

class Header extends Component {
  state = {
    hidden: false,
    WindowSize: 400
  };
  componentDidMount() {
    this.handleResize();
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
    let mobile;
    if (WindowSize <= 780) {
      mobile = false;
    } else {
      mobile = true;
    }
    return (
      <Menu
        inverted
        vertical={mobile}
        stackable
        pointing
        className={mobile ? "desktopMenu" : hidden ? "openMobileMenu" : "hiddenMobileMenu"}
        size="huge">
        <Link to="/" style={{ width: "100%" }}>
          <Menu.Item as="div" className="menuHeader" header>
            {siteTitle}{" "}
            <Icon
              name="bars"
              className={mobile ? "hamburgerHide" : "hamburgerShow"}
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
