"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import CategoryShowcase from "../components/CategoryShowcase";
import HangoutDetail from "../components/HangoutDetail";
import PersonDetailCard from "../components/PersonDetailCard";
import GroupChatPreview from "../components/GroupChatPreview";

const SAMPLE_HANGOUT = {
  title: "Anyone down to play badminton this saturday?",
  description: "Looking for some people to hit the courts with this Saturday! Doesn't matter if you're a pro or a beginner",
  location: "Burnaby, BC",
  image: "/images/badminton.png",
  date: "2:00PM, 4.6 (Sat)",
  participants: [
    "/potraits/potrait1.png",
    "/potraits/potrait2.png",
    "/potraits/potrait3.png"
  ],
  maxSize: 5
};

export default function IntroPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  const handleNext = () => {
    if (currentStep === totalSteps) {
      router.push("/hangouts");
    } else {
      setCurrentStep(prev => prev + 1);
    }
  };

  return (
    <div className="intro-page">
      <div className="intro-content">
        <div className="intro-step-indicator">
          {Array.from({ length: totalSteps }, (_, i) => (
            <div 
              key={i + 1} 
              className={`step-dot ${currentStep === i + 1 ? 'active' : ''}`}
            />
          ))}
        </div>

        <div className="intro-steps">
          {currentStep === 1 && (
            <div className="intro-step fade-in">
              <div className="step-content">
                <p className="intro-description">
                  Meet new people in a place you love, while doing what you enjoy
                </p>
                <CategoryShowcase />
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="intro-step fade-in">
              <div className="step-content" style={{ width: '100%' }}>
                <p className="intro-description">
                  Join or create hangouts with people you&apos;d like to be friends
                </p>
                <div className="detail-container">
                  <HangoutDetail {...SAMPLE_HANGOUT} />
                  <PersonDetailCard />
                </div>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="intro-step fade-in">
              <div className="step-content">
                <p className="intro-description">
                  Keep the conversation going before and after your hangouts
                </p>
                <GroupChatPreview />
              </div>
            </div>
          )}

          <button 
            className="intro-button"
            onClick={handleNext}
          >
            {currentStep === totalSteps ? "Let's Start" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
} 