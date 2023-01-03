import HeroImage from 'assets/section-4.png'
import Image from 'next/image'
export default function Section6() {
    return (<>
        <div className="relative">
            <Image src={HeroImage} width="100%" alt='main-hero-image' height="100%" layout="responsive" objectFit="contain"
            />

        </div>

    </>)
}