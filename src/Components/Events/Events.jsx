import Ev1 from '../../Assets/Events/IMG_4494.png'
import Ev2 from '../../Assets/Events/IMG_4495.jpeg'
import Ev3 from '../../Assets/Events/IMG_4514.png'

export function Events() {
  return (
    <div className="flex w-max m-auto max-w-full">
      <div>
        <img
          className="object-cover lg:h-[600px] lg:w-40 lg:hover:w-96 w-28 h-96 hover:w-60 duration-150 cursor-pointer rounded-tl-md rounded-bl-md hover:shadow-2xl"
          src={Ev1}
          alt=""
        />
      </div>
      <div>
        <img
          className="object-cover lg:h-[600px] lg:w-40 lg:hover:w-96 w-28 h-96 hover:w-60 duration-150 cursor-pointer hover:shadow-2xl"
          src={Ev2}
          alt=""
        />
      </div>
      <div>
        <img
          className="object-cover lg:h-[600px] lg:w-40 lg:hover:w-96 w-28 h-96 hover:w-60 duration-150 cursor-pointer rounded-tr-md rounded-br-md hover:shadow-2xl"
          src={Ev3}
          alt=""
        />
      </div>
    </div>
  )
}
