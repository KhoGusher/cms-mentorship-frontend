import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

function News() {
    return (
        <div className="">
    <div
        className="flex h-[20vh] items-end bg-cover bg-center bg-no-repeat px-[10vw] pl-7 pb-8"
        style={{ backgroundImage: `url('/images/news.jpg')`}}
    >
        <strong className="text-3xl text-white">All News</strong>
    </div>
    <div className="pt-[4vh] sm:px-[10vw] flex flex-col md:flex-row lg:px-12 gap-10">
        
        <div className=" lg:w-3/5 flex flex-col gap-5 md:w-full">
            <NewsContainer />
            <NewsContainer />
            <NewsContainer />
            <NewsContainer />
        </div>

        

        <div className=" lg:w-2/5 p-4 md:w-full">
        <div className="relative mb-4 w-full">
    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
    <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="24px" fill="grey"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
    </span>
    <input 
        type="text" 
        placeholder="Search news here..." 
        className="w-full p-2 pl-10 border border-gray-300 rounded"
    />
</div>

            <table className="w-full border border-collapse border-gray-400">
                <tbody>
                    <tr className="border">
                        <td className="p-2 border">Recent News</td>
                    </tr>
                    <tr className="border">
                        <td className="p-10 border">
                        <NewsContainer />
                        <NewsContainer />
                        <div className="px-3 py-1 border-blue-600 border inline-block">
                            View All
                        </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>


    );

    function NewsContainer() {
        return (
            <div className="rounded-md shadow-md  mb-6 flex flex-row">
                <div className="h-[30vh] w-full rounded-md flex-1 overflow-hidden">
                    <img
                        src="/images/news.jpg"
                        alt="News image"
                        className="h-full w-full rounded-md object-cover"
                    />
                </div>
                
                <div className="p-3 flex-1">
                    <div className="w-full">
                        {/* <div className="flex w-full mb-3">
                            <div className=" rounded-2xl bg-amber-500 py-1 px-2">
                                6 days ago
                            </div>
                        </div> */}
                        <strong className="text-blue-900" >
                            Gusherlabs launches an events app
                        </strong>
                        <p className="mt-3 text-gray-500">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua
                        </p>
                        <Link href={`/news/1`} className="lg:mt-10 sm:mt-3 flex gap-5 text-blue-700 items-center">
                            read more{" "}
                            <span>
                                <FaArrowRight />
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default News;
