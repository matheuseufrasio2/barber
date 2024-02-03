// types.ts

export type User = {
  id: string
  name: string
  // bookings: Booking[]
}

export type Barbershop = {
  id: string
  name: string
  address: string
  imageUrl: string
  // services: Service[]
  // bookings: Booking[]
}

export type Service = {
  id: string
  name: string
  price: number
  barbershopId: string
  description: string
  barbershop: Barbershop
  // bookings: Booking[]
}

export type Booking = {
  id: string
  userId: string
  serviceId: string
  date: Date
  barbershopId: string
  user: User
  service: Service
  barbershop: Barbershop
}
