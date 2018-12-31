import React, { Component } from "react";
import { Grid, Item, Divider, Icon } from "semantic-ui-react";
import Layout from "../components/Layout";
import Image from "../components/Images/image.js";
import SEO from "../components/Seo";

class about extends Component {
  state = {
    WindowSize: 0
  };
  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }
  componentWillUnmount() {
    window.addEventListener("resize", null);
  }
  handleResize = () => {
    this.setState({ WindowSize: window.innerWidth });
  };
  render() {
    const { WindowSize } = this.state;
    let menuClass;
    if (WindowSize <= 780) {
      menuClass = false;
    } else {
      menuClass = true;
    }
    return (
      <Layout>
        <SEO
          title="About Me"
          description="You can find out more about me!"
          keywords={[`gatsby`, `application`, `react`, `portfolio`]}
        />
        <div className={menuClass ? "sizing" : ""}>
          <Grid
            style={{
              margin: "50px 0px 100px"
            }}
            centered>
            <Grid.Row>
              <Grid.Column computer="4" tablet="10" style={{ marginBottom: 20 }}>
                <Image src={"../images/gatsby-astronaut.png"} />
              </Grid.Column>
              <Grid.Column computer="10" tablet="14">
                <Item>
                  <Item.Content>
                    <Item.Header as="h2">About Me</Item.Header>
                    <Divider />
                    <Item.Description style={{ marginBottom: 20 }}>
                      Nisi aliqua eu proident minim magna culpa labore exercitation id nulla
                      incididunt cillum do exercitation. Fugiat Lorem consequat ipsum non labore do
                      duis commodo et enim. Aute incididunt elit ad consequat enim commodo in dolore
                      tempor laboris minim tempor incididunt irure. Cupidatat ut non sunt aute
                      occaecat aute elit pariatur ea in. Excepteur ad veniam exercitation nulla esse
                      dolor incididunt irure nulla eiusmod duis laboris consequat mollit. More
                      Spacing In Between This And Bottom.
                    </Item.Description>
                    <Item.Extra style={{ marginBottom: 20 }}>
                      kev.gri98@gmail.com |{" "}
                      <a href="/#" target="_blank">
                        My Resume
                      </a>
                    </Item.Extra>
                    <Item.Extra>
                      <Icon name="linkedin" size="big" />
                      <Icon name="twitter" size="big" />
                    </Item.Extra>
                  </Item.Content>
                </Item>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </Layout>
    );
  }
}

export default about;
