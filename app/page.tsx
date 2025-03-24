"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="welcome-page">
      <div className="welcome-content">
        <div className="welcome-header">
          <h2 className="welcome-question">
            Ever felt that<br />
            socializing & making<br />
            friends is so frustrating?
          </h2>
        </div>

        <button
          className="welcome-button"
          onClick={() => router.push("/intro")}
        >
          Yes
        </button>
      </div>
    </div>
  );
}
