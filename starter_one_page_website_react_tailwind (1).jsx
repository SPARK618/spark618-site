import React from "react";
import { MotionConfig, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, ArrowRight, Image as ImageIcon, Facebook, Instagram, Linkedin } from "lucide-react";

// --- Quick how-to ---
// 1) Replace TEXT inside ALL-CAPS placeholders (e.g., YOUR NAME, YOUR TAGLINE).
// 2) Replace sample images by updating the src values (e.g., "/hero.jpg").
// 3) Update links in the footer + contact section.
// 4) Deploy fast with Netlify (drop a Vite/Next build) or GitHub Pages.
//    I can package this into a full repo if you want.

export default function Site() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-white text-zinc-900">
        {/* Nav */}
        <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
          <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
            <div className="font-semibold tracking-tight text-xl">SPARK 618</div>
            <nav className="hidden md:flex gap-6 text-sm">
              <a href="#about" className="hover:opacity-80">About</a>
              <a href="#offer" className="hover:opacity-80">What We Do</a>
              <a href="#gallery" className="hover:opacity-80">Gallery</a>
              <a href="#contact" className="hover:opacity-80">Contact</a>
            </nav>
            <a href="#contact" className="md:inline-block hidden">
              <Button className="rounded-2xl">Get in touch</Button>
            </a>
          </div>
        </header>

        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="mx-auto max-w-6xl px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
            <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.6}}>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                Igniting Opportunity in Southern Illinois
              </h1>
              <p className="mt-5 text-lg text-zinc-600 max-w-prose">
                We run a cashless micro‑grocery with an indoor coffee station that accepts EBT/Link/SNAP, delivers healthy options + quick necessities in a food desert, and anchors after‑school learning plus certification pathways for justice‑impacted people, veterans, women, and more. Open daily 6am–10pm.
              </p>
              <div className="mt-8 flex gap-3">
                <a href="#offer"><Button className="rounded-2xl">See what we offer <ArrowRight className="ml-2 h-4 w-4"/></Button></a>
                <a href="#contact"><Button variant="outline" className="rounded-2xl">Contact</Button></a>
              </div>
            </motion.div>

            <motion.div initial={{opacity:0, scale:0.98}} animate={{opacity:1, scale:1}} transition={{duration:0.6, delay:0.1}} className="relative">
              {/* Replace with your image */}
              <img src="/hero.jpg" alt="Hero" className="w-full h-80 object-cover rounded-3xl shadow-xl" />
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow p-3 text-sm flex items-center gap-2">
                <ImageIcon className="h-4 w-4"/> Add your best photo
              </div>
            </motion.div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-20 bg-zinc-50">
          <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-3 gap-10 items-start">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold">About</h2>
              <p className="mt-4 text-zinc-700 leading-relaxed">
                Drop your straight-talk origin story here. What problem are you obsessed with? What
                makes your approach different? Who do you serve? Keep it punchy; no fluff.
              </p>
            </div>
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle>Fast Facts</CardTitle>
              </CardHeader>
              <CardContent className=\"text-sm text-zinc-700 space-y-2\">
                <div>• Founded: 2025</div>
                <div>• Based in: Carbondale, Illinois</div>
                <div>• Status: PILOT</div>
                <div>• Accepts: Card‑only + EBT/Link/SNAP</div>
                <div>• Hours: Daily 6am–10pm</div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Offerings / Services */}
        <section id="offer" className="py-20">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-3xl font-bold">What We Do</h2>
            <p className="mt-2 text-zinc-600">List 3–6 headline offers. Keep names clear and prices obvious.</p>
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              {[
                {title:"Micro‑Grocery + Coffee Station", blurb:"Healthy staples, quick necessities, and a simple hot/iced menu. Cashless; accepts EBT/Link/SNAP.", price:"Menu pricing (TBD)"},
                {title:"Afterschool / AMP Lab", blurb:"Safe, structured learning space with homework help and hands‑on projects.", price:"Free or sponsored"},
                {title:"Certification Pathways", blurb:"Short, stackable credentials in solar, weatherization, construction, digital/IT, and more.", price:"Grant‑funded / employer‑sponsored"},
              ].map((item, i) => (
                <motion.div key={i} initial={{opacity:0, y:12}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.4, delay:i*0.05}}>
                  <Card className="rounded-2xl h-full">
                    <CardHeader>
                      <CardTitle>{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-zinc-700">
                      <p>{item.blurb}</p>
                      <div className="mt-4 font-semibold">{item.price}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section id="gallery" className="py-20 bg-zinc-50">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-3xl font-bold">Gallery</h2>
            <p className="mt-2 text-zinc-600">Swap these with your real photos.</p>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              {["/g1.jpg","/g2.jpg","/g3.jpg","/g4.jpg"].map((src, i) => (
                <motion.img key={i} src={src} alt={`Gallery ${i+1}`} className="rounded-xl h-40 w-full object-cover" initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{duration:0.5}}/>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials (optional) */}
        <section className="py-20">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-3xl font-bold">What People Say</h2>
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              {[1,2,3].map((i) => (
                <Card key={i} className="rounded-2xl">
                  <CardContent className="pt-6 text-sm text-zinc-700">
                    “Short, real quote about the win you delivered.”
                    <div className="mt-3 font-semibold">— NAME, Title</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-20 bg-zinc-900 text-zinc-100">
          <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold">Let’s talk</h2>
              <p className="mt-3 text-zinc-300 max-w-prose">One sentence on the best way to reach you and typical response time. Be clear about hours.
              </p>
              <div className="mt-6 space-y-3 text-sm">
                <div className="flex items-center gap-2"><Mail className="h-4 w-4"/> <a href="mailto:you@email.com" className="hover:underline">you@email.com</a></div>
                <div className="flex items-center gap-2"><Phone className="h-4 w-4"/> <a href="tel:+1" className="hover:underline">(xxx) xxx‑xxxx</a></div>
                <div className="flex items-center gap-2"><MapPin className="h-4 w-4"/> Carbondale • Illinois</div>
              </div>
            </div>
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle>Quick Inquiry</CardTitle>
              </CardHeader>
              <CardContent>
                {/* Replace this with your form provider (Tally/Typeform/ConvertKit/etc.) */}
                <form className="space-y-3">
                  <input className="w-full border rounded-xl px-3 py-2" placeholder="Name"/>
                  <input className="w-full border rounded-xl px-3 py-2" placeholder="Email"/>
                  <textarea className="w-full border rounded-xl px-3 py-2" rows={4} placeholder="What do you need?"/>
                  <Button type="button" className="rounded-2xl w-full">Send</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-10 border-t">
          <div className="mx-auto max-w-6xl px-4 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-zinc-500">© {new Date().getFullYear()} SPARK 618. All rights reserved.</div>
            <div className="flex items-center gap-4">
              <a href="#" aria-label="Facebook" className="p-2 rounded-full hover:bg-zinc-100"><Facebook className="h-5 w-5"/></a>
              <a href="#" aria-label="Instagram" className="p-2 rounded-full hover:bg-zinc-100"><Instagram className="h-5 w-5"/></a>
              <a href="#" aria-label="LinkedIn" className="p-2 rounded-full hover:bg-zinc-100"><Linkedin className="h-5 w-5"/></a>
            </div>
          </div>
        </footer>
      </div>
    </MotionConfig>
  );
}
