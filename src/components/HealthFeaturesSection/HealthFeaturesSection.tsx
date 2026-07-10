import HappyDogs from '../../assets/dogs.svg'
import Food from '../../assets/food.svg'
import FeatureRow from './FeatureRow'

const features = [
  {
    title:
      'Improve overall gastrointestinal health for better nutrient absorption',
    description:
      'Through rigorous scientific studies and consultations with veterinarians, we have created a breakthrough formula exclusively tailored to combat the health challenges prevalent in dogs. A staggering 91% of our customers have reported significant improvements in their dogs\u2019 health after incorporating our product into their diet.',
    image: HappyDogs,
    imageAlt: 'Two dogs eating Happy Dog Bites from white bowls',
    reverse: false,
  },
  {
    title:
      'Prebiotics nourish the beneficial gut bacteria, supporting digestive health',
    description:
      'Our dog food formula contains carefully selected prebiotics that work in harmony with the gut microbiota, providing the necessary nutrients for the growth and maintenance of beneficial bacteria, ultimately supporting digestive health.',
    image: Food,
    imageAlt: 'Close-up of premium dog food kibble',
    reverse: true,
  },
] as const

export default function HealthFeaturesSection() {
  return (
    <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
      <div className="mx-auto flex max-w-[1100px] flex-col gap-16 lg:gap-24 xl:gap-28">
        {features.map((feature) => (
          <FeatureRow
            key={feature.title}
            title={feature.title}
            description={feature.description}
            image={feature.image}
            imageAlt={feature.imageAlt}
            reverse={feature.reverse}
          />
        ))}
      </div>
    </section>
  )
}
