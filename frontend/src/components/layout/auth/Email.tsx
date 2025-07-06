import { type FormEvent, type ChangeEvent } from "react"
import { Mail } from "lucide-react"
import Button from "../../ui/Button"

type EmailProps = {
    handleNextStep: (e: FormEvent<HTMLFormElement>) => void,
    handleEmailChange: (e: ChangeEvent<HTMLInputElement>) => void
    email: string
    isValidEmail: (email: string) => boolean
}

export default function Email({handleNextStep, handleEmailChange, email, isValidEmail}: EmailProps) {
  return (
    <form onSubmit={handleNextStep} className="space-y-6" noValidate>
            <div className="space-y-2">
                <label htmlFor="email" className="text-secondary flex items-center gap-2 text-sm font-medium">
                    <Mail className="w-4 h-4" aria-hidden="true" />
                    Correo Electrónico
                </label>
                <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="tu@ejemplo.com"
                    className="w-full px-3 py-2 bg-primary text-secondary border-2 border-secondary rounded-md focus:border-gray-600 focus:outline-none transition-colors"
                    required
                    autoComplete="email"
                    aria-describedby="email-error"
                />
                {email && !isValidEmail(email) && (
                    <p id="email-error" className="text-red-600 text-sm" role="alert">
                    Por favor, introduce un correo electrónico válido
                    </p>
                )}
            </div>

            <Button
                type="submit"
                className={`w-full justify-center ${!isValidEmail(email) ? "" : "hover:shadow-lg hover:opacity-95 transition-colors"} `}
                disabled={!isValidEmail(email)}
                aria-describedby="continue-help"
            >
                Continuar
            </Button>
            <p id="continue-help" className="sr-only">
                Continúa al siguiente paso para introducir tu contraseña
            </p>
    </form>
  )
}

