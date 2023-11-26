import Image from 'next/image'

const FirstTile = () => {
  return (
    <div className="mx-auto flex max-w-3xl items-center justify-center py-5 xl:max-w-5xl ">
      <div className="flex w-full flex-col">
        <div className="my-3 self-stretch text-center font-Poppins text-3xl font-bold leading-10 text-zinc-900">
          Our Team
        </div>
        <div className="self-stretch mb-12 font-[lora] text-lg font-normal leading-[30px] text-greyText ">
          Meet our team of passionate entrepreneurs, seasoned business executives and technical
          visionaries. Together the worldwide Scanta team is looking to uncover, develop and deploy
          AI solutions to help companies understand their employees to build a better workplace.
        </div>
        <div className="grid grid-cols-1  gap-24 gap-4 sm:grid-cols-3">
          <div className="my-3 flex flex-col justify-center self-stretch font-Poppins  leading-10 text-zinc-900">
            <img src="/static/images/chad.png" alt="chad" className="mx-auto w-3/5 " />
            <div className="my-8 leading-6">
              <p className="text-center text-lg font-semibold text-blackText">Chaitanya Hiremath</p>
              <p className="font-base my-0 text-center font-[lora] text-greyText">CEO</p>
              <p className="font-base text-center font-[lora] text-greyText">Co-Founder</p>
            </div>
          </div>
          <div className="my-3 flex flex-col justify-center self-stretch font-Poppins  leading-10 text-zinc-900">
            <img src="/static/images/john.png" alt="chad" className="mx-auto w-3/5  " />
            <div className="my-8 leading-6">
              <p className="text-center text-lg font-semibold text-blackText">John Bloomer</p>
              <p className="font-base my-0 text-center font-[lora] text-greyText">CTO</p>
              <p className="font-base text-center font-[lora] text-greyText">Co-Founder</p>
            </div>
          </div>
          <div className="my-3 flex flex-col justify-center self-stretch font-Poppins  leading-10 text-zinc-900">
            <img src="/static/images/dirk.png" alt="chad" className="mx-auto w-3/5  " />
            <div className="my-8 leading-6">
              <p className="text-center text-lg font-semibold text-blackText">Dirk Peters</p>
              <p className="font-base my-0 text-center font-[lora] font-semibold text-greyText">
                CRO
              </p>
              <p className="font-base text-center font-[lora] font-semibold text-greyText">
                Co-Founder
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default FirstTile
