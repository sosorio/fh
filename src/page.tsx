import Image from "next/image"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { ShoppingCart, MessageCircle } from "lucide-react"

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#1B3409] text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8">
              <svg viewBox="0 0 36 36" className="w-full h-full">
                <path
                  fill="#FFD700"
                  d="M18 0C8.059 0 0 8.059 0 18s8.059 18 18 18 18-8.059 18-18S27.941 0 18 0zm0 28c-5.523 0-10-4.477-10-10S12.477 8 18 8s10 4.477 10 10-4.477 10-10 10z"
                />
              </svg>
            </div>
            <h1 className="text-xl font-semibold">FloresParaColombia.com</h1>
          </div>
          <Button variant="outline" className="bg-green-600 hover:bg-green-700 text-white border-none">
            <MessageCircle className="w-4 h-4 mr-2" />
            Chatea con nosotros
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Flores a domicilio</h2>

            <div className="space-y-4">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Ciudad de entrega" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bogota">Bogotá</SelectItem>
                  <SelectItem value="medellin">Medellín</SelectItem>
                  <SelectItem value="cali">Cali</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Fecha de entrega" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="today">Hoy</SelectItem>
                  <SelectItem value="tomorrow">Mañana</SelectItem>
                </SelectContent>
              </Select>

              <Button className="w-full bg-[#1B3409] hover:bg-[#2C4D0F]">
                <ShoppingCart className="w-4 h-4 mr-2" />
                CONTINUAR ORDEN
              </Button>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium">Ocasiones</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="women" />
                  <label htmlFor="women">Día de la mujer</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="birthday" />
                  <label htmlFor="birthday">Cumpleaños</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="love" />
                  <label htmlFor="love">Amor</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="sympathy" />
                  <label htmlFor="sympathy">Condolencia</label>
                </div>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Product Card 1 */}
            <div className="border rounded-lg overflow-hidden">
              <div className="relative h-64">
                <Image src="https://web-dev2.floristerias.co/" alt="Confía en mi" fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold">Confía en mi</h3>
                <p className="text-sm text-gray-600">Caja rosas rojas x 12</p>
                <p className="mt-2 font-bold">$ 119.500</p>
                <p className="text-sm text-gray-500">Para entrega desde hoy</p>
              </div>
            </div>

            {/* Product Card 2 */}
            <div className="border rounded-lg overflow-hidden">
              <div className="relative h-64">
                <Image src="https://web-dev2.floristerias.co/" alt="Amor total" fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold">Amor total</h3>
                <p className="text-sm text-gray-600">Arreglo Floral una cara rosas rojas x 24</p>
                <p className="mt-2 font-bold">$ 146.000</p>
                <p className="text-sm text-gray-500">Para entrega desde hoy</p>
              </div>
            </div>

            {/* Product Card 3 */}
            <div className="border rounded-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="https://web-dev2.floristerias.co/"
                  alt="Ramillete rosas pasión"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold">Ramillete rosas pasión</h3>
                <p className="text-sm text-gray-600">Ramillete rosas rojas x 12</p>
                <p className="mt-2 font-bold">$ 85.000</p>
                <p className="text-sm text-gray-500">Para entrega desde hoy</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

