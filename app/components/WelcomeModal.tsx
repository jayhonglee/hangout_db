"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

export function WelcomeModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasSeenWelcome = localStorage.getItem("hasSeenWelcome");
    if (!hasSeenWelcome) {
      setIsOpen(true);
      localStorage.setItem("hasSeenWelcome", "true");
    }
  }, []);

  if (!isOpen) return null;

  return (
    <div className="welcome-modal">
      <div className="welcome-modal-content">
        <button
          className="welcome-modal-close"
          onClick={() => setIsOpen(false)}
        >
          <X size={24} />
        </button>

        <div className="welcome-modal-emoji">👋</div>

        <h2 className="welcome-modal-title">Welcome to Hangout!</h2>

        <div className="welcome-modal-text">
          <p>
            Want to hangout, study, or party with people but don&apos;t know
            where to start? Hangout makes it easy to join casual, one-time
            meetups or create your own!
          </p>
          <p>
            Simply look for local hangouts that interest you, or start one
            yourself. From coffee chats, sports games to dining out at a new
            local restaurant, spend time with people who share your interests.
          </p>
        </div>

        <button
          className="welcome-modal-button"
          onClick={() => setIsOpen(false)}
        >
          Let&apos;s Get Started
        </button>
      </div>
    </div>
  );
}
