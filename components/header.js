import Link from "next/link"

export default function Header(){
    return(

        <header className=" py-2">

            <nav>
                <div className="flex items-start justify-items-start justify-start">
                    <h1 className="text-green-600  text-4xl font-bold p-6">7KCoffe</h1>
                </div>
            </nav>

            


           


            <nav className="flex items-center justify-items-center justify-center space-x-4  ">


                <Link href="/">
                    <a className="hover:text-green-600">
                        Home
                    </a>
                </Link>

                <Link href="/product">
                    <a className="hover:text-green-600">
                        Products
                    </a>

                </Link>

                <Link href="/about">
                    <a className="hover:text-green-600">
                        Our Story
                    </a>
                </Link>

                <Link href="/contact">
                    <a className="hover:text-green-600">
                        Contact
                    </a>
                </Link>
            </nav>
        </header>
    )
}