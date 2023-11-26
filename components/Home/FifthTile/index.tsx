import Image from 'next/image'

const FifthTile = () => {
  return (
    <div className="mx-auto flex max-w-3xl items-center justify-between py-5 xl:max-w-5xl">
      <div className="py-10">
        <div className="overflow-hidden rounded bg-white">
          <div className="text-center font-Poppins text-3xl font-bold leading-[60px] text-zinc-900">
            Import Data From Your HRIS Systems
          </div>
          <div className=" text-center font-[lora] text-xl font-normal leading-[30px] text-greyText">
            TruPulse integrates seamlessly with the most popular HRIS tools. Import data to filter
            insights by any employee category. All data is de-identified before processing so
            companies get the benefit of seeing results by groups while respecting and protecting
            employee privacy.
          </div>
        </div>

        <img src="/static/images/HRIS-logos.svg" alt="art" className="mx-auto mt-10 w-full" />
      </div>
    </div>
  )
}
export default FifthTile
