import Head from 'next/head'
import Image from 'next/image'

import { Landing } from '../components/landing.jsx'
// import Layout from '../components/layout'
import { Hero } from '../components/hero'
import { Textblock } from '../components/textblock'
import { DualCol } from '../components/dualcol'
import { Navbar } from '../components/navbar'
import { Footer } from '../components/footer'

export default function Sponsor() {
  return (
    <div>
      <Navbar />
      <Landing
        logoImage="/heart.svg"
        heading="Sponsor Bit Project"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 100% Free and Open Source"
        cta1="Case Studies"
        cta2="Github Sponsors"
        image="/livecode.png"
        cta1link={' https://www.notion.so/bitproject/Welcome-to-Serverless-Camp-e218f86daf4248509350709cd9fa8017'}
        cta2link={'https://airtable.com/shr9hT8pEXpAAM00Z'}
      />
      <Footer/>
    </div>
  )
}
