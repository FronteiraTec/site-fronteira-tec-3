import { Main } from '../../Components/Main/Main'
import iconFronteiraTec from '../../Assets/Logomarca/iconFronteiraTec.png'
import hexagonoLaranja from '../../Assets/hexagonoLaranja.png'
import hexagonoVerde from '../../Assets/hexagonoVerde.png'
import { AnimatedOnScroll } from 'react-animated-css-onscroll'
import { Carousel } from '../../Components/Carousel/Carousel'

export function Home() {
  const Page = props => {
    const { children, ...rest } = props
    return <div {...rest}>{children}</div>
  }
  return (
    <Main>
      <div>
        <Carousel />
      </div>

      <div id="AboutUs" className="bg-white-fronteira sm:p-[50px] pb-10">
        <div class="relative">
          <div class="absolute lg:-top-28 md:-top-14 -top-5 lg:-right-3 right-0 lg:h-[450px] lg:w-[450px] h-[170px] w-[170px]">
            <AnimatedOnScroll animationIn="pulse">
              <Page children={<img src={hexagonoLaranja} alt="" />} />
            </AnimatedOnScroll>
          </div>
        </div>

        <div class="relative">
          <div class="absolute lg:top-16 top-28 lg:-left-3 left-0 lg:h-[450px] lg:w-[450px] h-[170px] w-[170px]">
            <AnimatedOnScroll animationIn="pulse">
              <Page children={<img src={hexagonoVerde} alt="" />} />
            </AnimatedOnScroll>
          </div>
        </div>

        <div class="grid max-w-screen-lg gap-5 md:grid-cols-2 sm:mx-auto p-5 text-center divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-green-500">
          <div>
            <div>
              <AnimatedOnScroll animationIn="bounceInLeft">
                <Page
                  children={
                    <div>
                      <img
                        src={iconFronteiraTec}
                        alt=""
                        className="h-[220px] w-[220px] m-auto"
                      />
                    </div>
                  }
                />
              </AnimatedOnScroll>
            </div>
          </div>

          <div>
            <div className="ml-5 mt-5">
              <AnimatedOnScroll animationIn="bounceInRight">
                <Page
                  children={
                    <div>
                      <h1 className="text-4xl mb-5">
                        A Fronteira <span className="font-bold">TEC</span>
                      </h1>
                      <p className="text-base break-all">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Cumque a iusto necessitatibus, beatae, in, fuga aperiam
                        minus placeat voluptatibus aspernatur vel! Harum,
                        repudiandae? Nesciunt, ipsum? Voluptas doloribus a rerum
                        officiis. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Cumque a iusto necessitatibus, beatae,
                        in, fuga aperiam minus placeat voluptatibus aspernatur
                        vel! Harum, repudiandae? Nesciunt, ipsum? Voluptas
                        doloribus a rerum officiis.
                      </p>
                    </div>
                  }
                />
              </AnimatedOnScroll>
            </div>
          </div>
        </div>

        <AnimatedOnScroll animationIn="zoomInUp">
          <Page
            children={
              <div className="mt-5 flex items-center justify-center">
                <div className="rounded-md bg-gradient-to-r from-orange-fronteira to-green-fronteira p-[2px] w-96 cursor-pointer group hover:scale-110 duration-100">
                  <div className="flex h-full w-full items-center justify-center bg-white-fronteira back p-3 group-hover:bg-gradient-to-r from-orange-fronteira to-green-fronteira group-hover:text-white group-hover:font-bold">
                    <h1>Saiba mais</h1>
                  </div>
                </div>
              </div>
            }
          />
        </AnimatedOnScroll>
      </div>

      <div id="Members" className="bg-orange-waves h-96"></div>

      <div id="Services" className="bg-white-fronteira sm:p-[50px] pt-10 pb-10">
        <div className="text-center">
          <AnimatedOnScroll animationIn="zoomInUp">
            <Page
              children={
                <h1 className="text-4xl mb-5">
                  Nossos <span className="font-bold">Serviços</span>
                </h1>
              }
            />
          </AnimatedOnScroll>
          <div className="bg-gradient-to-r from-green-fronteira to-orange-fronteira h-2 w-24 m-auto mt-2" />
        </div>

        <div class="grid max-w-screen-lg gap-5 md:grid-cols-2 sm:mx-auto p-5 text-center">
          <div>
            <AnimatedOnScroll animationIn="zoomInLeft">
              <Page
                children={
                  <div className="ml-5 mt-5 bg-green-fronteira/30 hover:bg-green-fronteira/40 p-5 rounded-md">
                    <h1 className="text-4xl mb-5 font-bold">Web</h1>
                    <p className="text-base break-all">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Cumque a iusto necessitatibus, beatae, in, fuga aperiam
                      minus placeat voluptatibus aspernatur vel! Harum,
                      repudiandae? Nesciunt, ipsum? Voluptas doloribus a rerum
                      officiis. Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Cumque a iusto necessitatibus, beatae,
                      in, fuga aperiam minus placeat voluptatibus aspernatur
                      vel! Harum, repudiandae? Nesciunt, ipsum? Voluptas
                      doloribus a rerum officiis.
                    </p>
                  </div>
                }
              />
            </AnimatedOnScroll>
          </div>

          <div>
            <AnimatedOnScroll animationIn="zoomInRight">
              <Page
                children={
                  <div className="ml-5 mt-5 bg-orange-fronteira/30 hover:bg-orange-fronteira/40 p-5 rounded-md">
                    <h1 className="text-4xl mb-5 font-bold">Mobile</h1>
                    <p className="text-base break-all">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Cumque a iusto necessitatibus, beatae, in, fuga aperiam
                      minus placeat voluptatibus aspernatur vel! Harum,
                      repudiandae? Nesciunt, ipsum? Voluptas doloribus a rerum
                      officiis. Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Cumque a iusto necessitatibus, beatae,
                      in, fuga aperiam minus placeat voluptatibus aspernatur
                      vel! Harum, repudiandae? Nesciunt, ipsum? Voluptas
                      doloribus a rerum officiis.
                    </p>
                  </div>
                }
              />
            </AnimatedOnScroll>
          </div>
        </div>
      </div>
    </Main>
  )
}
