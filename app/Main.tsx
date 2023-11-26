import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import CTAButton from '../components/CTAButton'
import '../css/CTAButton.css'
import Image from 'next/image'
import Card from '@/components/Card'
import FeedbackCard from '@/components/FeedbackCard'
import FirstTile from '@/components/Home/FirstTile'
import SecondTile from '@/components/Home/SecondTile'
import ThirdTile from '@/components/Home/ThirdTile'
import FourthTile from '@/components/Home/FourthTile'
import FifthTile from '@/components/Home/FifthTile'
const MAX_DISPLAY = 5

export default function Home() {
  return (
    <>
      <div
        className="divide-y divide-gray-200 bg-gradient-to-b from-pink from-60% to-white  to-90% dark:divide-gray-700 "
      >
        <div className="space-y-8 pb-8 pt-40 md:space-y-5">
          <h1 className="font-Poppins flex justify-center text-3xl  font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            <svg
              width="53"
              height="60"
              viewBox="0 0 53 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27.3641 22.0043L28.2355 17.647L29.107 22.0043C30.7165 30.052 37.0071 36.3426 45.0547 37.9521L49.4119 38.8235L45.0547 39.695C37.0071 41.3045 30.7165 47.5951 29.107 55.6427L28.2355 60L27.3641 55.6427C25.7546 47.5951 19.464 41.3045 11.4164 39.695L7.05913 38.8235L11.4164 37.9521C19.464 36.3426 25.7546 30.052 27.3641 22.0043Z"
                fill="black"
              />
              <path
                d="M10.1525 2.17864L10.5882 0L11.0239 2.17864C11.8287 6.20242 14.9739 9.34772 18.9978 10.1525L21.1764 10.5882L18.9978 11.024C14.9739 11.8287 11.8287 14.974 11.0239 18.9978L10.5882 21.1765L10.1525 18.9978C9.34769 14.974 6.2024 11.8287 2.17863 11.024L0 10.5882L2.17863 10.1525C6.2024 9.34772 9.34769 6.20242 10.1525 2.17864Z"
                fill="black"
              />
              <path
                d="M45.5921 4.98183L45.8825 3.52937L46.173 4.98183C46.7095 7.66438 48.8064 9.76119 51.4889 10.2977L52.9414 10.5883L51.4889 10.8787C48.8064 11.4152 46.7095 13.5121 46.173 16.1946L45.8825 17.6471L45.5921 16.1946C45.0555 13.5121 42.9587 11.4152 40.2762 10.8787L38.8237 10.5883L40.2762 10.2977C42.9587 9.76119 45.0555 7.66438 45.5921 4.98183Z"
                fill="black"
              />
            </svg>
            AI Powered people Analytics
          </h1>
          <p className="text-center font-[lora] text-lg leading-7 ">{siteMetadata.description}</p>
          <div className="text-center">
            <CTAButton type="demo" />
            <CTAButton type="contact" />
          </div>
        </div>
        {/* <img className="mx-auto my-8 w-3/5" src="/static/images/Hero-Video.png" alt="Hero-Video" /> */}
        <video
          className="mx-auto my-8 w-3/5"
          width="100%"
          controls
          autoPlay
          loop
          muted
          poster="/static/images/Hero-Video.png"
          style={{
            // margin: '4rem 1rem 10rem',
            borderRadius: '15px',
            boxShadow: 'rgb(128, 128, 128) 1px 4px 19px -4px',
          }}
        >
          <source
            src="https://scanta-web-resources.s3.amazonaws.com/videos/home-top.mp4"
            type="video/mp4"
          />
          Your browser does not support HTML video.
        </video>
      </div>
      {/* <div>
        <div className="text-center">
          <p>Testimonials</p>
          <h2>Our Customers & Partners</h2>
          <FeedbackCard
            name="texst"
            position="www.google.com"
            text={'test'}
            imageSrc="/static/images/Hero-Video.png"
          />
        </div>
      </div> */}
      <div className="bg-gradient-to-r from-lrGradiantPink from-10% to-white  to-100%">
        <FirstTile />
      </div>
      <SecondTile />
      <div className="bg-gradient-to-r from-lrGradiantPink from-10% to-white  to-100%">
        <ThirdTile />
      </div>
      <FourthTile />
      <FifthTile />
    </>
  )
}
