import config from "@/config/config.json";
import { getListPage } from "@/lib/contentParser";
import PageHeader from "@/partials/PageHeader";
import SeoMeta from "@/partials/SeoMeta";
import { RegularPage } from "@/types";

const Contact = async () => {
  const data: RegularPage = getListPage("pages/contact.md");
  const { frontmatter } = data;
  const { title, description, meta_title, image } = frontmatter;

  return (
    <>
      <SeoMeta
        title={title}
        meta_title={meta_title}
        description={description}
        image={image}
      />
      <PageHeader title={title} />
      <section className="section-sm">
        <div className="container">
          <div className="row">
            <div className="mx-auto md:col-10 lg:col-6">
              <p> 
                <strong>Call Or Whatsapp :</strong> </p>
                <p>+265 999 355 983</p> 
                <strong>OR</strong> 
                <p>+265 985 040 546</p> 
                <strong>OR</strong>
               <p> +265 991 254 738</p>
              <br />
              <p> <strong>Location:</strong> CHICHIRI BLANTYRE, MUBAS FLATS, CLOSE TO MRA </p>
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
