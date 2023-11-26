import Image from 'next/image'

const SecondTile = () => {
  return (
    <div className="mx-auto flex max-w-3xl items-center justify-between py-5 xl:max-w-5xl">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <div className="overflow-hidden rounded ">
            <img src="/static/images/Group-52.svg" alt="art" className="mx-auto mt-10 w-4/5" />
          </div>
        </div>
        <div className="py-16 flex items-center justify-center">
          <div className="overflow-hidden rounded">
            <div className="flex h-[100px] flex-col items-start justify-start gap-3">
              <div className="font-['Lora'] text-lg font-semibold leading-7 text-pinkText">
                How Does TruPulse Work?
              </div>
              <div className="self-stretch font-Poppins text-3xl font-bold leading-10 text-zinc-900">
                AI Powered IO Psychology
              </div>
            </div>
            <div className="self-stretch font-[lora] text-xl font-normal leading-[30px] text-greyText">
              TruPulse uses AI algorithms trained by IO psychologists to integrate company
              communications tools like Microsoft Teams and Slack with data from HRIS system. to
              provide real-time insights on the employee experience.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default SecondTile
