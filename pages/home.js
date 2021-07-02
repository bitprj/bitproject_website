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
import { TriCol } from '../components/tricol'

export default function HomePage() {
  return (
    <div>
  
      <Landing
      heading="We equip students with technical superpowers"
      description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    //   cta1="Apply Now"
    //   cta2="Learn More"
    formActionButton = "Sign Up"
    formActionButtonLink = "ENTER SIGN UP PAGE"
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

      

    </div>
  )
}
