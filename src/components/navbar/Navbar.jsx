import React, {useEffect, useState} from 'react';
import styles from './Navbar.module.scss'
import classNames from 'classnames'
import {graphql, Link, useStaticQuery} from "gatsby";
import {Dropdown, Menu} from 'antd';
import {DownOutlined} from "@ant-design/icons";
import i18n from 'src/data/navbar'
import {useIntl} from "react-intl";
import {useDebounce} from 'ahooks'
import Container from "src/components/Container/Container";
import {MenuOutlined} from "@material-ui/icons";

export default function Navbar(props) {
  const imageData = useStaticQuery(
    graphql`
      query {
        logo: file(relativePath: { eq: "TiDB-logo-red.svg" }) {
          publicURL
        }
      }
    `
  )
  
  const intl = useIntl()
  const locale = intl.locale
  
  const data = i18n[locale]
  
  const [transparent, setTransparent] = useState(props.transparent)
  const transparentDebounced = useDebounce(transparent, {wait: 100})
  
  const [isPopup, setIsPopup] = useState(false)
  
  useEffect(() => {
    const eventName = 'scroll'
    const scrollListener = (e) => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      setTransparent(scrollTop <= 0)
    }
    
    window.addEventListener(eventName, scrollListener)
    return () => {
      window.removeEventListener(eventName, scrollListener)
    }
  }, [])

  return (
    <div className={classNames(styles.wrapper, {[styles.wrapper_transparent]: transparentDebounced})}>
      <Container className={styles.container}>
  
        <Link to="/">
          <div className={styles.left}>
            <div className={styles.logo}>
              <Link to="/">
                <img src={imageData.logo.publicURL} alt="TiDB DevGroup"/>
              </Link>
            </div>
            <div className={classNames(styles.title, {[styles.title_transparent]: transparentDebounced})}>
              {data.navbar.title}
            </div>
          </div>
        </Link>

        <div className={styles.right}>
          
          <div className={styles.menu}>
            {data.navbar.linkList.map(item => item.children ? (
              <div className={classNames(styles.menu_item, {[styles.menu_item_transparent]: transparentDebounced})}>
                <Dropdown overlayStyle={{zIndex: 99999}} overlay={
                  <Menu>
                    {item.children.map(menuItem => (
                      <Menu.Item>
                        <Link to={menuItem.link}>
                          {menuItem.title}
                        </Link>
                      </Menu.Item>
                    ))}
                  </Menu>
                }>
                  <Link to="#" onClick={e => e.preventDefault()}>
                    {item.title} <DownOutlined />
                  </Link>
                </Dropdown>
              </div>
            ) : (
              <div className={classNames(styles.menu_item, {[styles.menu_item_transparent]: transparentDebounced})}>
                <Link to={item.link}>
                  {item.title}
                </Link>
              </div>
            ))}
          </div>
  
          <div className={styles.menu_mobile}>
            <MenuOutlined onClick={() => setIsPopup(prevState => !prevState)}/>
          </div>
          
        </div>

      </Container>
      
      {isPopup && (
        <div className={styles.menu_mobile_popup}>
          {data.navbar.linkList.map(item => item.children ? (
            <div className={styles.menu_mobile_popup_item}>
              <Dropdown overlayStyle={{zIndex: 99999}} overlay={
                <Menu>
                  {item.children.map(menuItem => (
                    <Menu.Item>
                      <Link to={menuItem.link}>
                        {menuItem.title}
                      </Link>
                    </Menu.Item>
                  ))}
                </Menu>
              }>
                <Link to="#" onClick={e => e.preventDefault()}>
                  {item.title} <DownOutlined />
                </Link>
              </Dropdown>
            </div>
          ) : (
            <div className={styles.menu_mobile_popup_item}>
              <Link to={item.link}>
                {item.title}
              </Link>
            </div>
          ))}
        </div>
      )}
      
    </div>
  )
}
