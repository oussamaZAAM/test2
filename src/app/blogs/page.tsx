import BlogCard from '@/components/BlogCard';
import BlogPageTitle from '@/components/BlogPageTitle';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import ReturnToTop from '@/components/ReturnToTop';
import { blogsData } from '@/data/blogsData';
import { Jost } from 'next/font/google';

const jostFont = Jost({ subsets: ["latin"] });

type Props = {}

export default function Blogs({ }: Props) {
  return (
    <div className="flex flex-col justify-between items-center w-full h-full min-h-[100vh] bg-ac-gray">
      <ReturnToTop />
      <div className="flex flex-col justify-start items-center w-full h-full  bg-ac-gray">
        <Navbar />
        {/* Blogs Hero */}
        <div className="relative parallax-blogs flex justify-start items-center w-full py-36 px-12 sm:px-24">
          {/* Overlay */}
          <div className="absolute top-0 left-0 w-full h-full z-20 bg-[#00000050]"></div>
          <h1 className={jostFont.className + " text-white font-bold text-4xl xs:text-5xl text-left z-30"}>Alee Conseil Blogs</h1>
        </div>
        <div className="rounded-t-xl flex flex-col justify-start items-center w-full bg-ac-gray gap-24 mb-24 -translate-y-5 z-30">
          <BlogPageTitle />
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 px-6 sm:px-12 md:px-24 lg:px-36 xl:px-48">
            {blogsData.map(blog => {
              return (
                <BlogCard key={blog.id} id={blog.id} title={blog.title} body={blog.body} />
              )
            })}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}