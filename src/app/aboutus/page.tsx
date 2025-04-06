'use client'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function AboutPage() {
    return (
        <div className="min-h-screen w-full bg-background text-foreground p-6 md:p-12">
            <div className="max-w-5xl mx-auto space-y-16">
                {/* Hero */}
                <section className="text-center space-y-4 pt-24">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                        About Teamify
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        Launch your company in minutes. Collaborate, manage, and grow — all from one digital workspace.
                    </p>
                </section>

                <Separator className="bg-gray-300 dark:bg-gray-700" />

                {/* Mission */}
                <section className="space-y-6 text-center">
                    <h2 className="text-2xl font-semibold">Our Mission</h2>
                    <p className="text-muted-foreground max-w-3xl mx-auto text-base leading-relaxed">
                        At Teamify, we believe that teamwork should be seamless, no matter where you are.
                        Our mission is to provide a powerful virtual office where businesses can communicate,
                        collaborate, and thrive in a modern digital environment.
                    </p>
                </section>

                {/* Team */}
                <section className="space-y-8">
                    <h2 className="text-2xl font-semibold text-center">Meet the Team</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {[1, 2, 3].map((member) => (
                            <Card
                                key={member}
                                className="bg-muted border border-border rounded-xl text-center hover:bg-muted/60 transition-colors"
                            >
                                <CardContent className="p-6 flex flex-col items-center space-y-3">
                                    <Avatar className="w-24 h-24 rounded-full ring-2 ring-orange-500 overflow-hidden">
                                        <AvatarImage
                                            src={`/team/member-${member}.avif`}
                                            alt={`Team member ${member}`}
                                            className="object-cover w-full h-full"
                                        />
                                        <AvatarFallback>TM{member}</AvatarFallback>
                                    </Avatar>

                                    <div className="space-y-1">
                                        <h3 className="font-semibold text-lg">John Doe {member}</h3>
                                        <p className="text-sm text-muted-foreground">Product Manager</p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* Call to Action */}
                <section className="text-center space-y-4">
                    <h2 className="text-2xl font-semibold">Join Us</h2>
                    <p className="text-muted-foreground max-w-xl mx-auto">
                        We&rsquo;re always on the lookout for talented individuals who share our passion
                        for innovation and collaboration. Come build the future of work with us.
                    </p>
                    <Button className="mt-2 bg-orange-500 hover:bg-orange-600 text-white transition-colors px-6 py-2 rounded-full text-sm font-medium">
                        See Open Roles
                    </Button>
                </section>
            </div>
        </div>
    )
}
