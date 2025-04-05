'use client'

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { ShineBorder } from "@/components/magicui/shine-border"
import { BorderBeam } from "@/components/magicui/border-beam"

export default function SetupOfficeForm() {
  const [companySize, setCompanySize] = useState<string[]>([])

  const toggleSize = (value: string) => {
    setCompanySize(prev =>
      prev.includes(value)
        ? prev.filter(v => v !== value)
        : [...prev, value]
    )
  }

  const companySizes = [
    "0 to 10 Employees",
    "10 to 50 Employees",
    "More than 50 Employees"
  ]

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center px-4"
      style={{ backgroundImage: "url('/background-office.jpg')" }} // use your background image path
    >
      <div className="w-full max-w-md relative z-10">
        <Card className="relative overflow-hidden border-none shadow-xl bg-white/90 dark:bg-black/70 backdrop-blur">
          <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />

          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <div className="w-20 h-20 bg-blue-900 rounded-full flex items-center justify-center text-white text-sm font-bold">
                Logo here
              </div>
            </div>
            <CardTitle className="text-2xl font-semibold">Set Up Your Office</CardTitle>
            <CardDescription className="mt-1">Fill in your company information</CardDescription>
          </CardHeader>

          <CardContent>
            <form className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="fullName">Enter Your Name *</Label>
                <Input id="fullName" type="text" placeholder="First & Last Name" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Enter Your Email *</Label>
                <Input id="email" type="email" placeholder="Email Here" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="company">Your Company Name *</Label>
                <Input id="company" type="text" placeholder="Name Here" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="website">Your Company Website</Label>
                <Input id="website" type="url" placeholder="Website Here" />
              </div>

              <div className="grid gap-2">
                <Label>Company Size *</Label>
                <div className="space-y-2">
                  {companySizes.map(size => (
                    <div key={size} className="flex items-center space-x-2">
                      <Checkbox
                        id={size}
                        checked={companySize.includes(size)}
                        onCheckedChange={() => toggleSize(size)}
                      />
                      <Label htmlFor={size}>{size}</Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="confirm-password">Confirm Password</Label>
                <Input id="confirm-password" type="password" placeholder="Confirm Password" />
              </div>
            </form>
          </CardContent>

          <CardFooter className="flex flex-col gap-2">
            <Button className="w-full bg-blue-900 hover:bg-blue-800 text-white">
              Continue
            </Button>
            <p className="text-sm text-muted-foreground text-center">
              Already have an account?{" "}
              <Link href="/login" className="text-primary hover:underline">
                Login
              </Link>
            </p>
          </CardFooter>

          <BorderBeam duration={6} size={120} />
        </Card>
      </div>
    </div>
  )
}
