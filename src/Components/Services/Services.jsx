import { AnimatedOnScroll } from 'react-animated-css-onscroll'
import iconComputador from '../../Assets/iconComputador.png'
import iconCelular from '../../Assets/iconCelular.png'

export function Services() {
  return (
    <div>
      <div className="text-center">
        <AnimatedOnScroll animationIn="zoomInUp">
          <h1 className="text-4xl mb-5 text-green-fronteira">
            Nossos <span className="font-bold">Serviços</span>
          </h1>
        </AnimatedOnScroll>
        <div className="bg-gradient-to-r from-green-fronteira to-orange-fronteira h-1 w-40 m-auto mt-2" />
      </div>

      <div className="grid max-w-screen-lg lg:gap-40 md:grid-cols-2 sm:mx-auto p-10 text-center text-white">
        <div>
          <AnimatedOnScroll animationIn="zoomInLeft">
            <div className="mt-20 bg-green-fronteira/50 hover:bg-green-fronteira/40 p-10 pt-28 rounded-md lg:h-[480px] h-auto sm:w-[500px] m-auto">
              <div className="flex justify-center">
                <img
                  className="h-[150px] w-[150px] sm:h-[200px] sm:w-[200px] absolute sm:-top-24 -top-16"
                  src={iconComputador}
                  alt=""
                />
              </div>
              <h1 className="text-4xl mb-5 font-bold">Web</h1>
              <p className="text-lg text-justify">
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
          </AnimatedOnScroll>
        </div>

        <div>
          <AnimatedOnScroll animationIn="zoomInLeft">
            <div className="mt-20 bg-orange-fronteira/50 hover:bg-orange-fronteira/40 p-10 pt-28 rounded-md lg:h-[480px] h-auto sm:w-[500px] m-auto">
              <div className="flex justify-center">
                <img
                  className="h-[150px] w-[150px] sm:h-[200px] sm:w-[200px] absolute sm:-top-24 -top-16"
                  src={iconCelular}
                  alt=""
                />
              </div>
              <h1 className="text-4xl mb-5 font-bold">Mobile</h1>
              <p className="text-lg text-justify">
                Desenvolvemos{' '}
                <span className="font-bold"> aplicativos mobile</span> focados
                na compatibilidade com os sistemas operacionais{' '}
                <span className="font-bold"> Android e iOS</span>, tanto para
                Tablets, quanto para Smartphones, de maneira a aumentar a{' '}
                <span className="font-bold"> produtividade</span> e facilitar os
                processos internos e/ou externos do seu negócio.
              </p>
            </div>
          </AnimatedOnScroll>
        </div>
      </div>
      <div className="w-60 m-auto">
        <AnimatedOnScroll animationIn="tada">
          <a href="#Contacts">
            <button className="w-full px-2 py-5 mt-6 text-md font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-green-fronteira hover:bg-green-fronteira/80 hover:scale-110 duration-150 rounded-md">
              Encontre em Contato {'>'}
            </button>
          </a>
        </AnimatedOnScroll>
      </div>
    </div>
  )
}
