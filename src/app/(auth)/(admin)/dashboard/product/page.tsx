"use client";

import { useState } from "react";

export default function AdminProductPage() {
  const [status, setStatus] = useState("");
  const revalidate = async () => {
    const res = await fetch(
      "http://localhost:3000/api/revalidate?tag=product&secret=Ari12345",
      {
        method: "POST",
      }
    );
    if (!res.ok) {
      setStatus("Revalidate Failed");
    } else {
      const response = await res.json();
      if (response.revalidate) {
        setStatus("Revalidated Success");
      }
    }
  };

  return (
    <div>
      <h1>{status}</h1>
      <button
        className="bg-black text-white p-3 m-5"
        onClick={() => revalidate()}
      >
        Revalidate
      </button>
    </div>
  );
}
