import Head from 'next/head'
import Image from 'next/image'

import { Landing } from '../components/hero/landing.tsx'
// import Layout from '../components/layout'
import { Hero } from '../components/hero'
import { Textblock } from '../components/textblock'
import { DualCol } from '../components/dualcol'


export default function Home() {
  return (
    <div>
  
      <Landing
      heading="Serverless Camp"
      description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 100% Free and Open Source"
      cta1="Apply Now"
      cta2="Learn More"
      image="/feature.svg"
      logoImage="/serverlessLogo.svg"
      cta1link={' https://www.notion.so/bitproject/Welcome-to-Serverless-Camp-e218f86daf4248509350709cd9fa8017'}
      cta2link={'https://airtable.com/shr9hT8pEXpAAM00Z'}
      />

      <Textblock
        title="Code. Deploy. That's it."
        para1="You just write your code and deploy it. Everything else which is necessary to run your application is done automatically.
        "
        para2="You just write your code and deploy it. Everything else which is necessary to run your application is done automatically.
        "
      />

      <DualCol 
        preheading="week1"
        heading="Git & Serverless Basics"
        para1="Set up your development environment with developer tools like Github and Postman."
        para2="Build projects to get started with Azure Functions, Cloud Engineering, and Javascript!"
        li1="⚡ HackerVoice API"
        li2="🐱 twoCatz API"
        li3="🐸 [TOP SECRET] API"
        img="/counselorbot.svg"
        action="Get Started &rarr;"
        actionLink="ACTIONLINK"
      />
      {/* <Hero /> */}

  

    </div>
  )
}