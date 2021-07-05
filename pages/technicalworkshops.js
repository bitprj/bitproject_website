import { Landing } from '../components/landing.jsx'
import { Carousel } from '../components/carousel'
import { Navbar } from '../components/navbar'
import { DualBox } from '../components/dualcol/dualbox'
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
        title1="Building a purrfect thingy"
        link1="LINK1"
        companyLogo1="/newRelicLogo.svg"
        img1="/cats.png"

        title2="Building a purrfect thingy"
        link2="LINK1"
        companyLogo2="/awsLogo.svg"
        img2="/adventure.svg"

        title3="Building a purrfect thingy"
        link3="LINK1"
        companyLogo3="/newRelicLogo.svg"
        img3="/cats.png"
      />

    <DualBox
      title1="Error in Prod: Adventure in DevOps"
      companyLogo1 = "/newRelicLogo.svg"
      image1="/adventure.svg"
      link1="LINK1"
      title2="Building a PurrFect API with Serverless"
      companyLogo2 = "/awsLogo.svg"
      image2="/cats.png"
      link2="LINK2"
    />
         <Footer/>

    </div>
  )
}