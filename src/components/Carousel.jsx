import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import imagem1 from '../assets/imgs/imagem1.png'
import imagem2 from '../assets/imgs/imagem2.png'
import imagem3 from '../assets/imgs/imagem3.png'
import imagem4 from '../assets/imgs/imagem4.png'

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: (window.innerWidth > 1024 ? 3 : 1),
    slidesToScroll: 1
  };
  return (
    <div className='w-3/4 m-auto'>
      <div className="mt-20">
      <Slider {...settings}>
        {data.map((d) => (
          <div key={d.name} className="bg-slate-950 h-[400px] text-black rounded-xl">
            <div className='h-56 bg-gray-800 flex justify-center items-center rounded-t-xl'>
              <img src={d.img} alt="" className="h-[150px] w-[200px] rounded bg-white"/>
            </div>

            <div className="flex flex-col items-center justify-center gap-4 p-4 text-white">
              <p className="text-xl font-semibold">{d.name}</p>
              <p className="text-center">{d.review}</p>
            </div>
          </div>
        ))}
      </Slider>
      </div>
      
    </div>
  );
}

const data = [
  {
    name: `John Morgan`,
    img: imagem1,
    review: `Victor fez um bom trabalho e não tive nenhum incômodo.`
  },
  {
    name: `Ellie Anderson`,
    img: imagem2,
    review: `Victor entregou um trabalho impecável, sem nenhum contratempo.`
  },
  {
    name: `Nia Adebayo`,
    img: imagem3,
    review: `Victor realizou um trabalho excelente, pontualidade nota 10.`
  },
  {
    name: `Rigo Louie`,
    img: imagem4,
    review: `Victor fez um bom trabalho e não tive nenhum incômodo.`
  },
  {
    name: `Mia Williams`,
    img: imagem1,
    review: `Victor entregou um trabalho impecável, sem nenhum contratempo.`
  },
  
];

export default Carousel;

























// import React, { useState } from 'react';
// import { ArrowBigLeft, ArrowBigRight } from 'lucide-react';
// import Aspas from '../assets/icons/Aspas';

// const comentarios = [
//     { id: 1, texto: 'Victor fez um bom trabalho e não tive nenhum incômodo.', nome: 'João', empresa: 'CEO Apple' },
//     { id: 2, texto: 'Victor entregou um trabalho impecável, sem nenhum contratempo.', nome: 'Maria', empresa: 'CEO Apple' },
//     { id: 3, texto: 'Victor realizou um trabalho excelente, pontualidade nota 10', nome: 'João', empresa: 'CEO Apple' },
//     { id: 4, texto: 'Victor fez um bom trabalho e não tive nenhum incômodo.', nome: 'João', empresa: 'CEO Apple' },
//     { id: 5, texto: 'Victor entregou um trabalho impecável, sem nenhum contratempo.', nome: 'Maria', empresa: 'CEO Apple' },
//     { id: 6, texto: 'Victor realizou um trabalho excelente, pontualidade nota 10', nome: 'João', empresa: 'CEO Apple' },
//     { id: 7, texto: 'Victor fez um bom trabalho e não tive nenhum incômodo.', nome: 'João', empresa: 'CEO Apple' },
//     { id: 8, texto: 'Victor entregou um trabalho impecável, sem nenhum contratempo.', nome: 'Maria', empresa: 'CEO Apple' },
//     { id: 9, texto: 'Victor realizou um trabalho excelente, pontualidade nota 10', nome: 'João', empresa: 'CEO Apple' },
// ];

// function Carousel() {
//     const [indiceAtual, setIndiceAtual] = useState(0);
//     const totalComentarios = comentarios.length;
//     const larguraComentario = 100; // Largura do comentário em porcentagem

//     const proximo = () => {
//         setIndiceAtual(indiceAtual => (indiceAtual + 1) % totalComentarios);
//     };

//     const anterior = () => {
//         setIndiceAtual(indiceAtual => (indiceAtual - 1 + totalComentarios) % totalComentarios);
//     };

//     return (
//         <div className='flex items-center justify-center w-4/5'>

//             <ArrowBigLeft onClick={anterior} className='stroke-white cursor-pointer' />

//             <div className='flex w-[70%] overflow-hidden mx-4'>

//                 <div className='flex transition-transform duration-500' style={{ transform: `translateX(-${indiceAtual * larguraComentario}%)` }}>
//                     {comentarios.map((comentario) => (
//                         <div key={comentario.id} className='flex flex-col bg-slate-950 h-[230px] p-6 rounded min-w-[80%]' >
//                             <Aspas />
//                             <div className='flex flex-col w-[400px] justify-center items-center gap-3 text-white'>
//                                 <p className='text-xl w-auto'>{comentario.texto}</p>
//                                 <p>{comentario.nome}</p>
//                                 <p className='text-xs'>{comentario.empresa}</p>
//                             </div>
//                         </div>
//                     ))}
//                 </div>

//             </div>

//             <ArrowBigRight onClick={proximo} className='stroke-white cursor-pointer' />

//         </div>
//     );
// }

// export default Carousel;
