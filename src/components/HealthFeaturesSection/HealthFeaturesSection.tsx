import dogs from '../../assets/dogs.svg'
import food from '../../assets/food.svg'
import FeatureRow from './FeatureRow'

const rows = [
  {
    title: 'Improve overall gastrointestinal health for better nutrient absorption',
    description:
      "Through rigorous scientific studies and consultations with veterinarians, we have created a breakthrough formula exclusively tailored to combat the health challenges prevalent in dogs. A staggering 91% of our customers have reported significant improvements in their dogs' health after incorporating our product into their diet.",
    image: dogs,
    imageAlt: 'Two dogs eating from white bowls',
  },
  {
    title: 'Prebiotics nourish the beneficial gut bacteria, supporting digestive health',
    description:
      'Our dog food formula contains carefully selected prebiotics that work in harmony with the gut microbiota, providing the necessary nutrients for the growth and maintenance of beneficial bacteria, ultimately supporting digestive health.',
    image: food,
    imageAlt: 'Close-up of dog food kibble',
    reverse: true,
  },
]

export default function HealthFeaturesSection() {
  return (
    <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
      <div className="mx-auto flex max-w-275 flex-col gap-16 lg:gap-24 xl:gap-28">
        {rows.map((row) => (
          <FeatureRow key={row.title} {...row} />
        ))}
      </div>
    </section>
  )
}
