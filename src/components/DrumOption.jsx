import React from 'react'

const DrumOption = ({ power, setPower, bank, setBank, volume, setVolume, displayText, setDisplayText }) => {
    const handlePowerToggle = () => {
        setPower(prev => !prev);
    };

    const handleBankToggle = () => {
        setBank(prev => !prev);
        setDisplayText(`${!bank ? 'Heater Kit' : 'Smooth Piano Kit'}`)
    };

    const handleVolumeChange = (e) => {
        const newVolume = e.target.value;
        setVolume(newVolume);
        setDisplayText(`Volume: ${newVolume}%`);
    };

    return (
        <div className='flex flex-col justify-center items-center text-2xl transition-all duration-500'>
            <div className='text-white font-bold'>power</div>
            <div className='flex items-center'>
                <div className='text-white mr-3 font-bold'>off</div>
                <div onClick={handlePowerToggle} className='w-[65px] h-[35px] bg-slate-300 rounded-full mt-2 relative cursor-pointer'>
                    <div className={`w-[35px] h-[35px] rounded-full bg-blue-600 absolute ${!power ? 'left-0' : 'right-0'} cursor-pointer`}></div>
                </div>
                <div className='text-white ml-3 font-bold'>on</div>
            </div>

            <div className='w-[270px] h-[40px] bg-slate-400 text-center mt-4 flex items-center justify-center'>
                {displayText}
            </div>

            <div className='w-[220px] mt-9 relative'>
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={volume}
                    onChange={handleVolumeChange}
                    className="w-full"
                />
            </div>

            <div className='text-white font-bold mt-5'>bank</div>
            <div onClick={handleBankToggle} className='w-[65px] h-[35px] bg-slate-300 rounded-full mt-2 relative cursor-pointer'>
                <div className={`w-[35px] h-[35px] rounded-full bg-blue-600 absolute ${!bank ? 'left-0' : 'right-0'} `}></div>
            </div>
        </div>
    )
}

export default DrumOption