function ContactPage(){
    return <div className="site-container">
        <h1 className="text-3xl flex items-center justify-items-center justify-center font-bold">
            Contact us
        </h1>

       

        <p className="py-4 font-bold text-black">
            Address: Aziz Mahmut Hudayi, Gulfem Sk. No: 4, 34627 Uskudar/Istanbul/Turkey
        </p>

        <a
        href="https://goo.gl/maps/hW3EhmJ3kuq9g3LAA"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="hover:text-green-600">Click for directions</button>
      </a>



        <p className="py-4 font-bold text-black">
            Instagram: @7kcoffeeworkshop
        </p>

        <a
        href="https://www.instagram.com/7kcoffeeworkshop/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="hover:text-green-600">Contact via Instagram</button>
      </a>

       


    </div>


}
export default ContactPage