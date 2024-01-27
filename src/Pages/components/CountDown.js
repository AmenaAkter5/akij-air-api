import React, { useEffect, useRef, useState } from 'react';

const formatTime = (time) => {
    let minutes = Math.floor(time / 60);
    let seconds = Math.floor(time - minutes * 60)

    if (minutes <= 10) minutes = '0' + minutes
    if (seconds <= 10) seconds = '0' + seconds
    return minutes + ':' + seconds
}


const CountDown = ({ seconds }) => {

    const [countDown, setCoundown] = useState(seconds);
    const timerId = useRef();

    useEffect(() => {
        timerId.current = setInterval(() => {
            setCoundown(prev => prev - 1)
        }, 1000)
        return () => clearInterval(timerId.current);
    }, [])


    useEffect(() => {
        if (countDown <= 0) {
            clearInterval(timerId.current)
        }
    }, [countDown])

    return (
        <p className='text-xl font-medium text-[#009D9A]'> {formatTime(countDown)}</p>
    )
}

export default CountDown;