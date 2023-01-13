import { slideData } from './slideData'
import { useState } from 'react'

function Member({member, style}) {
  return (
    <img src={member.image ? member.image : undefined} alt="" className={`${style} rounded-full`}/>
  )
}

export function Members() {
  const [memb0, setMemb0] = useState(slideData[2])
  const [memb1, setMemb1] = useState(slideData[3])
  const [memb2, setMemb2] = useState(slideData[4])
  const [memb3, setMemb3] = useState(slideData[5])
  const [memb4, setMemb4] = useState(slideData[6])

  const leftDisloc = () => {
    var ref = slideData.indexOf(memb0)
    if (!memb4.end) {
      setMemb0(slideData[ref+1])
      setMemb1(slideData[ref+2])
      setMemb2(slideData[ref+3])
      setMemb3(slideData[ref+4])
      setMemb4(slideData[ref+5])
    }
  }
  const rightDisloc = () => {
    var ref = slideData.indexOf(memb0)
    if (!memb0.begin) {
      setMemb0(slideData[ref-1])
      setMemb1(slideData[ref])
      setMemb2(slideData[ref+1])
      setMemb3(slideData[ref+2])
      setMemb4(slideData[ref+3])
    }
  }

  return (
    <div>
      <h1 className='text-5xl my-10 text-white'>Nosso <span className='font-bold'>Time</span></h1>
      <div className='flex ease-linear h-9/12'>
        <svg onClick={leftDisloc} className="self-center md:ml-20 cursor-pointer" width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M29.5255 0.0299972H14.4755L0.265544 15.5L14.4755 30.97H29.5255L15.2455 15.5L29.5255 0.0299972Z" fill="white"/>
        </svg>
        <div className='flex justify-center items-center h-full w-10/12 m-auto'>
          <Member member={memb0} style="mb-[100px] h-[140px] w-[140px] mr-[-40px] z-10 hidden lg:block"/>
          <Member member={memb1} style="mb-[200px] h-[160px] w-[160px] mr-[-40px] z-20 hidden md:block "/>
          <Member member={memb2} style="mb-[300px] h-[185px] w-[185px] z-30"/>
          <Member member={memb3} style="mb-[200px] h-[160px] w-[160px] ml-[-40px] z-20 hidden md:block"/>
          <Member member={memb4} style="mb-[100px] h-[140px] w-[140px] ml-[-40px] z-10 hidden lg:block"/>
        </div>
        <svg onClick={rightDisloc} className="self-center md:mr-20 cursor-pointer" width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.474453 0.0299972H15.5245L29.7345 15.5L15.5245 30.97H0.474453L14.7545 15.5L0.474453 0.0299972Z" fill="white"/>
        </svg>
      </div>
      <div className='mt-[-220px] sm:mt-[-280px] md:mt-[-200px] flex flex-col items-center'>
        <p className='text-4xl text-bold text-white'>{memb2.name}</p>
        <div className='w-[150px] h-[2px] bg-white'></div>
        <p className='text-white '>{memb2.func}</p>
      </div>
    </div>
  )
}