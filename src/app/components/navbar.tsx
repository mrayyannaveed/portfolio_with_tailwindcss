import Image from "next/image";
import rayyan from "../../../public/rayyan.png"
import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

const Navbar = () => {
  return (
    <div>
        <nav className="bg-orange-900 py-2 font-[poppins] flex flex-wrap justify-between items-center">
        <section className="flex items-center gap-4">
          <div className="border-solid border-red-600 
          border-4 rounded-full " >
            <Image className="object-cover h-20 w-20 rounded-full" src={rayyan} alt="Rayyan Naveed" 
            width={100} height={100}></Image>
          </div>
          <div className="animate-bounce">
            <h1 className="text-5xl text-white font-bold ">Portfolio</h1>
          </div>
        </section>
        <section className="w-2/3">
            <ul className="flex flex-wrap justify-evenly animate-pulse text-white text-2xl font-medium">
                <li className="hover:text-red-400 hover:text-[30px]"><Link href={"/"}>Home</Link></li>
                <li className="hover:text-red-400 hover:text-[30px]"><Link href={"/about"}>About</Link></li>
                <li className="hover:text-red-400 hover:text-[30px]"><Link href={"/skills"}>Skills</Link></li>
                <li className="hover:text-red-400 hover:text-[30px]"><Link href={"/projects"}>Projects</Link></li>
                <li className="hover:text-red-400 hover:text-[30px]"><Link href={"/services"}>Services</Link></li>
                <li className="hover:text-red-400 hover:text-[30px]"><Link href={"/contact"}>Contact</Link></li>
            </ul>
        </section>
      </nav>
    </div>
  )
}

export default Navbar