import BaseLayout from '@/components/layouts/BaseLayout'
import MenuCard from '@/components/ui/menu-card'

const specials = [
  {
    title: 'Spicy Tilapia Pepper Soup',
    description: 'A comforting and spicy soup with tender tilapia fish, a true Nigerian delicacy.',
    price: '₦3,500',
    image: '/images/fish.webp',
    href: '/product/tilapia-pepper-soup',
  },
  {
    title: 'Jollof Rice & Fried Chicken',
    description:
      'Our signature Jollof rice, cooked to perfection, served with succulent fried chicken.',
    price: '₦3,500',
    image: '/images/Property.webp',
    href: '/product/jollof-fried-chicken',
  },
  {
    title: 'Jollof Rice & Smoked Chicken',
    description:
      'Our signature Jollof rice, cooked to perfection, served with succulent smoked chicken.',
    price: '₦3,500',
    image: '/images/Property.webp',
    href: '/product/jollof-smoked-chicken',
  },
  {
    title: 'Egusi Soup & Pounded Yam',
    description: 'Rich and savory Egusi soup with assorted meats, paired with freshly pounded yam.',
    price: '₦3,500',
    image: '/images/Property.webp',
    href: '/product/egusi-pounded-yam',
  },
  {
    title: 'Egusi Soup & Pounded Yam',
    description: 'Rich and savory Egusi soup with assorted meats, paired with freshly pounded yam.',
    price: '₦3,500',
    image: '/images/rice.webp',
    href: '/product/egusi-pounded-yam',
  },
  {
    title: 'Egusi Soup & Pounded Yam',
    description: 'Rich and savory Egusi soup with assorted meats, paired with freshly pounded yam.',
    price: '₦3,500',
    image: '/images/egusi.webp',
    href: '/product/egusi-pounded-yam',
  },
]

export default function Popular() {
  return (
    <section className="bg-white py-12 md:py-16 lg:py-20">
      <BaseLayout>
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Chef's Specials
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {specials.map((item) => (
            <MenuCard
              key={item.href}
              title={item.title}
              description={item.description}
              price={item.price}
              image={item.image}
              href={item.href}
              buttonText="Add to cart"
            />
          ))}
        </div>
      </BaseLayout>
    </section>
  )
}
