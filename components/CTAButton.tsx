const CTAButton = ({ type }) => {
  return type === 'demo' ? (
    <button id="demoButton" className="font-[lora]">
      See a Demo
    </button>
  ) : (
    <button id="contactButton" className="font-[lora]">
      Contact Sales
    </button>
  )
}
export default CTAButton
