import ComparisonSlider from './ComparisonSlider'
import FeatureItem from './FeatureItem'
import {
  ApplePayIcon,
  GooglePayIcon,
  MadeFreshIcon,
  MastercardIcon,
  PayPalIcon,
  PremiumIngredientIcon,
  RealFoodIcon,
  ShieldIcon,
  VetDevelopedIcon,
  VisaIcon,
} from './icons'

export default function FeatureSection() {
  return (
    <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1040px]">
        <h2 className="mx-auto max-w-[520px] text-center text-[28px] font-bold leading-[1.2] tracking-tight text-[#1A1A1A] sm:text-[32px] lg:text-[36px]">
          What makes us different
          <br />
          makes them stronger
        </h2>

        <div className="mt-10 flex flex-col items-center gap-10 lg:mt-14 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-6 xl:gap-10">
          <div className="order-1 flex w-full max-w-[320px] flex-col gap-10 lg:max-w-none lg:gap-20 lg:pr-2">
            <FeatureItem
              align="left"
              title="Real Food"
              description="Wholesome recipes for dogs with real meat and veggies."
              icon={<RealFoodIcon />}
              iconBg="bg-[#E4F4E8]"
            />
            <FeatureItem
              align="left"
              title="Premium Ingredient"
              description="Elevating pet care with unmatched safety and quality."
              icon={<PremiumIngredientIcon />}
              iconBg="bg-[#F5EDE4]"
            />
          </div>

          <div className="order-2">
            <ComparisonSlider />
          </div>

          <div className="order-3 flex w-full max-w-[320px] flex-col gap-10 lg:max-w-none lg:gap-20 lg:pl-2">
            <FeatureItem
              align="right"
              title="Made Fresh"
              description="We prioritize maintaining the integrity of whole foods and nutrition."
              icon={<MadeFreshIcon />}
              iconBg="bg-[#E0F4F4]"
            />
            <FeatureItem
              align="right"
              title="Vet Developed"
              description="We raise the bar for dog nutrition, surpassing industry expectations."
              icon={<VetDevelopedIcon />}
              iconBg="bg-[#FAEAE4]"
            />
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-[420px] sm:mt-12 lg:max-w-[440px]">
          <button
            type="button"
            className="w-full rounded-md bg-[#D07A56] px-6 py-3.5 text-base font-bold text-white shadow-[0_2px_0_#B8684A] transition-colors hover:bg-[#C4724F] active:bg-[#B8684A]"
          >
            Get your dog&apos;s healthy meal today!
          </button>

          <div className="mt-4 flex flex-col items-center justify-between gap-3 sm:flex-row sm:gap-4">
            <div className="flex items-center gap-1.5">
              <ShieldIcon />
              <span className="text-xs text-[#9CA3AF]">
                30-day money back guarantee
              </span>
            </div>
            <div className="flex items-center gap-2.5 opacity-80">
              <PayPalIcon />
              <VisaIcon />
              <MastercardIcon />
              <ApplePayIcon />
              <GooglePayIcon />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
