'use client'
import Main from './Main'
import { db } from '../../firebase.js'
import { collection, query, orderBy, onSnapshot, getDocs } from 'firebase/firestore'
import RecentPosts from '@/components/Blog/RecentPost'
import { usePathname } from 'next/navigation'

async function getData() {
  const postsRef = collection(db, 'posts')
  const snapshot = await getDocs(postsRef)

  const posts = snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
  const sortedPosts = posts?.sort((a, b) => b.data.created_at.seconds - a.data.created_at.seconds)

  return posts
}
export default async function Page({ params }) {
  const pathname = usePathname()
  const currentURL = pathname.split('/')[2]
  const posts = await getData()
  const sortedPosts = posts?.sort((a, b) => b.data.created_at.seconds - a.data.created_at.seconds)
  const publishedPost = sortedPosts?.filter((item) => item?.data?.isPublished)
  const currentPost = posts.filter((post) =>
    post?.data?.customURL?.length > 3
      ? post?.data?.customURL === currentURL
      : post?.data?.title
          ?.toLowerCase()
          .replace(/[^a-zA-Z ]/g, '')
          .split('')
          .join('-')
          .includes(currentURL)
  )[0]
  return (
    <>
      <Main post={currentPost} posts={publishedPost} />
    </>
  )
}
