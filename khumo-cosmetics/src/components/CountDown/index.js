import PropTypes from 'prop-types';

function CountDown({ timerDays, timerHours, timerMinutes, timerSeconds }) {
    return (
        <div className="timer-container">
            <div className="timer">
                <div className="clock flex text-center">
                    <div className="md:mr-[80px] mr-[25px]">
                        <h4 className='font-prata text-black md:text-[48px] text-[25px] relative after:content-[":"] after:md:text-[48px] after:text-[25px] after:absolute after:top-1/2 after:md:right-[-42.5px] after:right-[-15px] after:transform after:-translate-y-1/2'>
                            {timerDays}
                        </h4>
                        <span className="uppercase font-medium">Days</span>
                    </div>
                    <div className="md:mr-[80px] mr-[25px]">
                        <h4 className='font-prata text-black md:text-[48px] text-[25px] relative after:content-[":"] after:md:text-[48px] after:text-[25px] after:absolute after:top-1/2 after:md:right-[-42.5px] after:right-[-15px] after:transform after:-translate-y-1/2'>
                            {timerHours}
                        </h4>
                        <span className="uppercase font-medium">Hours</span>
                    </div>
                    <div className="md:mr-[80px] mr-[25px]">
                        <h4 className='font-prata text-black md:text-[48px] text-[25px] relative after:content-[":"] after:md:text-[48px] after:text-[25px] after:absolute after:top-1/2 after:md:right-[-42.5px] after:right-[-15px] after:transform after:-translate-y-1/2'>
                            {timerMinutes}
                        </h4>
                        <span className="uppercase font-medium">Mints</span>
                    </div>
                    <div>
                        <h4 className="font-prata text-black md:text-[48px] text-[25px]">
                            {timerSeconds}
                        </h4>
                        <span className="uppercase font-medium">Secs</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

CountDown.propTypes = {
    timerDays: PropTypes.number,
    timerHours: PropTypes.number,
    timerMinutes: PropTypes.number,
    timerSeconds: PropTypes.number,
};

CountDown.defaultProps = {
    timerDays: 0,
    timerHours: 0,
    timerMinutes: 0,
    timerSeconds: 0,
};

export default CountDown;
