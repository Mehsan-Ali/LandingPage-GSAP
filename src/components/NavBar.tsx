import {navLinks} from "../../constants/index"
const NavBar = () => {
    return (
        <nav>
            <div>
                <a href="#home" className="flex items-center gap-2">
                    <img src="./images/logo.png" alt="Logo" className="h-12 w-auto object-cover rounded-2xl"/>
                    <p className="font-light text-3xl">LINK CITY</p>
                </a>
                <ul>
                    {
                        navLinks.map((link) => (
                            <li key={link.id}>
                                <a href={`#${link.id}`} className="text-lg font-light p-2 backdrop-blur hover:backdrop-blur-none hover:bg-white hover:text-black hover:rounded-lg hover:transition-colors hover:duration-300 hover:ease-in duration-300 rounded-lg">{link.title}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </nav>
    )
}

export default NavBar
