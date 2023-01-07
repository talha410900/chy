import HeroImage from 'assets/section-2.jpg'
import Image from 'next/image'
export default function Section2() {
    return (<>
        <div className="relative">
            <Image src={HeroImage} width="100%" alt='main-hero-image' height="100%" layout="responsive" objectFit="contain"
            />

        </div>
    </>)
}