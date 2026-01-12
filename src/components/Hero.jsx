import { motion } from 'framer-motion'
import { BackgroundBeams } from './ui/background-beams'
import { Coffee } from 'lucide-react'

function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <BackgroundBeams />
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'spring', duration: 0.7 }}
        className="relative z-10 text-center px-4"
      >
        <div className="inline-flex items-center bg-blue-500/20 px-4 py-2 rounded-full mb-4">
          <Coffee className="mr-2 text-blue-400" />
          <span className="text-blue-300">Инновационная кофейная экосистема</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
          Будущее кофе <br />в вашем смартфоне
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          Революционное мобильное приложение, которое трансформирует ваш опыт потребления кофе
        </p>
        <div className="flex justify-center space-x-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-colors"
          >
            Открыть в Telegram
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-blue-500/50 text-blue-400 px-6 py-3 rounded-full hover:bg-blue-500/10 transition-colors"
          >
            Узнать больше
          </motion.button>
        </div>
      </motion.div>
    </div>
  )
}

export default Hero