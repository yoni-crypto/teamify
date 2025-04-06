'use client'

import { useState, ChangeEvent } from "react"
import Link from "next/link"
import Image from "next/image"
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ShineBorder } from "@/components/magicui/shine-border"
import { BorderBeam } from "@/components/magicui/border-beam"

export default function SetupOfficeForm() {
  const [logoPreview, setLogoPreview] = useState<string | null>(null)
  const [companySize, setCompanySize] = useState<string>("")

  const handleLogoUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => setLogoPreview(reader.result as string)
      reader.readAsDataURL(file)
    }
  }

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center px-4 mt-4"
      style={{ backgroundImage: "url('/background-office.jpg')" }}
    >
      <div className="w-full max-w-md relative z-10">
        <Card className="relative overflow-hidden border-none shadow-xl bg-white/90 dark:bg-black/70 backdrop-blur">
          <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />

          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <label htmlFor="logo-upload">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-orange-500 cursor-pointer hover:scale-105 transition-transform">
                  {logoPreview ? (
                    <Image
                      src={logoPreview}
                      alt="Company Logo"
                      width={80}
                      height={80}
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    <div className="w-full h-full bg-orange-100" />
                  )}
                </div>
              </label>
              {/* Hidden file input */}
              <input
                id="logo-upload"
                type="file"
                accept="image/*"
                onChange={handleLogoUpload}
                className="hidden"
              />
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
                <Select value={companySize} onValueChange={setCompanySize}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Company Size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0 to 10 Employees">0 to 10 Employees</SelectItem>
                    <SelectItem value="10 to 50 Employees">10 to 50 Employees</SelectItem>
                    <SelectItem value="More than 50 Employees">More than 50 Employees</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Create Password *</Label>
                <Input id="password" type="password" placeholder="Create Password" />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="confirm-password">Confirm Password</Label>
                <Input id="confirm-password" type="password" placeholder="Confirm Password" />
              </div>
            </form>
          </CardContent>

          <CardFooter className="flex flex-col gap-2">
            <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
              Continue
            </Button>
            <p className="text-sm text-muted-foreground text-center">
              Already have an account?{" "}
              <Link href="/login" className="text-orange-500 hover:underline">
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
