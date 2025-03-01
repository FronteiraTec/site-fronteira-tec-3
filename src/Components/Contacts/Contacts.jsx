import logoFronteiraTecColotido from '../../Assets/Logomarca/logomarcaFronteiraTecColorido.png'
import { AnimatedOnScroll } from 'react-animated-css-onscroll'
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2'
import React, { useRef } from 'react'

export function Contacts() {
  const form = useRef()

  const sendEmail = e => {
    e.preventDefault()

    emailjs
      .sendForm(
        `${import.meta.env.VITE_SERVICE_KEY}`, //ID Service
        `${import.meta.env.VITE_TEMPLATE_KEY}`, //ID Template
        form.current,
        `${import.meta.env.VITE_PUBLIC_KEY}` //Key Public
      )
      .then(
        result => {
          Swal.fire(
            'E-mail Enviado!',
            'Seu e-mail foi enviado com sucesso para Fronteira Tec',
            'success'
          )

          setTimeout(() => {
            location.reload()
          }, 1000)

          const input_user_name = (document.getElementById('user_name').value =
            '')
          const input_user_email = (document.getElementById(
            'user_email'
          ).value = '')
          const input_message = (document.getElementById('message').value = '')
        },
        error => {
          console.log(error)
        }
      )
  }
  return (
    <section>
      <div className="container px-6 mx-auto">
        <div className="sm:block sm:items-center lg:flex">
          <div className="mt-8 lg:w-4/5 lg:mx-auto">
            <div className="w-full px-8 py-10 mx-auto overflow-hidden lg:max-w-xl">
              <AnimatedOnScroll animationIn="zoomInUp">
                <h1 className="text-3xl font-medium text-green-fronteira text-center">
                  Entre em com <span className="font-bold">Contato</span>
                </h1>
              </AnimatedOnScroll>

              <form ref={form} onSubmit={sendEmail} className="mt-6">
                <div className="flex-1">
                  <AnimatedOnScroll animationIn="zoomInLeft">
                    <input
                      type="text"
                      name="user_name"
                      id="user_name"
                      placeholder="Seu nome"
                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder:text-xl placeholder-green-fronteira bg-transparent border-b border-green-fronteira outline-0"
                      required
                    />
                  </AnimatedOnScroll>
                </div>

                <div className="flex-1 mt-6">
                  <AnimatedOnScroll animationIn="zoomInLeft">
                    <input
                      type="email"
                      name="user_email"
                      id="user_email"
                      placeholder="E-mail"
                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder:text-xl placeholder-green-fronteira bg-transparent border-b border-green-fronteira outline-0"
                      required
                    />
                  </AnimatedOnScroll>
                </div>

                <div className="-mx-2 md:items-center md:flex">
                  <div className="flex-1 px-2 mt-6">
                    <AnimatedOnScroll animationIn="zoomInLeft">
                      <input
                        type="text"
                        name="user_number"
                        id="user_number"
                        placeholder="Telefone"
                        max="11"
                        className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder:text-xl placeholder-green-fronteira bg-transparent border-b border-green-fronteira outline-0"
                        required
                      />
                    </AnimatedOnScroll>
                  </div>

                  <div className="flex-1 px-2 mt-6">
                    <AnimatedOnScroll animationIn="zoomInLeft">
                      <input
                        type="text"
                        name="user_company"
                        id="user_company"
                        placeholder="Empresa"
                        className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder:text-xl placeholder-green-fronteira bg-transparent border-b border-green-fronteira outline-0"
                        required
                      />
                    </AnimatedOnScroll>
                  </div>
                </div>

                <div className="w-full mt-10">
                  <AnimatedOnScroll animationIn="zoomInLeft">
                    <textarea
                      type="text"
                      name="user_message"
                      id="user_message"
                      placeholder="Mensagem"
                      className="block w-full px-5 py-3 mt-2 h-32 text-gray-700 placeholder:text-xl placeholder-green-fronteira bg-transparent border-b border-green-fronteira outline-0"
                      required
                    />
                  </AnimatedOnScroll>
                </div>

                <div className="form-check mt-5">
                  <AnimatedOnScroll animationIn="zoomInDown">
                    <input
                      className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-green-fronteira checked:border-green-fronteira focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="checkbox"
                      id="termsOfUse"
                    />
                    <label
                      className="form-check-label inline-block text-green-fronteira lg:text-base text-sm"
                      htmlFor="termsOfUse"
                    >
                      Ao informar meus dados, eu concordo com o uso comercial
                    </label>
                  </AnimatedOnScroll>
                </div>

                <div className="w-10/12 m-auto">
                  <AnimatedOnScroll animationIn="tada">
                    <input
                      className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-green-fronteira hover:bg-green-fronteira/80 rounded-md"
                      type="submit"
                      value="Enviar"
                      id="buttonEnviar"
                    />
                  </AnimatedOnScroll>
                </div>
              </form>
            </div>
          </div>

          <div className="lg:w-1/2 w-full mx-auto">
            <div className="w-full px-3 py-10 mx-auto overflow-hidden lg:max-w-xl">
              <div className="mt-6 space-y-8 md:mt-8">
                <AnimatedOnScroll animationIn="zoomInRight">
                  <img
                    className="sm:h-32 h-25"
                    src={logoFronteiraTecColotido}
                    alt=""
                  />
                </AnimatedOnScroll>

                <p className="flex items-start -mx-2">
                  <AnimatedOnScroll animationIn="zoomInRight">
                    <img className="w-8 h-8" src="./Location.svg" alt="" />
                  </AnimatedOnScroll>
                  <AnimatedOnScroll animationIn="zoomInRight">
                    <span className="mx-2 text-green-fronteira w-72">
                      SC-484 - km 2, SC, 89815-899
                    </span>
                  </AnimatedOnScroll>
                </p>

                <p className="flex items-start -mx-2">
                  <AnimatedOnScroll animationIn="zoomInRight">
                    <img
                      className="w-8 h-8"
                      src="./SocialMedia/Phone.svg"
                      alt=""
                    />
                  </AnimatedOnScroll>

                  <AnimatedOnScroll animationIn="zoomInRight">
                    <span className="mx-2 text-green-fronteira w-72">
                      (49) 99948-4897
                    </span>
                  </AnimatedOnScroll>
                </p>

                <p className="flex items-start -mx-2">
                  <AnimatedOnScroll animationIn="zoomInRight">
                    <img
                      className="w-8 h-8"
                      src="./SocialMedia/Chat.svg"
                      alt=""
                    />
                  </AnimatedOnScroll>

                  <AnimatedOnScroll animationIn="zoomInRight">
                    <span className="mx-2 text-green-fronteira w-72">
                      contato.fronteiratec@gmail.com
                    </span>
                  </AnimatedOnScroll>
                </p>
              </div>

              <div className="mt-6 w-10/12 md:mt-8">
                <AnimatedOnScroll animationIn="zoomInRight">
                  <h3 className="text-gray-600 dark:text-gray-300 ">
                    Siga-nos
                  </h3>
                </AnimatedOnScroll>

                <div className="flex mt-4">
                  <a className="mx-1.5" href="https://www.instagram.com/fronteira_tec/" target="_blank">
                    <AnimatedOnScroll animationIn="zoomInRight">
                      <img
                        className="w-10 h-10"
                        src="./SocialMedia/Instagram.svg"
                        alt=""
                      />
                    </AnimatedOnScroll>
                  </a>

                  <a
                    className="mx-1.5"
                    target="_blanck"
                    href="https://api.whatsapp.com/send?phone=5549999484897&text=Ol%C3%A1!%20Tudo%20bem%3F%20Gostaria%20de%20saber%20mais%20sobre%20a%20Fronteria%20Tec"
                  >
                    <AnimatedOnScroll animationIn="zoomInRight">
                      <img
                        className="w-10 h-10"
                        src="./SocialMedia/Whatsapp.svg"
                        alt=""
                      />
                    </AnimatedOnScroll>
                  </a>

                  <a className="mx-1.5" href="#">
                    <AnimatedOnScroll animationIn="zoomInRight">
                      <img
                        className="w-10 h-10"
                        src="./SocialMedia/Twitter.svg"
                        alt=""
                      />
                    </AnimatedOnScroll>
                  </a>

                  <a className="mx-1.5" href="#">
                    <AnimatedOnScroll animationIn="zoomInRight">
                      <img
                        className="w-10 h-10"
                        src="./SocialMedia/Facebook.svg"
                        alt=""
                      />
                    </AnimatedOnScroll>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
