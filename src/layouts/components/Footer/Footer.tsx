import style from './style.module.less'
import {useAppSelector} from '@/redux/store'
import {memo} from 'react'

const Footer = () => {
  const showFooter = useAppSelector(state => state.global.showFooter)
  const year = new Date().getFullYear()
  return showFooter ? null : <footer className={style.layoutFooter}>
    Copyright © {year}-{year + 1} zmt. All Rights Reserved
  </footer>
}
export default memo(Footer)
