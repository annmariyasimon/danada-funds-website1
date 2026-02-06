'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, CheckCircle2, Users, Zap, Globe, Award, Phone, Mail, MapPin } from 'lucide-react'

export default function Home() {
  return (
    <div className="w-full">
      {/* Header Navigation */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <img 
              src="/danadalogo.jpeg"
              alt="Danada Funds Logo"
              className="h-10 w-auto"
            />
          </div>
          <div className="hidden gap-8 md:flex">
            <Link href="#services" className="text-sm font-medium text-foreground hover:text-accent transition-colors">Services</Link>
            <Link href="#about" className="text-sm font-medium text-foreground hover:text-accent transition-colors">About</Link>
            <Link href="#why-us" className="text-sm font-medium text-foreground hover:text-accent transition-colors">Why Us</Link>
            <Link href="#contact" className="text-sm font-medium text-foreground hover:text-accent transition-colors">Contact</Link>
          </div>
          <Button className="bg-accent text-accent-foreground hover:bg-accent/90">Get Started</Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground text-balance">
                  Study Abroad with <span className="text-accent">Confidence</span>
                </h1>
                <p className="text-lg text-muted-foreground text-balance">
                  Get your balance confirmation letter and visa-approved financial guidance. We have helped thousands of students achieve their dreams of studying overseas.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-muted bg-transparent">
                  Learn More
                </Button>
              </div>
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-accent" />
                  <span>Industry Leading</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-accent" />
                  <span>10,000+ Students</span>
                </div>
              </div>
            </div>
            <div className="relative h-96 overflow-hidden rounded-2xl bg-gradient-to-br from-secondary/20 to-accent/10">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Globe className="h-24 w-24 text-accent/30 mx-auto mb-4" />
                  <p className="text-sm text-muted-foreground">Your Path to Global Education</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 sm:py-24 lg:py-32 bg-background border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 space-y-4 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive financial solutions designed specifically for international students
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            {/* Service 1 */}
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardContent className="pt-8">
                <div className="mb-6">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-lg bg-accent/10">
                    <Zap className="h-7 w-7 text-accent" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Balance Confirmation Letter</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Never mind your balance, your balance confirmation letter is waiting! Studying abroad can have many variables to it but with Danada Funds, you can count on getting a balance-confirmation letter that has high-approval ranking. We have long-term relationships in place with leading banks, helping thousands of students find the right financing options.
                </p>
                <div className="space-y-3">
                  <div className="flex gap-3 items-start">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">Fast and reliable letter generation</span>
                  </div>
                  <div className="flex gap-3 items-start">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">High approval ranking with banks</span>
                  </div>
                  <div className="flex gap-3 items-start">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">Established bank partnerships</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Service 2 */}
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardContent className="pt-8">
                <div className="mb-6">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-lg bg-accent/10">
                    <Users className="h-7 w-7 text-accent" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Financial Aid & Visa Guidance</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  When you are making the biggest decision of your life, who you approach matters. Our counsellors and support staff are the most well-trained in the field of overseas financial assistance. We deliver a high success rate for Visa approvals which has become a benchmark for the industry.
                </p>
                <div className="space-y-3">
                  <div className="flex gap-3 items-start">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">Expert financial counsellors</span>
                  </div>
                  <div className="flex gap-3 items-start">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">Industry-leading Visa approval rate</span>
                  </div>
                  <div className="flex gap-3 items-start">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">Personalized guidance and support</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="why-us" className="py-16 sm:py-24 lg:py-32 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 space-y-4 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Why Choose Danada Funds?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Years of expertise and proven success in the overseas education financing industry
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-lg border border-border bg-background p-8">
              <div className="mb-4">
                <Award className="h-10 w-10 text-accent" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Industry Benchmark</h3>
              <p className="text-sm text-muted-foreground">
                Our Visa approval success rate has set the industry standard for excellence
              </p>
            </div>

            <div className="rounded-lg border border-border bg-background p-8">
              <div className="mb-4">
                <Users className="h-10 w-10 text-accent" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Expert Team</h3>
              <p className="text-sm text-muted-foreground">
                Our counsellors are highly trained specialists in overseas financial assistance
              </p>
            </div>

            <div className="rounded-lg border border-border bg-background p-8">
              <div className="mb-4">
                <Zap className="h-10 w-10 text-accent" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Quick Processing</h3>
              <p className="text-sm text-muted-foreground">
                Fast and efficient balance confirmation letters with established bank partnerships
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-secondary text-secondary-foreground py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-3 text-center">
            <div>
              <div className="text-4xl sm:text-5xl font-bold mb-2">10,000+</div>
              <p className="text-sm sm:text-base opacity-90">Students Helped</p>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold mb-2">98%</div>
              <p className="text-sm sm:text-base opacity-90">Visa Approval Rate</p>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold mb-2">50+</div>
              <p className="text-sm sm:text-base opacity-90">Bank Partnerships</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-background border-t border-border">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Ready to Start Your Journey?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let our experts guide you through the process of securing your overseas education financing
          </p>
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            Get Your Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="border-t border-border bg-foreground text-background">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-12 mb-8 md:grid-cols-3">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src="/danadalogo.jpeg"
                  alt="Danada Funds Logo"
                  className="h-8 w-auto"
                />
              </div>
              <p className="text-sm opacity-80">
                Enabling overseas education dreams through trusted financial solutions and expert guidance.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><Link href="#services" className="hover:text-accent transition-colors">Services</Link></li>
                <li><Link href="#why-us" className="hover:text-accent transition-colors">Why Us</Link></li>
                <li><Link href="#contact" className="hover:text-accent transition-colors">Contact</Link></li>
                <li><Link href="#" className="hover:text-accent transition-colors">FAQ</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Get In Touch</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex gap-2 items-start opacity-80 hover:opacity-100 transition-opacity">
                  <Phone className="h-4 w-4 flex-shrink-0 mt-0.5 text-accent" />
                  <span>+91 (Contact Number)</span>
                </li>
                <li className="flex gap-2 items-start opacity-80 hover:opacity-100 transition-opacity">
                  <Mail className="h-4 w-4 flex-shrink-0 mt-0.5 text-accent" />
                  <span>info@danadafunds.com</span>
                </li>
                <li className="flex gap-2 items-start opacity-80 hover:opacity-100 transition-opacity">
                  <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5 text-accent" />
                  <span>Danada Financial Services Private Limited</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-background/10 pt-8">
            <p className="text-center text-sm opacity-60">
              &copy; 2024 Danada Financial Services Private Limited. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
