import AssetIcon from './AssetIcon'
import DogFood from '../../assets/dog-food.svg'
import FeatureItem from './FeatureItem'
import ApplePayIcon from '../../assets/icons/pay.svg'
import GooglePayIcon from '../../assets/icons/g-pay.svg'
import MadeFreshIcon from '../../assets/made-fresh.svg'
import MastercardIcon from '../../assets/icons/mastercard.svg'
import PayPalIcon from '../../assets/icons/paypal.svg'
import PremiumIngredientIcon from '../../assets/premium-ingredient.svg'
import VisaIcon from '../../assets/icons/visa.svg'
import ShieldIcon from '../../assets/icons/shield.svg'
import VetDevelopedIcon from '../../assets/vet-developed.svg'
import RealFoodIcon from '../../assets/real-food.svg'

export default function FeatureSection() {
  return (
    <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1100px]">
        <h2 className="mx-auto max-w-[520px] text-center text-[28px] font-semibold leading-[1.2] tracking-tight text-[#161723] sm:text-[32px] lg:text-[40px]">
          What makes us different
          <br />
          makes them stronger
        </h2>

        <div className="mt-10 flex flex-col items-center gap-10 lg:mt-14 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-6 xl:gap-10">
          <div className="order-1 flex w-full max-w-[320px] flex-col gap-10 lg:max-w-none lg:gap-20 lg:pr-2">
            <FeatureItem
              align="right"
              title="Real Food"
              description="Wholesome recipes for dogs with real meat and veggies."
              icon={<AssetIcon src={RealFoodIcon} />}
              iconBg="bg-[#E4F4E8]"
            />
            <FeatureItem
              align="right"
              title="Premium Ingredient"
              description="Elevating pet care with unmatched safety and quality."
              icon={<AssetIcon src={PremiumIngredientIcon} />}
              iconBg="bg-[#F5EDE4]"
            />
          </div>

          <div className="order-2">
            <img src={DogFood} alt="Dog food comparison" className="mx-auto size-[280px] sm:size-[340px] lg:size-[380px]" />
          </div>

          <div className="order-3 flex w-full max-w-[320px] flex-col gap-10 lg:max-w-none lg:gap-20 lg:pl-2">
            <FeatureItem
              align="right"
              title="Made Fresh"
              description="We prioritize maintaining the integrity of whole foods and nutrition."
              icon={<AssetIcon src={MadeFreshIcon} />}
              iconBg="bg-[#E0F4F4]"
            />
            <FeatureItem
              align="right"
              title="Vet Developed"
              description="We raise the bar for dog nutrition, surpassing industry expectations."
              icon={<AssetIcon src={VetDevelopedIcon} />}
              iconBg="bg-[#FAEAE4]"
            />
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-[420px] sm:mt-12 lg:max-w-[440px]">
          <button
            type="button"
            className="w-full rounded-md bg-[#EE6F4B] px-6 py-3.5 text-base font-semibold text-white"
          >
            Get your dog&apos;s healthy meal today!
          </button>

          <div className="mt-4 flex flex-col items-center justify-between gap-3 sm:flex-row sm:gap-4">
            <div className="flex items-center gap-1.5">
              <AssetIcon src={ShieldIcon} className="size-4" />
              <span className="text-[13px] text-[#424153]">
                30-day money back guarantee
              </span>
            </div>
            <div className="flex items-center gap-2.5 opacity-80">
              <AssetIcon src={PayPalIcon} className="h-[18px] w-auto" />
              <AssetIcon src={VisaIcon} className="h-[18px] w-auto" />
              <AssetIcon src={MastercardIcon} className="h-[18px] w-auto" />
              <AssetIcon src={ApplePayIcon} className="h-[18px] w-auto" />
              <AssetIcon src={GooglePayIcon} className="h-[18px] w-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
