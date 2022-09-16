import { Main } from '../../Components/Main/Main'
import { AnimatedOnScroll } from 'react-animated-css-onscroll'
import { Carousel } from '../../Components/Carousel/Carousel'
import { Members } from '../../Components/Members/Members'
import { AboutUs } from '../../Components/AboutUs/AboutUs'
import { Services } from '../../Components/Services/Services'

export function Home() {
  return (
    <Main>
      <div id="Home">
        <Carousel />
      </div>

      <div id="AboutUs" className="bg-white-fronteira sm:p-[50px] pb-10">
        <AboutUs />
      </div>

      <div
        id="Members"
        className="bg-orange-waves bg-no-repeat bg-fixed text-center p-5 sm:h-[600px] h-auto"
      >
        <Members />
      </div>

      <div id="Services" className="bg-white-fronteira sm:p-[50px] pt-10 pb-10">
        <Services />
      </div>
    </Main>
  )
}
