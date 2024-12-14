import Image from 'next/image'
import React from 'react'

const FourImageCeramics = () => {
    return (
        <>
            <section>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                    {['chair', 'vase', 'silky', 'lamp'].map((item, idx) => (
                        <div key={idx} className="w-full">
                            <div className="relative w-full pb-[125%]"> {/* 3:4 aspect ratio (height > width) */}
                                <Image
                                    src={`/images/${item}.jpeg`}
                                    height={700}
                                    width={700}
                                    alt={item}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105 md:hover:scale-110"
                                />
                            </div>
                            <div className="mt-4 text-[#2A254B]">
                                <p className="py-2">{item === 'chair' ? 'The Dendy Chair' : `The ${item}`}</p>
                                <p>${item === 'chair' ? 250 : item === 'vase' ? 155 : 125}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View Collection Button */}
                <div className="my-10 flex justify-center items-center">
                    <button className="bg-[#F9F9F9] py-4 px-6 rounded-[5px] text-[#2A254B]">
                        View collection
                    </button>
                </div>


            </section>
        </>
    )
}

export default FourImageCeramics;