import logo from "../../assets/download.png"
export default function Header() {
 return (
    <header>
        <img src={logo} alt="Logo" className="headerImage" />
        <h1 className="headerTitle">Meme Generator</h1>
    </header>
 )
}