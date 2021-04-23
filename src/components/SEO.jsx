import Helmet from 'react-helmet';
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

export default function SEO({ lang, title, description, meta, image: metaImage, link }) {
  const { site, defaultMetaImg } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
        defaultMetaImg: file(relativePath: { eq: "TiDB-logo-red.svg" }) {
          publicURL
        }
      }
    `
  );

  meta = meta ?? [];
  const metaDescription = description || site.siteMetadata.description;
  const image = metaImage ? `https://download.pingcap.com${metaImage}` : defaultMetaImg.publicURL;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:image',
          content: image,
        },
        {
          property: 'og:image:width',
          content: '1200',
        },
        {
          property: 'og:image:height',
          content: '400',
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'twitter:creator',
          content: site.siteMetadata.author,
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
      ].concat(meta)}
      link={link}
    >
      {/* https://fonts.google.com/specimen/Titillium+Web */}
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap"
      />
    </Helmet>
  );
}
