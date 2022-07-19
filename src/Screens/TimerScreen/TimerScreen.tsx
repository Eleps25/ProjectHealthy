import { View, Text, Button } from 'react-native';
import { useState } from 'react';

import styles from './TimerScreen.style';

import TimerSettings from '../../Components/TimerSettings/index';
import TimerCountdown from '../../Components/TimerCountdown/index';

const TimerScreen = () => {

    const [switchType, setSwitchType] = useState("");
    const [time, setTime] = useState("");
    const [repeat, setRepeat] = useState("");
    const [isTimerActive, setIsTimerActive] = useState(false);

    const switchTypeHandler = (type) => {
        setSwitchType(type);
    }

    const changeTimeHandler = (inputNumber) => {
        setTime(inputNumber)
    }

    const changeRepeatHandler = (inputNumber) => {
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