import React from 'react'
import Socials from '../socials/Socials'
import i18n from '../../data/footer'
import BoundLink from '../BoundLink'
import { useIntl } from 'react-intl'
import Container from "src/components/Container/Container";
import logoImageUrl from 'images/TiDB-logo-red.svg'

import './Footer.scss'
import {Col, Row} from "antd";

export default function Footer() {
  
  const intl = useIntl()
  const locale = intl.locale
  
  const data = i18n[locale]
  
  const copyrightNode = `©${new Date().getFullYear()} TiDB Author.`
  
  const className = `Footer`
  const classNameContainer = `${className}-container`
  const classNameContainerMain = `${classNameContainer}-main`
  
  const classNameContainerMainLeft = `${classNameContainerMain}-left`
  const classNameContainerMainLeftColumn = `${classNameContainerMainLeft}-column`
  const classNameContainerMainLeftItemTitle = `${classNameContainerMainLeftColumn}-title`
  const classNameContainerMainLeftItemList = `${classNameContainerMainLeftColumn}-list`
  
  const classNameContainerMainRight = `${classNameContainerMain}-right`
  const classNameContainerMainRightLogo = `${classNameContainerMainRight}-logo`
  const classNameContainerMainRightLogoImage = `${classNameContainerMainRightLogo}-image`
  const classNameContainerMainRightLogoText = `${classNameContainerMainRightLogo}-text`
  const classNameContainerMainRightSocials = `${classNameContainerMainRight}-socials`
  
  const classNameContainerCopyright = `${classNameContainer}-copyright`
  
  return (
    <div className={className}>
      <Container className={classNameContainer}>
        <Row gutter={[16, 16]} className={classNameContainerMain}>
          <Col sm={24} md={16}>
            <Row className={classNameContainerMainLeft}>
              {data.map(column => (
                <Col xs={24} sm={12} md={8} className={classNameContainerMainLeftColumn}>
                  <div className={classNameContainerMainLeftItemTitle}>
                    {column.name}
                  </div>
                  <ul className={classNameContainerMainLeftItemList}>
                    {column.items.map(item => (
                      <li>{item.outbound ? <BoundLink href={item.link}>{item.name}</BoundLink> : <BoundLink to={item.link}>{item.name}</BoundLink>}</li>
                    ))}
                  </ul>
                </Col>
              ))}
            </Row>
          </Col>
          
          <Col sm={24} md={8} className={classNameContainerMainRight}>
            <BoundLink to={'/'}>
              <div className={classNameContainerMainRightLogo}>
                <div className={classNameContainerMainRightLogoImage}>
                  <img src={logoImageUrl} alt="DevGroup"/>
                </div>
                <div className={classNameContainerMainRightLogoText}>
                  DevGroup
                </div>
              </div>
            </BoundLink>
            <div className={classNameContainerMainRightSocials}>
              <Socials type="follow" />
            </div>
          </Col>
        </Row>
        
        <div className={classNameContainerCopyright}>
          {copyrightNode}
        </div>
      </Container>
    </div>
  )
}
