import React from "react";



import { Linkedin , Github, Mail, MapPin, Phone, Instagram, Twitter} from "lucide-react";
const CONTACTS = [
{
    icon: <Linkedin />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/hermain-irfan/",
},
{
    icon: <Instagram />,
label:"Instagram",
href:"https://www.instagram.com/hermain_irfan/",
},
{
    icon: <Twitter />,
    label: "Twitter",
    href: "https://twitter.com/hermain_irfan",

},
{
    icon: <Github />,
    label: "GitHub",
    href: "https://github.com/Syed-Hermain",
},
{
    icon: <Mail />,
    label: "Email",
    href: "mailto:mohd.hermain2004@gmail.com",
},
{
    icon: <Phone />,
    label: "Phone",
    href: "tel:+1234567890",
},
{
    icon: <MapPin />,
    label: "Location",
    href: "https://goo.gl/maps/yourlocation",
},
];

const ContactSection: React.FC = () => (
<footer className="bg-gray-400/10 w-full pt-10 pb-6 mt-16">
    <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between">
        <div className="mb-8 md:mb-0 flex-1">
            <h2 className="text-2xl font-bold mb-2">Get in Touch</h2>
            <p className="max-w-md mx-auto text-center">
                Interested in working together or have any questions? Reach out via any of the methods below.
            </p>
            {/* Horizontal contacts for md+ screens */}
            <div className="hidden md:flex flex-wrap gap-6 mt-6">
                {CONTACTS.map(({ icon, label, href }) => (
                    <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:text-yellow-400 transition-colors"
                    >
                        <span className="text-xl">{icon}</span>
                        <span>{label}</span>
                    </a>
                ))}
            </div>
        </div>
        {/* Vertical contacts for mobile */}
        <div className="flex flex-col gap-4 mt-6 md:hidden">
            {CONTACTS.map(({ icon, label, href }) => (
                <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 hover:text-yellow-400 transition-colors"
                >
                    <span className="text-xl">{icon}</span>
                    <span>{label}</span>
                </a>
            ))}
        </div>
    </div>
    <div className="border-t mt-8 pt-4 text-center text-sm">
        &copy; {new Date().getFullYear()} Hermain. All rights reserved.
    </div>
</footer>
);

export default ContactSection;