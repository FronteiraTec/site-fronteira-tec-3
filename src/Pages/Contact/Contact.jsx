import { Main } from '../../Components/Main/Main'
import { Contacts } from '../../Components/Contacts/Contacts'

export function Contact() {
  return (
    <Main>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">Entre em Contato</h1>
        <Contacts />
      </div>
    </Main>
  )
}
