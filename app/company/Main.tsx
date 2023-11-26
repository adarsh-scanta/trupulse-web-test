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
import FirstTile from '@/components/Company/FirstTile'
import SecondTile from '@/components/Company/SecondTile'
import ThirdTile from '@/components/Company/ThirdTile'
import FourthTile from '@/components/Company/FourthTile'
export default function Home() {
  return (
    <>
      <div className="mt-12">
        <FirstTile />
        <div className="bg-gradient-to-r from-lrGradiantPink from-10% to-white  to-100%">
          <SecondTile />
        </div>
        <ThirdTile />
        <div className="bg-gradient-to-r from-lrGradiantPink from-10% to-white  to-100%">
          <FourthTile />
        </div>
      </div>
    </>
  )
}
