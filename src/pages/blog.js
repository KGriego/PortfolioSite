import React, { Component } from "react";
import { Link, graphql } from "gatsby";
import { Card, Grid, Header } from "semantic-ui-react";
import Layout from "../components/Layout";

class BlogPage extends Component {
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
    const {
      data: {
        allMarkdownRemark: { edges }
      }
    } = this.props;
    return (
      <Layout>
        <div className={menuClass ? "sizing" : ""}>
          <Header dividing textAlign="center" style={{ margin: 0, paddingTop: 25 }}>
            My Blog
          </Header>
          <Grid style={{ margin: 0 }} centered>
            {edges.map(
              (
                {
                  node: {
                    excerpt,
                    fields: { slug },
                    frontmatter: { title, date }
                  }
                },
                i
              ) => (
                <Grid.Row key={i}>
                  <Grid.Column computer="14">
                    <Link to={slug} className="link">
                      <Card fluid>
                        <Card.Content className="post-list">
                          <Card.Header>{title}</Card.Header>
                          <Card.Meta>{date}</Card.Meta>
                          <Card.Description>{excerpt}</Card.Description>
                        </Card.Content>
                      </Card>
                    </Link>
                  </Grid.Column>
                </Grid.Row>
              )
            )}
          </Grid>
        </div>
      </Layout>
    );
  }
}

export default BlogPage;

export const listQuery = graphql`
  query ListQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          fields {
            slug
          }
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM Do YYYY")
            title
          }
        }
      }
    }
  }
`;
