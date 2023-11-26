import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import CTAButton from '../../components/CTAButton'
import '../../css/CTAButton.css'
import Image from 'next/image'
import Card from '@/components/Card'
import FeedbackCard from '@/components/FeedbackCard'
import FirstTile from '@/components/Product/FirstTile'
import SecondTile from '@/components/Product/SecondTile'
import ThirdTile from '@/components/Product/ThirdTile'
import FourthTile from '@/components/Product/FourthTile'
import FifthTile from '@/components/Product/FifthTile'
import SixthTile from '@/components/Product/SixthTile'

export default function Home() {
  return (
    <>
      <div className="divide-y divide-gray-200  dark:divide-gray-700 ">
        <div className="space-y-8 pb-8 pt-40 md:space-y-5">
          <h1 className="leading-16 flex justify-center text-center font-Poppins text-5xl font-bold tracking-tight text-gray-900 ">
            Surveying Employees
            <br /> Without Surveys
          </h1>
          <p className="text-center font-[lora] text-xl leading-7 text-greyText ">
            TruPulse is an AI platform that helps you understand employees without running
            traditional surveys.
          </p>
        </div>
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
          <source src="https://scanta-web-resources.s3.amazonaws.com/videos/product-top.mp4" type="video/mp4" />
          Your browser does not support HTML video.
        </video>
      </div>

      <FirstTile />
      <SecondTile />
      <ThirdTile />
      <FourthTile />
      <FifthTile />
      <SixthTile />
    </>
  )
}
