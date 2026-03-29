'use client';

import { motion } from 'framer-motion';

export default function ImageShowcase() {
  const images = [
    {
      src: '/images/beetoo-generative-ai-flow.jpg',
      alt: 'AI-powered design flow with BEETOO',
      title: 'Generative AI Integration',
      description: 'Design assets materializing in real-time with AI assistance',
    },
    {
      src: '/images/beetoo-blockchain-fingerprint.jpg',
      alt: 'Blockchain fingerprint visualization',
      title: 'On-Chain IP Proof',
      description: 'Your work signed, verified, and immortalized on the blockchain',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-20 bg-slate-900">
      <div className="container-max">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20 blur-2xl rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <img
                src={image.src}
                alt={image.alt}
                className="relative w-full rounded-xl shadow-2xl group-hover:shadow-orange-500/20 transition-shadow duration-300"
              />
              <div className="mt-6">
                <h3 className="text-2xl font-bold text-white mb-2">{image.title}</h3>
                <p className="text-slate-400">{image.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
