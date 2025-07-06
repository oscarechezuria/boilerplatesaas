"use client"

import { useState, FormEvent, ChangeEvent } from "react"
import { AuthMode, AuthStep, AuthFormData } from "../../types/auth"
import Email from "@/src/components/layout/auth/Email"
import Password from "@/src/components/layout/auth/Password"
import Button from "@/src/components/ui/Button"


export default function AuthPage() {
  const [mode, setMode] = useState<AuthMode>("login")
  const [step, setStep] = useState<AuthStep>(1)
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [isLoading, setIsLoading] = useState<boolean>(false)

  
  const toggleMode = (): void => {
    setMode(mode === "login" ? "register" : "login")
    setStep(1)
    setEmail("")
    setPassword("")
  }

  const handleNextStep = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    if (step === 1 && isValidEmail(email)) {
      setStep(2)
    }
  }

  const handlePrevStep = (): void => {
    setStep(1)
  }

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value)
  }

  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const getStepTitle = (): string => {
    return mode === "login" ? "Iniciar Sesión" : "Registrarse"
  }

  const getStepSubtitle = (): string => {
    return mode === "login" ? "Accede a tu cuenta" : "Crea tu nueva cuenta"
  }

  const getSubmitButtonText = (): string => {
    if (isLoading) return "Procesando..."
    return mode === "login" ? "Iniciar Sesión" : "Crear Cuenta"
  }

  const getToggleText = (): string => {
    return mode === "login" ? "¿No tienes una cuenta?" : "¿Ya tienes una cuenta?"
  }

  const getToggleButtonText = (): string => {
    return mode === "login" ? "Registrarse" : "Iniciar Sesión"
  }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    setIsLoading(true)

    const formData: AuthFormData = { email, password }

    try {
      alert(`Estos son los datos: ${formData.email} y ${formData.password}`)
    } catch (error) {
      console.error("Auth error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className={`flex items-center justify-center p-4 mt-12`}>
      <div className="w-full max-w-md">
        <div className="bg-primary text-secondary p-8 rounded-lg border-2 border-secondary">
          
          {/*TOP CONTENT*/}
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">{getStepTitle()}</h1>
            <p className="text-gray-600">{getStepSubtitle()}</p>
          </div>

          {/* Progress Indicator */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center space-x-4">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                  step >= 1 ? "bg-secondary text-primary" : "bg-gray-300 text-gray-600"
                }`}
                aria-label="Paso 1"
              >
                1
              </div>
              <div
                className={`w-12 h-0.5 transition-colors ${step >= 2 ? "bg-secondary" : "bg-gray-300"}`}
                aria-hidden="true"
              />
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                  step >= 2 ? "bg-secondary text-primary" : "bg-gray-300 text-gray-600"
                }`}
                aria-label="Paso 2"
              >
                2
              </div>
            </div>
          </div>
          
          {/* CENTER CONTENT */}
          {/* Step 1: Email */}
          {step === 1 && (
            <Email 
              handleNextStep={handleNextStep} 
              handleEmailChange={handleEmailChange} 
              email={email} 
              isValidEmail={isValidEmail}/>
          )}

          {/* Step 2: Password */}
          {step === 2 && (
            <Password  
              handlePrevStep={handlePrevStep}
              handlePasswordChange={handlePasswordChange}
              password={password} 
              email={email} 
              isLoading={isLoading} 
              mode={mode}
              handleSubmit={handleSubmit} 
              getSubmitButtonText={getSubmitButtonText}
              />
          )}

          {/* BOTTON CONTENT */}
          {/* Toggle Mode */}
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-2">{getToggleText()}</p>
            <Button
              type="button"
              onClick={toggleMode}
              className="hover:shadow-lg hover:opacity-95 transition-colors"
            >
              {getToggleButtonText()}
            </Button>
          </div>
        </div>
        
        {/* ASIDE CONTENT */}
        {/* Additional Info */}
        <div className="mt-6 text-center text-secondary text-sm">
          <p>
            Al continuar, aceptas nuestros{" "}
            <a
              href="#"
              className="underline hover:text-blue-600 transition-colors duration-200"
            >
              Términos de Servicio
            </a>{" "}
            y{" "}
            <a
              href="#"
              className="underline hover:text-blue-600 transition-colors duration-200"
            >
              Política de Privacidad
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}