import Head from 'next/head'
import { GraphicTabBottom } from '../components/graphictab/bottom'
import { Navbar } from '../components/navbar'
import { Footer } from '../components/footer'

export default function Mentor() {
  return (
    <div>
      <Head>
        <title>Mentor</title>
        <meta name="description" content="We pair awesome engineers with students to give back to their communities." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <GraphicTabBottom
        heading="Make a Difference. Mentor."
        desc="We pair awesome engineers with students to give back to their communities."
        cta1="Apply Now"
        cta2="Learn More"
        logoImage="/counselor.png"
        cta1link={' https://www.notion.so/bitproject/Welcome-to-Serverless-Camp-e218f86daf4248509350709cd9fa8017'}
        cta2link={'https://airtable.com/shr9hT8pEXpAAM00Z'}

        pic1="/mentor/anthony.jpeg"
        name1="Anthony Chu"
        title1="Microsoft"
        graphic1="https://vimeo.com/570829328"

        pic2="/mentor/nica.jpeg"
        name2="Nočnica Fee"
        title2="New Relic"
        graphic2="https://vimeo.com/572023206"

        pic3="/mentor/john.jpeg"
        name3="John Kilmister"
        title3="PureGym"
        graphic3="https://vimeo.com/570824340"
      />
      <Footer/>
    </div>
  )
}
