'use client'

import { useState } from 'react';

export default function Sizes() {
    // Type the selectedSizes state as an array of strings
    const [selectedSizes, setSelectedSizes] = useState<string[]>([]);

    // Type the size parameter as a string
    const handleSizeClick = (size: string) => {
        if (selectedSizes.includes(size)) {
            // If size is already selected, remove it from the array
            setSelectedSizes(selectedSizes.filter(item => item !== size));
        } else {
            // If size is not selected, add it to the array
            setSelectedSizes([...selectedSizes, size]);
        }
    };

    return (
        <div>
            <h1 className="text-[20px] font-bold mb-0 md:mb-3 pt-5">Size</h1>
            <div className="flex flex-wrap gap-3 mt-2 pb-5 border-b hover:cursor-pointer">
                {['XX Small', 'X Small', 'Small', 'Medium', 'Large', 'X-Large', 'XX-Large', '3X-Large', '4X-Large'].map((size, index) => (
                    <div
                        key={index}
                        className={`px-[20px] py-[10px] rounded-[62px] text-[16px] ${
                            selectedSizes.includes(size)
                                ? 'bg-black text-white'
                                : 'bg-[#F0F0F0] text-black/60'
                        }`}
                        onClick={() => handleSizeClick(size)}
                    >
                        {size}
                    </div>
                ))}
            </div>
        </div>
    );
}
