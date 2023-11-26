import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import CTAButton from '../../components/CTAButton'
import '../../css/CTAButton.css'
import Pagination from './pagination'
import PrimaryBlogCard from '@/components/Blog/PrimaryBlogCard'
import SecondBlogCard from '@/components/Blog/SecondBlogCard'
import RecentPosts from '@/components/Blog/RecentPost'
export default function Home({ posts }) {
  const currentPage =
    typeof window !== undefined && window.location.search.includes('page')
      ? window.location.search.split('=')[1]
      : '1'
  const minIndex = (parseInt(currentPage) - 1) * 9
  const maxIndex = parseInt(currentPage) * 9

 
  return (
    <>
      <div className="mx-auto my-4   max-w-3xl items-center justify-center  py-5  xl:max-w-5xl ">
        <div className="space-y-8 pb-8 pt-24 md:space-y-5">
          <h1 className="leading-16 flex justify-center text-center font-Poppins text-5xl font-bold tracking-tight text-gray-900 ">
            Resources and insights
          </h1>

          <p className="text-center font-[lora] text-xl leading-7 text-greyText ">
            The latest industry news, interviews, technologies, and resources.
          </p>
        </div>

        <div className="mt-12">
          <p className="font-Poppins text-lg  font-semibold text-blackText ">Recent blog posts </p>
         
          <RecentPosts posts={posts} />
        </div>
        <div className="mt-12">
          <p className="font-Poppins text-lg  font-semibold leading-7 text-blackText ">
            All blog posts{' '}
          </p>

          <div className="grid grid-cols-1 gap-8 py-4 md:grid-cols-6">
            {posts.length > 0
              ? posts?.slice(minIndex, maxIndex)?.map((item, id) => (
                  <div key={id} className="col-span-2 py-4">
                    <PrimaryBlogCard post={item} />
                  </div>
                ))
              : [0, 0, 0, 0, 0, 0, 0, 0, 0].map((item) => (
                  <div className="col-span-2">
                    <div className="flex animate-pulse space-x-4">
                      <div className="h-10 w-10 rounded-full bg-slate-200"></div>
                      <div className="flex-1 space-y-6 py-1">
                        <div className="h-2 rounded bg-slate-200"></div>
                        <div className="space-y-3">
                          <div className="grid grid-cols-3 gap-4">
                            <div className="col-span-2 h-2 rounded bg-slate-200"></div>
                            <div className="col-span-1 h-2 rounded bg-slate-200"></div>
                          </div>
                          <div className="h-2 rounded bg-slate-200"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
          </div>
          <Pagination page={parseInt(currentPage)} perPage={9} itemCount={posts.length ?? 0} />
        </div>
      </div>
    </>
  )
}
