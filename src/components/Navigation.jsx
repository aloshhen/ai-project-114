import { Coffee, Menu } from 'lucide-react'
import { motion } from 'framer-motion'

function Navigation() {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
      className="fixed top-0 left-0 right-0 z-50 glass-morphism p-4"
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Coffee className="text-blue-500" />
          <h1 className="text-xl font-bold tracking-tight">Кофейная Экосистема</h1>
        </div>
        <div className="hidden md:flex space-x-4">
          {['Меню', 'О нас', 'Галерея', 'Контакты'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-gray-300 hover:text-blue-500 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
        <Menu className="md:hidden text-white" />
      </div>
    </motion.nav>
  )
}

export default Navigation