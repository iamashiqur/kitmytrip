import Image from "next/image";
import Link from "next/link";
import Logo from "assets/logo.png";
import SearchIcon from "assets/search-icon.svg";

const navigation = [
  { name: "about", href: "#", current: true },
  { name: "touristor", href: "#", current: false },
  { name: "contact", href: "#", current: false },
  { name: "offers", href: "#", current: false },
];

export default function Header() {
  return (
    <nav className="py-5 bg-text_7">
      <div className="container mx-auto flex items-center">
        <Link href="/" className="text-white font-bold text-xl">
          <Image src={Logo} alt="logo" />
        </Link>
        <div className="flex flex-wrap items-center">

          {navigation.map((navigationItem) => (

            <Link
              key={navigationItem.name}
              href={navigationItem.href}
              className="font-bold text-sm capitalize px-4 text-text_2"
            >
              {navigationItem.name}
            </Link>

          ))}
          <div className="right-nav-item flex">

            <div className="search-item">
              <Image src={SearchIcon} alt="search-item" />
            </div>

            <Link
              href={"#"}
              className="bg-secondary_main rounded-radius_10 px-8 py-3 text-sm text-white font-semibold border hover:border-secondary_main hover:bg-white hover:text-secondary_main transition ease-in-out"
            >
              Be an Insider
            </Link>

            <div className="items">
              
            </div>
          </div>

        </div>
      </div>
    </nav>
  );
}
