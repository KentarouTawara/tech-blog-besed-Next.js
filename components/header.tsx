import Link from 'next/link'

const Header = () => {
  return (
    <div className="flex flex-col justify-center px-8">
      <nav className="flex items-center justify-between w-full relative max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pt-8 pb-8 sm:pb-16  text-gray-900 ">
        <div className="ml-[-0.60rem]">
          <Link href="/">
            <a className="p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 transition-all">Blog</a>
          </Link>
          <Link href="/about">
            <a className="p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 transition-all">About</a>
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default Header
