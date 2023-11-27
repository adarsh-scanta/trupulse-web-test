import Main from './Main'
import { db } from '../firebase.js'
import { collection, getDocs } from 'firebase/firestore'

async function getData() {
  const postsRef = collection(db, 'posts')
  const snapshot = await getDocs(postsRef)
  const posts = snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
  const sortedPosts = posts?.sort((a, b) => b.data.created_at.seconds - a.data.created_at.seconds)
  const publishedPost = sortedPosts?.filter((item) => item?.data?.isPublished)
  console.log(publishedPost)
  return publishedPost
}
export default async function Page() {
  const data = await getData()
  return <Main posts={data} />
}
