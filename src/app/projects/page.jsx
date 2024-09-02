import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoAnimaginary from '@/images/logos/animaginary.svg'
import logoCosmos from '@/images/logos/cosmos.svg'
import logoHelioStream from '@/images/logos/helio-stream.svg'
import logoOpenShuttle from '@/images/logos/open-shuttle.svg'
import logoPlanetaria from '@/images/logos/planetaria.svg'
import mbschool from '@/images/logos/mbschool.png'
import facturo from '@/images/logos/facturo.png'
import freemo from '@/images/logos/freemo.png'
const projects = [
  {
    name: 'mbshool: E Learning mobile app',
    description:
      "Spearheaded the end-to-end development of a mobile E-Learning application called MBSCHOOL for MBCODE Company, creating a REST API that seamlessly integrates with the app. This initiative, powered by Node.js, PostgreSQL, and Flutter, was designed to drive digital transformation within the sector.",
    link: {
      href: 'https://github.com/malachieborohoul/mbschool',
      label: 'GitHub',
    },
    store: {
      href: 'https://mega.nz/file/ERx1DBJb#PVysTeRSZKtAGwQC7rP4ZWnswO7tCJU-P04---LLxi4',
      label: 'Mega',
    },
    logo: mbschool,
  },
  {
    name: 'facturo: An Enterprise Desktop Invoice Maker',
    description:
      "Developed FACTURO as a desktop application to streamline the invoice creation process for my father’s business. This project addresses key challenges such as item cataloging, client management, and automated invoice generation with just a few clicks.",
    link: {
      href: 'https://www.linkedin.com/feed/update/urn:li:activity:7201357248843911168/',
      label: 'LinkedIn',
    },
    store: {
      href: '',
      label: '',
    },
    logo: facturo,
  },

  {
    name: 'FreemoPay Prototype',
    description:
      "A digital solution bridging mobile money and banking, offering micro-loans and digital wallets to underserved populations in French-speaking Africa. This prototype was created for a challenge and was well appreciated.",
    link: {
      href: 'https://github.com/malachieborohoul/freemo_test',
      label: 'GitHub',
    },
    store: {
      href: '',
      label: '',
    },
    logo: freemo,
  },
  
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata = {
  title: 'Projects',
  description: 'Things I’ve made trying to put my dent in the universe.',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Some of My Top Personal Projects"
      intro={
        <>
          <p>This summer, I learned about the trifecta that is React, Next.js, and TailwindCSS. I haven&apos;t looked back since!</p>
          <p className="mt-4">Diving deeper, I&apos;ve honed my skills across a broad spectrum of technologies:</p>
          <ul className="list-disc pl-6 mt-2">
            <li><strong>Languages:</strong>  Dart, C#, HTML, CSS, JavaScript,  Python, Php</li>
            <li><strong>Frameworks:</strong> Flutter, .NET, React, Next.js, Tailwind CSS, Node.js, Express, jQuery, WordPress</li>
            <li><strong>Tools:</strong> Git,  Azure, Docker, CI/CD</li>
            <li><strong>Database/Management:</strong> MySQL, PostgreSQL, MongoDB, Firebase, Supabase</li>
            <li><strong>Deployment Platforms:</strong> Vercel, Render, Azure</li>
          </ul>
          <p className="mt-4">Embracing these <strong>TECHNICAL SKILLS</strong> has empowered me to create and contribute to projects that are not only functional but also cutting-edge.</p>
        </>
      }
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
 {projects.map((project) => (
            <Card as="li" key={project.name}>
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={project.logo}
                  alt=""
                  className="h-8 w-8 rounded-full"
                  unoptimized
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link >{project.name}</Card.Link>
              </h2>
              <Card.Description>{project.description}</Card.Description>
              <a href={project.link.href} className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </a>
              <a href={project.store.href} className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{project.store.label}</span>
              </a>

              
            </Card>
          ))}
      </ul>
    </SimpleLayout>
  )
}
