import happyDog from '../../assets/happy-dog.svg'
import KeyPointItem from './KeyPointItem'

const stats = [
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
]

export default function NutritionSection() {
  return (
    <section className="bg-panel px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
      <div className="mx-auto grid max-w-[1100px] items-center gap-8 lg:grid-cols-2 lg:gap-10 xl:gap-16">
        <div>
          <h2 className="text-[32px] font-semibold leading-tight tracking-tight text-ink lg:text-[36px]">
            Nutrition is the foundation for
            <br />
            longer, healthier lives in dogs.
          </h2>

          <p className="mt-3 leading-relaxed text-body">
            Invest in your dog&apos;s future with our scientifically formulated
            superfood-powered supplements. Give them the nutrition they deserve
            and watch them thrive with vitality, energy, and the joy of a longer,
            healthier life.
          </p>

          <div className="mt-6">
            <h3 className="text-[19px] font-semibold text-ink">Key Points:</h3>
            <div>
              {stats.map((stat) => (
                <KeyPointItem
                  key={stat.percentage}
                  percentage={stat.percentage}
                  description={stat.description}
                />
              ))}
            </div>
          </div>

          <button
            type="button"
            className="mt-10 w-full rounded-md bg-brand px-6 py-3.5 text-sm font-semibold text-white sm:text-[15px]"
          >
            Give your furry friend the gift of wholesome nutrition
          </button>
        </div>

        <div className="overflow-hidden rounded-2xl">
          <img
            src={happyDog}
            alt="Dog sitting next to a Happy Dog Bites pouch"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
