import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import PitchVideoShowcase from './components/PitchVideoShowcase';
import SolutionSection from './components/SolutionSection';
import TechnicalApproach from './components/TechnicalApproach';
import MethodologyFlowchart from './components/MethodologyFlowchart';
import ArchitectureDeepDive from './components/ArchitectureDeepDive';
import TrajectorySimulator from './components/TrajectorySimulator';
import WokwiPrototype from './components/WokwiPrototype';
import FeasibilitySection from './components/FeasibilitySection';
import ComparisonTable from './components/ComparisonTable';
import ImpactSection from './components/ImpactSection';
import ResearchReferences from './components/ResearchReferences';
import Footer from './components/Footer';

export default function App() {
  const handleOpenPitchModal = () => {
    const pitchSection = document.getElementById('pitch-video');
    if (pitchSection) {
      pitchSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="lakshya-fuze-app">
      <Navbar onOpenPitchModal={handleOpenPitchModal} />
      
      <main>
        <Hero onOpenPitchModal={handleOpenPitchModal} />
        <ProblemSection />
        <PitchVideoShowcase />
        <SolutionSection />
        <TechnicalApproach />
        <MethodologyFlowchart />
        <ArchitectureDeepDive />
        <TrajectorySimulator />
        <WokwiPrototype />
        <FeasibilitySection />
        <ComparisonTable />
        <ImpactSection />
        <ResearchReferences />
      </main>

      <Footer />
    </div>
  );
}
