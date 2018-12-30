import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import PortGrid from "../components/PortGrid";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <PortGrid />
  </Layout>
);

export default IndexPage;
