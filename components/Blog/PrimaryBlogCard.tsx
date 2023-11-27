'use client'
import Image from 'next/image'
import moment from 'moment'
import { useRouter } from 'next/navigation'
const PrimaryBlogCard = ({ post }) => {
  const router = useRouter()

  const format_date = (value) => {
    if (value) {
      return moment(String(value)).format('dddd, MMMM Do YYYY')
    }
  }
  let doc = new DOMParser().parseFromString(post?.data?.content, 'text/html')

  const handleClick = (data: any) => {
    if (data?.customURL?.length > 3) {
      router.push(`blog/${data.customURL}`)
    } else {
      router.push(
        `blog/${data.title
          .toLowerCase()
          .replace(/[^a-zA-Z ]/g, '')
          .split(' ')
          .join('-')}`
      )
    }
  }
  return post ? (
    <div className="flex cursor-pointer flex-col" onClick={() => handleClick(post?.data)}>
      <img
        src={post?.data?.cover_image}
        alt="cover-image	"
        style={{ width: '100%', height: '180px' }}
      />
      <p className="text-md mb-2 mt-4 font-[lora] font-semibold text-pinkText">
        {format_date(new Date(post?.data?.created_at.seconds * 1000))}
      </p>
      <div className="flex justify-between">
        <p className="font-Poppins text-xl font-semibold text-blackText">
          {post?.data?.title?.slice(0, 100)}
        </p>
        <svg
          width="34"
          height="34"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 17L17 7M17 7H7M17 7V17"
            stroke="#1A1A1A"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <p className="font-Poppins  text-greyText">{`${doc?.all[0].textContent?.slice(
        0,
        120
      )}...`}</p>
    </div>
  ) : (
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
  )
}
export default PrimaryBlogCard
