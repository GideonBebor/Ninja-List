import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "@/comps/Navbar";
import Footer from "@/comps/footer";
import Link from "next/link";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    

    <Head>

      <title>Ninja List | Home</title>
      <meta name="keywords" content="ninjas" />

    </Head>

      <div>
      
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, 
            provident. Enim porro dolorem aliquam voluptatum quod totam amet quos? 
            Fugiat rem quis obcaecati tempore vitae qui maiores culpa, eveniet pariatur!

            </p>
            <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, 
            provident. Enim porro dolorem aliquam voluptatum quod totam amet quos? 
            Fugiat rem quis obcaecati tempore vitae qui maiores culpa, eveniet pariatur!
        </p>
        <div className={styles.btn}>
        <Link href={"/Ninjas"}>see ninjas listing</Link>
        </div>
      </div>
      </>
    
  );
}
