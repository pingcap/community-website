import React from 'react'
import styles from './Footer.module.scss'
import Socials from '../socials/Socials'
import i18n from '../../data/footer'
import MyLink from 'src/components/MyLink'
import { useIntl } from 'react-intl'
import Container from "src/components/Container/Container";
import {Select} from "antd";
import langConfig from 'lang.config.js'
import {navigate} from "gatsby";
import helper from "src/helper";


export default function Footer() {
  
  const intl = useIntl()
  const locale = intl.locale
  
  const data = i18n[locale]
  
  const copyrightNode = `©${new Date().getFullYear()} TiDB Community.`
  
  const onChangeLanguage = (value) => {
    if (value === 'en') {
      navigate(`/`)
    } else {
      navigate(`/${value}`)
    }
  }
  
  const logoImageUrl = helper.getLogoByLocale(locale)
  
  return (
    <div className={styles.wrapper}>
      <Container className={styles.container}>
        <div className={styles.main}>
          <div className={styles.main_left}>
            {data.map((column, columnIndex) => (
              <div key={columnIndex} className={styles.main_left_column}>
                <div className={styles.main_left_column_title}>
                  {column.name}
                </div>
                <ul className={styles.main_left_column_list}>
                  {column.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item.outbound ? <MyLink href={item.link}>{item.name}</MyLink> : <MyLink to={item.link}>{item.name}</MyLink>}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className={styles.main_right}>
            <div className={styles.main_right_socials}>
              <Socials type="follow" />
            </div>
            {/*<div className={styles.main_right_language}>*/}
            {/*  <Select defaultValue={locale} style={{ width: 120 }} bordered={true} onChange={onChangeLanguage}>*/}
            {/*    {Object.keys(langConfig.languages).map((value) => <Select.Option value={value}>{langConfig.languages[value].langName}</Select.Option>)}*/}
            {/*  </Select>*/}
            {/*</div>*/}
            <div className={styles.main_right_brand}>
              <div className={styles.main_right_brand_logo}>
                <MyLink to={'/'}>
                  <img src={logoImageUrl} alt="TiDB Developer Group"/>
                </MyLink>
              </div>
              <div className={styles.main_right_brand_copyright}>
                {copyrightNode}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
