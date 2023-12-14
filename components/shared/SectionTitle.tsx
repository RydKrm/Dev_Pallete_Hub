import { Parallax } from "react-parallax";

const SectionTitle = (props: { img: string; title: string }) => {
    return (
        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={props.img}
            bgImageAlt="the dog"
            strength={-200}
        ><div
            className="bg-cover bg-center h-[250px] md:h-[300px] lg:h-[450px] items-center mb-10 hidden md:flex"
        >
                <div className="text-center text-black w-3/4 lg:w-3/6 lg:h-3/6 mx-auto my-auto flex justify-center items-center" style={{ backgroundColor: 'rgba(21, 21, 21, 0.6)' }}>
                    <div className="pt-5 pb-5">
                        <h1 className="heading_1 text-[40px] uppercase text-white px-5">{props.title}</h1>
                    </div>
                </div>
            </div>
        </Parallax>
    );
};

export default SectionTitle;