import { AnimatedOnScroll } from 'react-animated-css-onscroll'

export function Carousel() {
  return (
    <div
      id="carouselDarkVariant"
      className="carousel slide carousel-fade carousel-dark relative"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
        <button
          data-bs-target="#carouselDarkVariant"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          data-bs-target="#carouselDarkVariant"
          data-bs-slide-to="1"
          aria-label="Slide 1"
        ></button>
        <button
          data-bs-target="#carouselDarkVariant"
          data-bs-slide-to="2"
          aria-label="Slide 1"
        ></button>
      </div>

      <div className="carousel-inner relative w-full overflow-hidden">
        <div className="carousel-item active relative float-left w-full bg-fronteira-tec1 bg-cover bg-no-repeat h-screen">
          <div className="mt-[350px] lg:mr-[100px] m-5 text-white lg:text-end text-center">
            <div className="flex justify-end">
              <AnimatedOnScroll animationIn="zoomInRight">
                <h1 className="lg:text-5xl text-3xl font-normal lg:w-96 sm:text-end text-center">
                  Nosso{' '}
                  <span className="font-bold">Desenvolvimento cresce </span> o
                  seu
                  <span className="font-bold"> Negócio</span>
                </h1>
              </AnimatedOnScroll>
            </div>
            <div>
              <AnimatedOnScroll animationIn="zoomInUp">
                <button className="mt-[38px] lg:text-xl border border-gray-50 rounded-md p-3 hover:bg-white hover:text-black hover:border-none hover:scale-110 duration-150">
                  Saiba Mais<span className="ml-3">{'>'}</span>
                </button>
              </AnimatedOnScroll>
            </div>
          </div>
        </div>

        <div className="carousel-item relative float-left w-full bg-fronteira-tec2 bg-cover bg-no-repeat h-screen">
          <div className="mt-[350px] lg:mr-[100px] m-5 text-white lg:text-start text-center lg:ml-10">
            <div className="flex justify-start">
              <AnimatedOnScroll animationIn="zoomInLeft">
                <h1 className="lg:text-5xl text-3xl font-normal lg:w-96 sm:text-start text-center">
                  Seu <span className="font-bold">Aplicativo Mobile</span> feito
                  com <span className="font-bold"> Segurança</span> e{' '}
                  <span className="font-bold"> Tecnologia</span>
                </h1>
              </AnimatedOnScroll>
            </div>
            <div>
              <AnimatedOnScroll animationIn="zoomInUp">
                <button className="mt-[38px] lg:text-xl border border-gray-50 rounded-md p-3 hover:bg-white hover:text-black hover:border-none hover:scale-110 duration-100">
                  Saiba Mais<span className="ml-3">{'>'}</span>
                </button>
              </AnimatedOnScroll>
            </div>
          </div>
        </div>

        <div className="carousel-item relative float-left w-full bg-fronteira-tec3 bg-cover bg-no-repeat h-screen">
          <div className="mt-[350px] lg:mr-[100px] m-5 text-white text-center lg:ml-10">
            <div className="flex justify-center">
              <AnimatedOnScroll animationIn="zoomInUp">
                <h1 className="lg:text-5xl text-3xl font-normal lg:w-96 text-center">
                  <span className="font-bold">Sistemas </span> desenvolvidos
                  para <span className="font-bold"> Solucionar</span> o seu{' '}
                  <span className="font-bold"> Desafio</span>
                </h1>
              </AnimatedOnScroll>
            </div>
            <div>
              <AnimatedOnScroll animationIn="zoomInUp">
                <button className="mt-[38px] lg:text-xl border border-gray-50 rounded-md p-3 hover:bg-white hover:text-black hover:border-none hover:scale-110 duration-100">
                  Saiba Mais<span className="ml-3">{'>'}</span>
                </button>
              </AnimatedOnScroll>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
