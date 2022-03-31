import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'
import Author from '../types/author'

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  author: Author
  slug: string
}

const PostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) => {
  return (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="w-full">
            <div className="w-full">
              <div className="flex flex-col justify-between md:flex-row">
                <h4 className="w-full text-lg font-medium text-gray-900 md:text-xl">
                  {title}
                </h4>
              </div>
            </div>
            <div className="text-lg mb-4">
              <DateFormatter dateString={date} />
            </div>
          </a>
        </Link>
  )
}
export default PostPreview
