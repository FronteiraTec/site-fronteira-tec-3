import { AnimatedOnScroll } from 'react-animated-css-onscroll'
import devYuri from '../../Assets/Devs/devYuri.png'
import devEduardo from '../../Assets/Devs/devEduardo.jpg'
import devJean from '../../Assets/Devs/devJean.jpg'
import devRobert from '../../Assets/Devs/devRobert.png'
import devLuiz from '../../Assets/Devs/devLuiz.jpeg'
import Swal from 'sweetalert2'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'

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

      <Splide
        options={{
          type: 'loop',
          perPage: 3,
          perMove: 1,
          focus: 'center'
        }}
      >
        <SplideSlide>
          <img src={devLuiz} alt="Pessoa" />
        </SplideSlide>

        <SplideSlide>
          <img
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
        </SplideSlide>

        <SplideSlide>
          <img
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
        </SplideSlide>

        <SplideSlide>
          <img
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
        </SplideSlide>

        <SplideSlide>
          <img
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
        </SplideSlide>

        <SplideSlide>
          <img src={devJean} alt="Pessoa" />
        </SplideSlide>
      </Splide>
    </div>
  )
}
