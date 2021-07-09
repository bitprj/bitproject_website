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
        <meta property="og:title" content="Mentor - Bit Project" />
        <meta property="og:image" content="https://www.bitproject.org/_next/image?url=%livecode.png&w=2048&q=75" /> 
        <meta property="og:description" content="We pair awesome engineers with students to give back to their communities." />
        <meta property="og:url" content="https://www.bitproject.org/mentor" />
        <meta property="og:site_name" content="bitproject.org" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <GraphicTabBottom
        heading="Make a Difference. Mentor."
        desc="We pair awesome engineers with students to give back to their communities."
        cta1="Apply Now"
        cta2="Learn More"
        logoImage="/counselor.png"
        cta1link={' mailto:info@bitproject.org'}
        cta2link={'https://www.notion.so/For-Mentors-78a1066a384d4ad397e7b39166959579'}

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
