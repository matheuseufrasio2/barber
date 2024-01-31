import { format } from 'date-fns'
import { Header } from '../_components/header'
import { ptBR } from 'date-fns/locale'

export default function Home() {
  return (
    <div>
      <Header />

      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Matheus!</h2>
        <p className="text-sm capitalize">
          {format(new Date(), "EEEE',' dd' de 'MMMM", {
            locale: ptBR,
          })}
        </p>
      </div>
    </div>
  )
}
