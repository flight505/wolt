import Image from "next/image"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <header className="border-b border-gray-100 py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-3xl font-bold">
              <Image src="/wolt-logo.svg" alt="Wolt" width={120} height={30} className="h-8 w-auto" priority />
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/" className="font-medium text-gray-900">
                Home
              </Link>
              <Link href="#" className="font-medium text-gray-900 flex items-center">
                Produkter <ChevronDown className="ml-1 h-4 w-4" />
              </Link>
              <Link href="#" className="font-medium text-gray-900 flex items-center">
                Løsninger <ChevronDown className="ml-1 h-4 w-4" />
              </Link>
              <Link href="#" className="font-medium text-gray-900 flex items-center">
                Virksomhedstyper <ChevronDown className="ml-1 h-4 w-4" />
              </Link>
              <Link href="#" className="font-medium text-gray-900 flex items-center">
                Ressourcer <ChevronDown className="ml-1 h-4 w-4" />
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="bg-blue-500 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-600 transition-colors"
            >
              Tilmeld dig
            </Link>
            <Link href="#" className="text-gray-900 font-medium hover:text-blue-600 transition-colors">
              Log ind
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section className="py-16 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">Vækst med Wolt til partnere med os</h1>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-gray-50 rounded-lg p-8 flex flex-col items-center text-center">
                <div className="mb-6 h-64 w-full relative">
                  <Image
                    src="/placeholder.svg?height=256&width=256"
                    alt="Vækst med Wolt"
                    width={256}
                    height={256}
                    className="object-contain"
                  />
                </div>
                <h2 className="text-3xl font-bold mb-4">Vækst med Wolt</h2>
                <p className="text-gray-600 mb-4">
                  Få adgang til vores aktive kundebase ved at tilbyde afhentning og levering i Wolt-appen. Derudover kan
                  du øge salget ved at nå loyale kunder ved hjælp af vores abonnementstjeneste{" "}
                  <span className="text-blue-500">Wolt+</span> – kunder, der i gennemsnit bestiller mere fra Wolt.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-gray-50 rounded-lg p-8 flex flex-col items-center text-center">
                <div className="mb-6 h-64 w-full relative">
                  <Image
                    src="/placeholder.svg?height=256&width=256"
                    alt="Få flere bestillinger"
                    width={256}
                    height={256}
                    className="object-contain"
                  />
                </div>
                <h2 className="text-3xl font-bold mb-4">Få flere bestillinger</h2>
                <p className="text-gray-600 mb-4">
                  Med Wolt kan du øge dine bestillinger ved at nå ud til vores aktive kunder. Tilmelding er gratis, og
                  prissætningen er provisionsbaseret. Derudover hjælper <span className="text-blue-500">Wolt Ads</span>{" "}
                  dig med at øge din synlighed og få endnu flere bestillinger i Wolt-appen.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-gray-50 rounded-lg p-8 flex flex-col items-center text-center">
                <div className="mb-6 h-64 w-full relative">
                  <Image
                    src="/placeholder.svg?height=256&width=256"
                    alt="Levér til flere kunder"
                    width={256}
                    height={256}
                    className="object-contain"
                  />
                </div>
                <h2 className="text-3xl font-bold mb-4">Levér til flere kunder</h2>
                <p className="text-gray-600 mb-4">
                  Når en bestilling er afgivet, leverer Wolts kurérpartnere til dine kunder på ca. 30 minutter. Du kan
                  også forbinde din egen hjemmeside eller app og levere med{" "}
                  <span className="text-blue-500">Wolt Drive</span>, der tilbyder ekspressleveringer fra din virksomhed
                  til dine kunders hjem indenfor én time.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
