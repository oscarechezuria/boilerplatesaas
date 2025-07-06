import { ArrowRight } from "lucide-react"
import Button from "../../ui/Button"

export default function CTA() {
  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Ready to get started?</h2>
        <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
          Join thousands of companies already using our platform to streamline their operations and accelerate growth.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="secondary" className="hover:opacity-90 transition-colors duration-200">
            Start Free Trial
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        <p className="text-blue-100 text-sm mt-6">No credit card required • 14-day free trial • Cancel anytime</p>
      </div>
    </section>
  )
}
