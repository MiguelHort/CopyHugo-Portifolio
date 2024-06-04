import { useState } from 'react'

import { CornerDownRight, MoveRight } from 'lucide-react'

import Logo from './assets/icons/Logo'
import Instagram from './assets/icons/Instagram'
import Facebook from './assets/icons/Facebook'
import Whatsapp from './assets/icons/Whatsapp'

import ImgVictor from './assets/imgs/victor.png'

import Card1 from './components/Card1'
import Card2 from './components/Card2'
import Socialmedia from './assets/icons/Socialmedia'
import Copywriting from './assets/icons/Copywriting'
import Website from './assets/icons/Website'
import Carousel from './components/Carousel'

function App() {

  // Primeiro, selecione todos os links âncora que têm '#' em seu href
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      // Previna o comportamento padrão do clique
      e.preventDefault();

      // 'hash' é o href do âncora clicado
      document.querySelector(this.hash).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });


  return (
    <main className='w-full flex-row'>


      <header className='flex w-full justify-center items-center py-5 bg-slate-600 sticky top-0'>
        <div className='flex w-4/5 justify-between items-center'>
          <Logo />
          <nav className='flex gap-8'>
            <a className='text-white hover:opacity-70' href="#Desenvolvimento">Desenvolvimento</a>
            <a className='text-white hover:opacity-70' href="#Servicos">Serviços</a>
            <a className='text-white hover:opacity-70' href="#Trabalhos-realizados">Trabalhos realizados</a>
            <a className='text-white hover:opacity-70' href="#Resultados">Resultados</a>
            <a className='text-white hover:opacity-70' href="#Planos">Planos</a>
          </nav>
        </div>
      </header>

      <main className='flex flex-col w-full justify-center items-center bg-slate-900'>

        <section className='flex w-full justify-center items-center bg-slate-800'>
          <div className='flex w-4/5 justify-between items-center'>
            <div className='flex flex-col gap-8'>
              <h1 className='text-white text-4xl font-bold'>Victor Hugo, <br /> <span className='text-blue-500'>CopyWriter</span> & SocialMedia</h1>
              <p className='text-gray-400'>Sua empresa precisa estar na internet, e <br /> eu posso te ajudar com isso.</p>
              <div className='flex gap-6'>
                <Facebook />
                <Instagram />
                <Whatsapp />
              </div>
              <button className='w-64 text-white bg-blue-500 py-2 rounded-2xl hover:opacity-70 duration-1000'>Quero me posicionar na internet</button>
            </div>
            <img className='w-80 mr-32' src={ImgVictor} alt="Imagem de uma Pessoa" />
          </div>
        </section>

        <section id="Desenvolvimento" className='flex w-full justify-center items-center bg-slate-900 pt-8 pb-20'>
          <div className='flex-col justify-center items-center w-4/5'>
            <h2 className='text-center text-2xl m-8 text-white'>PROCESSO DE DESENVOLVIMENTO</h2>
            <div className='flex justify-between items-center gap-1'>
              <Card1
                numero='1'
                palavra='Start'
                texto='Reunião de branding e briefing (entender os valores da marca, comunicação, diferenciais, elementos de autoridade, público-alvo, a mensagem que a marca quer transmitir).' />
              <MoveRight className='w-40 stroke-white' />
              <Card1
                numero='2'
                palavra='Padronização'
                texto='Alinhamento do estilo das artes que serão publicadas no perfil da empresa.' />
              <MoveRight className='w-40 stroke-white' />
              <Card1
                numero='3'
                palavra='Especificação'
                texto='Definição dos produtos e serviços que serão trabalhados em campanhas.' />
              <MoveRight className='w-40 stroke-white' />
              <Card1
                numero='4'
                palavra='Amplifiação'
                texto='Publicação das artes, reels e stories trazendo mais reconhecimento e faturamento para a empresa' />
            </div>
          </div>
        </section>

        <div className='w-4/5 h-px bg-slate-800' />

        <section id="Servicos" className='flex w-full justify-center items-center bg-slate-900 pt-8 pb-20'>
          <div className='flex flex-col justify-center items-center w-4/5'>
            <h2 className='text-center text-2xl mt-8 text-white'>SERVIÇOS QUE OFEREÇO</h2>
            <p className='mb-8 text-xs text-gray-400'>Contratados pontualmente ou fixo em planos</p>
            <div className='flex justify-between gap-8'>
              <Card2
                icone={<Socialmedia />}
                palavra='Social Media'
                texto='Reunião de branding e briefing (entender os valores da marca, comunicação, diferenciais, elementos de autoridade, público-alvo, a mensagem que a marca quer transmitir).' />
              <Card2
                icone={<Copywriting />}
                palavra='Copywriting'
                texto='Alinhamento do estilo das artes que serão publicadas no perfil da empresa.' />
              <Card2
                icone={<Website />}
                palavra='Web Site'
                texto='Definição dos produtos e serviços que serão trabalhados em campanhas.' />
            </div>
          </div>
        </section>

        <div className='w-4/5 h-px bg-slate-800' />

        <section id="Resultados" className='flex w-full justify-center items-center bg-slate-900 pt-8 pb-20'>
          <div className='flex flex-col justify-center items-center w-4/5'>
            <h2 className='text-center text-2xl m-8 text-white'>RESULTADOS</h2>
            <div className='flex justify-between gap-8 last:py-8'>
              <Carousel
                texto='Victor fez um bom trabalho e não tive nenhum incômodo.'
                nome='Steve Jobs'
                empresa='CEO Apple' />
              <Carousel
                texto='Victor fez um bom trabalho e não tive nenhum incômodo. '
                nome='Steve Jobs'
                empresa='CEO Apple' />
              <Carousel
                texto='Victor fez um bom trabalho e não tive nenhum incômodo.'
                nome='Steve Jobs'
                empresa='CEO Apple' />
            </div>
          </div>
        </section>



        <section id="Planos" className='flex w-full justify-center items-center bg-slate-950 pt-8 pb-20'>
          <div className='flex flex-col justify-center items-center w-4/5'>
            <h2 className='text-center text-2xl mt-8 text-white'>PLANOS</h2>
            <p className='mb-8 text-xl text-gray-400'>Entre em contato comigo para saber mais</p>
            <div className='flex justify-center items-center justify-between gap-8 text-white'>
              <CornerDownRight />
              <button className='py-2 px-10 text-xl rounded border-solid border-green-500 border-2 bg-transparent hover:bg-green-500 duration-1000'>Whatsapp</button>
            </div>
          </div>
        </section>

        <footer className='flex w-full justify-center items-center'>
          <div className='flex w-4/5 justify-between items-center py-10'>
            <div className='flex flex-col text-gray-400'>
              <Logo />
              <p className='mt-4'>CNPJ: XX.XXX.XXX/0001-XX</p>
              <p>Telefone: 47  9XXXX-XXXX</p>
            </div>
            <div className='flex gap-4'>
              <Facebook />
              <Instagram />
              <Whatsapp />
            </div>
          </div>
        </footer>


      </main>

    </main>
  )
}

export default App
