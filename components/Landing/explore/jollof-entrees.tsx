import MenuCard from '@/components/ui/menu-card'
import BaseLayout from '@/components/layouts/BaseLayout'

const jollofItems = [
  {
    title: 'Jollof Rice & Smoked Fish',
    description: 'Flavorful jollof rice served with perfectly smoked fish.',
    price: '₦3,500',
    image: '/images/jollof.png',
    href: '/product/jollof-smoked-fish',
  },
  {
    title: 'Party Jollof Rice (Veg)',
    description: 'Vegetarian party jollof, full of rich flavors.',
    price: '₦2,800',
    image: '/images/Property.webp',
    href: '/product/party-jollof-veg',
  },
  {
    title: 'Party Jollof Rice (Veg)',
    description: 'Vegetarian party jollof, full of rich flavors.',
    price: '₦3,500',
    image: '/images/Property.webp',
    href: '/product/party-jollof-veg-2',
  },
]

export default function JollofEntrees() {
  return (
    <section className="bg-white py-12 md:py-16 lg:py-20">
      <BaseLayout>
        <div className="text-left mb-10 md:mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Jollof Rice & Entrees
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {jollofItems.map((item) => (
            <MenuCard
              key={item.href}
              title={item.title}
              description={item.description}
              price={item.price}
              image={item.image}
              href={item.href}
              buttonText="Add to cart"
              buttonVariant="icon"
            />
          ))}
        </div>
      </BaseLayout>
    </section>
  )
}
