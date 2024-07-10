import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

function News() {
    return (
        <div className="">
            <div
                className=" flex h-[35vh] items-center bg-cover bg-center bg-no-repeat px-[10vw]"
                style={{ backgroundImage: `url('/images/ish-news.jpg')` }}
            >
                <strong className="text-2xl text-white font-extrabold">ALL NEWS </strong>
            </div>

            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-8">
                    <div className="pt-[4vh] sm:px-[10vw]">
                        <div className=" ">
                            <NewsContainer />
                            <NewsContainer />
                            <NewsContainer />
                            <NewsContainer />
                        </div>
                    </div>
                </div>
                <div className="col-span-4 bg-white border border-gray-500  p-4 h-[100vh] mr-5 pt-[4vh] mt-6 rounded-md">
                    <div>
                        <form className='text-center'>
                            <input className='w-full rounded-sm' type='text' placeholder='search news here...' />
                        </form>
                    </div>
                    <div className='text-gray-500 mb-5 mt-2  text-center'>RECENT NEWS</div>
                    <hr className='border mt-3 border-gray-500' />
                    <div className='w-full mt-6'>
                        <div className=" ">
                            <NewsCont />
                            <NewsCont />

                        </div>
                        <div>
                            <button className='mt-3 hover:bg-gray-500 hover:border-none hover:text-white btn rounded-none border-blue-500  text-primary'>view all</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    function NewsCont() {
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

    function NewsContainer() {
        return (
            <div className="rounded-md shadow-md  mb-6 flex hover:shadow-inner">
                <div className="h-[35vh] w-full rounded-md">
                    <img
                        src="/images/news.jpg"
                        alt="News image"
                        className="h-full w-full rounded-tl-md rounded-bl-md object-cover"
                    />
                </div>

                <div className="p-3">
                    <div className="w-full">

                        <strong className="">
                            Gusherlabs launches an events app
                        </strong>
                        <p className="mt-3 text-gray-500">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua...
                        </p>
                        <div className="flex justify-around items-center mt-3">
                            <Link href={`/news/1`} className=" flex items-center gap-1 text-blue-700">
                                read more{" "}
                                <span>
                                    <FaArrowRight />
                                </span>
                            </Link>
                            <div className="flex  mb-3">
                                <div className=" rounded-2xl bg-amber-500 py-1 px-2 ">
                                    6 days ago
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default News;
