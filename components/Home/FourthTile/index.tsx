import Image from 'next/image'

const FourthTile = () => {
  return (
    <div className="mx-auto flex max-w-3xl items-center justify-between py-5 xl:max-w-5xl">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="py-16 flex items-center justify-center">
          <div className="overflow-hidden rounded bg-white">
            <div className="self-stretch font-Poppins text-3xl font-bold leading-10 text-zinc-900">
              Integrating with the Most Popular Communication Platforms
            </div>
            <div className="self-stretch font-[lora] text-xl font-normal leading-[30px] text-greyText">
              TruPulse is an AI platform that automatically provides insights on employee morale,
              engagement, retention, trending workplace topics and workplace culture. TruPulse takes
              the work out of understanding the employee experience.
            </div>
          </div>
        </div>
        <div>
          <div className="overflow-hidden rounded mt-10">
            <img src="/static/images/Frame-81.svg" alt="art" className="mx-auto mt-10 w-4/5" />
          </div>
        </div>
      </div>
    </div>
  )
}
export default FourthTile
