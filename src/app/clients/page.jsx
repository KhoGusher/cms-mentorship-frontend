import React from 'react'

function ClientsPage() {
  return (
    <div className='w-full'>
        <div className=' bg-cover bg-center bg-no-repeat h-[40vh] mb-6' style={{backgroundImage: `url('/images/clients.jpg')`}}>

        </div>
        <div className=' mb-6 sm:px-[10vw]'>
            <div className=' flex justify-center'>
                <strong className=' text-xl text-amber-500'>Most businesses trust Gusherlabs</strong>
                
            </div>
            <div className='mt-6 flex flex-wrap gap-5 justify-center'>
                <CompanyLogo img = 'mncs-logo.png'/>
                <CompanyLogo img = 'mtl.webp'/>
                <CompanyLogo img = 'mubas.png'/>
                <CompanyLogo img = 'unima.jpeg'/>
                <CompanyLogo img = 'hallmark.jpeg'/>
            </div>
        </div>
    </div>
  )

  function CompanyLogo({img}){
    return <div className='w-[80%] sm:w-[30%] p-5 sm:p-3 rounded-md shadow-md flex flex-col items-center justify-center'>
        <img src={`/images/${img}`} className=' w-[30%]'/>
    </div>
  }
}

export default ClientsPage