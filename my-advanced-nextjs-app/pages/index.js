import Link from 'next/link';
import Image from 'next/image';
import localImage from '../public/img/baixados.png';

function HomePage(){
    return(
        <div>
            <h1>Meu Projeto Next.js Avançado</h1>
            <Link href="/about">Sobre</Link>

            <Image 
                src={localImage}
                alt="Imagem do NextJs"
                width={500}
                height={300}
            />
        </div>
    )
}

export default HomePage;