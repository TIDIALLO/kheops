'use client'

import { motion } from 'framer-motion'
import { controleCouts } from './data'

export function ControleCoutsClient({ controleCouts }: { controleCouts: typeof controleCouts })
{
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#f9f5f5] to-[#f7f2f2] py-16">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#800000]">
                        {controleCouts.titre}
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        {controleCouts.description}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {controleCouts.points.map((point, index) => (
                        <motion.div
                            key={point.titre}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
                        >
                            <div className="text-4xl mb-4">{point.icon}</div>
                            <h3 className="text-xl font-bold mb-3 text-[#800000]">
                                {point.titre}
                            </h3>
                            <p className="text-gray-600">
                                {point.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mt-16 text-center"
                >
                    <h2 className="text-2xl font-bold mb-6 text-[#800000]">
                        Notre Approche
                    </h2>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                        Nous combinons des méthodologies éprouvées avec des outils technologiques avancés
                        pour vous offrir un contrôle précis et efficace de vos coûts. Notre approche proactive
                        vous permet d'anticiper les risques budgétaires et d'optimiser vos ressources.
                    </p>
                </motion.div>
            </div>
        </div>
    )
} 