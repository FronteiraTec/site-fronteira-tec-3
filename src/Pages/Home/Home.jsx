import { Main } from '../../Components/Main/Main'
import { Carousel } from '../../Components/Carousel/Carousel'
import { Members } from '../../Components/Members/Members'
import { AboutUs } from '../../Components/AboutUs/AboutUs'
import { Services } from '../../Components/Services/Services'
import { Contacts } from '../../Components/Contacts/Contacts'
import { Events } from '../../Components/Events/Events'

export function Home() {
  return (
    <Main>
      <div id="Home">
        <Carousel />
      </div>

      <div id="AboutUs" className="sm:p-[50px] pb-10">
        <AboutUs />
      </div>

      <div
        id="Members"
        className="bg-orange-waves bg-no-repeat bg-fixed text-center p-5 sm:h-[600px] h-auto"
      >
        <Members />
      </div>

      <div id="Services" className="sm:p-[50px] pt-10">
        <Services />
      </div>

      <div id="Events">
        <Events />
      </div>

      <div id="Contacts" className="sm:p-[50px] pb-10">
        <Contacts />
      </div>
    </Main>
  )
}
