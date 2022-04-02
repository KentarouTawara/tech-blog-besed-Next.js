import PostPreview from './post-preview'
import Post from '../types/post'

type Props = {
  posts: Post[]
}

const AllPosts = ({ posts }: Props) => {
  return (
    <section>
      <h2 className="mt-8 mb-6 text-2xl font-bold tracking-tight text-black md:text-4xl">
        All Posts
      </h2>
      <div className="">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  )
}

export default AllPosts
