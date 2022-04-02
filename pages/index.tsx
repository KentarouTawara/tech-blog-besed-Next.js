import Container from '../components/container'
import AllPost from '../components/all-posts'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import Post from '../types/post'

type Props = {
  allPosts: Post[]
}

const Index = ({ allPosts }: Props) => {
  const Posts = allPosts
  return (
    <>
      <Layout>
        <Head>
          <title>tawarablog</title>
        </Head>
        <Container>
          <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
            <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl">
              Blog
            </h1>
            {Posts.length > 0 && <AllPost posts={Posts} />}
          </div>
        </Container>
      </Layout>
    </>
  )
}

export default Index

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
