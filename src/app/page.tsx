
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
            <div className="w-8 h-8 bg-[#fff] rounded-sm text-[#1B3409] text-xl text-center font-bold">Fh

            </div>
            <h1 className="text-xl font-semibold">FloresHoy.com</h1>
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
            <p className="text-xl font-semibold">PAGINA EN DESARROLLO</p>
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
                  <SelectValue placeholder="Lugar de entrega" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mapa">mapa</SelectItem>

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
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Otras ocasiones" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="15-anos">15 años</SelectItem>
                  <SelectItem value="Nacimiento">Nacimiento</SelectItem>
                  <SelectItem value="Grado">Grado</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Tipo de producto" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Flores">Flores</SelectItem>
                  <SelectItem value="Plantas de regalo">Plantas de regalo</SelectItem>
                  
                  <SelectItem value="Desayuno sorpresa">Desayuno sorpresa</SelectItem>
                  
                  <SelectItem value="Anchetas">Anchetas</SelectItem>
                  
                  <SelectItem value="Chocolates">Chocolates</SelectItem>
                  
                  <SelectItem value="Arreglos de frutas">Arreglos de frutas</SelectItem>

                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Destinatario" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="novia">Novia</SelectItem>
                  <SelectItem value="esposa">Esposa</SelectItem>
                  <SelectItem value="mama">Mamá</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Formas" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ramillete">Ramillete</SelectItem>
                  <SelectItem value="caja">Caja</SelectItem>
                  <SelectItem value="Ramo de una cara">ramo de una cara</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Colores" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rojo">Rojo</SelectItem>
                  <SelectItem value="rosado">Rosado</SelectItem>
                  <SelectItem value="amarillo">Amarillo</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Destinatario" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="novia">Novia</SelectItem>
                  <SelectItem value="esposa">Esposa</SelectItem>
                  <SelectItem value="mama">Mamá</SelectItem>
                </SelectContent>
              </Select>


          </div>

          {/* Product Grid */}
          
          <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Product Card 1 */}
            <div className="border rounded-lg overflow-hidden">
              <div className="relative h-64">
                <img src="https://web-dev2.floristerias.co/" alt="Confía en mi" fill className="object-cover" />
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
                <img src="https://web-dev2.floristerias.co/" alt="Amor total" fill className="object-cover" />
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
                <img
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

