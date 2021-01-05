import React from 'react';

import IndexBanner from "../components/index/IndexBanner";
import IndexAnnouncement from "../components/index/IndexAnnouncement";
import IndexIntro from "../components/index/IndexIntro";
import IndexGrow from "../components/index/IndexGrow";
import IndexCommunityStar from "../components/index/IndexCommunityStar";
import IndexPopularSIG from "../components/index/IndexPopularSIG";
import IndexEvents from "../components/index/IndexEvents";
import IndexLearningMaterials from "../components/index/IndexLearningMaterials";
import Layout from "../components/Layout";

import i18n from 'src/data/home'
import SEO from "src/components/SEO";

import {useIntl} from "react-intl";

export default function Index() {
  const intl = useIntl()
  const locale = intl.locale
  const data = i18n[locale]
  return (
    <Layout>
      <SEO
        title="Home"
        description="description"
      />
      
      <IndexBanner data={data.banner} />
      {data.announcement.length > 0 && <IndexAnnouncement data={data.announcement}/>}
      <IndexIntro data={data.feature} />
      <IndexGrow data={data.grow} />
      <IndexCommunityStar data={data.star} />
      <IndexPopularSIG data={data.SIG} />
      <IndexEvents data={data.events} />
      <IndexLearningMaterials data={data.learningMaterials} />
      {/*<div className="shadow"/>*/}
    </Layout>
  )
}
