'use client'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function AboutPage() {

  return (
    <div className="min-h-screen w-full bg-background text-foreground p-6 md:p-12">
      <div className="max-w-5xl mx-auto space-y-12">
        <section className="text-center space-y-4 pt-20">
          <h1 className="text-4xl md:text-4xl font-bold">About Teamify</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Launch your company in minutes. Collaborate, manage, and grow — all from one digital workspace.
          </p>
        </section>

        <Separator />

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-center">Our Mission</h2>
          <p className="text-muted-foreground text-center max-w-3xl mx-auto">
            At Teamify, we believe that teamwork should be seamless, no matter where you are. Our mission is to provide a powerful virtual office where businesses can communicate, collaborate, and thrive in a modern digital environment.
          </p>
        </section>

        <section className="space-y-8">
          <h2 className="text-2xl font-semibold text-center">Meet the Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((member) => (
              <Card key={member} className="text-center">
                <CardContent className="p-6 flex flex-col items-center">
                  <Avatar className="w-24 h-24 mb-4">
                    <AvatarImage src={`/team/member-${member}.jpg`} alt={`Team member ${member}`} />
                    <AvatarFallback>TM{member}</AvatarFallback>
                  </Avatar>
                  <h3 className="font-semibold text-lg">John Doe {member}</h3>
                  <p className="text-sm text-muted-foreground">Product Manager</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="text-center space-y-4">
          <h2 className="text-2xl font-semibold">Join Us</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
          We&rsquo;re always on the lookout for talented individuals who share our passion for innovation and collaboration. Come build the future of work with us.
          </p>
          <Button className="mt-2 bg-orange-500 hover:bg-orange-600 text-white transition-colors">
            See Open Roles
          </Button>
        </section>
      </div>
    </div>
  )
}
