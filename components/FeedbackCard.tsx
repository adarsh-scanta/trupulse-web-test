import Image from './Image'
import Link from './Link'

const FeedbackCard = ({ name, position, text, imageSrc }) => (
  <div>
    <div className="flex flex-wrap justify-center">
      {/* Card 1 */}
      <div className="w-full p-4 sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3">
        <div className="max-w-md overflow-hidden rounded bg-grey shadow-lg">
          <div className="relative">
            <img
              className="absolute left-8 top-8 h-16 w-16 rounded-full object-cover"
              src={imageSrc}
              alt="Profile Picture"
            />
          </div>
          <div className="p-6 md:p-8 lg:p-10">
            <div className="flex flex-col items-start justify-between md:flex-row md:items-center">
              <div className="mb-4 md:mb-0 md:mr-4">
                <p className="text-xl font-bold md:text-2xl lg:text-3xl">John Doe</p>
                <p className="text-sm text-gray-600 md:text-base lg:text-lg">Position</p>
              </div>
            </div>
            <p className="mt-4 text-gray-700 md:mt-6 lg:mt-8">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero
              malesuada feugiat."
            </p>
          </div>
        </div>
      </div>
      <div className="w-full p-4 sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3">
        <div className="max-w-md overflow-hidden rounded bg-white shadow-lg">
          <div className="relative">
            <img
              className="absolute -left-4 -top-4 h-16 w-16 rounded-full object-cover md:h-20 md:w-20 lg:h-24 lg:w-24"
              src={imageSrc}
              alt="Profile Picture"
            />
          </div>
          <div className="p-6 md:p-8 lg:p-10">
            <div className="flex flex-col items-start justify-between md:flex-row md:items-center">
              <div className="mb-4 md:mb-0 md:mr-4">
                <p className="text-xl font-bold md:text-2xl lg:text-3xl">John Doe</p>
                <p className="text-sm text-gray-600 md:text-base lg:text-lg">Position</p>
              </div>
            </div>
            <p className="mt-4 text-gray-700 md:mt-6 lg:mt-8">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero
              malesuada feugiat."
            </p>
          </div>
        </div>
      </div>
      <div className="w-full p-4 sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3">
        <div className="max-w-md overflow-hidden rounded bg-white shadow-lg">
          <div className="relative">
            <img
              className="absolute -left-4 -top-4 h-16 w-16 rounded-full object-cover md:h-20 md:w-20 lg:h-24 lg:w-24"
              src={imageSrc}
              alt="Profile Picture"
            />
          </div>
          <div className="p-6 md:p-8 lg:p-10">
            <div className="flex flex-col items-start justify-between md:flex-row md:items-center">
              <div className="mb-4 md:mb-0 md:mr-4">
                <p className="text-xl font-bold md:text-2xl lg:text-3xl">John Doe</p>
                <p className="text-sm text-gray-600 md:text-base lg:text-lg">Position</p>
              </div>
            </div>
            <p className="mt-4 text-gray-700 md:mt-6 lg:mt-8">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero
              malesuada feugiat."
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="w-[1212px] h-[306px] pl-6 justify-end items-center gap-12 inline-flex">
    <div className="w-[328.24px] p-[19.45px] bg-stone-50 rounded-[19.45px] border-2 border-zinc-300 flex-col justify-start items-start gap-[12.97px] inline-flex">
        <div className="self-stretch justify-center items-center gap-[12.97px] inline-flex">
            <img className="w-[48.63px] h-[48.63px] rounded-full" src="https://via.placeholder.com/49x49" />
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-[3.24px] inline-flex">
                <div className="text-zinc-900 text-base font-bold font-['Lora'] leading-normal">Jack Sullivan</div>
                <div className="self-stretch text-zinc-700 text-xs font-normal font-['Lora'] leading-none">Chief Resiliency and Security Officer, Boston Scientific</div>
            </div>
        </div>
        <div className="self-stretch text-zinc-700 text-[12.97px] font-normal font-['Poppins'] leading-tight">"Companies are just too big and dispersed for managers to walk the office floors and understand the mood of the workforce. AI based technology can help provide employee insights automatically. TruPulse can be a game changer for people analytics."</div>
    </div>
    <div className="w-[405px] h-[306px] p-6 bg-stone-50 rounded-3xl border-2 border-zinc-300 flex-col justify-start items-start gap-4 inline-flex">
        <div className="self-stretch justify-center items-center gap-4 inline-flex">
            <img className="w-[60px] h-[60px] rounded-full" src="https://via.placeholder.com/60x60" />
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                <div className="text-zinc-900 text-xl font-bold font-['Lora'] leading-[30px]">Danielle Strazzo</div>
                <div className="self-stretch text-zinc-700 text-sm font-normal font-['Lora'] leading-tight">VP of HR, BD</div>
            </div>
        </div>
        <div className="self-stretch text-zinc-700 text-base font-normal font-['Poppins'] leading-normal">"We cannot fully deliver for our customers, and execute the business agenda, without an engaged workforce. TruPulse delivers insights into your employees' state, arming you to make positive changes to the experience without the burden of surveys."</div>
    </div>
    <div className="w-[328.24px] h-[248px] p-[19.45px] bg-stone-50 rounded-[19.45px] border-2 border-zinc-300 flex-col justify-start items-start gap-[12.97px] inline-flex">
        <div className="self-stretch justify-center items-center gap-[12.97px] inline-flex">
            <img className="w-[48.63px] h-[48.63px] rounded-full" src="https://via.placeholder.com/49x49" />
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-[3.24px] inline-flex">
                <div className="text-zinc-900 text-base font-bold font-['Lora'] leading-normal">Richard E. Beyer</div>
                <div className="self-stretch text-zinc-700 text-xs font-normal font-['Lora'] leading-none">Fmr Secretary of Labor, State of Kansas</div>
            </div>
        </div>
        <div className="self-stretch text-zinc-700 text-[12.97px] font-normal font-['Poppins'] leading-tight">"For years, I administered surveys in organizations. Although invaluable, feedback represented a snapshot in time. To monitor the pulse of organizations on a realtime, continual basis, the AI-driven TruPulse platform is a highly effective strategy."</div>
    </div>
    <div className="w-[405px] h-[306px] p-6 bg-stone-50 rounded-3xl border-2 border-zinc-300 flex-col justify-start items-start gap-4 inline-flex">
        <div className="self-stretch justify-center items-center gap-4 inline-flex">
            <img className="w-[60px] h-[60px] rounded-full" src="https://via.placeholder.com/60x60" />
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                <div className="text-zinc-900 text-xl font-bold font-['Lora'] leading-[30px]">Nathan Mondragon, Ph.D.</div>
                <div className="self-stretch text-zinc-700 text-sm font-normal font-['Lora'] leading-tight">Chief IO Psychologist, HireVue</div>
            </div>
        </div>
        <div className="self-stretch text-zinc-700 text-base font-normal font-['Poppins'] leading-normal">"Improving the workplace experience improves employee engagement and retention. The dynamic insights uncovered by TruPulse will help HR teams improve your workplace with real time, AI driven data that other departments have had for years"</div>
    </div>
    <div className="w-[405px] h-[306px] p-6 bg-stone-50 rounded-3xl border-2 border-zinc-300 flex-col justify-start items-start gap-4 inline-flex">
        <div className="self-stretch justify-center items-center gap-4 inline-flex">
            <img className="w-[60px] h-[60px] rounded-full" src="https://via.placeholder.com/60x60" />
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                <div className="text-zinc-900 text-xl font-bold font-['Lora'] leading-[30px]">Dan Mcculloch</div>
                <div className="self-stretch text-zinc-700 text-sm font-normal font-['Lora'] leading-tight">VP, GM of Full Circle, EA</div>
            </div>
        </div>
        <div className="self-stretch text-zinc-700 text-base font-normal font-['Poppins'] leading-normal">"Employee surveys are amazing but usually very high level. With TruPulse I can see insights on employee morale at any altitude. I used to look forward to having survey results quarterly, now I can see those same results whenever I need them."</div>
    </div>
    <div className="w-[394px] h-[306px] p-6 bg-stone-50 rounded-3xl border-2 border-zinc-300 flex-col justify-start items-start gap-4 inline-flex">
        <div className="self-stretch justify-center items-center gap-4 inline-flex">
            <img className="w-[60px] h-[60px] rounded-full" src="https://via.placeholder.com/60x60" />
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                <div className="text-zinc-900 text-xl font-bold font-['Lora'] leading-[30px]">Mani Sundaram</div>
                <div className="self-stretch text-zinc-700 text-sm font-normal font-['Lora'] leading-tight">EVP & GM, Akamai Technologies</div>
            </div>
        </div>
        <div className="self-stretch text-zinc-700 text-base font-normal font-['Poppins'] leading-normal">"The idea of being able to call up a report on what employee morale is like at any time I want to is a powerful feature of TruPulse. Demographic breakdowns make the insights even more useful."</div>
    </div>
</div>
  </div>
)

export default FeedbackCard
