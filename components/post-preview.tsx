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
            <div className="text-sm">
              <DateFormatter dateString={date} />
            </div>
            <div className="w-full mb-4">
              <div className="flex flex-col justify-between md:flex-row">
                <h4 className="w-full text-lg font-medium text-gray-900 md:text-xl">
                  {title}
                </h4>
              </div>
            </div>
          </a>
        </Link>
  )
}
export default PostPreview
