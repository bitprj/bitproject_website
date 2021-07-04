import { Landing } from '../components/landing.jsx'
import { Carousel } from '../components/carousel'
import { Navbar } from '../components/navbar'
import { Footer } from '../components/footer'

export default function Orchestration() {
  return (
    <div>
      <Navbar />
      <Landing
        heading="Technical Workshops"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 100% Free and Open Source"
        cta1="Apply Now"
        cta2="Learn More"
        logoImage="/tv.png"
        cta1link={' https://www.notion.so/bitproject/Welcome-to-Serverless-Camp-e218f86daf4248509350709cd9fa8017'}
        cta2link={'https://airtable.com/shr9hT8pEXpAAM00Z'}
      />

      <Carousel
        img1="/tech1.svg"
        link1="LINK1"
        img2="/tech2.svg"
        link2="LINK2"
        img3="/tech3.svg"
        link3="LINK3"
      />
      <Footer/>
    </div>
  )
}