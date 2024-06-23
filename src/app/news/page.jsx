import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

function News() {
    return (
        <div className="">
            <div
                className=" flex h-[40vh] items-center bg-cover bg-center bg-no-repeat px-[10vw]"
                style={{ backgroundImage: `url('/images/news.jpg')` }}
            >
                <strong className="text-2xl text-black">NEWS</strong>
            </div>
            <div className="pt-[4vh] sm:px-[10vw]">
                <div className="flex w-full flex-wrap gap-5">
                    <NewsContainer />
                    <NewsContainer />
                    <NewsContainer />
                    <NewsContainer />
                </div>
            </div>
        </div>
    );

    function NewsContainer() {
        return (
            <div className="rounded-md shadow-md sm:w-[30%] mb-6">
                <div className="h-[30vh] w-full rounded-t-md">
                    <img
                        src="/images/news.jpg"
                        alt="News image"
                        className="h-full w-full rounded-t-md object-cover"
                    />
                </div>
                
                <div className="p-3">
                    <div className="w-full">
                        <div className="flex w-full mb-3">
                            <div className=" rounded-2xl bg-amber-500 py-1 px-2">
                                6 days ago
                            </div>
                        </div>
                        <strong className="">
                            Gusherlabs launches an events app
                        </strong>
                        <p className="mt-3 text-gray-500">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua
                        </p>
                        <Link href={`/news/1`} className="mt-3 flex gap-5">
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
