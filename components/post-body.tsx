import { parseISO, format } from 'date-fns';
import markdownStyles from './markdown-styles.module.css'
import Image from 'next/image';

type Props = {
  content: string
  title: string
  publishedAt: string
}

const PostBody = ({ content, title, publishedAt }: Props) => {
  return (
    <article className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-2">
      <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-3xl">
        {title}
      </h1>
      <p className="text-sm text-gray-700">
        {format(parseISO(publishedAt), 'MMMM dd, yyyy')}
      </p>
      <div
        className="w-full mt-8 prose dark:prose-dark max-w-none"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </article>
  )
}

export default PostBody
