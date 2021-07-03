import Head from 'next/head'
import Image from 'next/image'

import { Landing } from '../components/landing.jsx'
import { Navbar } from '../components/navbar'

export default function Mentor() {
  return (
    <div>
      <Navbar />
      <Landing
        heading="Mentor with Us"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 100% Free and Open Source"
        cta1="Apply Now"
        cta2="Learn More"
        image="/livecode.png"
        cta1link={' https://www.notion.so/bitproject/Welcome-to-Serverless-Camp-e218f86daf4248509350709cd9fa8017'}
        cta2link={'https://airtable.com/shr9hT8pEXpAAM00Z'}
      />
    </div>
  )
}
