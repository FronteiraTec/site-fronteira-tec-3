import { Navbar } from '../Navbar/Navbar'

export function Main(props) {
  return (
    <body>
      <header className="h-0">
        <Navbar />
      </header>
      <main className="bg-white-fronteira">{props.children}</main>
    </body>
  )
}
