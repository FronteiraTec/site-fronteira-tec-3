import { AnimatedOnScroll } from 'react-animated-css-onscroll'
import devYuri from '../../Assets/Devs/devYuri.png'
import devEduardo from '../../Assets/Devs/devEduardo.jpg'
import devJean from '../../Assets/Devs/devJean.jpg'
import devRobert from '../../Assets/Devs/devRobert.png'
import devLuiz from '../../Assets/Devs/devLuiz.jpeg'
// import left from '../../Assets/Icons/left'
import Swal from 'sweetalert2'
import { slideData } from './slideData'
import { useState } from 'react'
import { useEffect } from 'react'

// export function Members() {
//   function ModalMember(member) {
//     Swal.fire(
//       `<h1 class='text-3xl font-bold mb-2'>${member[0].name}</h1>` +
//         `<img class='rounded-lg h-96 w-96 m-auto mb-2 rounded-full' src=${member[0].photo} />` +
//         `<h3 class='text-xl'>${member[0].office}</h3>` +
//         `<div class="flex justify-center mt-2 gap-5">` +
//         `<a href='${member[0].hrefGitHub}' target="_blanck">` +
//         `<div class="sm:w-20 sm:h-20 duration-150 hover:scale-105 transition-all">` +
//         `<img class="bg-indigo-700 hover:bg-indigo-500 rounded-full p-2 h-20 w-20 m-auto" src='./SocialMedia/GitHub.png' alt="" />` +
//         `</div>` +
//         `</a>` +
//         `<a href='${member[0].hrefLinkeDin}' target="_blanck">` +
//         `<div class="sm:w-20 sm:h-20 duration-150 hover:scale-105 transition-all">` +
//         `<img class="bg-indigo-700 hover:bg-indigo-500 rounded-full p-2 h-20 w-20 m-auto" src='./SocialMedia/LinkedIn.png' alt="" />` +
//         `</div>` +
//         `</a>` +
//         `</div>`
//     )
//   }

//   return (
//     <div className="mt-5">
//       <AnimatedOnScroll animationIn="zoomInUp">
//         <h1 className="text-4xl mb-5 text-white">
//           Nosso <span className="font-bold">Time</span>
//         </h1>
//       </AnimatedOnScroll>
//       <div className="grid gap-2 mx-auto grid-cols-1 lg:grid-cols-6 lg:max-w-screen-lg sm:mt-20">
//         <AnimatedOnScroll animationIn="zoomInUp" className="lg:pt-20">
//           <div className="p-2">
//             <img
//               className="object-cover w-40 h-40 m-auto rounded-full hover:scale-105 duration-150 cursor-pointer"
//               src={devLuiz}
//               alt="Pessoa"
//               onClick={() => {
//                 ModalMember([
//                   {
//                     name: 'Luiz',
//                     office: 'Diretor de Gente e Gestão',
//                     photo: devLuiz,
//                     hrefGitHub: 'https://github.com/yurirsantos',
//                     hrefLinkeDin: 'https://www.linkedin.com/in/yurirsantos/'
//                   }
//                 ])
//               }}
//             />
//           </div>
//         </AnimatedOnScroll>

//         <AnimatedOnScroll animationIn="zoomInDown" className="lg:pt-10">
//           <div className="p-2">
//             <img
//               className="object-cover w-40 h-40 m-auto rounded-full hover:scale-105 duration-150 cursor-pointer"
//               src={devJean}
//               alt="Pessoa"
//               onClick={() => {
//                 ModalMember([
//                   {
//                     name: 'Otávio',
//                     office: 'Presidente',
//                     photo: devRobert,
//                     hrefGitHub: 'https://github.com/yurirsantos',
//                     hrefLinkeDin: 'https://www.linkedin.com/in/yurirsantos/'
//                   }
//                 ])
//               }}
//             />
//           </div>
//         </AnimatedOnScroll>

//         <AnimatedOnScroll animationIn="zoomInUp">
//           <div className="p-2">
//             <img
//               className="object-cover w-40 h-40 m-auto rounded-full hover:scale-105 duration-150 cursor-pointer"
//               src={devYuri}
//               alt="Pessoa"
//               onClick={() => {
//                 ModalMember([
//                   {
//                     name: 'Yuri Rhuan dos Santos',
//                     office: 'Diretor de Projetos',
//                     photo: devYuri,
//                     hrefGitHub: 'https://github.com/yurirsantos',
//                     hrefLinkeDin: 'https://www.linkedin.com/in/yurirsantos/'
//                   }
//                 ])
//               }}
//             />
//           </div>
//         </AnimatedOnScroll>

//         <AnimatedOnScroll animationIn="zoomInDown">
//           <div className="p-2">
//             <img
//               className="object-cover w-40 h-40 m-auto rounded-full hover:scale-105 duration-150 cursor-pointer"
//               src={devEduardo}
//               alt="Pessoa"
//               onClick={() => {
//                 ModalMember([
//                   {
//                     name: 'Eduardo',
//                     office: 'Desenvolvedor',
//                     photo: devEduardo,
//                     hrefGitHub: 'https://github.com/yurirsantos',
//                     hrefLinkeDin: 'https://www.linkedin.com/in/yurirsantos/'
//                   }
//                 ])
//               }}
//             />
//           </div>
//         </AnimatedOnScroll>

//         <AnimatedOnScroll animationIn="zoomInUp" className="lg:pt-10">
//           <div className="p-2">
//             <img
//               className="object-cover w-40 h-40 m-auto rounded-full hover:scale-105 duration-150 cursor-pointer"
//               src={devRobert}
//               alt="Pessoa"
//               onClick={() => {
//                 ModalMember([
//                   {
//                     name: 'Robert Drey',
//                     office: 'Diretor de Mercado',
//                     photo: devRobert,
//                     hrefGitHub: 'https://github.com/yurirsantos',
//                     hrefLinkeDin: 'https://www.linkedin.com/in/yurirsantos/'
//                   }
//                 ])
//               }}
//             />
//           </div>
//         </AnimatedOnScroll>

//         <AnimatedOnScroll animationIn="zoomInDown" className="lg:pt-20">
//           <div className="p-2">
//             <img
//               className="object-cover w-40 h-40 m-auto rounded-full hover:scale-105 duration-150 cursor-pointer"
//               src={devJean}
//               alt="Pessoa"
//               onClick={() => {
//                 ModalMember([
//                   {
//                     name: 'Jean',
//                     office: 'Desenvolvedor',
//                     photo: devJean,
//                     hrefGitHub: 'https://github.com/yurirsantos',
//                     hrefLinkeDin: 'https://www.linkedin.com/in/yurirsantos/'
//                   }
//                 ])
//               }}
//             />
//           </div>
//         </AnimatedOnScroll>
//       </div>
//     </div>
//   )
// }

function Member({member, style}) {
  // {console.log(member)}
  return (
    // <div className={`rounded-full h-[200px] w-[200px] bg-dev-eduardo)] ${style}`}></div>
    <img src={member.image} alt="" className={`h-[180px] w-[180px] ${style} rounded-full`}/>
  )
}

export function Members() {
  const [members, setMembers] = useState(slideData)

  const leftDisloc = () => {
    var memb = members
    memb.push(memb[0])
    memb.splice(0,1)
    setMembers(memb)
    console.log(members)
  }

  // useEffect(() => {
  //   leftDisloc()
  // }, []);
  useEffect(() => {
    console.log(members)
  }, [members]);

  return (
    <div className='flex'>
      <svg onClick={leftDisloc} className="self-center ml-10 cursor-pointer" width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M29.5255 0.0299972H14.4755L0.265544 15.5L14.4755 30.97H29.5255L15.2455 15.5L29.5255 0.0299972Z" fill="white"/>
      </svg>
      <div className='flex justify-center items-center h-full w-10/12 m-auto'>
        <Member member={members[0]} style="mb-[100px]"/>
        <Member member={members[1]}  style="mb-[200px]"/>
        <Member member={members[2]} style="mb-[300px]"/>
        <Member member={members[3]} style="mb-[200px]"/>
        <Member member={members[4]} style="mb-[100px]"/>
      </div>
      <a href="" className='self-center mr-10'>
      <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.474453 0.0299972H15.5245L29.7345 15.5L15.5245 30.97H0.474453L14.7545 15.5L0.474453 0.0299972Z" fill="white"/>
      </svg>

      </a>
    </div>
  )
}