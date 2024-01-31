import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Badge } from './ui/badge'
import { Card, CardContent } from './ui/card'

export function BookingItem() {
  return (
    <Card>
      <CardContent className="flex justify-between p-5 py-0">
        <div className="flex flex-col gap-2 py-5">
          <Badge className="hover:bg-[#221C3D w-fit bg-[#221C3D] text-primary">
            Confirmado
          </Badge>
          <h2 className="font-bold">Corte de cabelo</h2>
          <div className="flex items-center gap-2">
            <Avatar className="h-6 w-6">
              <AvatarImage src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png" />

              <AvatarFallback>A</AvatarFallback>
            </Avatar>

            <h3 className="text-sm">Barber Vintage</h3>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center border-l border-solid border-secondary pl-5">
          <p className="text-sm">Fevereiro</p>
          <p className="text-2xl">06</p>
          <p className="text-sm">09:45</p>
        </div>
      </CardContent>
    </Card>
  )
}
