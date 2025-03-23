"use client";

import { Plus, LogIn } from "lucide-react";
import { WelcomeModal } from "./components/WelcomeModal";

export default function Home() {
  return (
    <div className="container">
      <WelcomeModal />
      <main className="split-container">
        <section className="split-section create-section fade-in">
          <Plus className="icon" />
          <h2 className="title">Got Plans?</h2>
          <p className="subtitle">Share your hangout idea</p>
          <a
            className="action-button"
            href="https://form.typeform.com/to/kmxbAUSY"
            target="_blank"
            rel="noopener noreferrer"
          >
            Create Hangout
          </a>
        </section>

        <section className="split-section join-section fade-in">
          <LogIn className="icon" />
          <h2 className="title">Find Plans</h2>
          <p className="subtitle">Join local hangouts</p>
          <a
            className="action-button"
            href="https://docs.google.com/spreadsheets/d/1t-cD4tySvjJnVOuGjyxQw2k03jumlYHquZf9ULivwuQ/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join Hangout
          </a>
        </section>
      </main>
    </div>
  );
}
