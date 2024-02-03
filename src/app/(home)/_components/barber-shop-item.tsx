import { Badge } from '@/app/_components/ui/badge'
import { Button } from '@/app/_components/ui/button'
import { Card, CardContent } from '@/app/_components/ui/card'
import { Barbershop } from '@/app/types'
import { StarIcon } from 'lucide-react'
import Image from 'next/image'

interface BarberShopItemProps {
  barbershop: Barbershop
}

export function BarberShopItem({ barbershop }: BarberShopItemProps) {
  return (
    <Card className="min-w-[167px] max-w-[167px] rounded-2xl">
      <CardContent className="p-0">
        <div className="px-1 pt-1">
          <div className="relative h-[159px] w-full">
            <div className="absolute left-2 top-2 z-50">
              <Badge
                variant="secondary"
                className="flex items-center gap-1 opacity-90"
              >
                <StarIcon className="fill-primary text-primary" size={12} />
                <span className="text-xs ">5,0</span>
              </Badge>
            </div>
            <Image
              fill
              height={0}
              width={0}
              src={barbershop.imageUrl}
              sizes="100vw"
              className="rounded-2xl"
              alt={barbershop.name}
              style={{
                objectFit: 'cover',
              }}
            />
          </div>
        </div>

        <div className="px-3 pb-3">
          <h2 className="mt-2 overflow-hidden text-ellipsis text-nowrap font-bold">
            {barbershop.name}
          </h2>
          <p className="overflow-hidden text-ellipsis text-nowrap text-sm text-gray-400">
            {barbershop.address}
          </p>
          <Button className=" mt-3 w-full" variant="secondary">
            Reservar
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
