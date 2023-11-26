import Image from 'next/image'

const FirstTile = () => {
  return (
    <div className="mx-auto flex max-w-3xl items-center justify-between py-5 xl:max-w-5xl ">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="py-8 ">
          <div className="overflow-hidden rounded ">
            <div className="font-Poppins my-3 self-stretch text-3xl font-bold leading-10 text-zinc-900">
              Measure Company Supporters & Detractors{' '}
            </div>
            <div className="self-stretch font-[lora] text-xl font-normal leading-[30px] text-greyText ">
              Gauge employee satisfaction by seeing what percentage of the workforce is a company
              supporter vs detractor. Knowing when your policies are successful comes down to
              understanding employee satisfaction.
            </div>
          </div>
        </div>
        <div className="items-center overflow-hidden rounded">
          <video
            className="mx-auto my-8 w-4/5"
            width="100%"
            controls
            loop
            autoPlay
            muted
            poster="/static/images/Hero-Video.png"
            style={{
              // margin: '4rem 1rem 10rem',
              borderRadius: '15px',
              boxShadow: 'rgb(128, 128, 128) 1px 4px 19px -4px',
            }}
          >
            <source
              src="https://scanta-web-resources.s3.amazonaws.com/videos/supporter.mp4"
              type="video/mp4"
            />
            Your browser does not support HTML video.
          </video>
        </div>
      </div>
    </div>
  )
}
export default FirstTile
