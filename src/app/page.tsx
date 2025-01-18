import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";

import { benefitOne, benefitTwo } from "@/components/data";
export default function Home() {
  return (
    <Container>
      <Hero />
      <SectionTitle
        preTitle="About Us"
        title=" Who We Are"
      >
        At LocalSoc, we are passionate about helping businesses
        thrive in today’s competitive digital landscape. Specializing
        in Google Business Profile (GBP) management, we empower
        businesses to improve their visibility, attract more customers,
        and grow their bottom line.
        <br />
        <br />
        Our team of experts understands the nuances of GBP optimization,
        from creating compelling content to ensuring your profile ranks
        high in local search results. We pride ourselves on delivering
        personalized solutions that align with your business goals.
      </SectionTitle>

      <section className="flex justify-between items-start gap-6 p-6">
        
        <div className="w-1/2 text-left">
          <h1 className="text-2xl font-bold mb-4 text-gray-800">Our Vision</h1>
          <p className="text-lg leading-relaxed text-gray-600">
            To become a trusted partner for businesses seeking to enhance their
            online visibility and reputation.
          </p>
        </div>
        
        <div className="w-1/2 text-left">
          <h1 className="text-2xl font-bold mb-4 text-gray-800">Our Mission</h1>
          <p className="text-lg leading-relaxed text-gray-600">
            To help businesses of all sizes leverage their Google presence for
            maximum impact and customer engagement.
          </p>
        </div>
      </section>

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      <SectionTitle
        preTitle="Why LocalSoc?"
        title="Your Trusted Partner in Google Business Profile Management"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-2">
          {/* Card 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
            <h1 className="text-xl font-semibold mb-4 text-gray-800">Expertise You Can Trust</h1>
            <p className="text-gray-600">
              Our team has years of experience in optimizing Google Business Profiles.
              We know the strategies that drive results and tailor them to meet your unique needs.
            </p>
          </div>
          {/* Card 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
            <h1 className="text-xl font-semibold mb-4 text-gray-800">Expertise You Can Trust</h1>
            <p className="text-gray-600">
              Our team has years of experience in optimizing Google Business Profiles.
              We know the strategies that drive results and tailor them to meet your unique needs.
            </p>
          </div>
          {/* Card 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
            <h1 className="text-xl font-semibold mb-4 text-gray-800">Expertise You Can Trust</h1>
            <p className="text-gray-600">
              Our team has years of experience in optimizing Google Business Profiles.
              We know the strategies that drive results and tailor them to meet your unique needs.
            </p>
          </div>
          {/* Card 4 */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
            <h1 className="text-xl font-semibold mb-4 text-gray-800">Expertise You Can Trust</h1>
            <p className="text-gray-600">
              Our team has years of experience in optimizing Google Business Profiles.
              We know the strategies that drive results and tailor them to meet your unique needs.
            </p>
          </div>
          {/* Card 5 */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
            <h1 className="text-xl font-semibold mb-4 text-gray-800">Expertise You Can Trust</h1>
            <p className="text-gray-600">
              Our team has years of experience in optimizing Google Business Profiles.
              We know the strategies that drive results and tailor them to meet your unique needs.
            </p>
          </div>
        </div>
      </SectionTitle>
      

      <SectionTitle
        preTitle="Watch a video"
        title="Learn how to fullfil your needs"
      >
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 4% more conversion rate. So,
        don&apos;t forget to add one. Just like this.
      </SectionTitle>

      <Video videoId="fZ0D0cnR88E" />

      <SectionTitle
        preTitle="Testimonials"
        title="Here's what our customers said"
      >
        Testimonials is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>

      <Testimonials />

      <SectionTitle preTitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>

      <Faq />
      <Cta />
    </Container>
  );
}
