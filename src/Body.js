import truck from './truck.gif'
const Body = () => {
    return (
        <body className="App-body">
        < Gif />
        <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
        >
            Learn React

        </a>
        </body>
    )
}

const Gif = () => {
    return (
        <div>
            <img src={truck} className="App-logo"/>
            <img src={truck} className="App-logo"/>
            <img src={truck} className="App-logo"/>
        </div>
    )
}

export default Body;