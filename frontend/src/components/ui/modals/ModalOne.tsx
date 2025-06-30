"use client"

import { useState } from "react"
import Button from "../Button"

interface ModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  backdrop?: boolean ;
}

export default function ModalOne({isOpen, setIsOpen, backdrop}: ModalProps) {
  
  const [currentStep, setCurrentStep] = useState<number>(1)

  
  const closeModal: () => void = () => {
    setIsOpen(false)
    // Reset to step 1 when closing
    setTimeout(() => setCurrentStep(1), 300)
  }

  const nextStep = () => {
    if (currentStep < 2) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const activeBackdrop = backdrop ? closeModal : undefined

  const stepContent = {
    1: {
      title: "Información Personal",
      content:
        "En este primer paso, recopilamos tu información básica como nombre, email y teléfono. Esta información nos ayuda a personalizar tu experiencia y mantenerte informado sobre las actualizaciones importantes.",
    },
    2: {
      title: "Configuración de Preferencias",
      content:
        "En el segundo paso, puedes configurar tus preferencias de notificaciones, idioma y otras opciones personalizadas. Estas configuraciones pueden ser modificadas en cualquier momento desde tu perfil.",
    },
  }


  return (
    <div>
      {/* Modal Overlay */}
      {isOpen && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-300 ${
            isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/50 transition-opacity duration-300" onClick={activeBackdrop} />

          {/* Modal Content */}
          <div
            className={`relative bg-white rounded-lg shadow-xl w-full max-w-md mx-4 transform transition-all duration-300 ${
              isOpen ? "scale-100 translate-y-0" : "scale-95 translate-y-4"
            }`}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b">
              <div className="flex items-center space-x-4">
                <h2 className="text-lg font-semibold text-gray-900">Paso {currentStep} de 2</h2>
                {/* Step Indicator */}
                <div className="flex space-x-2">
                  <div
                    className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                      currentStep >= 1 ? "bg-blue-600" : "bg-gray-300"
                    }`}
                  />
                  <div
                    className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                      currentStep >= 2 ? "bg-blue-600" : "bg-gray-300"
                    }`}
                  />
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="p-6 min-h-[200px]">
              <div className="transition-all duration-300 ease-in-out">
                <h3 className="text-xl font-medium text-gray-900 mb-4">
                  {stepContent[currentStep as keyof typeof stepContent].title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {stepContent[currentStep as keyof typeof stepContent].content}
                </p>

                {/* Additional content based on step */}
                {currentStep === 1 && (
                  <div className="mt-4 space-y-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">Información segura y encriptada</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">Proceso rápido y sencillo</span>
                    </div>
                  </div>
                )}

                {currentStep === 2 && (
                  <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600">
                      💡 <strong>Consejo:</strong> Puedes cambiar estas configuraciones más tarde desde tu panel de
                      usuario.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between gap-2 p-6 border-t bg-gray-50 rounded-b-lg">
              {/* Left Button */}
              <Button
                onClick={currentStep === 1 ? closeModal : prevStep}
                variant={`${currentStep == 1 ? "danger" : "primary"}`}
                className={`${currentStep == 1 ? "hover:bg-red-700 transition-colors duration-100" : "hover:bg-black/90 transition-colors duration-100"}`}
              >
                {currentStep === 1 ? (
                  <>
                    <span>×</span>
                    <span>Cancelar</span>
                  </>
                ) : (
                  <>
                    <span>←</span>
                    <span>Atrás</span>
                  </>
                )}
              </Button>

              {/* Right Button */}
              <Button
                onClick={currentStep === 2 ? closeModal : nextStep}
                variant="blue"
                className={`hover:bg-blue-700 transition-colors duration-100`}
              >
                <span>{currentStep === 2 ? "Finalizar" : "Siguiente"}</span>
                {currentStep === 1 ? <span>→</span> : <span>✔</span>}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
