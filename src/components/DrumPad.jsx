import React, { useState, useEffect } from 'react'
import { heater1, heater2, heater3, heater4, clap, openHH, kickNHat, kick, closedHH } from '../assets/Sound'
import { chord1, chord2, chord3, shaker, openHH2, closedHH2, punchyKick, sideStick, snare } from '../assets/Sound'

const DrumPad = ({ power, bank, volume, setDisplayText }) => {
    const [soundBank, setSoundBank] = useState({
        Q: { sound: heater1, name: 'Heater 1' },
        W: { sound: heater2, name: 'Heater 2' },
        E: { sound: heater3, name: 'Heater 3' },
        A: { sound: heater4, name: 'Heater 4' },
        S: { sound: clap, name: 'Clap' },
        D: { sound: openHH, name: 'Open HH' },
        Z: { sound: kickNHat, name: "Kick n' Hat" },
        X: { sound: kick, name: 'Kick' },
        C: { sound: closedHH, name: 'Closed HH' }
    });

    const [activeKey, setActiveKey] = useState(null);

    useEffect(() => {
        if (bank) {
            setSoundBank({
                Q: { sound: chord1, name: 'Chord 1' },
                W: { sound: chord2, name: 'Chord 2' },
                E: { sound: chord3, name: 'Chord 3' },
                A: { sound: shaker, name: 'Shaker' },
                S: { sound: openHH2, name: 'Open HH 2' },
                D: { sound: closedHH2, name: 'Closed HH 2' },
                Z: { sound: punchyKick, name: 'Punchy Kick' },
                X: { sound: sideStick, name: 'Side Stick' },
                C: { sound: snare, name: 'Snare' }
            });
        } else {
            setSoundBank({
                Q: { sound: heater1, name: 'Heater 1' },
                W: { sound: heater2, name: 'Heater 2' },
                E: { sound: heater3, name: 'Heater 3' },
                A: { sound: heater4, name: 'Heater 4' },
                S: { sound: clap, name: 'Clap' },
                D: { sound: openHH, name: 'Open HH' },
                Z: { sound: kickNHat, name: "Kick n' Hat" },
                X: { sound: kick, name: 'Kick' },
                C: { sound: closedHH, name: 'Closed HH' }
            });
        }
    }, [bank]);

    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress);
        document.addEventListener('keyup', handleKeyUp);
        return () => {
            document.removeEventListener('keydown', handleKeyPress);
            document.removeEventListener('keyup', handleKeyUp);
        };
    }, [power, soundBank, volume]);

    const playSound = (key) => {
        if (power) {
            const audio = new Audio(soundBank[key].sound);
            audio.volume = volume / 100;
            audio.play();
            setDisplayText(soundBank[key].name);
            setActiveKey(key);
            setTimeout(() => setActiveKey(null), 100);
        }
    };

    const handleKeyPress = (e) => {
        const key = e.key.toUpperCase();
        if (soundBank[key]) {
            playSound(key);
        }
    };

    const handleKeyUp = (e) => {
        setActiveKey(null);
    };

    const handleClick = (key) => {
        playSound(key);
    };

    return (
        <div className='grid grid-cols-3 gap-3 text-center'>
            {Object.keys(soundBank).map((key) => (
                <div
                    key={key}
                    className={`bg-orange-400 hover:bg-orange-600 p-6 text-2xl cursor-pointer rounded-lg w-28 shadow-black shadow-md
                                ${activeKey === key ? 'bg-orange-600' : ''}`}
                    onClick={() => handleClick(key)}
                >
                    {key}
                </div>
            ))}
        </div>
    )
}

export default DrumPad