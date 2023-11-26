import Image from 'next/image'

const FirstTile = () => {
  return (
    <div className="mx-auto flex max-w-3xl items-center justify-between py-5 xl:max-w-5xl ">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="flex items-center justify-center py-16">
          <div className="overflow-hidden rounded  ">
            <div className="my-3 self-stretch font-Poppins text-3xl font-bold leading-10 text-zinc-900">
              Contact Us
            </div>
            <div className="self-stretch font-[lora] text-xl font-normal leading-[30px] text-greyText ">
              Whether you have a question about our company or our products, we would love to hear
              from you!
            </div>
          </div>
        </div>
        <div>
          <div className="overflow-hidden rounded">
            <div className="shadow-personal my-10 flex flex-col gap-2 rounded-3xl rounded-[28px] border border-slate-200 bg-white p-4 xl:h-[100%] xl:gap-0 xl:p-10 xl:px-10">
              <form>
                <h4 className=" mt-2 p-3 text-center font-[lora] text-lg text-blackText">
                  Please submit the form and we will get back to you!{' '}
                </h4>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <input
                    type="text"
                    placeholder="First name"
                    name="First Name"
                    id="First Name"
                    required
                    className="my-3 rounded-xl border border-slate-200 p-3 font-[lora] shadow-sm focus:border-pinkText focus:ring-pinkText "
                  />
                  <input
                    type="text"
                    placeholder="Last name"
                    name="Last Name"
                    id="Last Name"
                    required
                    className="my-3 rounded-xl border border-slate-200 p-3 font-[lora] shadow-sm focus:border-pinkText focus:ring-pinkText "
                  />
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-1">
                  <input
                    type="text"
                    placeholder="Job Title"
                    name="Job Title"
                    id="Job Title"
                    required
                    className="my-3 rounded-xl border border-slate-200 p-3 font-[lora] shadow-sm focus:border-pinkText focus:ring-pinkText "
                  />
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-1">
                  <input
                    type="email"
                    placeholder="Email"
                    name="Email"
                    id="Email"
                    pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                    required
                    className="my-3 rounded-xl border border-slate-200 p-3 font-[lora] shadow-sm focus:border-pinkText focus:ring-pinkText "
                  />
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-1">
                  <input
                    type="text"
                    placeholder="Company"
                    name="Company"
                    id="Company"
                    required
                    className="my-3 rounded-xl border border-slate-200 p-3 font-[lora] shadow-sm focus:border-pinkText focus:ring-pinkText "
                  />
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-1">
                  <input
                    type="submit"
                    value="Subscribe"
                    id="Subscribe"
                    className="my-3 rounded-full border border-slate-200 bg-blackText p-3 font-[lora] text-white shadow-sm focus:border-pinkText focus:ring-pinkText "
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default FirstTile
