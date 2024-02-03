import Image from 'next/image'
import { Card, CardContent } from './ui/card'
import { Button } from './ui/button'

import { MenuIcon } from 'lucide-react'

export function Header() {
  return (
    <Card className="rounded-none">
      <CardContent className="flex items-center justify-between p-5">
        <Image src="/logo.png" alt="Barber" height={22} width={120} />
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <MenuIcon size={18} />
        </Button>
      </CardContent>
    </Card>
  )
}
