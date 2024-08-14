import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function SpeakingSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({ title, description, event, cta, href }) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export default function Speaking() {
  return (
    <>
      <Head>
        <title>Experience - Kathan Mehta</title>
        <meta
          name="description"
          content="If you are looking for your next guest speaker, I'm your girl!"
        />
      </Head>
      <SimpleLayout
        title="My Tech Career Journey"
        intro="Exploring a career of innovation , here’s a look at my professional experiences in tech."
      >
        <div className="space-y-20">
          <SpeakingSection title="Software Engineer - Ngaoundere, Cameroon – Remote (2022 – Present)">
            <Appearance
              href="https://alc.demoafricalead.com"
              title="Full Stack Tech Developer"
              description="I develop and deploy complex applications, specializing in mobile apps, APIs, and web solutions. My work includes using technologies like Flutter, Docker, Kubernetes, .NET, and Azure CI/CD pipelines to enhance functionality, streamline processes, and improve system reliability."
              event="Africa Lead Corporation "
              cta="Ongoing"
            />
          </SpeakingSection>
          <SpeakingSection title="Software Engineer - Ngaoundere, Cameroon - Hackathon (2022)">
            <Appearance
              href=""
              title="GIZ Hackathon Web App Developer"
              description="Participated in a hackathon organized by GIZ to develop a web application for showcasing activities and tracking booths during the Cameroon-German Cooperation Day."
              event="GIZ"
              cta="Completed"
            />
          </SpeakingSection>
          <SpeakingSection title="Software Engineer Intern - Douala, Cameroon (2022)">
            <Appearance
              href="https://mbcode.cm"
              title="Intern: MBSCHOOL E-Learning App Developer"
              description="Spearheaded the end-to-end development of a mobile E-Learning application called MBSCHOOL for MBCODE Company, creating a REST API that seamlessly integrates with the app. This initiative, powered by Node.js, PostgreSQL, and Flutter, was designed to drive digital transformation within the sector."
              event="MBCODE"
              cta="Completed"
            />
          </SpeakingSection>
          <SpeakingSection title="Software Engineer Intern - Ngaoundere, Cameroon (2021)">
            <Appearance
              href=""
              title="Intern: Alumni Management Web App Developer"
              description="As part of my internship at the University Institute of the University of Ngaoundéré, I had the opportunity to design and develop a web application for managing and tracking alumni from the University Institute of Technology in Ngaoundéré. I implemented the application using CodeIgniter. This experience allowed me to apply my skills and contribute to the creation of a valuable tool for the institution."
              event="University Institute of the University"
              cta="Completed"
            />
          </SpeakingSection>
          
        </div>
      </SimpleLayout>
    </>
  )
}
