import React from 'react';

import IndexBanner from "src/components/index/IndexBanner";
import IndexAnnouncement from "src/components/index/IndexAnnouncement";
import IndexIntro from "src/components/index/IndexIntro";
import IndexGrow from "src/components/index/IndexGrow";
import IndexCommunityStar from "src/components/index/IndexCommunityStar";
import IndexPopularSIG from "src/components/index/IndexPopularSIG";
import IndexEvents from "src/components/index/IndexEvents";
import IndexLearningMaterials from "src/components/index/IndexLearningMaterials";
import Layout from "src/components/Layout";

import i18n from 'src/data/home'
import SEO from "src/components/SEO";

import {useIntl} from "react-intl";

export default function Index({pageContext}) {
  const {sigTop, itemsCommunityStar} = pageContext
  
  const intl = useIntl()
  const locale = intl.locale
  const data = i18n[locale]
  
  data.SIG.items = sigTop
  data.star.items = itemsCommunityStar
  
  return (
    <Layout>
      <SEO
        title="Home"
        description="The TiDB Community Organization brings together development enthusiasts interested in TiDB and surrounding open source software to explore the future of distributed databases using TiDB as a hands-on project."
      />
      
      <IndexBanner data={data.banner} />
      {data.announcement.length > 0 && <IndexAnnouncement data={data.announcement}/>}
      <IndexIntro data={data.feature} />
      <IndexGrow data={data.grow} />
      <IndexCommunityStar data={data.star} />
      <IndexPopularSIG data={data.SIG} />
      <IndexEvents data={data.events} />
      <IndexLearningMaterials data={data.learningMaterials} />
    </Layout>
  )
}
