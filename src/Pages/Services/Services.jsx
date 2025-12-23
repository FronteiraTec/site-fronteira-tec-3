import { Main } from '../../Components/Main/Main'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import iconComputador from '../../Assets/iconComputador.png'
import iconCelular from '../../Assets/iconCelular.png'
import iconDatabase from '../../Assets/iconDatabase.png'
import bgFronteiraTEC3 from '../../Assets/Backgrounds/bgFronteiraTEC3.png'

export function ServicesPage() {
  return (
    <Main>
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold text-green-fronteira dark:text-green-400 mb-4">
            Nossos <span className="text-orange-fronteira dark:text-orange-400">Serviços</span>
          </h1>
          <div className="bg-gradient-to-r from-green-fronteira to-orange-fronteira h-1 w-40 mx-auto mt-4 mb-6" />
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Soluções tecnológicas completas para impulsionar seu negócio
          </p>
        </motion.div>

        {/* Sistemas desenvolvidos Section */}
        <motion.div
          className="mb-16 bg-gradient-to-br from-green-fronteira/10 to-orange-fronteira/10 dark:from-green-800/20 dark:to-orange-800/20 rounded-2xl p-8 md:p-12 overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
                Sistemas desenvolvidos para{' '}
                <span className="text-green-fronteira dark:text-green-400">Solucionar</span>{' '}
                o seu{' '}
                <span className="text-orange-fronteira dark:text-orange-400">Desafio</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Criamos soluções personalizadas que transformam desafios em oportunidades. 
                Nossa equipe está pronta para desenvolver o sistema ideal para o seu negócio.
              </p>
            </div>
            <div className="flex-1 order-1 md:order-2 flex justify-center">
              <img 
                src={bgFronteiraTEC3} 
                alt="Sistemas desenvolvidos" 
                className="w-full max-w-lg rounded-lg shadow-xl object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Services Carousel */}
        <div className="mb-16 px-4 pt-24">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
            }}
            className="services-swiper pb-12 !overflow-visible"
          >
            {/* Slide 1: Desenvolvimento Web */}
            <SwiperSlide className="!overflow-visible">
              <div className="relative pt-24 pb-8 px-4">
                <div className="bg-green-fronteira/10 dark:bg-green-800/20 hover:bg-green-fronteira/20 dark:hover:bg-green-800/30 p-8 pt-32 rounded-lg shadow-lg transition-all duration-300 min-h-[500px]">
                  <div className="flex justify-center">
                    <img
                      className="h-[200px] w-[200px] absolute -top-20"
                      src={iconComputador}
                      alt="Desenvolvimento Web"
                    />
                  </div>
                  <h2 className="text-3xl font-bold text-green-fronteira dark:text-green-400 mb-4 text-center">
                    Desenvolvimento Web
                  </h2>
                  <p className="text-lg text-gray-700 dark:text-gray-300 text-justify leading-relaxed mb-6">
                    Desenvolvemos <span className="font-bold">sites, portfólios e sistemas web</span> que podem
                    <span className="font-bold"> impulsionar e automatizar</span> o seu negócio.
                    Trabalhamos com as ferramentas mais modernas para{' '}
                    <span className="font-bold">você ser referência</span> do seu ramo na pesquisa pelo Google.
                  </p>
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="text-green-fronteira dark:text-green-400 mr-2">✓</span>
                      <span>Sites institucionais responsivos</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-fronteira dark:text-green-400 mr-2">✓</span>
                      <span>E-commerce e marketplaces</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-fronteira dark:text-green-400 mr-2">✓</span>
                      <span>Sistemas web customizados (ERP, CRM)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-fronteira dark:text-green-400 mr-2">✓</span>
                      <span>Portais e plataformas SaaS</span>
                    </li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 2: Desenvolvimento Mobile */}
            <SwiperSlide className="!overflow-visible">
              <div className="relative pt-24 pb-8 px-4">
                <div className="bg-orange-fronteira/10 dark:bg-orange-800/20 hover:bg-orange-fronteira/20 dark:hover:bg-orange-800/30 p-8 pt-32 rounded-lg shadow-lg transition-all duration-300 min-h-[500px]">
                  <div className="flex justify-center">
                    <img
                      className="h-[200px] w-[200px] absolute -top-20"
                      src={iconCelular}
                      alt="Desenvolvimento Mobile"
                    />
                  </div>
                  <h2 className="text-3xl font-bold text-orange-fronteira dark:text-orange-400 mb-4 text-center">
                    Desenvolvimento Mobile
                  </h2>
                  <p className="text-lg text-gray-700 dark:text-gray-300 text-justify leading-relaxed mb-6">
                    Desenvolvemos <span className="font-bold">aplicativos mobile</span> focados na
                    compatibilidade com os sistemas operacionais{' '}
                    <span className="font-bold">Android e iOS</span>, tanto para Tablets quanto para
                    Smartphones, de maneira a aumentar a <span className="font-bold">produtividade</span>{' '}
                    e facilitar os processos do seu negócio.
                  </p>
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="text-orange-fronteira dark:text-orange-400 mr-2">✓</span>
                      <span>Apps nativos Android e iOS</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-fronteira dark:text-orange-400 mr-2">✓</span>
                      <span>Apps híbridos multiplataforma</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-fronteira dark:text-orange-400 mr-2">✓</span>
                      <span>Progressive Web Apps (PWA)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-fronteira dark:text-orange-400 mr-2">✓</span>
                      <span>Integração com APIs e serviços</span>
                    </li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 3: UI/UX Design */}
            <SwiperSlide className="!overflow-visible">
              <div className="relative pt-24 pb-8 px-4">
                <div className="bg-green-fronteira/10 dark:bg-green-800/20 hover:bg-green-fronteira/20 dark:hover:bg-green-800/30 p-8 pt-32 rounded-lg shadow-lg transition-all duration-300 min-h-[500px]">
                  <div className="flex justify-center">
                    <div className="text-8xl absolute -top-20 bg-white dark:bg-gray-800 rounded-full w-40 h-40 flex items-center justify-center shadow-xl">
                      🎨
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold text-green-fronteira dark:text-green-400 mb-4 text-center">
                    UI/UX Design
                  </h2>
                  <p className="text-lg text-gray-700 dark:text-gray-300 text-justify leading-relaxed mb-6">
                    Criamos <span className="font-bold">experiências digitais intuitivas e atraentes</span> que 
                    encantam usuários e impulsionam conversões. Nosso design foca em{' '}
                    <span className="font-bold">usabilidade e estética</span>, combinando pesquisa de usuários 
                    com as melhores práticas de design para criar interfaces que{' '}
                    <span className="font-bold">facilitam a interação</span> e geram resultados.
                  </p>
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="text-green-fronteira dark:text-green-400 mr-2">✓</span>
                      <span>Design de interfaces modernas</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-fronteira dark:text-green-400 mr-2">✓</span>
                      <span>Prototipagem interativa e wireframes</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-fronteira dark:text-green-400 mr-2">✓</span>
                      <span>Pesquisa com usuários e testes A/B</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-fronteira dark:text-green-400 mr-2">✓</span>
                      <span>Design System e componentes reutilizáveis</span>
                    </li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 4: Consultoria em TI */}
            <SwiperSlide className="!overflow-visible">
              <div className="relative pt-24 pb-8 px-4">
                <div className="bg-orange-fronteira/10 dark:bg-orange-800/20 hover:bg-orange-fronteira/20 dark:hover:bg-orange-800/30 p-8 pt-32 rounded-lg shadow-lg transition-all duration-300 min-h-[500px]">
                  <div className="flex justify-center">
                    <div className="text-8xl absolute -top-20 bg-white dark:bg-gray-800 rounded-full w-40 h-40 flex items-center justify-center shadow-xl">
                      💡
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold text-orange-fronteira dark:text-orange-400 mb-4 text-center">
                    Consultoria em TI
                  </h2>
                  <p className="text-lg text-gray-700 dark:text-gray-300 text-justify leading-relaxed mb-6">
                    Oferecemos <span className="font-bold">consultoria especializada</span> para ajudar sua
                    empresa a tomar decisões tecnológicas estratégicas. Nossa equipe analisa seus processos,
                    identifica oportunidades de <span className="font-bold">otimização e inovação</span>,
                    e propõe soluções que geram{' '}
                    <span className="font-bold">resultados mensuráveis</span> e alinhados aos seus objetivos.
                  </p>
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="text-orange-fronteira dark:text-orange-400 mr-2">✓</span>
                      <span>Análise de requisitos e viabilidade</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-fronteira dark:text-orange-400 mr-2">✓</span>
                      <span>Arquitetura de sistemas escaláveis</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-fronteira dark:text-orange-400 mr-2">✓</span>
                      <span>Otimização de processos e performance</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-fronteira dark:text-orange-400 mr-2">✓</span>
                      <span>Estratégias de transformação digital</span>
                    </li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 5: Otimização de Banco de Dados */}
            <SwiperSlide className="!overflow-visible">
              <div className="relative pt-24 pb-8 px-4">
                <div className="bg-green-fronteira/10 dark:bg-green-800/20 hover:bg-green-fronteira/20 dark:hover:bg-green-800/30 p-8 pt-32 rounded-lg shadow-lg transition-all duration-300 min-h-[500px]">
                  <div className="flex justify-center">
                    <div className="absolute -top-20 bg-white dark:bg-gray-800 rounded-full w-40 h-40 flex items-center justify-center shadow-xl">
                      <img src={iconDatabase} alt="Database Icon" className="w-24 h-24 object-contain" />
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold text-green-fronteira dark:text-green-400 mb-4 text-center">
                    Otimização de Banco de Dados
                  </h2>
                  <p className="text-lg text-gray-700 dark:text-gray-300 text-justify leading-relaxed mb-6">
                    Maximizamos a <span className="font-bold">performance e eficiência</span> dos seus bancos de dados,
                    reduzindo custos e melhorando tempos de resposta. Realizamos{' '}
                    <span className="font-bold">análises profundas</span> e implementamos estratégias de otimização
                    que garantem <span className="font-bold">escalabilidade</span> e{' '}
                    <span className="font-bold">alta disponibilidade</span> dos seus dados.
                  </p>
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="text-green-fronteira dark:text-green-400 mr-2">✓</span>
                      <span>Análise e otimização de queries SQL</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-fronteira dark:text-green-400 mr-2">✓</span>
                      <span>Indexação e tuning de performance</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-fronteira dark:text-green-400 mr-2">✓</span>
                      <span>Migração e modernização de bancos</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-fronteira dark:text-green-400 mr-2">✓</span>
                      <span>Backup, recuperação e segurança</span>
                    </li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 6: MVPs para Startups */}
            <SwiperSlide className="!overflow-visible">
              <div className="relative pt-24 pb-8 px-4">
                <div className="bg-orange-fronteira/10 dark:bg-orange-800/20 hover:bg-orange-fronteira/20 dark:hover:bg-orange-800/30 p-8 pt-32 rounded-lg shadow-lg transition-all duration-300 min-h-[500px]">
                  <div className="flex justify-center">
                    <div className="text-8xl absolute -top-20 bg-white dark:bg-gray-800 rounded-full w-40 h-40 flex items-center justify-center shadow-xl">
                      🚀
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold text-orange-fronteira dark:text-orange-400 mb-4 text-center">
                    MVPs para Startups
                  </h2>
                  <p className="text-lg text-gray-700 dark:text-gray-300 text-justify leading-relaxed mb-6">
                    Transformamos suas ideias em <span className="font-bold">produtos viáveis</span> rapidamente,
                    permitindo validar conceitos com{' '}
                    <span className="font-bold">investimento otimizado</span>. Desenvolvemos MVPs completos
                    com as <span className="font-bold">funcionalidades essenciais</span> para você testar
                    seu mercado e <span className="font-bold">captar investimentos</span>.
                  </p>
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="text-orange-fronteira dark:text-orange-400 mr-2">✓</span>
                      <span>Desenvolvimento rápido e ágil</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-fronteira dark:text-orange-400 mr-2">✓</span>
                      <span>Validação de produto e mercado</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-fronteira dark:text-orange-400 mr-2">✓</span>
                      <span>Prototipagem funcional e testes</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-fronteira dark:text-orange-400 mr-2">✓</span>
                      <span>Escalabilidade desde o início</span>
                    </li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 7: APIs & Integrações */}
            <SwiperSlide className="!overflow-visible">
              <div className="relative pt-24 pb-8 px-4">
                <div className="bg-green-fronteira/10 dark:bg-green-800/20 hover:bg-green-fronteira/20 dark:hover:bg-green-800/30 p-8 pt-32 rounded-lg shadow-lg transition-all duration-300 min-h-[500px]">
                  <div className="flex justify-center">
                    <div className="text-8xl absolute -top-20 bg-white dark:bg-gray-800 rounded-full w-40 h-40 flex items-center justify-center shadow-xl">
                      🔌
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold text-green-fronteira dark:text-green-400 mb-4 text-center">
                    APIs & Integrações
                  </h2>
                  <p className="text-lg text-gray-700 dark:text-gray-300 text-justify leading-relaxed mb-6">
                    Desenvolvemos <span className="font-bold">APIs robustas e seguras</span> que conectam
                    seus sistemas e automatizam processos. Realizamos{' '}
                    <span className="font-bold">integrações complexas</span> entre plataformas diferentes,
                    permitindo que seus dados fluam perfeitamente e gerando{' '}
                    <span className="font-bold">maior eficiência operacional</span>.
                  </p>
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="text-green-fronteira dark:text-green-400 mr-2">✓</span>
                      <span>Desenvolvimento de APIs REST e GraphQL</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-fronteira dark:text-green-400 mr-2">✓</span>
                      <span>Integração entre sistemas e plataformas</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-fronteira dark:text-green-400 mr-2">✓</span>
                      <span>Webhooks e automações inteligentes</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-fronteira dark:text-green-400 mr-2">✓</span>
                      <span>Arquitetura de microserviços</span>
                    </li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Why Choose Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-center text-green-fronteira dark:text-green-400 mb-4">
            Por que escolher <span className="text-orange-fronteira dark:text-orange-400">nossos serviços</span>?
          </h2>
          <div className="bg-gradient-to-r from-green-fronteira to-orange-fronteira h-1 w-40 mx-auto mb-12" />
          
          <div className="max-w-5xl mx-auto">
            {/* Primeira linha - 3 itens */}
            <div className="grid md:grid-cols-3 gap-12 mb-12">
              <div className="text-center group cursor-pointer transition-all duration-300 hover:-translate-y-2">
                <div className="w-24 h-24 bg-gradient-to-br from-green-fronteira to-green-600 rounded-full flex items-center justify-center text-4xl mx-auto mb-4 shadow-lg group-hover:shadow-2xl group-hover:shadow-green-fronteira/50 group-hover:scale-110 transition-all duration-300">
                  ⚡
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-3 group-hover:text-green-fronteira dark:group-hover:text-green-400 transition-colors duration-300">
                  Agilidade e Eficiência
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-colors duration-300">
                  Entregamos projetos dentro do prazo, sem comprometer a qualidade. Nossa metodologia ágil garante resultados rápidos.
                </p>
              </div>

              <div className="text-center group cursor-pointer transition-all duration-300 hover:-translate-y-2">
                <div className="w-24 h-24 bg-gradient-to-br from-orange-fronteira to-orange-600 rounded-full flex items-center justify-center text-4xl mx-auto mb-4 shadow-lg group-hover:shadow-2xl group-hover:shadow-orange-fronteira/50 group-hover:scale-110 transition-all duration-300">
                  🎯
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-3 group-hover:text-orange-fronteira dark:group-hover:text-orange-400 transition-colors duration-300">
                  Foco em Resultados
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-colors duration-300">
                  Não apenas desenvolvemos, mas buscamos soluções que realmente impactem seu negócio e gerem valor mensurável.
                </p>
              </div>

              <div className="text-center group cursor-pointer transition-all duration-300 hover:-translate-y-2">
                <div className="w-24 h-24 bg-gradient-to-br from-green-fronteira to-green-600 rounded-full flex items-center justify-center text-4xl mx-auto mb-4 shadow-lg group-hover:shadow-2xl group-hover:shadow-green-fronteira/50 group-hover:scale-110 transition-all duration-300">
                  🛡️
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-3 group-hover:text-green-fronteira dark:group-hover:text-green-400 transition-colors duration-300">
                  Qualidade e Segurança
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-colors duration-300">
                  Código limpo, boas práticas e segurança são prioridades. Seus dados e sistemas estarão sempre protegidos.
                </p>
              </div>
            </div>

            {/* Segunda linha - 2 itens centralizados */}
            <div className="grid md:grid-cols-2 gap-12 max-w-3xl mx-auto">
              <div className="text-center group cursor-pointer transition-all duration-300 hover:-translate-y-2">
                <div className="w-24 h-24 bg-gradient-to-br from-orange-fronteira to-orange-600 rounded-full flex items-center justify-center text-4xl mx-auto mb-4 shadow-lg group-hover:shadow-2xl group-hover:shadow-orange-fronteira/50 group-hover:scale-110 transition-all duration-300">
                  🚀
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-3 group-hover:text-orange-fronteira dark:group-hover:text-orange-400 transition-colors duration-300">
                  Tecnologias Modernas
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-colors duration-300">
                  Trabalhamos com as ferramentas e frameworks mais atuais do mercado, garantindo soluções escaláveis e performáticas.
                </p>
              </div>

              <div className="text-center group cursor-pointer transition-all duration-300 hover:-translate-y-2">
                <div className="w-24 h-24 bg-gradient-to-br from-green-fronteira to-green-600 rounded-full flex items-center justify-center text-4xl mx-auto mb-4 shadow-lg group-hover:shadow-2xl group-hover:shadow-green-fronteira/50 group-hover:scale-110 transition-all duration-300">
                  🤝
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-3 group-hover:text-green-fronteira dark:group-hover:text-green-400 transition-colors duration-300">
                  Suporte Contínuo
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-colors duration-300">
                  Não abandonamos seu projeto após a entrega. Oferecemos suporte, manutenção e evolução contínua dos sistemas.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-green-fronteira to-orange-fronteira p-1 rounded-lg mb-16"
        >
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-center text-green-fronteira dark:text-green-400 mb-8">
              Nosso Processo
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-fronteira text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="font-bold text-lg mb-2">Análise</h3>
                <p className="text-gray-600">Entendemos suas necessidades</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-fronteira text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="font-bold text-lg mb-2">Planejamento</h3>
                <p className="text-gray-600">Criamos a melhor estratégia</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-fronteira text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="font-bold text-lg mb-2">Desenvolvimento</h3>
                <p className="text-gray-600">Construímos sua solução</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-fronteira text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="font-bold text-lg mb-2">Entrega</h3>
                <p className="text-gray-600">Lançamos seu projeto</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Pronto para transformar sua ideia em realidade?
          </h2>
          <a href="/contato">
            <button className="px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-green-fronteira to-orange-fronteira hover:from-green-fronteira/90 hover:to-orange-fronteira/90 rounded-md transition-all duration-300 hover:scale-110 shadow-lg">
              Entre em Contato {'→'}
            </button>
          </a>
        </motion.div>
      </div>
    </Main>
  )
}
