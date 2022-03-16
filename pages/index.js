import Head from 'next/head'
import { Landing } from '../components/landing.jsx'
import { TriCol } from '../components/tricol'
import { GraphicTab } from '../components/graphictab'
import { Testimonials } from '../components/testimonials'
import { Navbar } from '../components/navbar'
import { Footer } from '../components/footer'
import { MainHead } from '@/components/headings/MainHead.jsx'


export default function HomePage() {
  return (
    <div>
      <Head>
        <title>Bit Project</title>
        <meta name="description" content="We provide cutting-edge, open source learning experiences to prepare students for careers in tech." />
        <meta property="og:title" content="Bit Project" />
        <meta property="og:image" content="https://www.bitproject.org/_next/image?url=%livecode.png&w=2048&q=75" />
        <meta property="og:description" content="We provide cutting-edge, open source learning experiences to prepare students for careers in tech." />
        <meta property="og:url" content="https://www.bitproject.org/" />
        <meta property="og:site_name" content="bitproject.org" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Landing
        heading="Free and open source coding bootcamps"
        description="Learn the skills of a software engineer through our free programs!"
        formActionButton="Sign Up"
        image="/main.gif"
        formResponse="Thanks! See you soon 👋"
      />





      <TriCol
        title='Our programs'
        heading1="Serverless Camp (self-paced & mentorship program)"
        para1="A 8-week program where you'll learn how to use Microsoft Azure and Node.js to create serverless apps."
        heading2="JavaScript & GitHub (self-paced)"
        para2="Learn the basics of GitHub and JavaScript using CounselorBot and our learning lab course."
        heading3="APIs (coming soon)"
        para3="Don't reinvent the wheel! Learn how to call and use other people's code in this program!"
      />

      <TriCol
        title='Our beliefs'
        heading1="Free & Open Source"
        para1="Our courses are open source and free for all because we believe in the power of accessible technical education."
        heading2="Built with the Industry"
        para2="Engineers mentor our students through pair programming sessions. They share insights on job search and engineering best practices."
        heading3="Built for students, by students"
        para3="We are a global student organization developing interactive, engaging technical content for other students."
      />

      <GraphicTab
        heading="We empower students to ship their first projects"
        desc="Getting started with a project is hard! Bit Project teaches students how to code by building."
        pic1="/fifi.jpeg"
        name1="Fifi Teklemedhin"
        title1="11th Grade"
        graphic1="https://vimeo.com/570820559"

        pic2="/anita.jpeg"
        name2="Anita Padman" // need to change to promo video. this one is about serverless
        title2="Junior at UIC"
        graphic2="https://vimeo.com/572033757"


        pic3="/emily.png"
        name3="Emily Chen"
        title3="11th Grade"
        graphic3="https://vimeo.com/572255574"

      />

      <Testimonials
        heading="We make a difference"
        desc="Take a look at what our students have to say."
      />

      <Footer />

    </div>
  )
}
