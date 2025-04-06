'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ShineBorder } from "@/components/magicui/shine-border"
import { BorderBeam } from "@/components/magicui/border-beam"
import { Checkbox } from "@radix-ui/react-checkbox"

export default function LoginPage() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-background px-4">
            <div className="w-full max-w-md relative">
                <Card className="relative overflow-hidden border-none shadow-lg">
                    <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />

                    <CardHeader>
                        <CardTitle>Login</CardTitle>
                        <CardDescription>
                            Enter your credentials to access your account
                        </CardDescription>
                    </CardHeader>

                    <CardContent>
                        <form>
                            <div className="grid gap-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input id="email" type="email" placeholder="name@example.com" />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="password">Password</Label>
                                    <Input id="password" type="password" />
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Checkbox id="terms" />
                                    <Label htmlFor="terms" className="text-sm">
                                        I agree to the{" "}
                                        <Link href="/privacy-policy" className="underline text-primary">
                                            privacy policy
                                        </Link>
                                    </Label>
                                </div>
                            </div>
                        </form>
                    </CardContent>

                    <CardFooter className="flex flex-col gap-2">
                        <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white transition-colors duration-300">
                            Sign In
                        </Button>
                        <p className="text-sm text-muted-foreground text-center">
                            Don&apos;t have an account?{" "}
                            <Link href="/Register" className="text-primary hover:underline">
                                Register
                            </Link>
                        </p>
                    </CardFooter>

                    <BorderBeam duration={4} size={100} />
                </Card>
            </div>
            
        </div>
    )
}
