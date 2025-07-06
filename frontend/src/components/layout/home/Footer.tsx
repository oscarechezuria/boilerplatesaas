import { Facebook, Twitter, Linkedin, Github } from "lucide-react"

export default function Footer() {

  const socialLinks : {name: string, icon: React.ElementType, href: string}[] = [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
    { name: "GitHub", icon: Github, href: "#" },
  ]

  return (
    <footer className="flex flex-col w-full bg-primary text-secondary">
        <div>
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-lg">S</span>
              </div>
              <span className="ml-2 text-xl font-bold">NombreApp</span>
            </div>
            <p className="text-secondary mb-6 max-w-md">
              Building the future of productivity with innovative SaaS solutions that help businesses grow and succeed.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-secondary hover:text-gray-700 transition-colors duration-200"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-black mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2024 NombreApp. All rights reserved.</p>
          <p className="text-gray-400 text-sm mt-4 md:mt-0">Made with ❤️ for the future</p>
        </div>
    </footer>
  )
}