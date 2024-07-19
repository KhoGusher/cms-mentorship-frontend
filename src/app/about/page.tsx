import ImageFallback from "@/components/ImageFallback";
import MDXContent from "@/components/MDXContent";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import SeoMeta from "@/partials/SeoMeta";
import { RegularPage } from "@/types";

const About = () => {
  const data: RegularPage = getListPage("pages/about.md");
  const { frontmatter, content } = data;
  const { title, meta_title, description, people } = frontmatter;

  type RegularPage = {
    frontmatter: {
      title: string;
      meta_title?: string;
      description?: string;
      image?: string;
      layout?: string;
      draft?: boolean;
      // Add the 'people' property with an array type
      people?: {
        name: string;
        title: string;
        description: string;
        image: string;
      }[];
    };
    content: string;
    // ... other properties if any
  };

  return (
    <>
      <SeoMeta
        title={title}
        meta_title={meta_title}
        description={description}
      />
      <section className="section-sm">
        <div className="container">
          <div className="row justify-center">
            <h2 className="text-3xl font-semibold text-center mb-8">About Gusherlabs</h2>
            <p className="mb-5">
              Gusherlabs is a registered technology company that places a significant
              emphasis on achieving local tech excellence, empowering through education while simultaneously striving
              to build global connections. Our dedication lies in fostering innovation
              within our local tech community, with the ultimate goal of positioning
              countries as a formidable global competitor in the tech industry.

            </p>
            <p className="mb-8"> By reshaping
              perceptions, we bring forth advanced solutions and collaborations
              that give our clients every reason to opt for our local expertise on a global scale.
              Our motto, &ldquo;Limitless Excellence!&rdquo; truly embodies our unwavering commitment to
              pushing the boundaries of technological innovation.
            </p>


            <h2 className="text-3xl font-semibold text-center mb-8">Our Team</h2>
            {people?.map((person: any, index: any) => (
              <div key={index} className="text-center md:col-10 lg:col-7">
                {person.image && (
                  <ImageFallback
                    className="mx-auto mb-6 rounded-lg"
                    src={person.image}
                    width={200}
                    height={200}
                    alt={person.name}
                  />
                )}
                <h2
                  dangerouslySetInnerHTML={markdownify(person.name)}
                  className="h3 mb-2"
                />
                <h4
                  dangerouslySetInnerHTML={markdownify(person.title)}
                  className="h4 mb-4"
                />
                <div className="content">
                  <MDXContent content={person.description} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
