'use client'

import { Button } from '@/app/_components/ui/button'
import { Barbershop } from '@prisma/client'
import { ChevronLeftIcon, MenuIcon, MapPinIcon, StarIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface BarbershopInfoProps {
  barbershop: Barbershop
}

function BarbershopInfo({ barbershop }: BarbershopInfoProps) {
  return (
    <div>
      <div className="relative h-[250px] w-full">
        <Button
          size="icon"
          variant="outline"
          className="absolute left-4 top-4 z-50"
          asChild
        >
          <Link href="/">
            <ChevronLeftIcon />
          </Link>
        </Button>
        <Button
          size="icon"
          variant="outline"
          className="absolute right-4 top-4 z-50"
        >
          <MenuIcon />
        </Button>
        <Image
          src={barbershop.imageUrl}
          fill
          alt={barbershop.name}
          style={{ objectFit: 'cover' }}
          className="opacity-75"
        />
      </div>

      <div className="border-b border-solid border-secondary px-5 pb-6 pt-3">
        <h1 className="text-xl font-bold">{barbershop.name}</h1>

        <div className="mt-2 flex items-center gap-1">
          <MapPinIcon size={18} className="text-primary" />
          <p className="text-sm">{barbershop.address}</p>
        </div>

        <div className="mt-2 flex items-center gap-1">
          <StarIcon size={18} className="text-primary" />
          <p className="text-sm">5,0 (588 avaliações)</p>
        </div>
      </div>
    </div>
  )
}

export default BarbershopInfo
