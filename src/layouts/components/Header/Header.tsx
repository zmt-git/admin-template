import style from './style.module.less'
import {useAppSelector} from '@/redux/store'
import {Input, Space} from 'tdesign-react'
import {
  MenuUnfoldIcon,
  MenuFoldIcon,
  MailIcon,
  HelpCircleIcon,
  LogoGithubIcon,
  UserCircleIcon,
  SettingIcon
} from 'tdesign-icons-react'
import {memo} from 'react'

const Header = () => {
  const collapsed = useAppSelector(state => state.global.collapsed)
  return <header className={style.layoutHeader}>
    <div className={style.headerLeft}>
      <Space>
        {collapsed ? <MenuFoldIcon/> : <MenuUnfoldIcon/>}
        <Input/>
      </Space>
    </div>
    <div className={style.headerRight}>
      <Space>
        <MailIcon/>
        <HelpCircleIcon/>
        <LogoGithubIcon/>
        <UserCircleIcon/>
        <SettingIcon/>
      </Space>
    </div>
  </header>
}
export default memo(Header)
