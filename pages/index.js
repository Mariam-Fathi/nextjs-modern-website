import { Footer, Navbar } from '../components';
import { About, OurServices, OurVision, Hero, OurWork, ServiceDescription } from '../sections';

const Page = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Hero/>
    <About />
    <OurServices />
    <ServiceDescription />
    <OurWork />
    <OurVision />
    <Footer />
  </div>
);

export default Page;