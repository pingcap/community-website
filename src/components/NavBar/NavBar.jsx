import React, {useEffect, useRef, useState} from 'react';
import styles from './NavBar.module.scss'
import classNames from 'classnames'
import {graphql, Link, useStaticQuery} from "gatsby";
import {Dropdown, Menu} from 'antd';
import {DownOutlined} from "@ant-design/icons";
import i18n from 'src/data/navbar'
import {useIntl} from "react-intl";
import {useDebounce} from 'ahooks'
import Container from "src/components/Container/Container";
import {MenuOutlined} from "@material-ui/icons";

export default function NavBar(props) {
  const imageData = useStaticQuery(
    graphql`
      query {
        logoWithText: file(relativePath: { eq: "logo-with-text.svg" }) {
          publicURL
        }
        logoWithWhiteText: file(relativePath: { eq: "logo-with-white-text.svg" }) {
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
    const scrollListener = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      setTransparent(scrollTop <= 0)
    }
  
    scrollListener()
    
    window.addEventListener(eventName, scrollListener)
    return () => {
      window.removeEventListener(eventName, scrollListener)
    }
  }, [])
  
  const ref = useRef()

  return (
    <div ref={ref} className={classNames(styles.wrapper, {[styles.wrapper_transparent]: transparentDebounced})}>
      <Container fluid className={styles.container}>
  
        <Link to="/">
          <div className={styles.left}>
            <div className={styles.logo}>
              {transparentDebounced ? <img src={imageData.logoWithWhiteText.publicURL} alt="TiDB DevGroup"/> : <img src={imageData.logoWithText.publicURL} alt="TiDB DevGroup"/>}
            </div>
            {/*<div className={classNames(styles.title, {[styles.title_transparent]: transparentDebounced})}>*/}
            {/*  {data.navbar.title}*/}
            {/*</div>*/}
          </div>
        </Link>

        <div className={styles.right}>
          
          <div className={styles.menu}>
            {data.navbar.linkList.map(item => item.children ? (
              <div className={classNames(styles.menu_item, {[styles.menu_item_transparent]: transparentDebounced})}>
                <Dropdown getPopupContainer={() => ref.current} overlayStyle={{zIndex: 99999}} overlay={
                  <Menu className={styles.menu_container}>
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
              <Dropdown getPopupContainer={() => ref.current} overlayStyle={{zIndex: 99999}} overlay={
                <Menu className={styles.menu_container}>
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
