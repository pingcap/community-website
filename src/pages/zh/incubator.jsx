import SEO from 'src/components/SEO';
import React from 'react';
import Layout from 'src/components/Layout';
import styles from '../incubator.module.scss';
import Banner from 'src/components/Banner/Banner';
import { graphql, useStaticQuery } from 'gatsby';
import Container from 'src/components/Container/Container';

export default function Incubator() {
  const imageData = useStaticQuery(
    graphql`
      query {
        banner: file(relativePath: { eq: "banner-sig-detail@1x.png" }) {
          publicURL
        }
        summary: markdownRemark(fileAbsolutePath: { regex: "//zh/TiDBIncubatorProgram.md$/" }) {
          html
        }
      }
    `
  );
  return (
    <Layout>
      <SEO
        title="孵化器"
        description="TiDB 孵化器项目是为了确保 TiDB 生态中的最新项目在社区的资源支持和帮助下，快速成长，达到有实际应用场景的成熟阶段。"
      />

      <Banner backgroundImage={imageData.banner.publicURL}>
        <h1 className={styles.title}>TiDB 孵化器项目</h1>
      </Banner>

      <div className={styles.wrapper}>
        <Container className={styles.container}>
          <div className={styles.markdown} dangerouslySetInnerHTML={{ __html: imageData.summary.html }} />
        </Container>
      </div>
    </Layout>
  );
}
