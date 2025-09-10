import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-white">
        <div className="mx-auto max-w-5xl px-6 py-16 text-center">
          <h1 className="text-4xl font-bold sm:text-5xl">
            Your Step-by-Step Guide to Owning a Judy Approved Home
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Designed for households under $60k/year, ready to place a 1–2 bedroom home on your land
          </p>
          <a
            href="#step-1"
            className="mt-8 inline-block rounded-md bg-blue-600 px-6 py-3 text-white shadow hover:bg-blue-700"
          >
            Start Your Journey
          </a>
        </div>
        <div className="mx-auto max-w-5xl px-6">
          <Image
            src="/hero-home.svg"
            alt="Manufactured home on land"
            width={1200}
            height={600}
            className="w-full rounded-md object-cover"
          />
        </div>
      </section>

      {/* Intro Section */}
      <section className="w-full bg-gray-50">
        <div className="mx-auto max-w-3xl space-y-6 px-6 py-12 text-center">
          <p>
            Judy Approved is the reliable, consumer-friendly path to owning a manufactured home—no surprises, no jargon.
          </p>
          <p>
            By the end, you’ll know exactly how to buy, what to expect, and what each dollar goes toward.
          </p>
          <div className="mx-auto max-w-md rounded-md border border-blue-200 bg-blue-50 p-4 text-sm">
            For buyers earning under $60k/year: This guide is designed for you.
          </div>
        </div>
      </section>

      {/* Step-by-Step Buyer’s Journey */}
      <section id="steps" className="w-full">
        <div className="mx-auto max-w-4xl px-6 py-12">
          <Step number={1} title="Budget Planning & Financing Options">
            <p>
              Know how much you can comfortably spend and explore financing made for households under $60k/year.
            </p>
            <ul className="mt-3 list-disc pl-5 text-gray-700">
              <li>How lenders view buyers under $60k/year.</li>
              <li>Loan programs like FHA, USDA, and chattel financing.</li>
              <li>Down payment expectations for 1–2 bedroom homes.</li>
            </ul>
            <div className="mt-3 rounded-md bg-blue-50 p-3 text-sm text-blue-800">
              Tip: Many buyers start with less than 5% down.
            </div>
          </Step>

          <Step number={2} title="Choosing the Right Home (1–2 Bedrooms)">
            <p>Pick a floorplan that fits your land and budget.</p>
            <ul className="mt-3 list-disc pl-5 text-gray-700">
              <li>Floorplans that maximize space and affordability.</li>
              <li>Differences between single wide and double wide construction.</li>
              <li>Energy efficiency means long-term savings.</li>
            </ul>
            <div className="mt-3 rounded-md bg-blue-50 p-3 text-sm text-blue-800">
              Myth-buster: Energy-efficient models aren’t always more expensive.
            </div>
          </Step>

          <Step number={3} title="Preparing Your Land">
            <p>Get your site ready for delivery.</p>
            <ul className="mt-3 list-disc pl-5 text-gray-700">
              <li>Site prep for utilities, leveling, and permits.</li>
              <li>Understand what costs are yours vs. included in setup.</li>
              <li>Judy Approved checklist of land-ready essentials.</li>
            </ul>
            <div className="mt-3 rounded-md bg-blue-50 p-3 text-sm text-blue-800">
              Tip: Clear access paths early to avoid delivery delays.
            </div>
          </Step>

          <Step number={4} title="Ordering & Customization">
            <p>Choose options that keep you on budget.</p>
            <ul className="mt-3 list-disc pl-5 text-gray-700">
              <li>Interior finishes and layouts available within budget.</li>
              <li>What not to overspend on at this stage.</li>
            </ul>
            <div className="mt-3 rounded-md bg-blue-50 p-3 text-sm text-blue-800">
              Our specialists help balance must-haves and savings.
            </div>
          </Step>

          <Step number={5} title="Delivery & Installation">
            <p>Know what happens from order to move-in.</p>
            <ul className="mt-3 list-disc pl-5 text-gray-700">
              <li>Timeline from order, delivery, and setup.</li>
              <li>What happens on delivery day.</li>
            </ul>
            <div className="mt-3 rounded-md bg-blue-50 p-3 text-sm text-blue-800">
              Every Judy Approved retailer follows strict installation standards.
            </div>
          </Step>

          <Step number={6} title="Inspections & Move-In">
            <p>Final checks ensure your home is safe and ready.</p>
            <ul className="mt-3 list-disc pl-5 text-gray-700">
              <li>What gets inspected, by whom, and why it matters.</li>
              <li>How to handle the final walkthrough.</li>
            </ul>
            <div className="mt-3 rounded-md bg-blue-50 p-3 text-sm text-blue-800">
              Tip: Bring your checklist to the walkthrough for peace of mind.
            </div>
          </Step>

          <Step number={7} title="Long-Term Ownership & Support">
            <p>Stay confident after move-in.</p>
            <ul className="mt-3 list-disc pl-5 text-gray-700">
              <li>Maintenance basics for manufactured homes.</li>
              <li>Warranty and after-sale support.</li>
              <li>Resource links for budgeting utilities and upkeep.</li>
            </ul>
            <div className="mt-3 rounded-md bg-blue-50 p-3 text-sm text-blue-800">
              We’re here with support and resources for the life of your home.
            </div>
          </Step>
        </div>
      </section>

      {/* Buyers Resources Section */}
      <section className="w-full bg-gray-50">
        <div className="mx-auto max-w-4xl px-6 py-12">
          <h2 className="text-center text-2xl font-bold">Buyer Resources</h2>
          <div className="mt-8 space-y-4">
            <details className="rounded-md border bg-white p-4">
              <summary className="cursor-pointer font-medium">
                How does financing work?
              </summary>
              <p className="mt-2 text-gray-600">
                We partner with lenders who specialize in manufactured homes and
                understand budgets under $60k.
              </p>
            </details>
            <details className="rounded-md border bg-white p-4">
              <summary className="cursor-pointer font-medium">
                How long does the process take?
              </summary>
              <p className="mt-2 text-gray-600">
                Most homes are move-in ready within 8–12 weeks of ordering.
              </p>
            </details>
            <details className="rounded-md border bg-white p-4">
              <summary className="cursor-pointer font-medium">
                What should my land have ready?
              </summary>
              <p className="mt-2 text-gray-600">
                You’ll need clear access, utilities, and proper permits before delivery.
              </p>
            </details>
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/buyers-checklist.pdf"
              className="inline-block rounded-md bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
            >
              Download Checklist for Buying a Judy Approved Home
            </Link>
          </div>
          <div className="mt-8">
            <h3 className="font-semibold">Example floorplans under $60k:</h3>
            <ul className="mt-2 list-disc pl-5">
              <li>
                <a href="#" className="text-blue-600 underline">
                  Cozy 1-bedroom layout
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-600 underline">
                  Flexible 2-bedroom layout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="w-full">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center">
          <p className="text-lg">
            Buying your home should feel simple and affordable. Judy Approved guides you every step of the way.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="#homes"
              className="rounded-md bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
            >
              See 1–2 Bedroom Homes Available Now
            </a>
            <a
              href="#contact"
              className="rounded-md border border-blue-600 px-6 py-3 text-blue-600 hover:bg-blue-50"
            >
              Talk to a Home Specialist
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

interface StepProps {
  number: number;
  title: string;
  children: ReactNode;
}

function Step({ number, title, children }: StepProps) {
  return (
    <div id={`step-${number}`} className="mb-12">
      <h3 className="text-xl font-semibold">
        <span className="mr-2 text-blue-600">Step {number}</span>
        {title}
      </h3>
      <div className="mt-2 space-y-2 text-gray-700">{children}</div>
    </div>
  );
}

