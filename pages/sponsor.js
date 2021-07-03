import Head from 'next/head'
import Image from 'next/image'

import { Landing } from '../components/landing.jsx'
// import Layout from '../components/layout'
import { Hero } from '../components/hero'
import { Textblock } from '../components/textblock'
import { DualCol } from '../components/dualcol'
import { Navbar } from '../components/navbar'

export default function Sponsor() {
  return (
    <div>
      <Navbar />
      <Landing
        heading="Sponsor Bit Project"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 100% Free and Open Source"
        cta2="Learn More"
        image="/livecode.png"
        cta1link={' https://www.notion.so/bitproject/Welcome-to-Serverless-Camp-e218f86daf4248509350709cd9fa8017'}
        cta2link={'https://airtable.com/shr9hT8pEXpAAM00Z'}
      />
    </div>
  )
}
