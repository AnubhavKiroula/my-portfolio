"use client";

import { SectionHeader } from "./section-header";
import { cn } from "@/lib/utils";
import SectionWrapper from "../ui/section-wrapper";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Users, Code2, Lightbulb } from "lucide-react";

const ABOUT_CONTENT = [
  {
    icon: GraduationCap,
    title: "Education",
    content:
      "B.Tech Computer Science and Engineering student at Graphic Era Hill University, Dehradun, graduating in 2028. Specializing in Artificial Intelligence and Machine Learning.",
  },
  {
    icon: Users,
    title: "Leadership & Clubs",
    content:
      "Core Member of the FOSS (Free and Open Source Software) Club at GEHU, organizing workshops and promoting open source contributions.",
  },
  {
    icon: Lightbulb,
    title: "Community",
    content:
      "Active member of Team Aryavart technical team, collaborating on web projects and managing community event logistics.",
  },
  {
    icon: Code2,
    title: "Open Source & Tech",
    content:
      "Passionate about building intelligent systems, full-stack web applications, and contributing to FOSS projects. Always eager to solve real-world problems through clean code.",
  },
];

const AboutSection = () => {
  return (
    <SectionWrapper id="about" className="flex flex-col items-center justify-center min-h-screen py-20 z-10">
      <div className="w-full max-w-4xl px-4 md:px-8 mx-auto">
        <SectionHeader
          id="about"
          title="About Me"
          desc="Get to know me better."
          className="mb-12 md:mb-20 mt-0"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ABOUT_CONTENT.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <Card
                className={cn(
                  "bg-card text-card-foreground border-border h-full",
                  "hover:border-primary/20 transition-colors duration-300",
                  "shadow-sm hover:shadow-md"
                )}
              >
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-lg">{item.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.content}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;
