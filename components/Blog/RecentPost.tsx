import Image from 'next/image'
import PrimaryBlogCard from './PrimaryBlogCard'
import SecondBlogCard from './SecondBlogCard'

const FirstTile = ({posts}) => {
  return (
    <div className="grid grid-cols-1 gap-8 py-4 md:grid-cols-5">
      <div className="col-span-2 py-4">
        <PrimaryBlogCard post={posts[0]} />
      </div>
      <div className="col-span-3 flex flex-col py-4">
        <div>
          <SecondBlogCard post={posts[1]} />
        </div>
        <div>
          <SecondBlogCard post={posts[2]} />
        </div>
      </div>
    </div>
  )
}
export default FirstTile
