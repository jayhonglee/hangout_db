"use client";

import { Plus, LogIn } from "lucide-react";

export default function HangoutsPage() {
  return (
    <div className="container">
      <main className="split-container">
        <section className="split-section join-section fade-in">
          <LogIn className="icon" />
          <h2 className="title">Find Hangouts</h2>
          <p className="subtitle">I want to see what hangouts I can join!</p>
          <a
            className="action-button"
            href="https://form.typeform.com/to/Cp6lYX6v"
            target="_blank"
            rel="noopener noreferrer"
          >
            Browse Hangouts
          </a>
        </section>

        <section className="split-section create-section fade-in">
          <Plus className="icon" />
          <h2 className="title">Got Plans?</h2>
          <p className="subtitle">I also have a great idea for one, and I want to find local friends who enjoy it!</p>
          <a
            className="action-button"
            href="https://form.typeform.com/to/kmxbAUSY"
            target="_blank"
            rel="noopener noreferrer"
          >
            Create Hangout
          </a>
        </section>
      </main>
    </div>
  );
} 