import { Landing } from '../components/landing.jsx'
import { TriCol } from '../components/tricol'
import { GraphicTab } from '../components/graphictab'
import { Testimonials } from '../components/testimonials'
import { Navbar } from '../components/navbar'

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Landing
        heading="We equip students with technical superpowers"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        //   cta1="Apply Now"
        //   cta2="Learn More"
        formActionButton="Sign Up"
        formActionButtonLink="ENTER SIGN UP PAGE"
        image="/home.svg"
        cta1link={' https://www.notion.so/bitproject/Welcome-to-Serverless-Camp-e218f86daf4248509350709cd9fa8017'}
        cta2link={'https://airtable.com/shr9hT8pEXpAAM00Z'}
      />

      <TriCol
        heading1="Free & Open Source"
        para1="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        heading2="Free & Open Source"
        para2="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        heading3="Free & Open Source"
        para3="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      />

      <GraphicTab
        heading="We empower students
        to ship their first projects"
        desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
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

      <Testimonials
        heading="We make a difference"
        desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
      />

    </div>
  )
}
