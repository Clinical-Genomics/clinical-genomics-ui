import React from 'react'
import './App.style.css'
import { Button, Image, Layout, Menu } from 'antd'
import { Routes } from './components/Routes'
import { Link, useLocation } from 'react-router-dom'
import { initGoogleClient, signOutGoogleClient } from './api/GoogleApi'
import {
  setSettings as setSettingsAction,
  resetSettings as resetSettingsAction,
} from './domain/settings/slice'
import { RootState } from './domain/rootReducer'
import { connect } from 'react-redux'
import AvatarFallback from 'assets/avatar-fall-back.png'
import Logo from 'assets/logo.png'

export interface AppProps {
  name: string
}

const { Header, Content, Footer } = Layout

const mapDispatch = {
  setSettings: setSettingsAction,
  resetSettings: resetSettingsAction,
} as const
const mapState = ({ settings }: RootState) => ({ settings } as const)

type Props = ReturnType<typeof mapState> & typeof mapDispatch

const AppComponent = ({ settings, setSettings, resetSettings }: Props) => {
  const setStore = () => {
    initGoogleClient(setSettings)
  }
  const handleSignOut = () => {
    signOutGoogleClient(resetSettings)
  }
  return (
    <Layout className="app-layout">
      <Header className="header">
        <img className="logo" src={Logo}></img>
        <Menu theme="dark" mode="horizontal" selectedKeys={[useLocation().pathname]}>
          <Menu.Item key="/">
            <Link to="/">
              <span>Home</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="/trailblazer" disabled={!settings.token}>
            <Link to="/trailblazer">
              <span>Trailblazer</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="/genotype" disabled={!settings.token}>
            <Link to="/genotype">
              <span>Genotype</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="/vogue" disabled={!settings.token}>
            <Link to="/vogue">
              <span>Vogue</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="/github-stats">
            <Link to="/github-stats">
              <span>GitHub Stats</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="/links">
            <Link to="/links">
              <span>Links</span>
            </Link>
          </Menu.Item>
        </Menu>
        <div>
          {!settings.token && (
            <div>
              <Button className="google-button" type="primary" onClick={() => setStore()}>
                Login
              </Button>
            </div>
          )}
          {settings.token && (
            <div>
              <div className="greeting">
                Welcome {settings.user?.name}!{' '}
                <Image
                  className="google-avatar"
                  src={settings.user?.avatar}
                  fallback={AvatarFallback}
                />
              </div>
              <Button className="google-button" type="primary" onClick={() => handleSignOut()}>
                Log Out
              </Button>
            </div>
          )}
        </div>
      </Header>
      <Content>
        <Routes token={settings.token} />
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        <a href="https://www.scilifelab.se/facilities/clinical-genomics-stockholm/">
          Clinical Genomics ©2020
        </a>
      </Footer>
    </Layout>
  )
}

export const App = connect(mapState, mapDispatch)(AppComponent)
