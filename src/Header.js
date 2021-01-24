const Header = () => {
    return (
        <div className="App-header">
            <H1/>
            <Links/>
        </div>
    );
}


const Links = () => {
    return (
        <div className="App-link">
            <a href={"#"}> Home </a>
            <a href={"#"}> Loads </a>
            <a href={"#"}> Drivers </a>
            <a href={"#"}> Schedule </a>
        </div>
    )
}

const H1 = () => {
    return (
        <header>
            <h1>Find load of your dream</h1>
        </header>
    )
}

export default Header;
