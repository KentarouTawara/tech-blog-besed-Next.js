import Link from 'next/link';
import Image from 'next/image';
import Layout from '../components/layout';
import Head from 'next/head';
import Container from '../components/container';

export default function About() {
  return (
    <>
      <Layout>
        <Head>
          <title>tawarablog</title>
        </Head>
        <Container>
          <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-2">
            <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl">
              About
            </h1>
            <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
              <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
                About Me
              </h1>
              <div className="mb-8 prose dark:prose-dark leading-6">
                <h2>Links</h2>
                <ul>
                  <li>
                    Twitter: <a href="https://twitter.com/kentaroutawra">@kentarotawara</a>
                  </li>
                  <li>
                    GitHub: <a href="https://github.com/kentarotawara">@kentarotawara</a>
                  </li>
                  <li>
                    Wantedly: <a href="https://www.wantedly.com/id/kentarou_tawara_b">@kentarotawara</a>
                  </li>
                  <li>
                    note: <a href="https://note.com/kentarotawara">@kentarotawara</a>
                  </li>
                  <li>
                    Website:{' '}
                    <Link href="https://www.kentaroutawara.com">
                      <a>https://www.kentaroutawara.com</a>
                    </Link>
                  </li>
                </ul>
                <h2>学歴・経歴</h2>
                <p>準備中</p>
              </div>
            </div>
          </div>
        </Container>
      </Layout>
    </>
  );
}