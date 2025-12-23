import { Navbar } from '../Navbar/Navbar'

export function Main(props) {
  return (
    <body className="bg-white dark:bg-gray-900 transition-colors duration-300">
      <header className="h-0">
        <Navbar />
      </header>
      <main className="bg-white-fronteira dark:bg-gray-900 pt-20">{props.children}</main>
    </body>
  )
}
