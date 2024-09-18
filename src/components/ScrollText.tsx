/*
import  { useEffect, useState } from 'react';
import './ScrollText.css';

export const ScrollText = () => {
    const [backgroundPosition, setBackgroundPosition] = useState('0%');

    useEffect(() => {
        const handleScroll = () => {
            const t = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
            setBackgroundPosition(`${-t * 100}%`);
        };

        window.addEventListener('scroll', handleScroll);

        // Очистка обработчика при размонтировании компонента
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="block">
      <span style={{ backgroundPosition }}> Стиль обновляется при прокрутке
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, perferendis voluptates iste
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, perferendis voluptates iste
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, perferendis voluptates iste
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, perferendis voluptates iste
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, perferendis voluptates iste
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, perferendis voluptates iste
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, perferendis voluptates iste
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, perferendis voluptates iste
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, perferendis voluptates iste
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, perferendis voluptates iste
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, perferendis voluptates iste
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, perferendis voluptates iste
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, perferendis voluptates iste
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, perferendis voluptates iste
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, perferendis voluptates iste
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, perferendis voluptates iste
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, perferendis voluptates iste
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, perferendis voluptates iste
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, perferendis voluptates iste


      </span>
        </div>
    );
};*/
