import React, { useState } from 'react';
import { ArrowBigLeft, ArrowBigRight } from 'lucide-react';
import Aspas from '../assets/icons/Aspas';

const comentarios = [
    { id: 1, texto: 'Victor fez um bom trabalho e não tive nenhum incômodo.', nome: 'João', empresa: 'CEO Apple' },
    { id: 2, texto: 'Victor entregou um trabalho impecável, sem nenhum contratempo.', nome: 'Maria', empresa: 'CEO Apple' },
    { id: 3, texto: 'Victor realizou um trabalho excelente, pontualidade nota 10', nome: 'João', empresa: 'CEO Apple' },
    { id: 4, texto: 'Victor fez um bom trabalho e não tive nenhum incômodo.', nome: 'João', empresa: 'CEO Apple' },
    { id: 5, texto: 'Victor entregou um trabalho impecável, sem nenhum contratempo.', nome: 'Maria', empresa: 'CEO Apple' },
    { id: 6, texto: 'Victor realizou um trabalho excelente, pontualidade nota 10', nome: 'João', empresa: 'CEO Apple' },
    { id: 7, texto: 'Victor fez um bom trabalho e não tive nenhum incômodo.', nome: 'João', empresa: 'CEO Apple' },
    { id: 8, texto: 'Victor entregou um trabalho impecável, sem nenhum contratempo.', nome: 'Maria', empresa: 'CEO Apple' },
    { id: 9, texto: 'Victor realizou um trabalho excelente, pontualidade nota 10', nome: 'João', empresa: 'CEO Apple' },
];

function Carousel() {
    const [indiceAtual, setIndiceAtual] = useState(0);
    const comentariosPorPagina = 3;
    const totalComentarios = comentarios.length;
    const larguraComentario = 100; // Largura do comentário em porcentagem

    const proximo = () => {
        setIndiceAtual(indiceAtual => (indiceAtual + 1) % totalComentarios);
    };

    const anterior = () => {
        setIndiceAtual(indiceAtual => (indiceAtual - 1 + totalComentarios) % totalComentarios);
    };

    return (
        <div className='flex items-center justify-center w-4/5'>
            <ArrowBigLeft onClick={anterior} className='stroke-white cursor-pointer' />
            <div className='flex w-full overflow-hidden mx-4'>
                <div className='flex transition-transform duration-500' style={{ transform: `translateX(-${indiceAtual * larguraComentario}%)` }}>
                    {comentarios.map((comentario) => (
                        <div key={comentario.id} className='flex flex-col bg-slate-950 w-full h-[230px] p-6 rounded' style={{ minWidth: `${larguraComentario}%` }}>
                            <Aspas />
                            <div className='flex flex-col justify-center items-center gap-3 text-white'>
                                <p className='text-xl text-center'>{comentario.texto}</p>
                                <p>{comentario.nome}</p>
                                <p className='text-xs'>{comentario.empresa}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <ArrowBigRight onClick={proximo} className='stroke-white cursor-pointer' />
        </div>
    );
}

export default Carousel;
