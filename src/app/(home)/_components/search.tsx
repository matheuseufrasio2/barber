'use client'

import { Button } from '@/app/_components/ui/button'
import { Input } from '@/app/_components/ui/input'
import { SearchIcon } from 'lucide-react'

function Search() {
  return (
    <div className="flex items-center gap-2">
      <Input placeholder="Busque por uma barbearia" />
      <Button variant="default" className="h-10 w-10 shrink-0" size="icon">
        <SearchIcon size={18} />
      </Button>
    </div>
  )
}

export default Search
