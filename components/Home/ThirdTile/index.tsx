import Image from 'next/image'

const ThirdTile = () => {
  return (
    <div className="mx-auto flex max-w-3xl items-center justify-between py-5 xl:max-w-5xl">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="py-16 flex items-center justify-center">
          <div className="overflow-hidden rounded ">
            <div className="font-['Lora'] text-lg font-semibold leading-7 text-pinkText">
              Why TruPulse Helps?
            </div>
            <div className="self-stretch font-Poppins text-3xl font-bold leading-10 text-zinc-900">
              Creating a Better Employee Experience
            </div>
            <div className="self-stretch font-[lora] text-xl font-normal leading-[30px] text-greyText">
              Understanding employees increases engagement, improves retention, and helps cultivate
              a healthy work culture. With TruPulse you see the most important employee insights
              everyday.
            </div>
          </div>
        </div>
        <div>
          <div className="overflow-hidden rounded ">
            <img src="/static/images/Variant-2.svg" alt="art" className="mx-auto mt-10 w-4/5" />
          </div>
        </div>
      </div>
    </div>
  )
}
export default ThirdTile
