import Head from 'next/head'
import Image from 'next/image'

import { Landing } from '../components/hero/landing.tsx'
// import Layout from '../components/layout'
import { Hero } from '../components/hero'
import { Textblock } from '../components/textblock'
import { DualCol } from '../components/dualcol'


export default function Orchestration() {
  return (
    <div>
  
      <Landing
      heading="Orchestration Camp"
      description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 100% Free and Open Source"
      cta1="Apply Now"
      cta2="Learn More"
      image="/neonLines.svg"
      logoImage="/serverlessLogo.svg"
      cta1link={' https://www.notion.so/bitproject/Welcome-to-Serverless-Camp-e218f86daf4248509350709cd9fa8017'}
      cta2link={'https://airtable.com/shr9hT8pEXpAAM00Z'}
      />
    </div>
  )
}
