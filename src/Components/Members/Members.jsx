import { AnimatedOnScroll } from 'react-animated-css-onscroll'
import devYuri from '../../Assets/Devs/devYuri.png'
import devEduardo from '../../Assets/Devs/devEduardo.jpg'
import devJean from '../../Assets/Devs/devJean.jpg'
import devRobert from '../../Assets/Devs/devRobert.png'
import devLuiz from '../../Assets/Devs/devLuiz.jpeg'
import Swal from 'sweetalert2'

export function Members() {
  function ModalMember(member) {
    Swal.fire(
      `<h1 class='text-3xl font-bold mb-2'>${member[0].name}</h1>` +
        `<img class='rounded-lg h-96 w-96 m-auto mb-2' src=${member[0].photo} />` +
        `<h3 class='text-xl'>${member[0].office}</h3>` +
        `<div class="flex justify-center mt-2 gap-5">` +
        `<a href='${member[0].hrefGitHub}' target="_blanck">` +
        `<div class="sm:w-20 sm:h-20 duration-150 hover:scale-105 transition-all">` +
        `<img class="bg-indigo-700 hover:bg-indigo-500 rounded-full p-2 h-20 w-20 m-auto" src='./SocialMedia/GitHub.png' alt="" />` +
        `</div>` +
        `</a>` +
        `<a href='${member[0].hrefLinkeDin}' target="_blanck">` +
        `<div class="sm:w-20 sm:h-20 duration-150 hover:scale-105 transition-all">` +
        `<img class="bg-indigo-700 hover:bg-indigo-500 rounded-full p-2 h-20 w-20 m-auto" src='./SocialMedia/GitHub.png' alt="" />` +
        `</div>` +
        `</a>` +
        `</div>`
    )
  }

  return (
    <div className="mt-5">
      <AnimatedOnScroll animationIn="zoomInUp">
        <h1 className="text-4xl mb-5 text-white">
          Nosso <span className="font-bold">Time</span>
        </h1>
      </AnimatedOnScroll>
      <div className="grid gap-2 mx-auto grid-cols-1 lg:grid-cols-6 lg:max-w-screen-lg sm:mt-20">
        <AnimatedOnScroll animationIn="zoomInUp" className="sm:pt-20">
          <div className="p-2">
            <img
              className="object-cover w-40 h-40 m-auto rounded-full hover:scale-105 duration-150 cursor-pointer"
              src={devLuiz}
              alt="Pessoa"
              onClick={() => {
                ModalMember([
                  {
                    name: 'Luiz',
                    office: 'Diretor de Gente e Gestão'
                  }
                ])
              }}
            />
          </div>
        </AnimatedOnScroll>

        <AnimatedOnScroll animationIn="zoomInDown" className="sm:pt-10">
          <div className="p-2">
            <img
              className="object-cover w-40 h-40 m-auto rounded-full hover:scale-105 duration-150 cursor-pointer"
              src={devJean}
              alt="Pessoa"
              onClick={() => {
                ModalMember([
                  {
                    name: 'Jean',
                    office: 'Desenvolvedor'
                  }
                ])
              }}
            />
          </div>
        </AnimatedOnScroll>

        <AnimatedOnScroll animationIn="zoomInUp">
          <div className="p-2">
            <img
              className="object-cover w-40 h-40 m-auto rounded-full hover:scale-105 duration-150 cursor-pointer"
              src={devYuri}
              alt="Pessoa"
              onClick={() => {
                ModalMember([
                  {
                    name: 'Yuri Rhuan dos Santos',
                    office: 'Diretor de Projetos',
                    photo: devYuri,
                    hrefGitHub: 'https://github.com/yurirsantos',
                    hrefLinkeDin: 'https://www.linkedin.com/in/yurirsantos/'
                  }
                ])
              }}
            />
          </div>
        </AnimatedOnScroll>

        <AnimatedOnScroll animationIn="zoomInDown">
          <div className="p-2">
            <img
              className="object-cover w-40 h-40 m-auto rounded-full hover:scale-105 duration-150 cursor-pointer"
              src={devEduardo}
              alt="Pessoa"
              onClick={() => {
                ModalMember([
                  {
                    name: 'Eduardo',
                    office: 'Desenvolvedor'
                  }
                ])
              }}
            />
          </div>
        </AnimatedOnScroll>

        <AnimatedOnScroll animationIn="zoomInUp" className="sm:pt-10">
          <div className="p-2">
            <img
              className="object-cover w-40 h-40 m-auto rounded-full hover:scale-105 duration-150 cursor-pointer"
              src={devRobert}
              alt="Pessoa"
              onClick={() => {
                ModalMember([
                  {
                    name: 'Robert Drey',
                    office: 'Diretor de Mercado'
                  }
                ])
              }}
            />
          </div>
        </AnimatedOnScroll>

        <AnimatedOnScroll animationIn="zoomInDown" className="sm:pt-20">
          <div className="p-2">
            <img
              className="object-cover w-40 h-40 m-auto rounded-full hover:scale-105 duration-150 cursor-pointer"
              src={devJean}
              alt="Pessoa"
            />
          </div>
        </AnimatedOnScroll>
      </div>
    </div>
  )
}
