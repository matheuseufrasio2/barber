import { format } from 'date-fns'
import { Header } from '../_components/header'
import { ptBR } from 'date-fns/locale'
import Search from './_components/search'
import { BookingItem } from '../_components/booking-item'
import { BarberShopItem } from './_components/barber-shop-item'
import { db } from '../_lib/prisma'
import { Barbershop } from '../types'

export default async function Home() {
  const barbershops = await db.barbershop.findMany()

  return (
    <div>
      <Header />

      <div className="px-5 pt-5">
        <h2 className="text-xl font-bold">Olá, Matheus!</h2>
        <p className="text-sm capitalize">
          {format(new Date(), "EEEE',' dd' de 'MMMM", {
            locale: ptBR,
          })}
        </p>
      </div>

      <div className="mt-6 px-5">
        <Search />
      </div>

      <div className="mt-6 px-5">
        <h2 className="mb-3 text-sm font-bold uppercase text-gray-400">
          Agendamentos
        </h2>
        <BookingItem />
      </div>

      <div className="mt-6">
        <h2 className="mb-3 px-5 text-sm font-bold uppercase text-gray-400">
          Recomendados
        </h2>
        <div className="flex gap-4 overflow-x-auto px-5 [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop: Barbershop) => (
            <BarberShopItem barbershop={barbershop} key={barbershop.id} />
          ))}
        </div>
      </div>
    </div>
  )
}
