import Link from "next/link";

export default function Header() {
    return (
        <header>
            <div className="bg-redros h-[100px] w-full flex justify-center items-center">

                <div id="logo" className="mr-10">
                    <img className="size-42 absolute my-[-66px] cursor-pointer" src="temporal/logo-er.svg" alt="El Rosquin" />
                </div>
                <div className="ml-58 flex justify-between items-center gap-10">
                    <nav id="nav-header" className="font-montserrat font-medium flex gap-16 w-full justify-center text-sm list-none text-white">
                        <li className="cursor-pointer font-bold">Inicio</li>
                        <li className="cursor-pointer">Nosotros</li>
                        <li className="cursor-pointer">Productos</li>
                        <li className="cursor-pointer">Contacto</li>
                    </nav>
                    <div className="">
                        <button className="group relative px-10 py-5 text-white font-bold tracking-widest text-lg transition-all duration-500 hover:scale-105 hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.6)] cursor-pointer">
                            {/* Fondo animado que respeta las esquinas invertidas (scalloped corners) con CSS masks */}
                            <div
                                className="absolute top-2 left-2 right-2 bottom-2 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
                                style={{
                                    WebkitMaskImage: 'radial-gradient(circle at 0 0, transparent 14px, black 15px), radial-gradient(circle at 100% 0, transparent 14px, black 15px), radial-gradient(circle at 0 100%, transparent 14px, black 15px), radial-gradient(circle at 100% 100%, transparent 14px, black 15px)',
                                    WebkitMaskSize: '51% 51%',
                                    WebkitMaskRepeat: 'no-repeat',
                                    WebkitMaskPosition: 'top left, top right, bottom left, bottom right',
                                    maskImage: 'radial-gradient(circle at 0 0, transparent 14px, black 15px), radial-gradient(circle at 100% 0, transparent 14px, black 15px), radial-gradient(circle at 0 100%, transparent 14px, black 15px), radial-gradient(circle at 100% 100%, transparent 14px, black 15px)',
                                    maskSize: '51% 51%',
                                    maskRepeat: 'no-repeat',
                                    maskPosition: 'top left, top right, bottom left, bottom right'
                                }}
                            ></div>

                            {/* Líneas rectas de 3px, iniciando a 23px para empalmar perfecto */}
                            <div className="absolute top-2 left-[23px] right-[23px] h-[3px] bg-white z-10"></div>
                            <div className="absolute bottom-2 left-[23px] right-[23px] h-[3px] bg-white z-10"></div>
                            <div className="absolute left-2 top-[23px] bottom-[23px] w-[3px] bg-white z-10"></div>
                            <div className="absolute right-2 top-[23px] bottom-[23px] w-[3px] bg-white z-10"></div>

                            {/* Esquinas reducidas a 15px con grosor de 3px */}
                            <div className="absolute top-2 left-2 w-[15px] h-[15px] border-b-[3px] border-r-[3px] border-white rounded-br-full z-10"></div>
                            <div className="absolute top-2 right-2 w-[15px] h-[15px] border-b-[3px] border-l-[3px] border-white rounded-bl-full z-10"></div>
                            <div className="absolute bottom-2 left-2 w-[15px] h-[15px] border-t-[3px] border-r-[3px] border-white rounded-tr-full z-10"></div>
                            <div className="absolute bottom-2 right-2 w-[15px] h-[15px] border-t-[3px] border-l-[3px] border-white rounded-tl-full z-10"></div>

                            {/* Texto */}
                            <span className="relative text-nowrap z-10 group-hover:text-redros transition-colors duration-500">DESCARGAR CATÁLOGO</span>
                        </button>
                    </div>
                </div>


            </div>
        </header>
    )
}