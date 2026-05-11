export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <div className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-sm font-medium px-3 py-1 rounded-full mb-6">
          Education Tech
        </div>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          Track Study Focus with{" "}
          <span className="text-[#58a6ff]">Webcam Attention Detection</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Student Focus Tracker uses your webcam to detect when you look away during online learning sessions — then generates detailed focus reports to help you study smarter.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors"
        >
          Start Tracking — $8/mo
        </a>
        <p className="text-sm text-[#8b949e] mt-3">Cancel anytime. Works in your browser.</p>
      </section>

      {/* Features strip */}
      <section className="grid grid-cols-3 gap-6 mb-20 text-center">
        {[
          { icon: "📷", title: "Webcam Detection", desc: "Real-time face & eye tracking via WebRTC" },
          { icon: "📊", title: "Focus Reports", desc: "Session summaries with attention scores" },
          { icon: "🔒", title: "Private by Design", desc: "All processing stays in your browser" }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-3xl mb-2">{f.icon}</div>
            <div className="font-semibold text-white text-sm mb-1">{f.title}</div>
            <div className="text-xs text-[#8b949e]">{f.desc}</div>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-wide mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$8</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited study sessions",
              "Real-time attention alerts",
              "Weekly & monthly focus reports",
              "Works with any online course",
              "Parent & teacher dashboard"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff]">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "Does it record or store my webcam footage?",
              a: "No. All face detection runs locally in your browser using WebRTC. No video is ever uploaded or stored on our servers."
            },
            {
              q: "Which browsers and devices are supported?",
              a: "Any modern browser with webcam access — Chrome, Firefox, Edge, and Safari on desktop. A webcam is required."
            },
            {
              q: "Can parents or teachers view the focus reports?",
              a: "Yes. You can share a read-only report link with parents or instructors so they can review session attention scores."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="font-semibold text-white mb-2">{item.q}</div>
              <div className="text-sm text-[#8b949e]">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#8b949e]">
        © {new Date().getFullYear()} Student Focus Tracker. All rights reserved.
      </footer>
    </main>
  );
}
