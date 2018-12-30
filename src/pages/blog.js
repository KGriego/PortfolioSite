import React from "react";
import { Link, graphql } from "gatsby";
import { Card, Grid, Header } from "semantic-ui-react";
import Layout from "../components/Layout";

const BlogPage = ({
  data: {
    allMarkdownRemark: { edges }
  }
}) => {
  return (
    <Layout>
      <div
        style={{
          width: "86%",
          float: "right",
          height: "100%",
          overflow: "hidden",
          marginBottom: "100px"
        }}>
        <Header dividing textAlign="center" style={{ margin: 0, paddingTop: 25 }}>
          My Blog
        </Header>
        <Grid style={{ margin: 0 }} centered>
          {edges.map(({ node: { excerpt, fields: { slug }, frontmatter: { title, date } } }, i) => (
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
          ))}
        </Grid>
      </div>
    </Layout>
  );
};

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
