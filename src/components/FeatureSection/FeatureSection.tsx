import dogFood from '../../assets/dog-food.svg'
import realFood from '../../assets/real-food.svg'
import premiumIngredient from '../../assets/premium-ingredient.svg'
import madeFresh from '../../assets/made-fresh.svg'
import vetDeveloped from '../../assets/vet-developed.svg'
import shield from '../../assets/icons/shield.svg'
import paypal from '../../assets/icons/paypal.svg'
import visa from '../../assets/icons/visa.svg'
import mastercard from '../../assets/icons/mastercard.svg'
import applePay from '../../assets/icons/pay.svg'
import googlePay from '../../assets/icons/g-pay.svg'
import FeatureItem from './FeatureItem'

const leftFeatures = [
  {
    title: 'Real Food',
    description: 'Wholesome recipes for dogs with real meat and veggies.',
    icon: realFood,
  },
  {
    title: 'Premium Ingredient',
    description: 'Elevating pet care with unmatched safety and quality.',
    icon: premiumIngredient,
  },
]

const rightFeatures = [
  {
    title: 'Made Fresh',
    description:
      'We prioritize maintaining the integrity of whole foods and nutrition.',
    icon: madeFresh,
  },
  {
    title: 'Vet Developed',
    description:
      'We raise the bar for dog nutrition, surpassing industry expectations.',
    icon: vetDeveloped,
  },
]

export default function FeatureSection() {
  return (
    <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1100px]">
        <h2 className="mx-auto max-w-[520px] text-center text-[28px] font-semibold leading-tight tracking-tight text-ink sm:text-[32px] lg:text-[40px]">
          What makes us different
          <br />
          makes them stronger
        </h2>

        <div className="mt-10 flex flex-col items-center gap-10 lg:mt-14 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-6 xl:gap-10">
          <div className="flex w-full max-w-[320px] flex-col gap-10 lg:max-w-none lg:gap-20 lg:pr-2">
            {leftFeatures.map((feature) => (
              <FeatureItem key={feature.title} side="left" {...feature} />
            ))}
          </div>

          <img
            src={dogFood}
            alt="Comparison of fresh dog food and kibble"
            className="size-[280px] sm:size-[340px] lg:size-[380px]"
          />

          <div className="flex w-full max-w-[320px] flex-col gap-10 lg:max-w-none lg:gap-20 lg:pl-2">
            {rightFeatures.map((feature) => (
              <FeatureItem key={feature.title} side="right" {...feature} />
            ))}
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-[440px] sm:mt-12">
          <button
            type="button"
            className="w-full rounded-md bg-brand px-6 py-3.5 text-base font-semibold text-white"
          >
            Get your dog&apos;s healthy meal today!
          </button>

          <div className="mt-4 flex flex-col items-center justify-between gap-3 sm:flex-row sm:gap-4">
            <div className="flex items-center gap-1.5">
              <img src={shield} alt="" className="size-4" />
              <span className="text-[13px] text-body">30-day money back guarantee</span>
            </div>

            <div className="flex items-center gap-2.5 opacity-80">
              <img src={paypal} alt="PayPal" className="h-[18px] w-auto" />
              <img src={visa} alt="Visa" className="h-[18px] w-auto" />
              <img src={mastercard} alt="Mastercard" className="h-[18px] w-auto" />
              <img src={applePay} alt="Apple Pay" className="h-[18px] w-auto" />
              <img src={googlePay} alt="Google Pay" className="h-[18px] w-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
