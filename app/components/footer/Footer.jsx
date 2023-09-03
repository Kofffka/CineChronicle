import React from 'react'
import Section from '../Section'
import Description from './Description'
import Links from './Links'

const Footer = () => {
  return (
    <footer className={`py-20 mt-6 border-t border-solid border-slate-800 `}>
      <Section>
        <div>
          <div>
            <Description />
            <div></div>
          </div>
          <div className={`flex justify-between mt-16`}>
            <Links />
            <div>
              <span className={`text-sm-info`}>
                2023
              </span>
            </div>
          </div>
        </div>
      </Section>
    </footer>
  )
}

export default Footer