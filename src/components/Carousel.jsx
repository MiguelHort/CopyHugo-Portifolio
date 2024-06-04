import Aspas from '../assets/icons/Aspas'

function Carousel({ texto , nome , empresa }) {
  return (
    <div className='flex flex-col items-start w-full rounded-lg p-6 gap-3 text-white bg-slate-950'>
      <Aspas></Aspas>
      <div className='flex flex-col items-center gap-3'>
      <p className="text-xl"><i>{texto}</i></p>
      <p>{nome}</p>
      <p className="text-xs">{empresa}</p>
      </div>
    </div>
  );
};

export default Carousel;