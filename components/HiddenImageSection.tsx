import Image from "next/image";
import { Parallax } from "react-scroll-parallax";

export default function HiddenImageSection({ hero_image }: { hero_image: string }) {
    return (
        <div className="hidden lg:block grid-in-image ml-auto">
            <Parallax speed={-10}>
                <div className="relative w-full max-w-lg">
                    <div className="absolute -top-4 -left-4 w-72 h-72 bg-bvs-purple rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob"></div>
                    <div className="absolute -bottom-8 right-4 w-72 h-72 bg-bvs-light-purple rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-2000"></div>

                    <div className="bg-white rounded-2xl shadow-xl p-4">
                        <div className="rounded-xl bg-gray-50 flex flex-col items-center overflow-hidden aspect-[5/3] w-full relative min-h-[180px] md:min-h-[300px]">
                            <Image
                                src={hero_image}
                                alt="Illustration of code editor interface"
                                width={800}
                                height={600}
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover rounded-xl"
                                // placeholder="blur"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </Parallax>
        </div>
    );
}
