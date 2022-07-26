import styles from '../styles/Home.module.css'

import Image from 'next/image'



function ProductPage(){
    return (
    <div className="site-container">

        <div className="space-y-4">

            <h1 className="text-2xl text-gray-500 flex items-center justify-items-center justify-center">
                ALL PRODUCTS
            </h1>

            <div className={styles.grid}>


            
            <a className={styles.card}>

            <Image
          src='/all1.jpeg'
          alt='kitten'
          width='600'
          height='600'
        />
            <p className="py-2"> Pooh  Oversize Hoodie</p>
          </a>


          <a className={styles.card}>

          <Image
          src='/all2.jpeg'
          alt='kitten'
          width='600'
          height='600'
        />
            <p className="py-2">Winnie The Pooh  Oversize Hoodie</p>
          </a>


<a className={styles.card}>
<Image
  src='/featured1.jpeg'
  alt='kitten'
  width='300'
  height='300'
  priority
/>
<p className="py-2 "> Pooh  Oversize Hoodie</p>
</a>


<a className={styles.card}>

<Image
  src='/featured2.jpeg'
  alt='kitten'
  width='300'
  height='300'
/>
<p className="py-2">Winnie The Pooh  Oversize Hoodie</p>
</a>






<a className={styles.card}>


<Image
  src='/featured3.jpeg'
  alt='kitten'
  width='600'
  height='600'
/>
<p className="py-2">Appa  Oversize Hoodie</p>
</a>


<a className={styles.card}>


<Image
  src='/featured4.jpeg'
  alt='kitten'
  width='600'
  height='600'
/>
<p className="py-2"> Sunger Bob  Oversize Hoodie</p>
</a>


    




          



        </div>








        </div>






    </div>

    )
}
export default ProductPage