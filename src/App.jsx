import React, { useState } from "react"
import DrumPad from "./components/DrumPad"
import DrumOption from "./components/DrumOption"

function App() {
  const [power, setPower] = useState(true);
  const [bank, setBank] = useState(false);
  const [volume, setVolume] = useState(50);
  const [displayText, setDisplayText] = useState('');

  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen bg-slate-500">
        <div className="text-white font-bold text-center mb-7 text-5xl">Amazing Drum Machine</div>
        <div className="w-[700px] h-[400px] bg-slate-700 border-[4px] border-yellow-400 rounded-xl flex items-center justify-around">
          <DrumPad
            power={power}
            bank={bank}
            volume={volume}
            setDisplayText={setDisplayText}
          />
          <DrumOption
            power={power}
            setPower={setPower}
            bank={bank}
            setBank={setBank}
            volume={volume}
            setVolume={setVolume}
            displayText={displayText}
            setDisplayText={setDisplayText}
          />
        </div>
      </div>
    </>
  )
}

export default App