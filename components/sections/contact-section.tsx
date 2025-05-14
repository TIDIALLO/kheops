'use client'

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Clock, CheckCircle, AlertCircle, ChevronDown } from "lucide-react"
import { motion } from "framer-motion"

// Liste des pays les plus courants avec leurs indicatifs
const countryCodes = [
  { code: '+221', pays: 'Sénégal 🇸🇳' },
  { code: '+33', pays: 'France 🇫🇷' },
  { code: '+1', pays: 'États-Unis/Canada 🇺🇸🇨🇦' },
  { code: '+212', pays: 'Maroc 🇲🇦' },
  { code: '+32', pays: 'Belgique 🇧🇪' },
  { code: '+41', pays: 'Suisse 🇨🇭' },
  { code: '+237', pays: 'Cameroun 🇨🇲' },
  { code: '+225', pays: 'Côte d\'Ivoire 🇨🇮' },
  { code: '+243', pays: 'RD Congo 🇨🇩' },
  { code: '+44', pays: 'Royaume-Uni 🇬🇧' },
  { code: '+49', pays: 'Allemagne 🇩🇪' },
  { code: '+39', pays: 'Italie 🇮🇹' },
  { code: '+34', pays: 'Espagne 🇪🇸' },
  { code: '+351', pays: 'Portugal 🇵🇹' },
  { code: '+213', pays: 'Algérie 🇩🇿' },
  { code: '+216', pays: 'Tunisie 🇹🇳' },
  { code: '+242', pays: 'Congo 🇨🇬' },
  { code: '+223', pays: 'Mali 🇲🇱' },
  { code: '+226', pays: 'Burkina Faso 🇧🇫' },
  { code: '+235', pays: 'Tchad 🇹🇩' },
  { code: '+228', pays: 'Togo 🇹🇬' },
  { code: '+229', pays: 'Bénin 🇧🇯' },
  { code: '+222', pays: 'Mauritanie 🇲🇷' },
  { code: '+227', pays: 'Niger 🇳🇪' },
  { code: '+224', pays: 'Guinée 🇬🇳' },
  { code: '+245', pays: 'Guinée-Bissau 🇬🇼' },
  { code: '+240', pays: 'Guinée équatoriale 🇬🇶' },
  { code: '+230', pays: 'Maurice 🇲🇺' },
  { code: '+250', pays: 'Rwanda 🇷🇼' },
  { code: '+257', pays: 'Burundi 🇧🇮' },
  { code: '+256', pays: 'Ouganda 🇺🇬' },
  { code: '+255', pays: 'Tanzanie 🇹🇿' },
  { code: '+254', pays: 'Kenya 🇰🇪' },
  { code: '+251', pays: 'Éthiopie 🇪🇹' },
  { code: '+20', pays: 'Égypte 🇪🇬' },
  { code: '+55', pays: 'Brésil 🇧🇷' },
  { code: '+52', pays: 'Mexique 🇲🇽' },
  { code: '+81', pays: 'Japon 🇯🇵' },
  { code: '+86', pays: 'Chine 🇨🇳' },
  { code: '+91', pays: 'Inde 🇮🇳' },
  { code: '+7', pays: 'Russie 🇷🇺' },
  { code: '+61', pays: 'Australie 🇦🇺' },
  { code: '+64', pays: 'Nouvelle-Zélande 🇳🇿' },
  { code: '+27', pays: 'Afrique du Sud 🇿🇦' },
];

export function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({})
  const [showCountryDropdown, setShowCountryDropdown] = useState(false)
  const [selectedCountryCode, setSelectedCountryCode] = useState('+221') // Par défaut: Sénégal
  const dropdownRef = useRef<HTMLDivElement>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  })

  // Fermer le dropdown quand on clique en dehors
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowCountryDropdown(false)
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Fonction pour valider l'email
  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  // Fonction pour valider le numéro de téléphone (optionnel)
  const isValidPhone = (phone: string) => {
    if (!phone) return true // Pas obligatoire
    // Nouvelle regex plus permissive pour accepter les formats internationaux variés
    const phoneRegex = /^[0-9]{1,12}([ .-]?[0-9]{1,12})*$/
    return phoneRegex.test(phone)
  }

  const validateForm = () => {
    const errors: Record<string, string> = {}
    
    if (!formData.name.trim()) {
      errors.name = "Le nom est requis"
    }
    
    if (!formData.email.trim()) {
      errors.email = "L'email est requis"
    } else if (!isValidEmail(formData.email)) {
      errors.email = "Format d'email invalide"
    }
    
    if (formData.phone && !isValidPhone(formData.phone)) {
      errors.phone = "Format de téléphone invalide"
    }
    
    if (!formData.message.trim()) {
      errors.message = "Le message est requis"
    } else if (formData.message.length < 10) {
      errors.message = "Le message est trop court (10 caractères minimum)"
    }
    
    setValidationErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Réinitialiser l'erreur de ce champ lorsqu'il est modifié
    if (validationErrors[name]) {
      setValidationErrors(prev => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const selectCountry = (code: string) => {
    setSelectedCountryCode(code)
    setShowCountryDropdown(false)
  }

  const getFullPhoneNumber = () => {
    if (!formData.phone) return ""
    return `${selectedCountryCode} ${formData.phone}`
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Valider le formulaire
    if (!validateForm()) {
      return
    }
    
    setIsSubmitting(true)
    
    try {
      // Générer un ID de référence unique
      const referenceId = `KHEOPS-${new Date().getTime().toString().slice(-6)}`
      
      // Ajouter l'ID de référence et le numéro complet au formulaire
      if (formRef.current) {
        // Ajouter référence
        const hiddenRefInput = document.createElement('input')
        hiddenRefInput.type = 'hidden'
        hiddenRefInput.name = 'Référence'
        hiddenRefInput.value = referenceId
        formRef.current.appendChild(hiddenRefInput)
        
        // Ajouter le numéro de téléphone complet
        if (formData.phone) {
          const hiddenPhoneInput = document.createElement('input')
          hiddenPhoneInput.type = 'hidden'
          hiddenPhoneInput.name = 'phone_complet'
          hiddenPhoneInput.value = getFullPhoneNumber()
          formRef.current.appendChild(hiddenPhoneInput)
        }
        
        // Soumettre le formulaire
        formRef.current.submit()
        
        // On considère que c'est un succès car formsubmit.co va gérer le reste
        setSubmitStatus('success')
        
        // Enregistrer dans le localStorage que le formulaire a été soumis (pour limiter les soumissions multiples)
        if (typeof window !== 'undefined') {
          localStorage.setItem('lastFormSubmit', new Date().toISOString())
        }
        
        // Réinitialiser le formulaire après 5 secondes
        setTimeout(() => {
          setFormData({
            name: '',
            email: '',
            phone: '',
            company: '',
            message: ''
          })
          setSubmitStatus('idle')
        }, 5000)
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi du formulaire:', error)
      setSubmitStatus('error')
      
      // Réinitialiser le statut après 5 secondes
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  // Vérifier si l'utilisateur a déjà soumis un formulaire récemment
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const lastSubmit = localStorage.getItem('lastFormSubmit')
      if (lastSubmit) {
        const lastSubmitTime = new Date(lastSubmit).getTime()
        const now = new Date().getTime()
        const timeDiff = now - lastSubmitTime
        
        // Si le dernier envoi date de moins de 5 minutes, afficher un message
        if (timeDiff < 5 * 60 * 1000) {
          // Optionnel: Vous pourriez afficher un message ou désactiver temporairement le formulaire
        }
      }
    }
  }, [])

  return (
    <section id="contact" className="py-8 md:py-12 relative overflow-hidden">
      {/* Arrière-plan gris #555555 */}
      <div className="absolute inset-0 bg-[#555555]"></div>
      
      {/* Motif décoratif avec une transparence adaptée au gris */}
      <div className="absolute inset-0 opacity-5" style={{ 
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}></div>
      
      <div className="container mx-auto px-4 relative z-10 py-4">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Contactez-nous
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Discutons de vos projets et de la façon dont nous pouvons vous aider à les réussir
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-4 max-w-5xl mx-auto">
          {/* Informations de contact */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-2 space-y-3 text-white"
          >
            <div>
              <h3 className="text-xl font-bold mb-3 border-b border-white/30 pb-2">
                Nos coordonnées
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <div className="bg-white/20 p-1.5 rounded-full shadow-inner">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-white text-sm">Adresse</p>
                    <p className="text-white/85 text-sm">19 Sicap Rue dix<br />DAKAR SENEGAL</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="bg-white/20 p-1.5 rounded-full shadow-inner">
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-white text-sm">Téléphone</p>
                    <p className="text-white/85 text-sm">
                      SENEGAL: <a href="tel:+221781935969" className="hover:text-white hover:underline transition-all">+221 78.193.59.69</a><br />
                      France: <a href="tel:+33078602597" className="hover:text-white hover:underline transition-all">+33 07 86 02 51 97</a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="bg-white/20 p-1.5 rounded-full shadow-inner">
                    <Mail className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-white text-sm">Email</p>
                    <p className="text-white/85 text-sm">
                      <a href="mailto:diallotidiane014@gmail.com" className="hover:text-white hover:underline transition-all">diallotidiane014@gmail.com</a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="bg-white/20 p-1.5 rounded-full shadow-inner">
                    <Clock className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-white text-sm">Horaires</p>
                    <p className="text-white/85 text-sm">
                      Du lundi au vendredi<br />
                      9h00 - 18h00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Formulaire de contact */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="md:col-span-3 bg-white p-6 rounded-xl shadow-xl"
          >
            <h3 className="text-xl font-bold text-[#1C1C1C] mb-4 border-b border-gray-200 pb-3">
              Envoyez-nous un message
            </h3>
            
            {submitStatus === 'success' ? (
              <div className="flex flex-col items-center justify-center py-8">
                <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                <h4 className="text-xl font-bold text-green-600 mb-2">Message envoyé !</h4>
                <p className="text-center text-gray-600">
                  Merci de nous avoir contactés. Nous vous répondrons dans les plus brefs délais.
                </p>
                <p className="text-center text-sm text-gray-500 mt-2">
                  Vous recevrez également un email de confirmation.
                </p>
                <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200 w-full">
                  <p className="text-center text-sm font-medium text-gray-700 mb-2">KHEOPS Consulting</p>
                  <div className="flex items-center justify-center text-sm text-gray-600 mb-1">
                    <MapPin className="h-3 w-3 text-[#8B0000] mr-1" /> 
                    <span>19 Sicap Rue dix, DAKAR SENEGAL</span>
                  </div>
                  <div className="flex items-center justify-center text-sm text-gray-600 mb-1">
                    <Phone className="h-3 w-3 text-[#8B0000] mr-1" /> 
                    <span>SENEGAL: <a href="tel:+221781935969" className="text-blue-600 hover:underline">+221 78.193.59.69</a></span>
                  </div>
                  <div className="flex items-center justify-center text-sm text-gray-600 mb-1">
                    <Phone className="h-3 w-3 text-[#8B0000] mr-1" /> 
                    <span>France: <a href="tel:+33078602597" className="text-blue-600 hover:underline">+33 07 86 02 51 97</a></span>
                  </div>
                  <div className="flex items-center justify-center text-sm text-gray-600">
                    <Mail className="h-3 w-3 text-[#8B0000] mr-1" /> 
                    <a href="mailto:diallotidiane014@gmail.com" className="text-blue-600 hover:underline">diallotidiane014@gmail.com</a>
                  </div>
                </div>
              </div>
            ) : submitStatus === 'error' ? (
              <div className="flex flex-col items-center justify-center py-8">
                <AlertCircle className="w-16 h-16 text-red-500 mb-4" />
                <h4 className="text-xl font-bold text-red-600 mb-2">Erreur</h4>
                <p className="text-center text-gray-600">
                  Une erreur s'est produite lors de l'envoi de votre message. Veuillez réessayer plus tard ou nous contacter directement par téléphone.
                </p>
                <Button 
                  onClick={() => setSubmitStatus('idle')}
                  className="mt-4 bg-[#8B0000] hover:bg-[#700000] text-white transition-colors text-sm"
                >
                  Réessayer
                </Button>
              </div>
            ) : (
              <form 
                ref={formRef}
                action="https://formsubmit.co/diallotidiane014@gmail.com" 
                method="POST"
                onSubmit={handleSubmit} 
                className="space-y-4"
              >
                {/* Configuration FormSubmit.co */}
                <input type="hidden" name="_subject" value="Nouvelle demande de contact - KHEOPS Consulting" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_captcha" value="true" />
                <input type="hidden" name="_next" value={typeof window !== 'undefined' ? window.location.href : ''} />
                
                {/* Message d'autoréponse en français */}
                <input 
                  type="hidden" 
                  name="_autoresponse" 
                  value="Bonjour,

Nous vous remercions d'avoir contacté KHEOPS Consulting.

Votre message a bien été reçu et sera traité dans les meilleurs délais. Un membre de notre équipe vous contactera prochainement.

Votre référence de suivi : {{Référence}}

Cordialement,
L'équipe KHEOPS Consulting
--
KHEOPS Consulting
19 Sicap Rue dix, DAKAR SENEGAL
Téléphone (Sénégal): +221 78.193.59.69
Téléphone (France): +33 07 86 02 51 97
Email: diallotidiane014@gmail.com
Site web: https://kheops-consulting.com" 
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Nom complet *</label>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Votre nom"
                      className={`w-full text-sm h-11 ${validationErrors.name ? 'border-red-500' : 'border-gray-300 focus:border-[#8B0000] focus:ring-[#8B0000]'}`}
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    {validationErrors.name && (
                      <p className="text-red-500 text-xs mt-1">{validationErrors.name}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Email *</label>
                    <Input
                      type="email"
                      name="email"
                      placeholder="votreemail@exemple.com"
                      className={`w-full text-sm h-11 ${validationErrors.email ? 'border-red-500' : 'border-gray-300 focus:border-[#8B0000] focus:ring-[#8B0000]'}`}
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    {validationErrors.email && (
                      <p className="text-red-500 text-xs mt-1">{validationErrors.email}</p>
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Téléphone</label>
                    <div className="flex relative">
                      <div 
                        ref={dropdownRef}
                        className="relative flex-shrink-0"
                      >
                        <button
                          type="button"
                          onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                          className="flex items-center justify-between px-3 h-11 border border-r-0 rounded-l-md border-gray-300 bg-gray-50 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-[#8B0000] focus:border-[#8B0000] hover:bg-gray-100 transition-colors"
                        >
                          <span>{selectedCountryCode}</span>
                          <ChevronDown className="ml-1 h-4 w-4" />
                        </button>
                        
                        {showCountryDropdown && (
                          <div className="absolute z-10 mt-1 py-1 w-64 bg-white shadow-lg rounded-md max-h-60 overflow-auto border border-gray-200">
                            <div className="px-3 py-2 text-xs text-gray-500 border-b border-gray-100 bg-gray-50 font-medium sticky top-0">
                              Sélectionnez votre pays
                            </div>
                            {countryCodes.map((country) => (
                              <div
                                key={country.code}
                                onClick={() => selectCountry(country.code)}
                                className="px-3 py-2 text-sm cursor-pointer hover:bg-gray-100 flex items-center transition-colors"
                              >
                                <span className="w-12 inline-block font-medium">{country.code}</span>
                                <span>{country.pays}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                      
                      <Input
                        type="tel"
                        name="phone"
                        placeholder="Votre numéro (sans l'indicatif)"
                        className={`w-full rounded-l-none text-sm h-11 ${validationErrors.phone ? 'border-red-500' : 'border-gray-300 focus:border-[#8B0000] focus:ring-[#8B0000]'}`}
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    {validationErrors.phone && (
                      <p className="text-red-500 text-xs mt-1">{validationErrors.phone}</p>
                    )}
                    <p className="text-gray-500 text-xs mt-1.5">
                      Ex: {selectedCountryCode === '+221' ? '78 123 45 67' : selectedCountryCode === '+33' ? '6 12 34 56 78' : 'Votre numéro local'}
                    </p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Entreprise</label>
                    <Input
                      type="text"
                      name="company"
                      placeholder="Nom de votre entreprise"
                      className="w-full text-sm h-11 border-gray-300 focus:border-[#8B0000] focus:ring-[#8B0000]"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Message *</label>
                  <Textarea
                    name="message"
                    placeholder="Décrivez votre projet ou votre demande..."
                    className={`w-full min-h-[120px] text-sm ${validationErrors.message ? 'border-red-500' : 'border-gray-300 focus:border-[#8B0000] focus:ring-[#8B0000]'}`}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                  {validationErrors.message && (
                    <p className="text-red-500 text-xs mt-1">{validationErrors.message}</p>
                  )}
                </div>
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#8B0000] hover:bg-[#700000] text-white transition-colors text-sm h-12 mt-2"
                >
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                </Button>
                <div className="border-t border-gray-100 pt-3 mt-3">
                  <p className="text-xs text-gray-500 text-center">
                    * Champs obligatoires. En soumettant ce formulaire, vous acceptez que nous utilisions vos informations pour vous contacter concernant votre demande.
                  </p>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
} 