import React from 'react'

function FullNewsPage() {
  return (
    <>
      {/* top banner */}


      <div
        className="flex h-[30vh] items-center bg-cover bg-center bg-no-repeat px-[10vw]"
        style={{ backgroundImage: `url('/images/ish-news-detail.webp')` }}
      >
        <strong className="text-2xl text-white">NEWS DETAIL </strong>
      </div>
      {/* end of top banner  */}

      <div className="grid lg:grid-cols-12 gap-10">
        <div className="col-span-7 sm:mr-10">
          <div className='pt-[4vh] sm:ml-[5vw]'>
            <div className=' flex w-full flex-wrap gap-5'>
              <div className="rounded-md shadow-sm sm:w-[100%]  mb-6">
                <div className="h-[50vh] w-full rounded-t-md">
                  <img
                    src="/images/news.jpg"
                    alt="News image"
                    className="h-full w-full rounded-t-md object-cover"
                  />
                </div>

                <div className="p-3">
                  <div className="w-full">
                    {/* <div className="flex w-full mb-3">
                  <div className=" rounded-2xl bg-amber-500 py-1 px-2">
                    6 days ago
                  </div>
                </div> */}
                    <strong className="mt-3">
                      Gusherlabs launches an events app
                    </strong>
                    <p className="mt-3 text-gray-500">
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit. Sed do eiusmod tempor incididunt ut labore et
                      dolore magna aliqua <br/><br/>
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit. Sed do eiusmod tempor incididunt ut labore et
                      dolore magna aliqua<br/><br/>
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit. Sed do eiusmod tempor incididunt ut labore et
                      dolore magna aliqua<br/><br/>
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit. Sed do eiusmod tempor incididunt ut labore et
                      dolore magna aliqua<br/><br/>
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit. Sed do eiusmod tempor incididunt ut labore et
                      dolore magna aliqua<br/><br/>
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit. Sed do eiusmod tempor incididunt ut labore et
                      dolore magna aliqua<br/><br/>
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit. Sed do eiusmod tempor incididunt ut labore et
                      dolore magna aliqua<br/><br/>
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit. Sed do eiusmod tempor incididunt ut labore et
                      dolore magna aliqua
                    </p>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:col-span-4   bg-white border border-gray-500  p-4 sm:h-[100vh] h-auto   pt-[4vh] mt-6 rounded-md">
          <div>
            <form className='text-center'>
              <input className='w-full rounded-sm' type='text' placeholder='search news here...' />
            </form>
          </div>
          <div className='text-gray-500 mb-5 mt-2  text-center'>RECENT NEWS</div>
          <hr className='border mt-3 border-gray-500'/>
          <div className='w-full mt-6'>
            <div className=" ">
              <NewsContainer />
              <NewsContainer />
              
            </div>
            <div>
            <button className='mt-3 hover:bg-gray-500 hover:border-none hover:text-white btn rounded-none border-blue-500  text-primary'>view all</button>
          </div>
          </div>
        </div>
      </div>

    </>

  )
}


function NewsContainer() {
  return (
    <div className="rounded-sm flex ">
      <div className="w-full  rounded-md mb-5">
        <img
          src="/images/mus.webp"
          alt="News image"
          className="h-full w-full rounded-tl-md rounded-bl-md object-cover"
        />
      </div>

      <div className="p-3">
        <div className="w-full">

          <strong className="">
            Gusherlabs launches an events app
          </strong>
          <p className="mt-5 text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua...
          </p>
          
        </div>
      </div>
    </div>
  );
}

export default FullNewsPage