import { AnimatedOnScroll } from 'react-animated-css-onscroll'
import iconFronteiraTec from '../../Assets/Logomarca/iconFronteiraTec.png'
import hexagonoLaranja from '../../Assets/hexagonoLaranja.png'
import hexagonoVerde from '../../Assets/hexagonoVerde.png'

export function AboutUs() {
  return (
    <div className="pt-20 pb-20 sm:mt-[200px] lg:mt-0">
      <div className="relative">
        <div className="absolute lg:-top-28 md:-top-14 -top-72 lg:-right-10 right-4 lg:h-[450px] lg:w-[450px] h-[130px] w-[130px]">
          <AnimatedOnScroll animationIn="pulse">
            <img src={hexagonoLaranja} alt="" />
          </AnimatedOnScroll>
        </div>
      </div>

      <div className="relative">
        <div className="absolute lg:top-36 -top-24 lg:-left-10 left-4 lg:h-[450px] lg:w-[450px] h-[130px] w-[130px]">
          <AnimatedOnScroll animationIn="pulse">
            <img src={hexagonoVerde} alt="" />
          </AnimatedOnScroll>
        </div>
      </div>

      <div className="grid max-w-screen-lg gap-5 lg:grid-cols-2 lg:mx-auto sm:grid-cols-1 p-5 text-center lg:divide-y-0 lg:divide-x-2 divide-y-2 divide-x-0 divide-green-500">
        <div>
          <AnimatedOnScroll animationIn="bounceInLeft">
            <div>
              <img
                src={iconFronteiraTec}
                alt=""
                className="lg:h-[320px] lg:w-[320px] sm:h-[240px] sm:w-[240px] m-auto sm:absolute lg:top-9 sm:-top-64 sm:right-44"
              />
            </div>
          </AnimatedOnScroll>
        </div>

        <div>
          <div className="sm:ml-14 mt-5 p-2">
            <AnimatedOnScroll animationIn="bounceInRight">
              <div>
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
            </AnimatedOnScroll>
          </div>
        </div>
      </div>

      <AnimatedOnScroll animationIn="zoomInUp">
        <div className="mt-5 flex items-center justify-center pl-5 pr-5">
          <div className="rounded-md bg-gradient-to-r from-orange-fronteira to-green-fronteira p-[2px] w-96 cursor-pointer group hover:scale-110 duration-150">
            <div className="flex h-full w-full items-center justify-center bg-white-fronteira back p-3 group-hover:bg-gradient-to-r from-orange-fronteira to-green-fronteira group-hover:text-white group-hover:font-bold">
              <h1>Saiba mais</h1>
            </div>
          </div>
        </div>
      </AnimatedOnScroll>
    </div>
  )
}
