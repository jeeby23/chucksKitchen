import Image from 'next/image'
import Link from 'next/link'

interface MenuCardProps {
  title: string
  description?: string
  price?: string
  image: string
  href: string
  buttonText?: string
  buttonVariant?: 'text' | 'icon'
}

export default function MenuCard({
  title,
  description,
  price,
  image,
  href,
  buttonText,
  buttonVariant = 'text',
}: MenuCardProps) {
  return (
    <Link
      href={href}
      className="group block bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="p-5 md:p-6">
        <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
          {title}
        </h3>

        {description && (
          <p className="text-sm md:text-base text-gray-600 mb-4 line-clamp-3">{description}</p>
        )}

        <div className="flex items-center justify-between">
          {price && <span className="text-lg md:text-xl font-bold text-[#FF7A18]">{price}</span>}

          {buttonVariant === 'text' && buttonText && (
            <button className="px-5 py-2.5 bg-[#FF7A18] hover:bg-orange-700 text-white font-medium text-sm rounded-lg transition">
              {buttonText}
            </button>
          )}

          {buttonVariant === 'icon' && (
            <button className="w-5 h-5 flex items-center justify-center rounded-full bg-[#FF7A18] hover:bg-orange-400 text-white text-xl font-bold transition cursor-pointer">
              +
            </button>
          )}
        </div>
      </div>
    </Link>
  )
}
