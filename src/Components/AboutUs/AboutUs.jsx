import { AnimatedOnScroll } from 'react-animated-css-onscroll'
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
            <div className="w-[100px] md:w-[180px] lg:w-[100px]">
              <AnimatedOnScroll animationIn="pulse">
                <img src={hexagonoLaranja} alt="" />
              </AnimatedOnScroll>
            </div>
          </div>

          <div className="m-auto lg:mx-auto sm:grid-cols-1 p-5 text-center lg:divide-y-0 lg:divide-x-2 divide-y-2 divide-x-0 divide-green-500">
            <div className='lg:w-[300px]'>
              <AnimatedOnScroll animationIn="bounceInLeft">
                <div>
                  <img
                    src={iconFronteiraTec}
                    alt=""
                    className="w-[200px] mx-auto md:w-[300px]"
                  />
                </div>
              </AnimatedOnScroll>
            </div>
          </div>
          
          <div className="border-none self-end absolute right-0">
            <div className="w-[100px] md:w-[180px] lg:w-[100px] xl:w-[200px]">
              <AnimatedOnScroll animationIn="pulse">
                <img src={hexagonoVerde} alt="" />
              </AnimatedOnScroll>
            </div>
          </div>

          <div className='block lg:w-[2px] lg:h-full lg:bg-gradient-to-b from-green-fronteira to-orange-fronteira'></div>
        </div>
          <div>
            <div className="sm:ml-14 mt-5 p-2">
              <AnimatedOnScroll animationIn="bounceInRight">
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
