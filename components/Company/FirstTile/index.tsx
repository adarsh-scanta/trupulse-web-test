import Image from 'next/image'

const FirstTile = () => {
  return (
    <div className="mx-auto my-8 flex max-w-3xl items-center justify-between py-5 xl:max-w-5xl ">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2" style={{ marginTop: '2rem' }}>
        <div className="py-16 flex items-center justify-center">
          <div className="overflow-hidden rounded ">
            <div className="my-3 self-stretch font-Poppins text-3xl font-bold leading-10 text-zinc-900">
              About Us
            </div>
            <div className="self-stretch font-[lora] text-lg font-normal leading-[30px] text-greyText ">
              Scanta is a San Francisco based company focused on providing AI solutions for
              conversational platforms. With deep experience in AI, natural language processing, IO
              psychology and cybersecurity, Scanta is uniquely positioned to understand human
              conversation. We use these skills to develop easy to use solutions for corporations
              looking to improve the employee experience.
            </div>
          </div>
        </div>
        <div>
          <div className="overflow-hidden rounded">
            <img src="/static/images/About.svg" alt="art" className="mx-auto mt-10 w-4/5" />
          </div>
        </div>
      </div>
    </div>
  )
}
export default FirstTile
