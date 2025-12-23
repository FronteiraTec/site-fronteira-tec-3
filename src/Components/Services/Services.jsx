import { motion } from 'framer-motion'
import iconComputador from '../../Assets/iconComputador.png'
import iconCelular from '../../Assets/iconCelular.png'

export function Services() {
  return (
    <div>
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <br></br>
          <br></br>
          <h1 className="text-4xl mb-5 text-green-fronteira dark:text-green-400">
            Nossos <span className="font-bold">Serviços</span>
          </h1>
        </motion.div>
        <div className="bg-gradient-to-r from-green-fronteira to-orange-fronteira h-1 w-40 m-auto mt-2" />
      </div>

      <div className="w-full flex flex-col justify-around lg:flex-row sm:mx-auto p-10 text-center">
        <div>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="mt-20 bg-green-fronteira/50 hover:bg-green-fronteira/40 dark:bg-green-800/40 dark:hover:bg-green-700/50 dark:border dark:border-green-600/50 p-10 pt-28 rounded-md lg:h-[480px] h-auto sm:w-[500px] m-auto shadow-lg">
              <div className="flex justify-center">
                <img
                  className="h-[150px] w-[150px] sm:h-[200px] sm:w-[200px] absolute sm:-top-24 -top-16"
                  src={iconComputador}
                  alt=""
                />
              </div>
              <h1 className="text-4xl mb-5 font-bold text-white dark:text-gray-100">Web</h1>
              <p className="text-lg sm:text-justify sm:leading-5 text-white dark:text-gray-200">
                Desenvolmemos{' '}
                <span className="font-bold">
                  {' '}
                  sites, portfólios e sistemas web
                </span>{' '}
                que podem
                <span className="font-bold"> impulsionar e automatizar</span> o
                seu negócio, assim trabalhamos com as ferramentas necessárias
                para <span className="font-bold"> você ser referência</span> do
                seu ramo na pesquisa pelo Google.
              </p>
            </div>
          </motion.div>
        </div>

        <div>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="mt-20 bg-orange-fronteira/50 hover:bg-orange-fronteira/40 dark:bg-orange-800/40 dark:hover:bg-orange-700/50 dark:border dark:border-orange-600/50 p-10 pt-28 rounded-md lg:h-[480px] h-auto sm:w-[500px] m-auto shadow-lg">
              <div className="flex justify-center">
                <img
                  className="h-[150px] w-[150px] sm:h-[200px] sm:w-[200px] absolute sm:-top-24 -top-16"
                  src={iconCelular}
                  alt=""
                />
              </div>
              <h1 className="text-4xl mb-5 font-bold text-white dark:text-gray-100">Mobile</h1>
              <p className="text-lg sm:text-justify sm:leading-5 text-white dark:text-gray-200">
                Desenvolvemos{' '}
                <span className="font-bold"> aplicativos mobile</span> focados
                na compatibilidade com os sistemas operacionais{' '}
                <span className="font-bold"> Android e iOS</span>, tanto para
                Tablets, quanto para Smartphones, de maneira a aumentar a{' '}
                <span className="font-bold"> produtividade</span> e facilitar os
                processos internos e/ou externos do seu negócio.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="w-60 m-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <a href="#Contacts">
            <button className="w-full px-2 py-5 mt-6 text-md font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-green-fronteira hover:bg-green-fronteira/80 hover:scale-110 duration-150 rounded-md">
              Encontre em Contato {'>'}
            </button>
          </a>
        </motion.div>
      </div>
    </div>
  )
}
