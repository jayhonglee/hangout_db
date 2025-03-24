"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="welcome-page">
      <div className="welcome-content">
        <div className="welcome-header">
          <h2 className="welcome-question">
            Looking to meet
            <br />
            <span className="emphasis-primary">new people</span>
            <br />
            for just <span className="emphasis-secondary">one fun event</span>?
          </h2>
        </div>

        <button
          className="welcome-button"
          onClick={() => router.push("/intro")}
        >
          Let’s Meet Up!
        </button>
      </div>
    </div>
  );
}
