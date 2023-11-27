'use client'
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
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
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
      {post ? (
        <div className="mx-auto my-4   max-w-3xl items-center justify-center  py-5  xl:max-w-5xl ">
          <div className="pt-24 ">
            <p className="text-md text-center font-[lora] font-semibold leading-7 text-pinkText ">
              {format_date(new Date(post?.data?.created_at?.seconds * 1000))}
            </p>
            <h1 className="leading-16 font-Poppins mt-0 flex justify-center text-center text-3xl font-bold tracking-tight text-gray-900 ">
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
      )}
      <div className="bg-gradient-to-r from-lrGradiantPink from-10% to-white  to-100%">
        <div className="mx-auto my-4   max-w-3xl items-center justify-center  py-5  xl:max-w-5xl ">
          <p className="font-Poppins text-lg  font-semibold text-blackText ">Recent blog posts </p>
          <RecentPosts posts={posts ? posts : []} />
        </div>
      </div>
    </>
  )
}
