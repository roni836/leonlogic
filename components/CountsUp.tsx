'use client'
import CountUp from 'react-countup';

const CountsUp = ({ start, end, duration, suffix, delay }: any) => {
    return <CountUp start={start} end={end} duration={duration} delay={delay} suffix={suffix} />;
};

export default CountsUp;
