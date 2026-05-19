"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, Code2, Mail, Network, Camera } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { interests, navItems, projectPlaceholders, techStack } from "@/lib/content";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./theme-toggle";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.12,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-6 space-y-2">
      <h2 className="text-2xl font-semibold tracking-tight text-zinc-50 md:text-3xl">{title}</h2>
      {subtitle ? <p className="max-w-2xl text-zinc-400">{subtitle}</p> : null}
    </div>
  );
}

export function LandingPageContent() {
  const githubUrl = process.env.NEXT_PUBLIC_GITHUB_URL ?? "https://github.com/vaniojr";
  const linkedinUrl =
    process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "https://www.linkedin.com/in/vaniojr/";
  const instagramUrl =
    process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "https://www.instagram.com/vaniojr/";
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "vaniojr@gmail.com";

  return (
    <div id="top" className="relative isolate overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_10%_10%,rgba(14,165,233,0.16),transparent_35%),radial-gradient(circle_at_90%_18%,rgba(56,189,248,0.12),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(14,165,233,0.10),transparent_40%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,rgba(9,9,11,0.45),rgba(9,9,11,0.96))]" />

      <header className="sticky top-0 z-30 border-b border-white/10 bg-zinc-950/75 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 md:px-10">
          <Link href="#top" className="text-sm font-medium uppercase tracking-[0.24em] text-zinc-200">
            vaniojr
          </Link>
          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-zinc-300 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-20 px-6 pb-24 pt-16 md:px-10 md:pt-24">
        <motion.section
          variants={container}
          initial="hidden"
          animate="show"
          className="relative flex min-h-[68vh] flex-col justify-center"
        >
          <motion.p variants={item} className="mb-5 text-xs uppercase tracking-[0.24em] text-sky-300/90">
            AI • Automation • SaaS • Digital Products
          </motion.p>
          <motion.h1
            variants={item}
            className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-balance text-white sm:text-5xl md:text-6xl"
          >
            Building AI-powered systems, automation and digital products.
          </motion.h1>
          <motion.p
            variants={item}
            className="mt-7 max-w-2xl text-lg leading-relaxed text-zinc-300"
          >
            Focused on practical execution, rapid experimentation and resilient systems that
            connect technology to real-world outcomes.
          </motion.p>
          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className={cn(
                buttonVariants({ size: "lg" }),
                "rounded-full bg-zinc-100 px-6 text-zinc-950 hover:bg-white",
              )}
            >
              View Projects
              <ArrowRight className="size-4" />
            </a>
            <a
              href="#contact"
              className={cn(
                buttonVariants({ size: "lg", variant: "outline" }),
                "rounded-full border-white/20 bg-white/[0.02] px-6 text-zinc-100 hover:bg-white/[0.08]",
              )}
            >
              Get in Touch
            </a>
          </motion.div>
        </motion.section>

        <motion.section id="about" variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-120px" }}>
          <SectionTitle title="About" />
          <motion.p variants={item} className="max-w-3xl text-lg leading-relaxed text-zinc-300">
            I build digital systems where AI, automation and product thinking work together.
            My focus is to turn ideas into functional products quickly, iterate with clarity,
            and keep technology useful, pragmatic and adaptable.
          </motion.p>
        </motion.section>

        <motion.section id="interests" variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-120px" }}>
          <SectionTitle title="Areas of Interest" subtitle="Core domains where I spend most of my time building and experimenting." />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {interests.map((interest) => (
              <motion.div variants={item} key={interest.title}>
                <Card className="h-full border-white/10 bg-white/[0.02] shadow-[0_10px_40px_-24px_rgba(14,165,233,0.45)] transition-transform duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <CardTitle className="text-zinc-100">{interest.title}</CardTitle>
                    <CardDescription className="text-zinc-400">{interest.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section id="projects" variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-120px" }}>
          <SectionTitle title="Projects & Experiments" subtitle="Structure prepared for upcoming work and public case breakdowns." />
          <div className="grid gap-4 md:grid-cols-2">
            {projectPlaceholders.map((project) => (
              <motion.div variants={item} key={project.category}>
                <Card className="h-full border-white/10 bg-zinc-900/60 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-zinc-100">{project.category}</CardTitle>
                    <CardDescription className="text-zinc-400">
                      Currently exploring and building.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button
                      variant="ghost"
                      className="h-auto p-0 text-sm text-sky-300 hover:bg-transparent hover:text-sky-200"
                      disabled
                    >
                      Updates soon
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section id="stack" variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-120px" }}>
          <SectionTitle title="Stack" subtitle="Selected technologies used across products, workflows and experiments." />
          <motion.div variants={item} className="flex flex-wrap gap-3">
            {techStack.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-sm font-medium text-zinc-200"
              >
                {tech}
              </Badge>
            ))}
          </motion.div>
        </motion.section>

        <motion.section id="contact" variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-120px" }}>
          <SectionTitle title="Contact" subtitle="Open to meaningful conversations around AI systems, automation and digital products." />
          <motion.div variants={item} className="grid gap-3 sm:grid-cols-4">
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "justify-start gap-2 border-white/15 bg-white/[0.02] text-zinc-100 hover:bg-white/[0.08]",
              )}
            >
              <Code2 className="size-4" />
              GitHub
            </a>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "justify-start gap-2 border-white/15 bg-white/[0.02] text-zinc-100 hover:bg-white/[0.08]",
              )}
            >
              <Network className="size-4" />
              LinkedIn
            </a>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "justify-start gap-2 border-white/15 bg-white/[0.02] text-zinc-100 hover:bg-white/[0.08]",
              )}
            >
              <Camera className="size-4" />
              Instagram
            </a>
            <a
              href={`mailto:${contactEmail}`}
              className={cn(
                buttonVariants(),
                "justify-start gap-2 bg-zinc-100 text-zinc-950 hover:bg-white",
              )}
            >
              <Mail className="size-4" />
              Email
            </a>
          </motion.div>
        </motion.section>
      </main>

      <footer className="mx-auto w-full max-w-6xl px-6 pb-10 md:px-10">
        <Separator className="mb-6 bg-white/10" />
        <div className="flex flex-col justify-between gap-3 text-sm text-zinc-500 sm:flex-row">
          <p>vaniojr.com.br</p>
          <p>Minimal, modern and built for evolution.</p>
        </div>
      </footer>
    </div>
  );
}
