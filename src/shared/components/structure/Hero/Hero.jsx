import React from 'react';
import heroImage from '../../../../assets/images/hero-photo.png'
import PrimaryButton from '../../ui/buttons/PrimaryButton/PrimaryButton';

const Hero = () => {
    return (
        <div className="bg-[#13131305] rounded-3xl md:px-5 lg:px-[120px] py-20 flex flex-col-reverse md:flex-row justify-between items-center gap-[86px]">
            <div>
                <h1 className='font-bold text-4xl text-center lg:text-left 2xl:text-[70px] leading-tight text-primary-content pb-12'>Books to freshen up<br />your bookshelf</h1>
                <div className='text-center lg:text-left'>
                    <PrimaryButton text={"View the List"}></PrimaryButton>
                </div>
            </div>
            <div>
                <img className='w-[200px] md:w-[300px] xl:w-[350px]' src={heroImage} alt="" />
            </div>
        </div>
    );
};

export default Hero;