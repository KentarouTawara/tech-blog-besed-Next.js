import Container from './container'
import Link from 'next/link'
import { EXAMPLE_PATH } from '../lib/constants'

type Props = {
  href: string
  children: string
}

const ExternalLink = ({ href, children } : Props) => (
  <a
    className="text-gray-500 hover:text-gray-600 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

const Footer = () => {
  return (
    <Container>
      <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8">
        <hr className="w-full border-1 border-gray-200 mb-8" />
        <div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-2">
          <div className="flex flex-col space-y-4">
            <Link href="/">
              <a className="text-gray-500 hover:text-gray-600 transition">Home</a>
            </Link>
            <Link href="/about">
              <a className="text-gray-500 hover:text-gray-600 transition">
                About
              </a>
            </Link>
          </div>
          <div className="flex flex-col space-y-4">
            <ExternalLink href="https://twitter.com/kentarotawara">
              Twitter
            </ExternalLink>
            <ExternalLink href="https://github.com/KentarouTawara">GitHub</ExternalLink>
          </div>
        </div>
      </footer>
    </Container>
  )
}

export default Footer
