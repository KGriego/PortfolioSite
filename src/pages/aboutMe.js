import React, { Component } from "react";
import { Grid, Item, Divider, Icon, Accordion, List } from "semantic-ui-react";
import Layout from "../components/Layout";
import SEO from "../components/Seo";

class about extends Component {
  state = {
    WindowSize: 0,
    activeIndex: 0
  };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;
    this.setState({ activeIndex: newIndex });
  };
  componentDidMount() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  }
  componentWillUnmount() {
    window.addEventListener("resize", null);
  }
  handleResize = () => {
    this.setState({ WindowSize: window.innerWidth });
  };
  render() {
    const { WindowSize, activeIndex } = this.state;
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
              <Grid.Column computer="12">
                <Item>
                  <Item.Content>
                    <Item.Header as="h2">About Me</Item.Header>
                    <Divider />
                    <Item.Description style={{ marginBottom: 20 }}>
                      My name is Kevin A. Griego. I am a Full Stack Web Developer who recently
                      graduated from UofA Coding Bootcamp, September 2018. I always had a curiosity
                      for coding. In high school, I took one semester of learning Python. Although I
                      learned, I never continued learning as I was a terrible student. I joined the
                      UofA bootcamp not knowing what I was getting myself into. And I found a
                      passion for development. I enjoy being able to give the guest of a website an
                      amazing experience. I have learned that not only frontend is exciting, but
                      backend as well. One thing I have learned is that always seperate everything
                      out. Because if you can, you can redesign the implmentation however many
                      times, while the overlying concept is still the same. And that can also go for
                      frontend. I hope you have enjoyed the visit to my portfolio and this little
                      excerpt about me.
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
                      <Icon name="github" size="big" />
                    </Item.Extra>
                  </Item.Content>
                </Item>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column computer="12">
                <Accordion styled fluid>
                  <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
                    <Icon name="dropdown" />
                    Frontend
                  </Accordion.Title>
                  <Accordion.Content active={activeIndex === 0}>
                    <List>
                      <List.Item>
                        <List.Icon name="html5" size="big" />
                        <List.Content>HTML/CSS</List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Icon name="js" size="big" />
                        <List.Content>Javascript</List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Icon name="react" size="big" />
                        <List.Content>ReactJS</List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Content>JQuery</List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Icon name="mobile alternate" size="big" />
                        <List.Content>Responsive/Mobile Design</List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Icon name="sitemap" size="big" />
                        <List.Content>
                          BootStrap/MaterialUI/SemanticUI/MaterializeCSS/etc.
                        </List.Content>
                      </List.Item>
                    </List>
                  </Accordion.Content>
                  <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
                    <Icon name="dropdown" />
                    Backend
                  </Accordion.Title>
                  <Accordion.Content active={activeIndex === 1}>
                    <List>
                      <List.Item>
                        <List.Icon name="node js" size="big" />
                        <List.Content>Node.JS</List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Icon name="database" size="big" />
                        <List.Content>Database Scheming</List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Icon name="user secret" size="big" />
                        <List.Content>User Authentication</List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Content>ExpressJS</List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Content>SQL/NoSQL</List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Content>Restful APIS</List.Content>
                      </List.Item>
                    </List>
                  </Accordion.Content>
                  <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleClick}>
                    <Icon name="dropdown" />
                    Unix
                  </Accordion.Title>
                  <Accordion.Content active={activeIndex === 2}>
                    <List>
                      <List.Item>
                        <List.Icon name="linux" size="big" />
                        <List.Content>Unix OS</List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Icon name="terminal" size="big" />
                        <List.Content>Command Line</List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Icon name="terminal" size="big" />
                        <List.Content>Basic Shell Scripts</List.Content>
                      </List.Item>
                    </List>
                  </Accordion.Content>
                  <Accordion.Title active={activeIndex === 3} index={3} onClick={this.handleClick}>
                    <Icon name="dropdown" />
                    Programming
                  </Accordion.Title>
                  <Accordion.Content active={activeIndex === 3}>
                    <List>
                      <List.Item>
                        <List.Icon name="code" size="big" />
                        <List.Content>Clean Code</List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Icon name="bug" size="big" />
                        <List.Content>Basic Testing</List.Content>
                      </List.Item>
                    </List>
                  </Accordion.Content>
                  <Accordion.Title active={activeIndex === 4} index={4} onClick={this.handleClick}>
                    <Icon name="dropdown" />
                    Misc
                  </Accordion.Title>
                  <Accordion.Content active={activeIndex === 4}>
                    <List>
                      <List.Item>
                        <List.Icon name="git" size="big" />
                        <List.Content>Git</List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Content>Continous Integration</List.Content>
                      </List.Item>
                    </List>
                  </Accordion.Content>
                </Accordion>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </Layout>
    );
  }
}

export default about;
