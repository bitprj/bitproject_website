// import Head from 'next/head'
import { Landing } from '../components/landing.jsx'
import { TriCol } from '../components/tricol'
import { GraphicTab } from '../components/graphictab'
import { Testimonials } from '../components/testimonials'
import { Navbar } from '../components/navbar'
import { Footer } from '../components/footer'
import { NextSeo } from 'next-seo'


const title = "Bit Project"
const description = "We provide cutting-edge, open source learning experiences to prepare students for careers in tech."
const url = "https://www.bitproject.org/"

export default function HomePage() {
  return (
    <>
        <NextSeo
          title={title}
          description={description}
          canonical={url}
          openGraph={{
            url,
            title,
            description,
            images: [
              {
                url: 'https://www.bitproject.org/_next/image?url=%livecode.png&w=2048&q=75',
                alt: 'Bit Project Live Coding',
                type: 'image/png',
              },
            ],
          }}
        />
      <Navbar />
      <Landing
        heading="We equip students with technical superpowers"
        description="We provide cutting-edge, open source learning experiences to prepare students for careers in tech."
        formActionButton="Sign Up"
        image="/main.gif"
        formResponse="Thanks! See you soon 👋"
      />

      <TriCol
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

    </>
  )
}
