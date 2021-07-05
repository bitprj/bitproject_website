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
import { Footer } from '../components/footer'

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
        name1="Saving $ on Amazon"
        title1="Fifi Teklemedhin"
        graphic1="https://vimeo.com/570820559"

        pic2="/emily.svg"
        name2="File Sharing for Exams"
        title2="Emily Chen"
        graphic2="/feature.svg"


        pic3="/emily.svg"
        name3="Predicting Power Usage"
        title3="Evelyn Chin"
        graphic3="/livecode.png"
      />

      <Textblock
        title="What is Serverless Camp?"
        para1="Serverless involves harnessing the power of cloud computing and building large applications quickly without having to manage servers."
        para2="Camp is an 8-week interactive coding bootcamp designed to help you gain real-world technical skills through project-based learning and build awesome professional connections."
      />
      <DualCol 
        preheading="week 1"
        heading="Git & Serverless Basics"
        para1="Set up your development environment with developer tools like Github and Postman."
        para2="Build projects to get started with Azure Functions, Cloud Engineering, and Javascript!"
        li1="⚡ HackerVoice API"
        li2="🐱 twoCatz API"
        li3="🐸 [TOP SECRET] API"
        img="/week1.gif"
        action="Get Started &rarr;"
        actionLink="ACTIONLINK"
      />
      <DualCol 
        preheading="week 2"
        heading="Working with APIs"
        para1="Learn how to read documentation, experiment, and most importantly Google."
        para2="Build projects with awesome APIs from Twilio, Microsoft Cognitive Services, and Giphy!"
        li1="😊 Emotional Gifs"
        li2="🎶 Song4u.js"
        img="/week2.gif"
        action="Get Started &rarr;"
        actionLink="ACTIONLINK"
      />
       <DualCol 
        preheading="week3"
        heading="Storing & Retrieving Data"
        para1="Learn how to interact with databases add exciting and functional features to your projects."
        para2="Build projects with Blob Storage and a NoSQL database to store data received through your serverless function!"
        li1="🐰 Bunnimage API"
        li2="🤫 Deep Secrets API"
        img="/week3.gif"
        action="Get Started &rarr;"
        actionLink="ACTIONLINK"
      />
       <DualCol 
        preheading="week4"
        heading="Building a Frontend"
        para1="Learn how to build a webpage to accept, display, and retrieve user input."
        para2="Build a frontend with HTML/CSS/JS to interact with your serverless functions!"
        li1="🐇 Bunnimage: The App"
        li2="🐈 twoCatz: The App"
        img="/week4.gif"
        action="Get Started &rarr;"
        actionLink="ACTIONLINK"
      />
    <CenterDualCol
      heading="Build your Own Project"
      description="Demonstrate your new competence with cloud computing by developing your own project: it can solve problems, be fun, or do all of the above!"
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
      <Footer/>
 
    </div>
  )
}
