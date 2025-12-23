import { motion } from 'framer-motion'
import iconFronteiraTec from '../../Assets/Logomarca/iconFronteiraTec.png'
import hexagonoLaranja from '../../Assets/hexagonoLaranja.png'
import hexagonoVerde from '../../Assets/hexagonoVerde.png'

export function AboutUs() {
  return (
    // sm:mt-[200px]
    <div className='max-w-[1440px] m-auto'>
      <div className="pt-2 pb-20 lg:mt-0 lg:flex max-w-[1440px]"> 
        <div className='flex pt-1 pb-3 mb-3 lg:border-b-0'>

          <div className="self-start absolute ">
            <motion.div
              className="w-[100px] md:w-[180px] lg:w-[100px]"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              viewport={{ once: false }}
            >
              <img src={hexagonoLaranja} alt="" />
            </motion.div>
          </div>

          <div className="m-auto lg:mx-auto sm:grid-cols-1 p-5 text-center lg:divide-y-0 lg:divide-x-2 divide-y-2 divide-x-0 divide-green-500">
            <div className='lg:w-[300px]'>
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                viewport={{ once: true }}
              >
                <div>
                  <img
                    src={iconFronteiraTec}
                    alt=""
                    className="w-[200px] mx-auto md:w-[300px]"
                  />
                </div>
              </motion.div>
            </div>
          </div>
          
          <div className="border-none self-end absolute right-0">
            <motion.div
              className="w-[100px] md:w-[180px] lg:w-[100px] xl:w-[200px]"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse",
                delay: 0.5
              }}
              viewport={{ once: false }}
            >
              <img src={hexagonoVerde} alt="" />
            </motion.div>
          </div>

          <div className='block lg:w-[2px] lg:h-full lg:bg-gradient-to-b from-green-fronteira to-orange-fronteira'></div>
        </div>
          <div>
            <div className="sm:ml-14 mt-5 p-2">
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="px-3">
                  <h1 className="text-4xl mb-5 text-green-fronteira">
                    A Fronteira <span className="font-bold">TEC</span>
                  </h1>
                  <p className="text-lg text-justify">
                    É uma <span className="font-bold">Empresa Júnior </span>
                    do curso de
                    <span className="font-bold">
                      {' '}
                      Ciência da Computação
                    </span> pela{' '}
                    <span className="font-bold">
                      {' '}
                      Universidade Federal da Fronteira Sul
                    </span>{' '}
                    (UFFS), campus <span className="font-bold"> Chapecó</span>. A
                    FTec nasceu com o intuito de fomentar o empreendedorismo e
                    aproximar os estudantes do respectivo mercado de trabalho.
                    Dessa forma, a empresa constitui sinonimo de
                    <span className="font-bold"> inovação</span>, já que leva as
                    tecnologias de ponta da Federal para{' '}
                    <span className="font-bold">
                      {' '}
                      solucionar dores do seu negócio.
                    </span>
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="mt-5 flex items-center justify-center pl-5 pr-5">
          <div className="rounded-md bg-gradient-to-r from-orange-fronteira to-green-fronteira p-[2px] w-96 cursor-pointer group hover:scale-110 duration-150">
            <div className="flex h-full w-full items-center justify-center bg-white-fronteira back p-3 group-hover:bg-gradient-to-r from-orange-fronteira to-green-fronteira group-hover:text-white group-hover:font-bold">
              <h1>Saiba mais</h1>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
