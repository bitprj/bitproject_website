import Head from 'next/head'
import Image from 'next/image'

import { Landing } from '../components/landing.jsx'
// import Layout from '../components/layout'
import { Hero } from '../components/hero'
import { Textblock } from '../components/textblock'
import { DualCol } from '../components/dualcol'
import { OverflowDualCol } from '../components/overflowdualcol'
import { CenterDualCol } from '../components/dualcol/center'
import { Carousel } from '../components/carousel'
import { DescDualCol } from '../components/dualcol/descriptive'
import { Navbar } from '../components/navbar'
import { GraphicTabBottom } from '../components/graphictab/bottom'
export default function Serverless() {
  return (
    <div>
      <Navbar/>

    <GraphicTabBottom
        heading="Serverless Camp"
        desc="In our 8-week boot camp, build awesome apps with Serverless functions, JavaScript, and APIs. From IoT heartbeat monitors to face mask detectors, you can build anything with Serverless!"
        cta1="Apply Now"
        cta2="Learn More"
        logoImage="/serverlessLogo.svg"
        cta1link={' https://www.notion.so/bitproject/Welcome-to-Serverless-Camp-e218f86daf4248509350709cd9fa8017'}
        cta2link={'https://airtable.com/shr9hT8pEXpAAM00Z'}
        pic1="/fifi.jpeg"
        name1="Fifi Teklemedhin"
        title1="11th Grade"
        graphic1="https://vimeo.com/570820559"

        pic2="/emily.svg"
        name2="Emily Chen"
        title2="Junior, CS"
        graphic2="/feature.svg"


        pic3="/emily.svg"
        name3="Emily Chen"
        title3="11th Grade"
        graphic3="/livecode.png"

        pic4="/emily.svg"
        name4="Emily Chen"
        title4="11th Grade"
        graphic4="/counselorbot.svg"
      />

      <Textblock
        title="Code. Deploy. That's it."
        para1="You just write your code and deploy it. Everything else which is necessary to run your application is done automatically.
        "
        para2="You just write your code and deploy it. Everything else which is necessary to run your application is done automatically.
        "
      />

      <DualCol 
        preheading="week 1"
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
      <DualCol 
        preheading="week 2"
        heading="Working with APIs"
        para1="Build projects with awesome APIs from Twilio, Microsoft Cognitive Services, and Giphy! Learn how to read documentation, experiment, and most importantly Google!"
        para2="Build projects to get started with Azure Functions, Cloud Engineering, and Javascript!"
        li1="😊 Emotional Gifs"
        li2="🎶 Song4u.js"
        img="/counselorbot.svg"
        action="Get Started &rarr;"
        actionLink="ACTIONLINK"
      />
       <DualCol 
        preheading="week3"
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
       <DualCol 
        preheading="week4"
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
    <CenterDualCol
      heading="Build your Own Project"
      description="Set up your development environment with developer tools like Github and Postman."
      cta1="Sample Projects"
      cta2="Learn More"
      image="/feature.svg"
      logoImage="/serverlessLogo.svg"
      cta1link={' https://www.notion.so/bitproject/Welcome-to-Serverless-Camp-e218f86daf4248509350709cd9fa8017'}
      cta2link={'https://airtable.com/shr9hT8pEXpAAM00Z'}
      />
    <Carousel 
        img1="/tech1.svg"
        img2="/tech2.svg"
        img3="/tech3.svg"
        img4="/tech4.svg"
      />

    </div>
  )
}
