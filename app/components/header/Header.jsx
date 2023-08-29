import React from 'react'
import Logo from '../Logo'
import Action from './Action'
import Navigation from './Navigation'
import Section from '../Section'

const Header = () => {
  return (
    <header className={`fixed w-full py-4`}>
      <Section>
        <div className={`flex justify-between items-center`}>
          <Logo />
          <Navigation />
          <Action />
        </div>
      </Section>
    </header>
  )
}

export default Header