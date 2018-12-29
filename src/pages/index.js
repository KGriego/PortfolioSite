import React from "react";
import { Link } from "gatsby";
import { Grid, Header } from "semantic-ui-react";

import Layout from "../components/Layout";
import Image from "../components/Images/image";
import SEO from "../components/Seo";
import PortGrid from "../components/PortGrid";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <PortGrid />
  </Layout>
);

export default IndexPage;
