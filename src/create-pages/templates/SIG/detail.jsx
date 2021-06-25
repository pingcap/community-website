import _ from 'lodash';
import React from 'react';
import { Row, Col } from 'antd';
import { graphql, Link, useStaticQuery } from 'gatsby';

import Banner from 'src/components/Banner/Banner';
import Button from 'src/components/Button';
import Container from 'src/components/Container/Container';
import GitHubUserItem from 'src/components/GithubUserItem/GitHubUserItem';
import Layout from 'src/components/Layout';
import SEO from 'src/components/SEO';
import Section from 'src/components/section/Section';
import styles from './detail.module.scss';
import { GithubOutlined, SlackOutlined } from '@ant-design/icons';

export default function Detail({ data, pageContext }) {
  const imageData = useStaticQuery(
    graphql`
      query {
        banner: file(relativePath: { eq: "banner-sig-detail@1x.png" }) {
          publicURL
        }
        slack: file(relativePath: { eq: "home/button-icon-slack.svg" }) {
          publicURL
        }
        sub: file(relativePath: { eq: "home/button-icon-sub.svg" }) {
          publicURL
        }
      }
    `
  );

  const { name, sig_url, channel, apiData, graphqlData } = pageContext;
  const summary = graphqlData.data.summary?.html || '';

  const learningMaterialsNode = summary ? (
    <div className={styles.markdown} dangerouslySetInnerHTML={{ __html: summary }} />
  ) : (
    <div className={styles.markdown}>There is no description of this special interest group.</div>
  );

  const memberNode = [];
  const { membership } = apiData;
  for (const membershipKey in membership) {
    const membershipValue = membership[membershipKey];
    memberNode.push(
      <div key={membershipKey} className={styles.member_section}>
        <h3 className={styles.member_section_title}>{membershipKey}</h3>
        <Row gutter={[0, 48]}>
          {membershipValue.map((item, idx) => (
            <Col key={idx} xs={24} sm={12} md={6} lg={6} xl={6}>
              <GitHubUserItem {...item} />
            </Col>
          ))}
        </Row>
      </div>
    );
  }

  let description = summary.replace(/<[^>]+>/g, '');
  if (description.length > 100) {
    description = description.substr(0, 100) + '...';
  }

  return (
    <Layout>
      <SEO title={`${name} - SIG`} description={description} />

      <Banner backgroundImage={imageData.banner.publicURL} className={styles.banner}>
        <h1 className={styles.banner_title}>Special Interest Group - {_.startCase(name)}</h1>
        <div className={styles.banner_action}>
          <Button
            className={styles.banner_action_github}
            icon={<GithubOutlined />}
            type="ghost"
            size="small"
            as={Link}
            href={sig_url}
          >
            GitHub Link
          </Button>
          <Button
            className={styles.banner_action_slack}
            icon={<SlackOutlined />}
            type="ghost"
            size="small"
            as={Link}
            href={channel}
          >
            Join Slack
          </Button>
        </div>
      </Banner>

      <div className={styles.wrapper}>
        <Container className={styles.container}>
          <div className={styles.learning_materials}>
            <Section name="">{learningMaterialsNode}</Section>
          </div>
          <div className={styles.members}>
            <Section name="Members">{memberNode}</Section>
          </div>
        </Container>
      </div>
    </Layout>
  );
}
