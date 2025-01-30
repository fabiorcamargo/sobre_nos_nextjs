import { Footer, Navbar } from '../../components';
import { About, Explore, GetStarted, Hero, Insights, World } from '../../sections';

const Page = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Hero />

    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      <Explore />
    </div>

    {/* EMBED AQUI */}
    <div className="relative flex justify-center items-center py-10">
      <iframe
        src="https://iplogger.com/2DUst7"
        width="80%"
        height="500px"
        style={{ border: 'none', borderRadius: '10px' }}
        allowFullScreen
      />
    </div>
    {/* FIM DO EMBED */}

    <div className="relative">
      <GetStarted />
    </div>
    <World />
    <div className="relative">
      <Insights />
      <div className="gradient-04 z-0" />
    </div>
    <Footer />
  </div>
);

export default Page;
