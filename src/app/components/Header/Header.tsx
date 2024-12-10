import "@/app/components/Header/Header.css"
import VideoButton from "@/app/components/VideoButton/VideoButton";
import Image from 'next/image';


export default function Header() {
    return (
        <header className="flex flex-col xl:flex-row justify-between items-stretch h-[640px] xl:h-[400px] overflow-hidden">
            <div className="xl:flex-1 h-full text-center header-info-section p-8 flex flex-col justify-between rounded-t-2xl xl:rounded-tr-none xl:rounded-l-2xl relative -z-20">
                <p className="font-bold text-black">Passionné par le développement mobile et web, je développe des applications performantes et intuitives, aussi bien dans un cadre professionnel que personnel.</p>
                <div className="w-full h-[70px]"></div>
                <div className="self-start text-left header-info-text">
                    <p className="font-bold text-black">Jayson<br />Mourier</p>
                    <p className="font-medium text-gray-500">Ingénieur<br />Informatique</p>
                </div>
                <div className="relative">
                    <Image
                        src="/assets/images/person.png"
                        alt="Image d'une personne"
                        width={320} 
                        height={400}
                        className="absolute -z-10 -bottom-[190px] -right-[50px] md:right-[30px] lg:right-[100px] xl:right-[10px]"
                    />
                </div>
            </div>
            <div className="bg-red-100 xl:flex-1 h-full flex items-center justify-center header-thumbnail rounded-b-2xl xl:rounded-b-none xl:rounded-r-2xl p-8">
                <VideoButton />
            </div>
        </header>
    );
}