"use client";

import ImageFallback from "@/components/ImageFallback";
import { markdownify } from "@/lib/utils/textConverter";
import { Testimonial } from "@/types";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

interface PageData {
  notFound?: boolean;
  content?: string;
  frontmatter: {
    enable?: boolean;
    title: string;
    description?: string;
    testimonials: Array<Testimonial>;
  };
}

const AIServices = ({ data }: { data: PageData }) => {
  return (
    <>
      {data.frontmatter.enable && (
        <section className="section">
          <div className="container">
            <div className="row">
              <div className="mx-auto mb-12 text-center md:col-10 lg:col-8 xl:col-6">
                <h2
                  dangerouslySetInnerHTML={markdownify(data.frontmatter.title)}
                  className="mb-4"
                />
                <p
                  dangerouslySetInnerHTML={markdownify(
                    data.frontmatter.description!
                  )}
                />
              </div>
              <div className="col-12">
                <Swiper
                  modules={[Autoplay, Pagination]}
                  pagination={{ clickable: true }}
                  loop={true}
                  loopedSlides={2}
                  centeredSlides={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  spaceBetween={24}
                  breakpoints={{
                    768: {
                      slidesPerView: 2,
                    },
                    992: {
                      slidesPerView: 3,
                    },
                  }}
                >
                  {data.frontmatter.testimonials.map(
                    (item: Testimonial, index: number) => (
                      <SwiperSlide key={index}>
                        <div className="rounded-lg bg-theme-light px-7 py-10 dark:bg-darkmode-theme-light">    
                          <div className="mt-11 flex items-center">
                            <div className="text-dark dark:text-white">
                              <ImageFallback
                                height={50}
                                width={50}
                                className="rounded-full"
                                src={item.avatar}
                                alt={item.name}
                              />
                            </div>
                            <div className="ml-4">
                              <h3
                                dangerouslySetInnerHTML={markdownify(item.name)}
                                className="h5 font-primary font-semibold"
                              />
                              <p
                                dangerouslySetInnerHTML={markdownify(
                                  item.designation
                                )}
                                className="text-dark dark:text-white"
                              />
                            </div>
                          </div>
                          <blockquote
                            className="mt-8"
                            dangerouslySetInnerHTML={markdownify(item.content)}
                          />
                        </div>
                      </SwiperSlide>
                    )
                  )}
                </Swiper>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default AIServices;
