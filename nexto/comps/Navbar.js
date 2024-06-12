import Link from "next/link";
import Image from "next/image";



const Navbar = () => {
    return (  
        <nav>
            <div className="Logo">
                <Image src="/EnLite.jpg" width={128} height={77} />


                <h1>
                    Ninja List
                </h1>

            </div>

           <Link href={"/"}>Home</Link> 
           <Link href={"/about"}>About</Link>
           <Link href={"/Ninjas"}>Ninja Listings</Link>  
            
        </nav>

    );
}
 
export default Navbar;