import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase, FaCloud } from "react-icons/fa";

export default function ContactUsPage() {
  return (
    <div className="bg-background text-foreground min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Heading */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>

        {/* Logos */}
        <div className="flex justify-center gap-8 flex-wrap text-primary text-3xl">
          <FaReact />
          <FaNodeJs />
          <FaDatabase />
          <FaCloud />
        </div>

        {/* Form + Newsletter */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-4">
            <div className="flex gap-4">
              <Input placeholder="Email" className="bg-background" />
              <Input placeholder="Phone" className="bg-background" />
            </div>
            <Input placeholder="Name" className="bg-background" />
            <Textarea placeholder="Message" className="min-h-[100px] bg-background" />
            <Button className="w-full md:w-auto">Submit</Button>
          </div>

          {/* Newsletter */}
          <Card className="shadow-md">
            <CardContent className="p-6 space-y-4">
              <h2 className="text-lg font-semibold">Our Newsletters</h2>
              <p className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor dapibus leo.
              </p>
              <div className="space-y-2">
                <Input placeholder="Email" className="bg-background" />
                <Button className="w-full">Submit</Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Info */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="shadow-md">
            <CardContent className="p-6 flex items-start gap-4">
              <Phone className="text-primary mt-1" />
              <div>
                <p className="font-semibold">(+251) 123 456 789</p>
                <p className="text-sm text-muted-foreground">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-md">
            <CardContent className="p-6 flex items-start gap-4">
              <Mail className="text-primary mt-1" />
              <div>
                <p className="font-semibold">contact@ethiopia.dev</p>
                <p className="text-sm text-muted-foreground">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-md">
            <CardContent className="p-6 flex items-start gap-4">
              <MapPin className="text-primary mt-1" />
              <div>
                <p className="font-semibold">Addis Ababa, Ethiopia</p>
                <p className="text-sm text-muted-foreground">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Google Maps Embed */}
        <div className="rounded-xl overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.161865332065!2d38.74689187499316!3d9.040650290995843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85a7220a197b%3A0x3c6cbd8ac0b59b6!2sAddis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2sus!4v1682531688471!5m2!1sen!2sus"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
