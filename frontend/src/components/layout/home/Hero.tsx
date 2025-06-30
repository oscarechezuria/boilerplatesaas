import { ArrowRight} from "lucide-react"
import Image from "next/image"
import Button from "../../ui/Button"

export default function Hero() {
  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold textblack mb-6 leading-tight">
            Build Better Products
            <span className="text-black block">Faster Than Ever</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Streamline your workflow with our powerful SaaS platform. Increase productivity, reduce costs, and scale
            your business with confidence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button className="bg-black text-white px-8 py-4 rounded-lg hover:bg-black/95 transition-colors duration-200 flex items-center text-lg font-medium">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>


          {/* Hero Image/Dashboard Preview */}
          <div className="relative max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-2xl p-4">
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="Dashboard Preview"
                className="w-full h-auto rounded-lg"
                width={400}
                height={200}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
