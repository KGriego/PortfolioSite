import React, { Component } from "react";
import { Link } from "gatsby";
import { Grid, Item, Divider, Icon } from "semantic-ui-react";
import Layout from "../components/Layout";
import Image from "../components/Images/image.js";
import SEO from "../components/Seo";

class about extends Component {
  render() {
    return (
      <Layout>
        <SEO
          title="About Me"
          description="You can find out more about me!"
          keywords={[`gatsby`, `application`, `react`, `portfolio`]}
        />
        <Grid
          style={{
            margin: "50px 0px 0px",
            width: "86%",
            float: "right"
          }}>
          <Grid.Row>
            <Grid.Column computer="4">
              <Image src={"../images/gatsby-astronaut.png"} />
            </Grid.Column>
            <Grid.Column computer="10">
              <Item>
                <Item.Content>
                  <Item.Header as="h2">About Me</Item.Header>
                  <Divider />
                  <Item.Description>
                    Nisi aliqua eu proident minim magna culpa labore exercitation id nulla
                    incididunt cillum do exercitation. Fugiat Lorem consequat ipsum non labore do
                    duis commodo et enim. Aute incididunt elit ad consequat enim commodo in dolore
                    tempor laboris minim tempor incididunt irure. Cupidatat ut non sunt aute
                    occaecat aute elit pariatur ea in. Excepteur ad veniam exercitation nulla esse
                    dolor incididunt irure nulla eiusmod duis laboris consequat mollit. More Spacing
                    In Between This And Bottom.
                  </Item.Description>
                  <Item.Extra>
                    kev.gri98@gmail.com |{" "}
                    <a href="#" target="_blank">
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
      </Layout>
    );
  }
}

export default about;
