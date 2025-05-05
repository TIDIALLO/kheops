'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { motion } from "framer-motion"

export function ContactSection() {
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

        <div className="grid md:grid-cols-5 gap-4 max-w-4xl mx-auto">
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
                      <a href="mailto:pierredieng.kheops@gmail.com" className="hover:text-white hover:underline transition-all">pierredieng.kheops@gmail.com</a>
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
            className="md:col-span-3 bg-white p-4 rounded-xl shadow-xl"
          >
            <h3 className="text-lg font-bold text-[#1C1C1C] mb-3 border-b border-gray-200 pb-2">
              Envoyez-nous un message
            </h3>
            <form className="space-y-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nom complet</label>
                  <Input
                    type="text"
                    placeholder="Votre nom"
                    className="w-full text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <Input
                    type="email"
                    placeholder="votreemail@exemple.com"
                    className="w-full text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Entreprise</label>
                <Input
                  type="text"
                  placeholder="Nom de votre entreprise"
                  className="w-full text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <Textarea
                  placeholder="Décrivez votre projet ou votre demande..."
                  className="w-full min-h-[90px] text-sm"
                />
              </div>
              <Button 
                type="submit"
                className="w-full bg-[#8B0000] hover:bg-[#700000] text-white transition-colors text-sm"
              >
                Envoyer le message
              </Button>
              <p className="text-xs text-gray-500 text-center">
                Nous vous répondrons dans les meilleurs délais.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 