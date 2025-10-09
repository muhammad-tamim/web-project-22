import React from 'react';
import heroImage from '../../../../assets/images/hero-photo.png'
import PrimaryButton from '../../ui/buttons/PrimaryButton/PrimaryButton';

const Hero = () => {
    return (
        <div className="bg-[#13131305] rounded-3xl px-[120px] py-20 flex gap-[86px] justify-between items-center">
            <div>
                <h1 className='font-bold text-[80px] leading-tight text-primary-content pb-12'>Books to freshen up<br />your bookshelf</h1>
                <PrimaryButton text={"View the List"}></PrimaryButton>
            </div>
            <div>
                <img className='w-[400px]' src={heroImage} alt="" />
            </div>
        </div>
    );
};

export default Hero;