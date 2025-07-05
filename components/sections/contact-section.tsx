'use client'

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { FileUpload } from "@/components/ui/file-upload"
import { Mail, Phone, MapPin, Clock, CheckCircle, AlertCircle, ChevronDown, ArrowRight, Send } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

// Fonction pour convertir un fichier en base64
const fileToBase64 = (file: File): Promise<string> =>
{
  return new Promise((resolve, reject) =>
  {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
};

// Liste des pays avec leurs codes courts et indicatifs
const countryCodes = [
  { code: '+221', shortCode: 'SN', pays: 'Sénégal' },
  { code: '+33', shortCode: 'FR', pays: 'France' },
  { code: '+1', shortCode: 'US', pays: 'États-Unis/Canada' },
  { code: '+212', shortCode: 'MA', pays: 'Maroc' },
  { code: '+32', shortCode: 'BE', pays: 'Belgique' },
  { code: '+41', shortCode: 'CH', pays: 'Suisse' },
  { code: '+237', shortCode: 'CM', pays: 'Cameroun' },
  { code: '+225', shortCode: 'CI', pays: "Côte d'Ivoire" },
  { code: '+243', shortCode: 'CD', pays: 'RD Congo' },
  { code: '+44', shortCode: 'GB', pays: 'Royaume-Uni' },
  { code: '+49', shortCode: 'DE', pays: 'Allemagne' },
  { code: '+39', shortCode: 'IT', pays: 'Italie' },
  { code: '+34', shortCode: 'ES', pays: 'Espagne' },
  { code: '+351', shortCode: 'PT', pays: 'Portugal' },
  { code: '+213', shortCode: 'DZ', pays: 'Algérie' },
  { code: '+216', shortCode: 'TN', pays: 'Tunisie' },
  { code: '+242', shortCode: 'CG', pays: 'Congo' },
  { code: '+223', shortCode: 'ML', pays: 'Mali' },
  { code: '+226', shortCode: 'BF', pays: 'Burkina Faso' },
  { code: '+235', shortCode: 'TD', pays: 'Tchad' },
  { code: '+228', shortCode: 'TG', pays: 'Togo' },
  { code: '+229', shortCode: 'BJ', pays: 'Bénin' },
  { code: '+222', shortCode: 'MR', pays: 'Mauritanie' },
  { code: '+227', shortCode: 'NE', pays: 'Niger' },
  { code: '+224', shortCode: 'GN', pays: 'Guinée' },
  { code: '+245', shortCode: 'GW', pays: 'Guinée-Bissau' },
  { code: '+240', shortCode: 'GQ', pays: 'Guinée équatoriale' },
  { code: '+230', shortCode: 'MU', pays: 'Maurice' },
  { code: '+250', shortCode: 'RW', pays: 'Rwanda' },
  { code: '+257', shortCode: 'BI', pays: 'Burundi' },
  { code: '+256', shortCode: 'UG', pays: 'Ouganda' },
  { code: '+255', shortCode: 'TZ', pays: 'Tanzanie' },
  { code: '+254', shortCode: 'KE', pays: 'Kenya' },
  { code: '+251', shortCode: 'ET', pays: 'Éthiopie' },
  { code: '+20', shortCode: 'EG', pays: 'Égypte' },
  { code: '+55', shortCode: 'BR', pays: 'Brésil' },
  { code: '+52', shortCode: 'MX', pays: 'Mexique' },
  { code: '+81', shortCode: 'JP', pays: 'Japon' },
  { code: '+86', shortCode: 'CN', pays: 'Chine' },
  { code: '+91', shortCode: 'IN', pays: 'Inde' },
  { code: '+7', shortCode: 'RU', pays: 'Russie' },
  { code: '+61', shortCode: 'AU', pays: 'Australie' },
  { code: '+64', shortCode: 'NZ', pays: 'Nouvelle-Zélande' },
  { code: '+27', shortCode: 'ZA', pays: 'Afrique du Sud' },
];

// Constantes pour la gestion des fichiers
const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10Mo
const MAX_TOTAL_SIZE = 10 * 1024 * 1024; // Maximum 10MB au total
const ALLOWED_FILE_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'image/jpeg',
  'image/png'
];

// Constante pour l'email de contact
const CONTACT_EMAIL = 'contact.kheops@kheops-consulting.com';

// Fonction pour formater la taille du fichier
const formatFileSize = (bytes: number): string =>
{
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
  return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
};

// Fonction pour compresser une image si nécessaire
const compressImageIfNeeded = async (file: File): Promise<File> =>
{
  if (!file.type.startsWith('image/')) return file;

  return new Promise((resolve, reject) =>
  {
    const img = new Image();
    img.src = URL.createObjectURL(file);
    img.onload = () =>
    {
      const canvas = document.createElement('canvas');
      let width = img.width;
      let height = img.height;

      // Réduire la taille si l'image est trop grande
      const MAX_WIDTH = 1920;
      const MAX_HEIGHT = 1080;

      if (width > MAX_WIDTH) {
        height = (height * MAX_WIDTH) / width;
        width = MAX_WIDTH;
      }
      if (height > MAX_HEIGHT) {
        width = (width * MAX_HEIGHT) / height;
        height = MAX_HEIGHT;
      }

      canvas.width = width;
      canvas.height = height;

      const ctx = canvas.getContext('2d');
      if (!ctx) {
        reject(new Error('Impossible de créer le contexte canvas'));
        return;
      }

      ctx.drawImage(img, 0, 0, width, height);

      canvas.toBlob(
        (blob) =>
        {
          if (!blob) {
            reject(new Error('Échec de la compression'));
            return;
          }
          resolve(new File([blob], file.name, { type: file.type }));
        },
        file.type,
        0.8 // Qualité de compression
      );
    };
    img.onerror = () => reject(new Error('Erreur lors du chargement de l\'image'));
  });
};

export function ContactSection()
{
  const formRef = useRef<HTMLFormElement>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({})
  const [showCountryDropdown, setShowCountryDropdown] = useState(false)
  const [selectedCountry, setSelectedCountry] = useState(countryCodes[0])
  const dropdownRef = useRef<HTMLDivElement>(null)
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    phone: '',
    company: '',
    message: '',
    files: [] as File[]
  })

  const handleFileChange = async (files: File[]) =>
  {
    setFormData(prev => ({ ...prev, files }));
  };

  // Fermer le dropdown quand on clique en dehors
  useEffect(() =>
  {
    function handleClickOutside(event: MouseEvent)
    {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowCountryDropdown(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () =>
    {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Fonction pour valider l'email
  const isValidEmail = (email: string) =>
  {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  // Fonction pour valider le numéro de téléphone (optionnel)
  const isValidPhone = (phone: string) =>
  {
    if (!phone) return true // Pas obligatoire
    // Nouvelle regex plus permissive pour accepter les formats internationaux variés
    const phoneRegex = /^[0-9]{1,12}([ .-]?[0-9]{1,12})*$/
    return phoneRegex.test(phone)
  }

  const validateForm = () =>
  {
    const errors: Record<string, string> = {}

    if (!formData.user_name.trim()) {
      errors.user_name = "Le nom est requis"
    }

    if (!formData.user_email.trim()) {
      errors.user_email = "L'email est requis"
    } else if (!isValidEmail(formData.user_email)) {
      errors.user_email = "Format d'email invalide"
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
  {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))

    // Réinitialiser l'erreur de ce champ lorsqu'il est modifié
    if (validationErrors[name]) {
      setValidationErrors(prev =>
      {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const selectCountry = (country: typeof countryCodes[0]) =>
  {
    setSelectedCountry(country)
    setShowCountryDropdown(false)
  }

  const getFullPhoneNumber = () =>
  {
    if (!formData.phone) return ""
    return `${selectedCountry.code} ${formData.phone}`
  }

  const handleSubmit = async (e: React.FormEvent) =>
  {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Préparer les données à envoyer à l'API
      const contactData = {
        name: formData.user_name,
        email: formData.user_email,
        phone: formData.phone,
        company: formData.company,
        message: formData.message,
      };

      // Ajouter les fichiers convertis en base64
      if (formData.files && formData.files.length > 0) {
        console.log("📎 Conversion des fichiers en base64...");
        const filesData = await Promise.all(
          formData.files.map(async (file) => ({
            name: file.name,
            size: file.size,
            type: file.type,
            data: await fileToBase64(file)
          }))
        );
        (contactData as any).files = filesData;
      }

      const response = await fetch('https://kheops-ten.vercel.app/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contactData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setTimeout(() =>
        {
          setFormData({
            user_name: '',
            user_email: '',
            phone: '',
            company: '',
            message: '',
            files: []
          });
          setSubmitStatus('idle');
        }, 5000);
      } else {
        throw new Error(result.error || 'Erreur lors de l\'envoi du message');
      }
    } catch (error) {
      setSubmitStatus('error');
      alert(error instanceof Error ? error.message : 'Erreur lors de l\'envoi');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Vérifier si l'utilisateur a déjà soumis un formulaire récemment
  useEffect(() =>
  {
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
    <section id="contact" className="py-12 md:py-16 relative overflow-hidden">
      {/* Retour au fond gris #555555 */}
      <div className="absolute inset-0 bg-[#555555]"></div>

      {/* Motif décoratif subtil */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Contactez-nous
          </h2>
          <p className="text-lg text-white leading-relaxed max-w-2xl mx-auto">
            Notre équipe d'experts est à votre écoute pour vous accompagner dans vos projets.
          </p>
        </motion.div>

        {/* Augmentation de la largeur maximale */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-start">
          {/* Formulaire avec fond blanc et bordure rouge subtile */}
          <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-[#8B0000]">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-3">
              {/* Nom */}
              <div className="flex flex-col gap-1">
                <label htmlFor="user_name" className="text-sm font-semibold text-gray-800">
                  Nom complet <span className="text-[#8B0000] font-bold">*</span>
                </label>
                <Input
                  id="user_name"
                  name="user_name"
                  type="text"
                  value={formData.user_name}
                  onChange={handleChange}
                  className="h-9 bg-white border-gray-300 rounded-md focus:border-[#8B0000] focus:ring-[#8B0000] transition-colors"
                  placeholder="Votre nom"
                  error={validationErrors.user_name}
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1">
                <label htmlFor="user_email" className="text-sm font-semibold text-gray-800">
                  Email <span className="text-[#8B0000] font-bold">*</span>
                </label>
                <Input
                  id="user_email"
                  name="user_email"
                  type="email"
                  value={formData.user_email}
                  onChange={handleChange}
                  className="h-9 bg-white border-gray-300 rounded-md focus:border-[#8B0000] focus:ring-[#8B0000] transition-colors"
                  placeholder="votre@email.com"
                  error={validationErrors.user_email}
                />
              </div>

              {/* Téléphone */}
              <div className="flex flex-col gap-1">
                <label htmlFor="phone" className="text-sm font-semibold text-gray-800">
                  Téléphone
                </label>
                <div className="relative flex">
                  <div className="relative" ref={dropdownRef}>
                    <button
                      type="button"
                      onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                      className="flex items-center h-9 px-2.5 border border-gray-300 rounded-l-md bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#8B0000] focus:border-[#8B0000] min-w-[90px] justify-between transition-colors"
                    >
                      <div className="flex items-center gap-1.5">
                        <span className="text-sm font-medium">{selectedCountry.shortCode}</span>
                        <span className="text-sm text-gray-600">{selectedCountry.code}</span>
                      </div>
                      <ChevronDown className="w-4 h-4 text-gray-500" />
                    </button>

                    {/* Dropdown amélioré */}
                    {showCountryDropdown && (
                      <div className="absolute z-50 w-60 mt-1 bg-white rounded-md shadow-lg border border-gray-200 max-h-48 overflow-y-auto">
                        <div className="sticky top-0 bg-gray-50 px-2.5 py-1.5 border-b border-gray-200">
                          <p className="text-sm text-gray-600 font-medium">Sélectionnez votre pays</p>
                        </div>
                        {countryCodes.map((country) => (
                          <button
                            key={country.shortCode}
                            type="button"
                            onClick={() => selectCountry(country)}
                            className="flex items-center w-full px-2.5 py-1.5 text-sm hover:bg-red-50 transition-colors"
                          >
                            <span className="w-8 font-medium">{country.shortCode}</span>
                            <span className="w-16 text-gray-600">{country.code}</span>
                            <span className="text-gray-800">{country.pays}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="flex-1 h-9 rounded-l-none bg-white border-gray-300 focus:border-[#8B0000] focus:ring-[#8B0000] transition-colors"
                    placeholder={selectedCountry.code === '+221' ? '77 123 45 67' : selectedCountry.code === '+33' ? '6 12 34 56 78' : 'Votre numéro'}
                    error={validationErrors.phone}
                  />
                </div>
                <p className="text-xs text-gray-500 mt-0.5">
                  Format: {selectedCountry.code === '+221' ? '7X XXX XX XX' : selectedCountry.code === '+33' ? '06 XX XX XX XX' : 'Format local'}
                </p>
              </div>

              {/* Entreprise */}
              <div className="flex flex-col gap-1">
                <label htmlFor="company" className="text-sm font-semibold text-gray-800">
                  Entreprise
                </label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleChange}
                  className="h-9 bg-white border-gray-300 rounded-md focus:border-[#8B0000] focus:ring-[#8B0000] transition-colors"
                  placeholder="Nom de votre entreprise"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1">
                <label htmlFor="message" className="text-sm font-semibold text-gray-800">
                  Message <span className="text-[#8B0000] font-bold">*</span>
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="min-h-[100px] max-h-[160px] resize-y bg-white border-gray-300 rounded-md focus:border-[#8B0000] focus:ring-[#8B0000] transition-colors"
                  placeholder="Décrivez votre projet ou votre demande..."
                  error={validationErrors.message}
                />
              </div>

              {/* Upload de fichiers */}
              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold text-gray-800">
                  Documents
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-md p-4 transition-colors hover:border-[#8B0000]/50">
                  <FileUpload onFilesChange={handleFileChange} />
                </div>
              </div>

              {/* Bouton de soumission */}
              <div className="pt-3">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "w-full h-12 font-medium rounded-lg shadow-md transition-all duration-300",
                    "flex items-center justify-center gap-2",
                    isSubmitting
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-[#8B0000] hover:bg-[#700000] hover:shadow-lg active:transform active:scale-[0.98]"
                  )}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Envoi en cours...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Envoyer le message</span>
                    </>
                  )}
                </Button>
              </div>

              {/* Message de succès/erreur */}
              <AnimatePresence>
                {submitStatus !== 'idle' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className={`flex items-center gap-3 p-3 rounded-md ${submitStatus === 'success'
                      ? 'bg-green-50 text-green-700 border border-green-100'
                      : 'bg-red-50 text-[#8B0000] border border-red-100'
                      }`}
                  >
                    {submitStatus === 'success' ? (
                      <>
                        <CheckCircle className="w-4 h-4 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Message envoyé avec succès</p>
                          <p className="text-sm opacity-90">Nous vous répondrons rapidement.</p>
                        </div>
                      </>
                    ) : (
                      <>
                        <AlertCircle className="w-4 h-4 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Erreur lors de l'envoi</p>
                          <p className="text-sm opacity-90">Veuillez réessayer.</p>
                        </div>
                      </>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>

          {/* Informations de contact avec fond gris */}
          <div className="space-y-6">
            <div className="bg-[#555555] rounded-lg shadow-lg p-8 text-white border-t-4 border-[#8B0000]">
              <h3 className="text-2xl font-bold mb-8 text-white">
                Nos coordonnées
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="bg-[#8B0000] p-3 rounded-lg group-hover:bg-[#700000] transition-colors">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1 text-lg text-white">Email</p>
                    <a href={`mailto:${CONTACT_EMAIL}`}
                      className="text-white hover:text-white/90 transition-colors hover:underline inline-flex items-center gap-2 group"
                      onClick={(e) =>
                      {
                        e.preventDefault();
                        window.location.href = `mailto:${CONTACT_EMAIL}`;
                      }}
                    >
                      {CONTACT_EMAIL}
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="bg-[#8B0000] p-3 rounded-lg group-hover:bg-[#700000] transition-colors">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1 text-lg text-white">Téléphone</p>
                    <div className="space-y-1">
                      <a href="tel:+221781935969"
                        className="text-white hover:text-white/90 transition-colors hover:underline inline-flex items-center gap-2 group"
                        onClick={(e) =>
                        {
                          e.preventDefault();
                          window.location.href = "tel:+221781935969";
                        }}
                      >
                        +221 78 193 59 69
                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                      </a>
                      <a href="tel:+33786025197"
                        className="text-white hover:text-white/90 transition-colors hover:underline inline-flex items-center gap-2 group"
                        onClick={(e) =>
                        {
                          e.preventDefault();
                          window.location.href = "tel:+33786025197";
                        }}
                      >
                        +33 7 86 02 51 97
                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                      </a>
                      <a href="tel:+33695922686"
                        className="text-white hover:text-white/90 transition-colors hover:underline inline-flex items-center gap-2 group"
                        onClick={(e) =>
                        {
                          e.preventDefault();
                          window.location.href = "tel:+33695922686";
                        }}
                      >
                        +33 6 95 92 26 86
                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="bg-[#8B0000] p-3 rounded-lg group-hover:bg-[#700000] transition-colors">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1 text-lg text-white">Horaires</p>
                    <p className="text-white leading-relaxed">
                      Lundi - Vendredi : 9h - 18h<br />
                      Samedi : Sur rendez-vous<br />
                      Dimanche : Fermé
                    </p>
                  </div>
                </div>

                {/* Boutons d'action rapide */}
                <div className="pt-6 space-y-3">
                  <button
                    onClick={() =>
                    {
                      const phoneNumber = "+221781935969";
                      window.location.href = `tel:${phoneNumber}`;
                    }}
                    className="w-full bg-[#8B0000] hover:bg-[#700000] text-white py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2 group"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Appeler maintenant</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={() =>
                    {
                      window.location.href = "mailto:contact.kheops@kheops-consulting.com";
                    }}
                    className="w-full bg-white/10 hover:bg-white/20 text-white py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2 group"
                  >
                    <Mail className="w-5 h-5" />
                    <span>Envoyer un email</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 