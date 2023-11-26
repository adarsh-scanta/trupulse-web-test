import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import CTAButton from '../../../components/CTAButton'
import '../../../css/CTAButton.css'
import styles from './index.module.css'
import Pagination from '../pagination'
import PrimaryBlogCard from '@/components/Blog/PrimaryBlogCard'
import SecondBlogCard from '@/components/Blog/SecondBlogCard'
import moment from 'moment'
import parse from 'html-react-parser'
import RecentPosts from '@/components/Blog/RecentPost'
export default function Home({ post, posts }) {
  const format_date = (value) => {
    if (value) {
      return moment(String(value)).format('dddd, MMMM Do YYYY')
    }
  }
  const parseOption = {
    replace: (domNode: any) => {
      if (domNode.attribs && domNode.attribs.class === 'remove') {
        return <></>
      }
    },
  }
  return (
    <>
      <div className="mx-auto my-4   max-w-3xl items-center justify-center  py-5  xl:max-w-5xl ">
        <div className="pt-24 ">
          <p className="text-md text-center font-[lora] font-semibold leading-7 text-pinkText ">
            {format_date(new Date(post?.data?.created_at.seconds * 1000))}
          </p>
          <h1 className="leading-16 mt-0 flex justify-center text-center font-Poppins text-3xl font-bold tracking-tight text-gray-900 ">
            {post?.data?.title?.slice(0, 100)}
          </h1>
          <img
            src={post?.data?.cover_image}
            width="100%"
            alt={post?.data?.altTag}
            style={{ maxHeight: '500px' }}
          />
          <div className={styles.blog_content}>
            {parse(post?.data?.content ? post?.data?.content : '', parseOption)}
          </div>
        </div>
      </div>
    </>
  )
}
