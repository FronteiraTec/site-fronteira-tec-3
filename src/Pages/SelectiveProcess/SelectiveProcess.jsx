import { useState, useEffect, useRef, forwardRef } from 'react'
import { Navbar } from '../../Components/Navbar/Navbar'
import { useTheme } from '../../contexts/ThemeContext'
import inscricoesGif from './gifsProcessoSeletivo/inscricoes.gif'
import areasDiversasGif from './gifsProcessoSeletivo/areasDiversas.gif'
import avaliacaoDasInfosGif from './gifsProcessoSeletivo/avaliacaoDasInfos.gif'
import entrevistaGif from './gifsProcessoSeletivo/entrevista.gif'
import testePraticoGif from './gifsProcessoSeletivo/testePratico.gif'
import resultadoGif from './gifsProcessoSeletivo/resultado.gif'

export function SelectiveProcess() {
  const { isDark } = useTheme()
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeItems, setActiveItems] = useState(new Set())
  const timelineRef = useRef(null)
  const itemRefs = useRef([])

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return

      const timelineTop = timelineRef.current.offsetTop
      const timelineHeight = timelineRef.current.offsetHeight
      const windowHeight = window.innerHeight
      const scrollY = window.scrollY

      // Calcula o progresso do scroll dentro da timeline
      const startScroll = timelineTop - windowHeight / 2
      const endScroll = timelineTop + timelineHeight - windowHeight / 2
      
      const progress = Math.min(Math.max((scrollY - startScroll) / (endScroll - startScroll), 0), 1)
      setScrollProgress(progress * 100)

      // Verifica quais itens estão ativos baseado no scroll
      const newActiveItems = new Set()
      itemRefs.current.forEach((item, index) => {
        if (item) {
          const itemTop = item.offsetTop
          const timelineLineTop = scrollY - timelineTop + windowHeight / 2
          
          if (timelineLineTop >= itemTop) {
            newActiveItems.add(index)
          }
        }
      })
      setActiveItems(newActiveItems)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Chama uma vez para inicializar

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-500 to-orange-600 dark:from-green-600 dark:to-green-700 text-white overflow-hidden transition-colors duration-300">
        <div className="absolute inset-0 bg-black/10"></div>
        
        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6 py-32 md:py-40">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Processo Seletivo FronteiraTec{' '}
              <span className="underline decoration-4 decoration-orange-300 dark:decoration-green-300">2024.2</span>
            </h1>
            <h4 className="text-xl md:text-2xl mb-6 font-semibold">
              Vagas abertas para novos membros
            </h4>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Caso esteja interessado em fazer parte de uma Empresa Júnior, mas não 
              necessariamente desenvolvendo software, inscreva-se mesmo assim e concorra 
              a uma vaga de acordo com seu perfil.
            </p>
            <div className="flex gap-4 mt-8">
              <a 
                href="#roadmap" 
                className="flex items-center gap-2 px-6 py-3 bg-white text-orange-600 dark:text-green-600 hover:bg-gray-100 dark:hover:bg-gray-200 rounded-lg font-semibold transition-colors"
              >
                <span>📝</span>
                <span>INSCREVA-SE</span>
              </a>
              <a 
                href="https://github.com/FronteiraTec/processo-seletivo/blob/main/resultados/" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-white/20 hover:bg-white/30 rounded-lg font-semibold transition-colors"
              >
                <span>📄</span>
                <span>RESULTADO</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Header */}
      <section id="roadmap" className="bg-white dark:bg-gray-800 py-16 transition-colors duration-300">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
              Roadmap 2024.2
            </h2>
            <div className="text-gray-600 dark:text-gray-300 mb-4">
              <span>Mais informações no </span>
              <a 
                href="https://github.com/FronteiraTec/processo-seletivo/blob/main/editais/2024.2.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 dark:text-green-500 hover:text-orange-700 dark:hover:text-green-400 underline inline-flex items-center gap-1 transition-colors"
              >
                edital
                <span>↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section ref={timelineRef} className="bg-gray-50 dark:bg-gray-900 py-16 transition-colors duration-300">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="relative">
            {/* Timeline Line - Background */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-700"></div>
            
            {/* Timeline Line - Progress */}
            <div 
              className="absolute left-8 md:left-1/2 top-0 w-0.5 bg-gradient-to-b from-orange-500 via-orange-400 to-orange-300 dark:from-green-500 dark:via-green-400 dark:to-green-300 transition-all duration-300 ease-out"
              style={{ height: `${scrollProgress}%` }}
            ></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {/* Item 1 - Início das Inscrições */}
              <TimelineItem 
                date="27 de Agosto 2024"
                position="right"
                isActive={activeItems.has(0)}
                ref={(el) => (itemRefs.current[0] = el)}
              >
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                  Inicia-se o processo seletivo! 🥳
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  As inscrições poderão ser feitas até o dia 05 de Setembro às 23:59 
                  e devem ser feitas pelo formulário abaixo.
                </p>
                <a 
                  href="https://forms.gle/cjauLAXUD6P7iwyG6" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-orange-600 dark:text-green-500 hover:text-orange-700 dark:hover:text-green-400 font-semibold mb-6 transition-colors"
                >
                  PREENCHA O FORMULÁRIO
                  <span>↗</span>
                </a>
                <div className="mt-6">
                  <img 
                    src={inscricoesGif} 
                    alt="Animação de inscrições" 
                    className="w-full max-w-md rounded-lg shadow-md"
                  />
                </div>
              </TimelineItem>

              {/* Item 2 - Encerramento das Inscrições */}
              <TimelineItem 
                date="05 de Setembro 2024"
                position="left"
                isActive={activeItems.has(1)}
                ref={(el) => (itemRefs.current[1] = el)}
              >
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                  Encerram-se as inscrições! 😵
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mb-6">
                  Encerram-se as inscrições do nosso processo seletivo. Porém não é o fim! 
                  Quem realizou a sua inscrição dentro do prazo continuará até o findar do seu processo.
                </p>
                <div className="mt-6">
                  <img 
                    src={areasDiversasGif} 
                    alt="Áreas diversas" 
                    className="w-full max-w-md rounded-lg shadow-md"
                  />
                </div>
              </TimelineItem>

              {/* Item 3 - Análise de Perfis */}
              <TimelineItem 
                date="06 de Setembro 2024"
                position="right"
                isActive={activeItems.has(2)}
                ref={(el) => (itemRefs.current[2] = el)}
              >
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                  Análise de Perfis
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  Dia 06 de Setembro começaremos a analisar todos os perfis já inscritos 
                  e entraremos em contato via e-mail com informações das próximas etapas.
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">
                  Este processo de análise e contato se estenderá até o dia 08 de Setembro 2024.
                </p>
                <div className="mt-6">
                  <img 
                    src={avaliacaoDasInfosGif} 
                    alt="Avaliação das informações" 
                    className="w-full max-w-md rounded-lg shadow-md"
                  />
                </div>
              </TimelineItem>

              {/* Item 4 - Entrevistas */}
              <TimelineItem 
                date="09 de Setembro 2024"
                position="left"
                isActive={activeItems.has(3)}
                ref={(el) => (itemRefs.current[3] = el)}
              >
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                  Entrevistas
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  As entrevistas serão individuais com foco de conhecer os candidatos, 
                  e durarão até dia 13 de Setembro ou até o término dos candidatos.
                  <br />
                  <span className="text-gray-500 dark:text-gray-400">
                    Portanto, fique tranquilo, é apenas um bate-papo 😉
                  </span>
                </p>
                <div className="mt-6">
                  <img 
                    src={entrevistaGif} 
                    alt="Entrevista" 
                    className="w-full max-w-md rounded-lg shadow-md"
                  />
                </div>
              </TimelineItem>

              {/* Item 5 - Teste Prático */}
              <TimelineItem 
                date="14 de Setembro 2024"
                position="right"
                isActive={activeItems.has(4)}
                ref={(el) => (itemRefs.current[4] = el)}
              >
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                  Teste Prático
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Estamos empolgados em anunciar que estamos entrando na fase de testes 
                  do nosso processo seletivo. Em breve, enviaremos testes específicos para 
                  cada um dos candidatos. Fiquem atentos aos seus e-mails e boa sorte a todos!
                </p>
                <div className="mt-6">
                  <img 
                    src={testePraticoGif} 
                    alt="Teste prático" 
                    className="w-full max-w-md rounded-lg shadow-md"
                  />
                </div>
              </TimelineItem>

              {/* Item 6 - Fim do Processo */}
              <TimelineItem 
                date="20 de Setembro 2024"
                position="left"
                isActive={activeItems.has(5)}
                ref={(el) => (itemRefs.current[5] = el)}
              >
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                  Fim do processo seletivo! 😢
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Concluiremos com sucesso mais um processo da FronteiraTec, e esperamos 
                  "colher muitos frutos nessa safra", risos.
                </p>
              </TimelineItem>

              {/* Item 7 - Resultado Final */}
              <TimelineItem 
                date="23 de Setembro 2024"
                position="right"
                isActive={activeItems.has(6)}
                ref={(el) => (itemRefs.current[6] = el)}
              >
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                  Resultado final! 🎉
                </h3>
                <div className="mt-6">
                  <img 
                    src={resultadoGif} 
                    alt="Resultado final" 
                    className="w-full max-w-md rounded-lg shadow-md"
                  />
                </div>
              </TimelineItem>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-sm text-gray-400 mb-6">2024</div>
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-2xl">
                👤
              </div>
              <div>
                <p className="text-lg md:text-xl italic mb-4 text-gray-200">
                  "Estamos ansiosos com este novo processo seletivo, queremos muito 
                  conhecer quem serão os novos membros de nossa equipe."
                </p>
                <p className="text-sm text-gray-400">
                  Matheus Henrique, Presidente da FronteiraTec
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-gradient-to-br from-orange-500 to-orange-600 dark:from-green-600 dark:to-green-700 text-white py-20 transition-colors duration-300">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Junte-se à FronteiraTec
            </h2>
            <h4 className="text-xl md:text-2xl mb-6 font-semibold">
              Faça parte da nossa equipe
            </h4>
            <p className="text-lg md:text-xl mb-8 text-white/90">
              Confira o edital do processo seletivo 2024 e inscreva-se hoje mesmo 
              preenchendo o formulário abaixo.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a 
                href="https://forms.gle/cjauLAXUD6P7iwyG6" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 bg-white text-orange-600 dark:text-green-600 hover:bg-gray-100 dark:hover:bg-gray-200 rounded-lg font-semibold transition-colors"
              >
                <span>📝</span>
                <span>INSCREVA-SE</span>
              </a>
              <a 
                href="https://github.com/FronteiraTec/processo-seletivo/blob/main/editais/2024.2.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 bg-white/20 hover:bg-white/30 rounded-lg font-semibold transition-colors"
              >
                <span>📄</span>
                <span>EDITAL</span>
              </a>
            </div>
          </div>

          {/* Footer Credits */}
          <div className="mt-16 pt-8 border-t border-white/20 text-center text-sm text-white/80">
            <p className="mb-2">© 2013 - 2024, FronteiraTec. Todos os direitos reservados.</p>
            <a 
              href="/privacy-policy" 
              className="text-white/60 hover:text-white underline"
            >
              Política de Privacidade
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

// Timeline Item Component
const TimelineItem = forwardRef(({ date, position, children, isActive }, ref) => {
  const isLeft = position === 'left'
  
  return (
    <div ref={ref} className={`relative flex ${isLeft ? 'md:flex-row-reverse' : 'flex-row'} items-start gap-8`}>
      {/* Date */}
      <div className={`hidden md:block w-1/2 ${isLeft ? 'text-left pl-12' : 'text-right pr-12'}`}>
        <div className={`text-sm font-semibold transition-all duration-700 ${
          isActive 
            ? 'text-orange-600 dark:text-green-500 scale-110 translate-y-0 opacity-100' 
            : 'text-gray-400 dark:text-gray-500 scale-100 -translate-y-8 opacity-0'
        }`}>
          {date}
        </div>
      </div>

      {/* Circle */}
      <div className={`absolute left-8 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full border-4 border-white dark:border-gray-800 shadow-lg z-10 transition-all duration-500 ${
        isActive ? 'bg-orange-500 dark:bg-green-500 scale-125' : 'bg-gray-300 dark:bg-gray-600 scale-100'
      }`}></div>

      {/* Content */}
      <div className={`md:w-1/2 ml-16 md:ml-0 ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}>
        <div className={`md:hidden text-sm font-semibold mb-2 transition-all duration-700 ${
          isActive 
            ? 'text-orange-600 dark:text-green-500 translate-y-0 opacity-100' 
            : 'text-gray-400 dark:text-gray-500 -translate-y-4 opacity-0'
        }`}>
          {date}
        </div>
        <div className={`bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-500 ${
          isActive ? 'opacity-100 translate-y-0' : 'opacity-50 translate-y-4'
        }`}>
          {children}
        </div>
      </div>
    </div>
  )
})
