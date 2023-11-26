import Image from 'next/image'

const FirstTile = () => {
  return (
    <div className="mx-auto flex max-w-3xl items-center justify-between py-5 xl:max-w-5xl ">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <div className="overflow-hidden rounded">
            <img src="/static/images/Group-90271.svg" alt="art" className="mx-auto mt-24 w-4/5" />
          </div>
        </div>
        <div className="py-8">
          <div className="overflow-hidden rounded ">
            <div className="my-3 self-stretch font-Poppins text-3xl font-bold leading-10 text-zinc-900">
              Our Product
            </div>
            <div className="self-stretch font-[lora] text-lg font-normal leading-[30px] text-greyText ">
              TruePulse combines the tools companies already use like Microsoft Teams and Slack with
              next generation AI technology to help get real time, automated and continuous employee
              insights. Make decisions that impact the employee experience, employee engagement and
              workplace culture based on current insights, not outdated surveys. Know about problem
              areas as they emerge instead of waiting for issues to manifest. Track cultural health
              based on real data not historical assumptions. TruPulse provides information and
              analytics you don’t currently have. By combining HR Technology and Workplace
              Psychology, company leaders can discover better employee insights to improve the
              workplace, all while respecting and protecting individual privacy
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default FirstTile
