'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { realisations } from './data'

export function RealisationsClient({ realisations }: { realisations: typeof realisations })
{
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#f9f5f5] to-[#f7f2f2] py-16">
            <div className="container mx-auto px-4">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-bold mb-12 text-center text-[#800000]"
                >
                    Nos Réalisations Marquantes
                </motion.h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {realisations.map((realisation, index) => (
                        <motion.div
                            key={realisation.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-xl shadow-lg overflow-hidden"
                        >
                            <div className="relative h-48">
                                <Image
                                    src={realisation.image}
                                    alt={realisation.titre}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-3 text-[#800000]">{realisation.titre}</h3>
                                <p className="text-gray-600 mb-4">{realisation.description}</p>
                                <ul className="space-y-2">
                                    {realisation.points.map((point, i) => (
                                        <li key={i} className="flex items-start">
                                            <span className="h-5 w-5 rounded-full bg-[#800000] text-white flex items-center justify-center text-xs mr-2 mt-0.5">
                                                {i + 1}
                                            </span>
                                            <span className="text-gray-700 text-sm">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
} 