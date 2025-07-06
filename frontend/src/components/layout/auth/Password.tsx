import React, {ChangeEvent, FormEvent} from 'react'
import { ArrowLeft, Lock } from "lucide-react"
import { AuthMode } from "../../../app/types/auth"
import Button from '../../ui/Button'

type PasswordProps = {
  handlePrevStep: () => void
  handlePasswordChange: (e: ChangeEvent<HTMLInputElement>) => void 
  password: string
  email: string
  isLoading: boolean
  mode: AuthMode
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void
  getSubmitButtonText: () => string
}

export default function password({handlePrevStep, handlePasswordChange, password, email, isLoading, mode, handleSubmit, getSubmitButtonText}: PasswordProps) {
  

  const isValidPassword = (password: string): boolean => {
    return password.length >= 6
  }



  return (
        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div className="space-y-2">
                <label htmlFor="password" className="text-secondary flex items-center gap-2 text-sm font-medium">
                  <Lock className="w-4 h-4" aria-hidden="true" />
                  Contraseña
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder="••••••••"
                  className="w-full px-3 py-2 bg-primary text-secondary border-2 border-secondary rounded-md focus:border-gray-600 focus:outline-none transition-colors"
                  required
                  minLength={6}
                  autoComplete={mode === "login" ? "current-password" : "new-password"}
                  aria-describedby="password-help password-error"
                />
                <p className="text-gray-500 text-sm">{email}</p>
                <p id="password-help" className="text-gray-500 text-xs">
                  La contraseña debe tener al menos 6 caracteres
                </p>
                {password && !isValidPassword(password) && (
                  <p id="password-error" className="text-red-600 text-sm" role="alert">
                    La contraseña debe tener al menos 6 caracteres
                  </p>
                )}
              </div>

              <div className="flex justify-between gap-3">
                <Button
                  type="button"
                  onClick={handlePrevStep}
                  variant='secondary'
                  className="w-42 border-1 border-secondary hover:shadow-md"
                  aria-label="Volver al paso anterior"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" aria-hidden="true" />
                  Atrás
                </Button>

                <Button
                  type="submit"
                  className={`w-42 justify-center  ${!isValidPassword(password) ? "" : "hover:shadow-lg hover:opacity-95 transition-colors"} `}
                  disabled={isLoading || !isValidPassword(password)}
                  aria-describedby="submit-help"
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <div
                        className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin"
                        aria-hidden="true"
                      />
                      <span>Procesando...</span>
                    </div>
                  ) : (
                    getSubmitButtonText()
                  )}
                </Button>
              </div>
              <p id="submit-help" className="sr-only">
                {mode === "login" ? "Inicia sesión con tu cuenta" : "Crea tu nueva cuenta"}
              </p>
          </form>
  )
}

