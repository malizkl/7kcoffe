import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import React from 'react';
import Link from "next/link"








export default function Home() {
  return (


    <div className="site-container">

      <div className="space-y-4 ">

        <h1 className="text-2xl text-gray-500 flex items-center justify-items-center justify-center">
          FEATURED COLLECTION
        </h1>







        <div className={styles.grid}>





          <a className={styles.card} >

            <Image
              src='/featured1.jpeg'
              alt='kitten'
              width='300'
              height='300'
              priority
            />
            <p className="py-2 ">Handcrafted Biscoff Latte</p>
          </a>


          <a className={styles.card}>

            <Image
              src='/featured2.jpeg'
              alt='kitten'
              width='300'
              height='300'
            />
            <p className="py-2">Moroccan Mint Tea</p>
          </a>


    



          <a className={styles.card}>


            <Image
              src='/featured3.jpeg'
              alt='kitten'
              width='600'
              height='600'
            />
            <p className="py-2">All-natural Brownie</p>
          </a>


          <a className={styles.card}>


            <Image
              src='/featured4.jpeg'
              alt='kitten'
              width='600'
              height='600'
            />
            <p className="py-2">Take-away Coffee</p>
          </a>



          







        </div>







      </div>
      {/* WhatsApp icon */}




    </div>




  )




}





