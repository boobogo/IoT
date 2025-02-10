import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { MdMail, MdPhone, MdLink, MdLocationOn } from "react-icons/md";

export default function Contact() {
  return (
    <div className="contact mt-8 px-4 py-8">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl">Bold-Erdene Bayaraa</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="flex items-center">
            <MdMail className="mr-2 h-4 w-4" />
            <a href="mailto:bolderdenebayaraa97@gmail.com" className="text-blue-600 hover:underline">
              bolderdenebayaraa97@gmail.com
            </a>
          </div>
          <div className="flex items-center">
            <MdPhone className="mr-2 h-4 w-4" />
            <a href="tel:+420773632299" className="text-blue-600 hover:underline">
              +420 773 632 299
            </a>
          </div>
          <div className="flex items-center">
            <MdLink className="mr-2 h-4 w-4" />
            <a
              href="https://www.linkedin.com/in/bold-erdene-bayaraa-152513256/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              LinkedIn Profile
            </a>
          </div>
          <div className="flex items-center">
            <MdLocationOn className="mr-2 h-4 w-4" />
            <span>Prague, Czech Republic</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}