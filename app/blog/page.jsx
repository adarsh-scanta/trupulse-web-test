'use client'
import Main from './Main'
import { useState, useEffect } from 'react'
import { db } from '../firebase.js'
import { collection, query, orderBy, onSnapshot, getDocs } from 'firebase/firestore'

export default function Page() {
  const [posts, setPosts] = useState([])
  const [sortedPosts, setSortedPosts] = useState([])
  const [publishedPost, setPublishedPost] = useState([])
  useEffect(() => {
    setSortedPosts(posts?.sort((a, b) => b.data.created_at.seconds - a.data.created_at.seconds))
  }, [posts])
  useEffect(() => {
    setPublishedPost(sortedPosts?.filter((item) => item?.data?.isPublished))
  }, [sortedPosts])
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
  // const q = query(collection(db, 'posts'))
  // var posts = []
  // var sortedPosts = []
  // onSnapshot(q, (querySnapshot) => {
  //   // const temp
  //   posts = querySnapshot.docs.map((doc) => ({
  //     id: doc.id,
  //     data: doc.data(),
  //   }))
  //   sortedPosts = posts?.sort((a, b) => b.data.created_at.seconds - a.data.created_at.seconds)
  //   console.log(sortedPosts)
  // })
  return <Main posts={publishedPost} />
}
