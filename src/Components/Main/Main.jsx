import { Navbar } from '../Navbar/Navbar'

export function Main(props) {
  return (
    <body>
      <header>
        <Navbar />
      </header>
      <main>{props.children}</main>
    </body>
  )
}
