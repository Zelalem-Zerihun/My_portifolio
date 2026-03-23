"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Mail, Github, Phone, Send, Copy, Check, Send as Telegram } from "lucide-react"
import Link from "next/link"

const contactInfo = {
  email: "zelalem.zerihun.b@gmail.com",
  phone: "09-25-22-93-35",
  telegram: "@zelalem_zerihun",
  github: "https://github.com/Zelalem-Zerihun",
}

export function ContactSection() {
  const [copied, setCopied] = useState(false)
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const copyEmail = async () => {
    await navigator.clipboard.writeText(contactInfo.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    window.location.href = `mailto:${contactInfo.email}?subject=Portfolio Contact from ${formState.name}&body=${formState.message}`
  }

  return (
    <section id="contact" className="py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
            {/* Section label */}
            <div className="lg:w-1/4">
              <h2 className="text-sm font-medium text-muted-foreground tracking-wider uppercase mb-2">
                Contact
              </h2>
              <div className="w-12 h-px bg-primary" />
            </div>

            {/* Content */}
            <div className="lg:w-3/4">
              <p className="text-lg text-foreground mb-8">
                If you would like to discuss a project or just say hi, I'm always down to chat.
              </p>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Contact Methods */}
                <div className="space-y-4">
                  {/* Email */}
                  <Card className="bg-card border-border hover:border-primary/50 transition-colors">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                            <Mail className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground">Email</p>
                            <p className="text-sm text-foreground">{contactInfo.email}</p>
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={copyEmail}
                          className="h-8 w-8"
                        >
                          {copied ? (
                            <Check className="h-4 w-4 text-green-500" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Telegram */}
                  <Card className="bg-card border-border hover:border-primary/50 transition-colors">
                    <CardContent className="p-4">
                      <Link
                        href={`https://t.me/${contactInfo.telegram.replace('@', '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3"
                      >
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Telegram className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">Telegram</p>
                          <p className="text-sm text-foreground hover:text-primary transition-colors">
                            {contactInfo.telegram}
                          </p>
                        </div>
                      </Link>
                    </CardContent>
                  </Card>

                  {/* Phone */}
                  <Card className="bg-card border-border hover:border-primary/50 transition-colors">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Phone className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">Phone</p>
                          <p className="text-sm text-foreground">{contactInfo.phone}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* GitHub */}
                  <Card className="bg-card border-border hover:border-primary/50 transition-colors">
                    <CardContent className="p-4">
                      <Link
                        href={contactInfo.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3"
                      >
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Github className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">GitHub</p>
                          <p className="text-sm text-foreground hover:text-primary transition-colors">
                            @Zelalem-Zerihun
                          </p>
                        </div>
                      </Link>
                    </CardContent>
                  </Card>
                </div>

                {/* Contact Form */}
                <Card className="bg-card border-border">
                  <CardContent className="p-6">
                    <form onSubmit={handleSubmit}>
                      <FieldGroup>
                        <Field>
                          <FieldLabel>Name</FieldLabel>
                          <Input
                            placeholder="Your name"
                            value={formState.name}
                            onChange={(e) =>
                              setFormState({ ...formState, name: e.target.value })
                            }
                            required
                          />
                        </Field>
                        <Field>
                          <FieldLabel>Email</FieldLabel>
                          <Input
                            type="email"
                            placeholder="your@email.com"
                            value={formState.email}
                            onChange={(e) =>
                              setFormState({ ...formState, email: e.target.value })
                            }
                            required
                          />
                        </Field>
                        <Field>
                          <FieldLabel>Message</FieldLabel>
                          <Textarea
                            placeholder="Your message..."
                            rows={4}
                            value={formState.message}
                            onChange={(e) =>
                              setFormState({ ...formState, message: e.target.value })
                            }
                            required
                          />
                        </Field>
                        <Button type="submit" className="w-full gap-2">
                          <Send className="h-4 w-4" />
                          Send Message
                        </Button>
                      </FieldGroup>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
