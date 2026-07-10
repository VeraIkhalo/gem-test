import HappyDog from '../../assets/happy-dog.svg'
import KeyPointItem from './KeyPointItem'

const keyPoints = [
  {
    percentage: '97%',
    description:
      'Dogs choose our dog food over leading brands because of its real functional ingredients and delicious flavor.',
  },
  {
    percentage: '84%',
    description:
      'Our dog food provides superior nutrition and a patented probiotic for optimal nutrient absorption.',
  },
  {
    percentage: '92%',
    description:
      "Our dog food's high protein and fat digestibility contribute to ideal stool quality.",
  },
] as const

export default function NutritionSection() {
  return (
    <section className="bg-[#F8F8F8] px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
      <div className="mx-auto grid max-w-[1100px] items-center gap-8 lg:grid-cols-2 lg:gap-10 xl:gap-16">
        <div className="flex flex-col">
          <h2 className="text-[36px] font-semibold leading-[1.25] tracking-tight text-[#161723] sm:text-[32px] lg:text-[36px]">
            Nutrition is the foundation for longer, healthier lives in dogs.
          </h2>

          <p className="mt-2 leading-relaxed text-[#424153] sm:text-[15px] lg:mt-3">
            Invest in your dog&apos;s future with our scientifically formulated
            superfood-powered supplements. Give them the nutrition they deserve
            and watch them thrive with vitality, energy, and the joy of a longer,
            healthier life.
          </p>

          <div className="mt-6 lg:mt-6">
            <h3 className="text-[19px] font-semibold text-[#161723]">Key Points:</h3>
            <div>
              {keyPoints.map((point) => (
                <KeyPointItem
                  key={point.percentage}
                  percentage={point.percentage}
                  description={point.description}
                />
              ))}
            </div>
          </div>

          <button
            type="button"
            className="mt-4 w-full rounded-md bg-[#EE6F4B] px-6 py-3.5 text-sm font-semibold text-white sm:mt-10 sm:text-[15px]"
          >
            Give your furry friend the gift of wholesome nutrition
          </button>
        </div>

        <div className="overflow-hidden rounded-2xl">
          <img
            src={HappyDog}
            alt="Happy dog with Happy Dog Bites food pouch"
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>
    </section>
  )
}
