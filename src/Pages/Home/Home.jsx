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
      <div id="Home" className="dark:bg-gray-900">
        <Carousel />
      </div>

      <div id="AboutUs" className="lg:p-[50px] pb-10 dark:bg-gray-900 dark:text-white">
        <AboutUs />
      </div>

      <div
        id="Members"
        className="bg-orange-waves dark:bg-gray-800 bg-no-repeat bg-fixed text-center p-5 lg:h-[600px] h-auto"
      >
        <Members />
      </div>

      <div id="Services" className="lg:p-[50px] pt-10 dark:bg-gray-900">
        <Services />
      </div>

      <div id="Events" className="pt-10 dark:bg-gray-900">
        <Events />
      </div>

      <div id="Contacts" className="lg:p-[50px] pb-10 dark:bg-gray-800">
        <Contacts />
      </div>
    </Main>
  )
}
