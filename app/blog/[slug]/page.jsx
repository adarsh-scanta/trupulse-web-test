'use client'
import Main from './Main'
import { useState, useEffect } from 'react'
import { db } from '../../firebase.js'
import { collection, query, orderBy, onSnapshot, getDocs } from 'firebase/firestore'
import RecentPosts from '@/components/Blog/RecentPost'

export default function Page({ params }) {
  const slug = window.location.pathname.split('/').pop()
  const [posts, setPosts] = useState([])
  const [currentPost, setCurrentPost] = useState({})
  useEffect(() => {
    setCurrentPost(
      posts.filter((post) =>
        post?.data?.customURL?.length > 3
          ? post?.data?.customURL === slug
          : post?.data?.title
              ?.toLowerCase()
              .replace(/[^a-zA-Z ]/g, '')
              .split(' ')
              .join('-')
              .includes(slug)
      )[0]
    )
  }, [posts])

  useEffect(() => {
    const q = query(collection(db, 'posts'))
    onSnapshot(q, (querySnapshot) => {
      // const temp
      setPosts(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    })
  }, [])

  return (
    <>
      <Main post={currentPost} posts={posts} />
      <div className="bg-gradient-to-r from-lrGradiantPink from-10% to-white  to-100%">
        <div className="mx-auto my-4   max-w-3xl items-center justify-center  py-5  xl:max-w-5xl ">
          <p className="font-Poppins text-lg  font-semibold text-blackText ">Recent blog posts </p>
          <RecentPosts posts={posts} />
        </div>
      </div>
    </>
  )
}
