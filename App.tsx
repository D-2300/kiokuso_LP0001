import { useRef } from 'react';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import WhySection from './components/WhySection';
import Diagnostic from './components/Diagnostic';
import StepSection from './components/StepSection';
import Work from './components/Work';
import Pricing from './components/Pricing';
import Filter from './components/Filter';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import FloatingLine from './components/FloatingLine';

export default function App() {
  const diagnosticRef = useRef<HTMLElement | null>(null);

  const scrollToDiagnostic = () => {
    diagnosticRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="relative">
      <Hero />
      <Problem />
      <div className="section-divider" />
      <Solution />
      <div className="section-divider" />
      <WhySection />
      <div className="section-divider" />
      <Diagnostic ref={diagnosticRef} />
      <div className="section-divider" />
      <Work />
      <div className="section-divider" />
      <Pricing />
      <div className="section-divider" />
      <Filter />
      <div className="section-divider" />
      <StepSection />
      <div className="section-divider" />
      <FAQ />
      <FinalCTA onDiagnosticClick={scrollToDiagnostic} />
      <FloatingLine />
    </div>
  );
}
