import { Main } from '../../Components/Main/Main'
import IconFronteiraTec from '../../Assets/Logomarca/IconFronteiraTec.png'

export function Home() {
  return (
    <Main>
      <div>
        <div className="lg:mt-[100px] lg:mr-[100px] m-5 text-white lg:text-end text-center">
          <div className="lg:flex lg:justify-end">
            <h1 className="lg:text-4xl text-xl font-normal lg:w-96">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h1>
          </div>
          <div>
            <button className="mt-[38px] lg:text-xl border border-gray-50 rounded-md p-3 hover:bg-white hover:text-black hover:border-none hover:scale-110 duration-100">
              Saiba Mais<span className="ml-3">{'>'}</span>
            </button>
          </div>
        </div>
      </div>

      <div id="AboutUs" className="bg-[#F5F5F5] sm:p-[50px] pb-10">
        <div class="grid max-w-screen-lg gap-5 md:grid-cols-2 sm:mx-auto p-5 text-center divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-green-500">
          <div>
            <div>
              <img
                src={IconFronteiraTec}
                alt=""
                className="h-[320px] w-[320px] m-auto"
              />
            </div>
          </div>

          <div>
            <div className="ml-5 mt-5">
              <h1 className="text-4xl mb-5">
                A Fronteira <span className="font-bold">TEC</span>
              </h1>
              <p className="text-base break-all">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                a iusto necessitatibus, beatae, in, fuga aperiam minus placeat
                voluptatibus aspernatur vel! Harum, repudiandae? Nesciunt,
                ipsum? Voluptas doloribus a rerum officiis. Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Cumque a iusto
                necessitatibus, beatae, in, fuga aperiam minus placeat
                voluptatibus aspernatur vel! Harum, repudiandae? Nesciunt,
                ipsum? Voluptas doloribus a rerum officiis.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-center">
          <div className="rounded-md bg-gradient-to-r from-[#F27C1A] to-[#006C3C] p-1 w-96 cursor-pointer group hover:scale-110 duration-100">
            <div className="flex h-full w-full items-center justify-center bg-[#F5F5F5] back p-3 group-hover:bg-gradient-to-r from-[#F27C1A] to-[#006C3C] group-hover:text-white group-hover:font-bold">
              <h1>Saiba mais</h1>
            </div>
          </div>
        </div>
      </div>

      <div id="Members" className="bg-orange-600 h-96"></div>

      <div id="Services" className="bg-[#F5F5F5] sm:p-[50px] pt-10 pb-10">
        <div className="text-center">
          <h1 className="text-4xl mb-5">
            Nossos <span className="font-bold">Serviços</span>
          </h1>
          <div className="bg-gradient-to-r from-[#006C3C] to-[#F27C1A] h-2 w-20 m-auto mt-2" />
        </div>

        <div class="grid max-w-screen-lg gap-5 md:grid-cols-2 sm:mx-auto p-5 text-center">
          <div>
            <div className="ml-5 mt-5 bg-[#006C3C]/30 hover:bg-[#006C3C]/40 p-5 rounded-md">
              <h1 className="text-4xl mb-5 font-bold">Web</h1>
              <p className="text-base break-all">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                a iusto necessitatibus, beatae, in, fuga aperiam minus placeat
                voluptatibus aspernatur vel! Harum, repudiandae? Nesciunt,
                ipsum? Voluptas doloribus a rerum officiis. Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Cumque a iusto
                necessitatibus, beatae, in, fuga aperiam minus placeat
                voluptatibus aspernatur vel! Harum, repudiandae? Nesciunt,
                ipsum? Voluptas doloribus a rerum officiis.
              </p>
            </div>
          </div>

          <div>
            <div className="ml-5 mt-5 bg-[#F27C1A]/30 hover:bg-[#F27C1A]/40 p-5 rounded-md">
              <h1 className="text-4xl mb-5 font-bold">Mobile</h1>
              <p className="text-base break-all">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                a iusto necessitatibus, beatae, in, fuga aperiam minus placeat
                voluptatibus aspernatur vel! Harum, repudiandae? Nesciunt,
                ipsum? Voluptas doloribus a rerum officiis. Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Cumque a iusto
                necessitatibus, beatae, in, fuga aperiam minus placeat
                voluptatibus aspernatur vel! Harum, repudiandae? Nesciunt,
                ipsum? Voluptas doloribus a rerum officiis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Main>
  )
}
