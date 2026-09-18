import Progress from './components/ui/Progress';
import Slash from './components/ui/Slash';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Intro from './components/Intro';
import WhyUs from './components/WhyUs';
import Auction from './components/Auction';
import Sell from './components/Sell';
import ImageBreak from './components/ImageBreak';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import MobileCta from './components/MobileCta';

const INK = 'var(--ink)';
const PAPER = 'var(--paper)';

/**
 * Opbouw van de pagina, als een gedrukte catalogus: zwarte kaften aan
 * beide uiteinden, een warm papieren binnenwerk. Elke wissel tussen
 * zwart en papier gebeurt met een schuine driekleur.
 *
 *   hero (zwart) → over ons (papier) → waarom wij (papier)
 *   → de veiling (zwart) → verkoop uw paard (papier)
 *   → statement (zwart) → slot (zwart) → voettekst (zwart)
 */
export default function App() {
  return (
    <>
      <Progress />
      <Nav />
      <main>
        <Hero />
        <Slash from={INK} to={PAPER} />
        <Intro />
        <WhyUs />
        <Slash from={PAPER} to={INK} flip />
        <Auction />
        <Sell />
        <ImageBreak />
        <FinalCTA />
      </main>
      <Footer />
      <MobileCta />
    </>
  );
}
