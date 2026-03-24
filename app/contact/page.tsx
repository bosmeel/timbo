import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact – Timbo",
  description: "Contact Timbo for questions or feedback.",
};

export default function ContactPage() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-12">

        <div className="mb-6">
  <Link href="/" className="text-sm text-gray-400 underline">
    ← Home
  </Link>
</div>

      <h1 className="text-2xl font-semibold mb-4">
        Contact
      </h1>

      <p className="text-gray-600 mb-6">
        Have a question, suggestion or feedback? Feel free to reach out.
      </p>

      <p className="text-gray-800">
        Email:{" "}
        <a
          href="mailto:contact@timbo.cc"
          className="underline"
        >
          contact@timbo.cc
        </a>
      </p>

    </main>
    
  );
}
