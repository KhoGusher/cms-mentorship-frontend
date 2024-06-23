import ImageFallback from "@/components/ImageFallback";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import CallToAction from "@/partials/CallToAction";
import SeoMeta from "@/partials/SeoMeta";
import Testimonials from "@/partials/RecentProjects";
import { Button, Feature } from "@/types";
import { FaCheck } from "react-icons/fa/index.js";
import styles from './page.module.css';
import Logo2 from "@/components/Logo2";

const Home = () => {
  const homepage = getListPage("_index.md");
   const testimonial = getListPage("sections/testimonial.md");
  const AIServ = getListPage("sections/AI-services.md");
  const callToAction = getListPage("sections/call-to-action.md");
  const { frontmatter } = homepage;
  const {
    banner,
    features,
  }: {
    banner: { title: string; image: string; content?: string; button?: Button };
    features: Feature[];
  } = frontmatter;

  return (
    <>
      <SeoMeta />
      <section>
      <div className={styles.row1}>
                <div className={styles.headerBox}>
                  <h1 className={styles.headingPrimary}>
                    <span className={styles.heaidngPrimarySub}>Empowering Innovation Through Technology.</span>
                    <span className={styles.heaidngPrimarySub}>Innovate. Digitize. Succeed.</span>
                </h1>
                <p className="text-white text-xl">Registered Tech Company!</p>
            
                   <div className="justify-center">
                  <Logo2 />
                 </div>
                
                </div>
            </div>
            <div className="container">
  <div className="text-center mb-8">
    <h2 className="text-3xl font-semibold">Our Services</h2>
    <p
      className="max-w-2xl mx-auto text-lg opacity-100"
    >
     GusherLabs offers a wide range of services. What are you looking for today?
    </p>

  </div>

  <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    <a
      href=""
      className="group rounded-lg border border-transparent p-6 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2 className="text-2xl font-semibold mb-3 ">Software Development</h2>
      <p className="max-w-md text-lg opacity-80">
        <p>We offer the following:</p>
          Mobile App Development (iOS, Android)<br />
          Custom Software Solutions<br />
          Desktop Application Development
    </p>
    </a>

    <a
      href=""
      className="group rounded-lg border border-transparent p-6 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2 className="text-2xl font-semibold mb-3">Web Services</h2>
      <p className="max-w-md text-lg opacity-80">
      Website Design and Development<br />
    E-commerce Development<br />
    Content Management Systems (CMS)<br />
    Web Hosting and Domain Management

      </p>
    </a>

    <a
      href=""
      className="group rounded-lg border border-transparent p-6 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2 className="text-2xl font-semibold mb-3">IoT Services</h2>
      <p className="max-w-md text-lg opacity-80">
      Internet of Things (IoT) Solutions<br />
    Sensor Integration and Data Collection<br />
    IoT Platform Development<br />
    Remote Monitoring and Control

      </p>
    </a>

    <a
      href=""
      className="group rounded-lg border border-transparent p-6 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2 className="text-2xl font-semibold mb-3">Data Analytics and AI</h2>
      <p className="max-w-md text-lg opacity-80">
      Data Analysis and Visualization<br />
   - Machine Learning Solutions<br />
   - Artificial Intelligence Services<br />
   - Predictive Analytics

      </p>
    </a>

    <a
      href=""
      className="group rounded-lg border border-transparent p-6 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2 className="text-2xl font-semibold mb-3">IT Consulting</h2>
      <p className="max-w-md text-lg opacity-80">
      Technology Strategy and Planning
   - Digital Transformation Services


      </p>
    </a>

    <a
      href=""
      className="group rounded-lg border border-transparent p-6 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2 className="text-2xl font-semibold mb-3">Networking Services</h2>
      <p className="max-w-md text-lg opacity-80">
      -Network Design and Implementation
   - Network Security Solutions
   - WAN and LAN Optimization


      </p>
    </a>
    <a
      href=""
      className="group rounded-lg border border-transparent p-6 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2 className="text-2xl font-semibold mb-3">Graphic  Design Services</h2>
      <p className="max-w-md text-lg opacity-80">
      -Offering expert solutions for branding,
      -marketing materials, 
      -digital design,
      -print, and branding needs


      </p>
    </a>
    <a
      href=""
      className="group rounded-lg border border-transparent p-6 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2 className="text-2xl font-semibold mb-3">Digital Marketing</h2>
      <p className="max-w-md text-lg opacity-80">
      - SEO (Search Engine Optimization)
    - Social Media Marketing
    - Content Marketing



      </p>
    </a>
  </div>

  {banner.button!.enable && (
    <div className="text-center mt-8 mb-4">
      <a className="btn btn-primary" href={banner.button!.link}>
        {banner.button!.label}
      </a>
    </div>
  )}
</div>

      </section>
   

       {/* this is recent projects  part  */}
      <Testimonials data={testimonial} /> 


      <CallToAction data={callToAction} />

      {/* <div className="container">
    <div className="text-center mb-8">
      <h2 className="text-3xl font-semibold">Recent Gusherlabs News</h2>
      
    </div>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
       
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
  <a href="#">
    <ImageFallback
      className="w-full"
      src="/images/ai.jpg"
      width={600}
      height={650}
      alt="cta-image"
    />
  </a>
  <div className="p-5">
    <a href="#">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Unveiling the Power of AI in Malawi.</h5>
    </a>
    <p className="max-w-md text-lg opacity-80">The first ever AI Summit at BICC in Lilongwe was eye-opening to the future of Malawi</p>
    <p className="text-sm text-gray-500 dark:text-gray-300 mt-2">November 4, 2023</p>
    <a href="#" className=" mt-2 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      Read more
    </a>
  </div>
</div>


          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
              <ImageFallback
                    className="w-full"
                    src="/images/a.jpg"
                    width={600}
                    height={600}
                    alt="cta-image"
                  />
              </a>
              <div className="p-5">
                  <a href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Unveiling New Horizons: Symposium at MUBAS</h5>
                  </a>
                  <p className="max-w-md text-lg opacity-80">Together with the young leaders to build a better Malawi.</p>
                  <p className="text-sm text-gray-500 dark:text-gray-300 mt-2">November 4, 2023</p>
                  <a href="#" className="mt-2 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      Read more
                     
                  </a>
              </div>
          </div>

          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
              <ImageFallback
                    className="w-full"
                    src="/images/capture.png"
                    width={600}
                    height={600}
                    alt="cta-image"
                  />
              </a>
              <div className="p-5">
                  <a href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Launching event management app</h5>
                  </a>
                  <p className="max-w-md text-lg opacity-80">The MUBAS Symposium was elevated with the launch of our cutting-edge Engineering Symposium Event App...</p>
                  <p className="text-sm text-gray-500 dark:text-gray-300 mt-2">November 3, 2023</p>
                  <a href="#" className="mt-2 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      Read more
                     
                  </a>
              </div>
          </div>

          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
              <ImageFallback
                    className="w-full"
                    src="/images/mug.jpg"
                    width={600}
                    height={600}
                    alt="cta-image"
                  />
              </a>
              <div className="p-5">
                  <a href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Gusherlabs in partnership with 2 companies </h5>
                  </a>
                  <p className="max-w-md text-lg opacity-80">Leaders partners for a Sustainable Development Initiatives.GusherLabs is happy to announce ...</p>
                  <p className="text-sm text-gray-500 dark:text-gray-300 mt-2">November 2, 2023</p>
                  <a href="#" className="mt-2 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      Read more
                     
                  </a>
              </div>
          </div>

        
      </div>

          {banner.button!.enable && (
            <div className="text-center mt-8 mb-4">
              <a className="btn btn-primary" href="/news">
                {banner.button!.label} News
              </a>
            </div>
          )}
  </div> */}

            {features.map((feature, index: number) => (
        <section
          key={index}
          className={`section-sm ${index % 2 === 0 && "bg-gradient"}`}
        >
          <div className="container">
            <div className="row items-center justify-between">
              <div
                className={`mb:md-0 mb-6 md:col-5 ${
                  index % 2 !== 0 && "md:order-2"
                }`}
              >
                <ImageFallback
                  src="/images/usage1.jpg"
                  height={480}
                  width={520}
                  alt={feature.title}
                />
              </div>
              <div
                className={`md:col-7 lg:col-6 ${
                  index % 2 !== 0 && "md:order-1"
                }`}
              >
                <h2
                  className="mb-4"
                  dangerouslySetInnerHTML={markdownify(feature.title)}
                />
                <p
                  className="mb-8 text-lg"
                  dangerouslySetInnerHTML={markdownify(feature.content)}
                />
                <ul>
                  {feature.bulletpoints.map((bullet: string) => (
                    <li className="relative mb-4 pl-6 text-lg" key={bullet}>
                      <FaCheck className={"absolute left-0 top-1.5"} />
                      <span dangerouslySetInnerHTML={markdownify(bullet)} />
                    </li>
                  ))}
                </ul>
                {feature.button.enable && (
                  <a
                    className="btn btn-primary mt-5"
                    href={feature.button.link}
                  >
                    {feature.button.label}
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>
      ))}

      
    </>
  );
};

export default Home;
