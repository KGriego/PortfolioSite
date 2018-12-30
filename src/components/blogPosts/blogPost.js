import React from "react";
import Img from "gatsby-image";
import { graphql } from "gatsby";
import { Grid, Header } from "semantic-ui-react";
import Layout from "../Layout";
import SEO from "../Seo";

const BlogPost = ({
  data: {
    markdownRemark: { frontmatter, html },
    site
  },
  location
}) => {
  const url = site.siteMetadata.siteUrl;
  const { title, description } = frontmatter;
  const thumbnail = frontmatter.image.childImageSharp.resize.src;
  return (
    <Layout>
      <SEO
        title={title}
        description={description}
        thumbnail={url + thumbnail}
        url={url}
        pathname={location.pathname}
      />
      <div
        style={{
          width: "86%",
          float: "right",
          height: "100%",
          overflow: "hidden",
          marginBottom: "100px"
        }}>
        <Header dividing textAlign="center" style={{ margin: 0, paddingTop: 25 }}>
          {title}
        </Header>
        <Grid style={{ margin: 0 }} centered>
          <Grid.Row>
            <Grid.Column computer="14" style={{ marginBottom: 30 }}>
              <Img fluid={frontmatter.image.childImageSharp.fluid} />
            </Grid.Column>
            <Grid.Column computer="14">
              <div dangerouslySetInnerHTML={{ __html: html }} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </Layout>
  );
};

export default BlogPost;

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
        image {
          childImageSharp {
            resize(width: 1500, height: 1500) {
              src
            }
            fluid(maxWidth: 786) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        siteURL
      }
    }
  }
`;
