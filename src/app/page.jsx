import Image from 'next/image'

export default function Home() {
  return (
    <>
      <main className="lg:flex-row lg:justify-between flex flex-col-reverse">

        <div className=" flex flex-col justify-evenly items-start ">
          <h1 className=' text-5xl'>Better design for your future products</h1>
          <p>Turning your idea into reality. We bring together the teams for global industry.</p>
          <button className=' bg-black text-white px-3 py-2 transition-all ease-in-out duration-300  hover:bg-cyan-500'>Find us</button>
        </div>

        <div className=' w-72 h-72 bg-teal-500'></div>
      </main>
    </>
  )
}
