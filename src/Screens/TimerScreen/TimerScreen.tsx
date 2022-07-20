import { View, Text, Button } from 'react-native';
import { FC, useState } from 'react';

import styles from './TimerScreen.style';

import TimerSettings from '../../Components/TimerSettings/index';
import TimerCountdown from '../../Components/TimerCountdown/index';

interface TimerCountdown {

}

const TimerScreen = () => {

    const [switchType, setSwitchType] = useState("");
    const [time, setTime] = useState("");
    const [repeat, setRepeat] = useState("");
    const [isTimerActive, setIsTimerActive] = useState(false);

    const switchTypeHandler = (type: string) => {
        setSwitchType(type);
    }

    const changeTimeHandler = (inputNumber: string) => {
        setTime(inputNumber)
    }

    const changeRepeatHandler = (inputNumber: string) => {
        setRepeat(inputNumber)
    }

    return (
        <>
            {isTimerActive
                ? <TimerCountdown
                    switchType={switchType}
                    time={time}
                    repeatNum={repeat}
                    changeRepeatHandler={changeRepeatHandler}
                />
                : <TimerSettings
                    switchTypeHandler={switchTypeHandler}
                    changeTime={changeTimeHandler}
                    changeRepeat={changeRepeatHandler}
                    setIsTimerActive={setIsTimerActive}
                    switchType={switchType}
                    time={time}
                    repeat={repeat}
                />
            }
        </>
    )
}

export default TimerScreen;