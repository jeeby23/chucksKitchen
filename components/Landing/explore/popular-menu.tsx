import MenuCard from '@/components/ui/menu-card'
import BaseLayout from '@/components/layouts/BaseLayout'

const popularItems = [
  {
    title: 'Jollof Rice & Fried Chicken',
    description:
      'Our signature Jollof rice, cooked to perfection, served with succulent fried chicken and plantain.',
    price: '₦3,500',
    image: '/images/Property.webp',
    href: '/product/jollof-fried-chicken',
  },
  {
    title: 'Eba & Egusi Soup (Goat Meat)',
    description: 'Hearty Egusi soup with tender goat meat, served with soft Eba.',
    price: '₦3,500',
    image: '/images/ex-po4.webp',
    href: '/product/eba-egusi-goat',
  },
  {
    title: 'Pounded Yam & Edikaikong',
    description: 'Traditional pounded yam with rich, leafy Edikaikong soup.',
    price: '₦3,800',
    image: '/images/ex-po3.webp',
    href: '/product/pounded-yam-edikaikong',
  },
  {
    title: 'Peppered Snail',
    description: 'Spicy and savory peppered snail, perfect as a starter.',
    price: '₦2,500',
    image: '/images/ex-po2.webp',
    href: '/product/peppered-snail',
  },
  {
    title: 'Grilled Tilapia Fish',
    description: 'Whole grilled tilapia seasoned with our special spices.',
    price: '₦4,500',
    image: '/images/ex-po1.webp',
    href: '/product/grilled-tilapia',
  },
  {
    title: 'Jollof Rice & Fried Chicken',
    description: 'Our signature Jollof rice, served with crispy fried chicken and plantain.',
    price: '₦3,500',
    image: '/images/Property.webp',
    href: '/product/jollof-fried-chicken-2',
  },
]

export default function PopularMenu() {
  return (
    <section className="bg-white py-12 md:py-16 lg:py-20">
      <BaseLayout>
        <div className="text-left mb-10 md:mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">Popular</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {popularItems.map((item) => (
            <MenuCard
              key={item.href}
              title={item.title}
              description={item.description}
              price={item.price}
              image={item.image}
              href={item.href}
              buttonVariant="icon"
            />
          ))}
        </div>
      </BaseLayout>
    </section>
  )
}
