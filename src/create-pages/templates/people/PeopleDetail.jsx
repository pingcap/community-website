import React from 'react';
import _ from 'lodash';
import { Col, Row } from 'antd';
import { graphql, useStaticQuery } from 'gatsby';

import Banner from 'src/components/Banner/Banner';
import Container from 'src/components/Container/Container';
import GitHubUserItem from 'src/components/GithubUserItem/GitHubUserItem';
import Layout from 'src/components/Layout';
import SEO from 'src/components/SEO';
import Section from 'src/components/section/Section';
import styles from './PeopleDetail.module.scss';

export default function PeopleDetail({ data, pageContext }) {
  const imageData = useStaticQuery(
    graphql`
      query {
        banner: file(relativePath: { eq: "home/banner.svg" }) {
          publicURL
        }
      }
    `
  );

  const { members, type, graphqlData } = pageContext;
  const summary = graphqlData.data.summary?.html || '';

  const summaryNode = summary ? (
    <div className={styles.markdown} dangerouslySetInnerHTML={{ __html: summary }} />
  ) : (
    <div className={styles.markdown}>There is no description of this people type.</div>
  );

  let description = summary.replace(/<[^>]+>/g, '');
  if (description.length > 100) {
    description = description.substr(0, 100) + '...';
  }

  return (
    <Layout>
      <SEO title={_.startCase(type)} description={description} />
      <Banner backgroundImage={imageData.banner.publicURL} className={styles.banner}>
        <h1 className={styles.banner_title}>{_.startCase(type)}</h1>
      </Banner>
      <div className={styles.wrapper}>
        <Container className={styles.container}>
          <div className={styles.summary}>{summaryNode}</div>
          <div className={styles.list}>
            <Section name={`All ${_.startCase(type)}s`}>
              <Row gutter={[48, 48]} className={styles.items}>
                {members.map((item, idx) => (
                  <Col key={idx} xs={24} sm={12} md={6}>
                    <GitHubUserItem {...item} />
                  </Col>
                ))}
              </Row>
            </Section>
          </div>
        </Container>
      </div>
    </Layout>
  );
}
