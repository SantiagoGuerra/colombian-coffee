import React from 'react'
import Header from './Header'
import Navigation from './Navigation'
import Footer from './Footer'

export default function Layout ({
  ui,

  setActive,

  children
}) {
  return (
    <React.Fragment>
      <Header 
        headerIsActive={ui.headerIsActive}
        setActive={setActive}
      />
      <Navigation 
        headerIsActive={ui.headerIsActive}
      />

      <main>
        {children}
      </main>
      <Footer>
        Hecho bebiendo mucho Café por 	&nbsp;<a href="https://santiagoguerra.github.io" target='_blank'>Santiago</a>
      </Footer>
    </React.Fragment>
  )
}