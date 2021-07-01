import Head from 'next/head'
import Image from 'next/image'

import { Landing } from '../components/hero/landing.tsx'
// import Layout from '../components/layout'
import { Hero } from '../components/hero'
import { Textblock } from '../components/textblock'

export default function Home() {
  return (
    <div>
  
      <Landing
      heading="Serverless Camp"
      description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 100% Free and Open Source"
      cta1="Apply Now"
      cta2="Get Updates"
      image="/feature.svg"
      logoImage="/serverlessLogo.svg"
      cta1link={' https://www.notion.so/bitproject/Welcome-to-Serverless-Camp-e218f86daf4248509350709cd9fa8017'}
      cta2link={'https://airtable.com/shr9hT8pEXpAAM00Z'}
      />

      <Textblock></Textblock>
      <Hero />
    </div>
  )
}
