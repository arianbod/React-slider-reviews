import React, { useEffect, useState } from 'react';
import { shortList, list, longList } from '../data';
import { FaQuoteRight } from 'react-icons/fa';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
const Carousel = () => {
	const [peopleState, setPeopleState] = useState(longList);
	const [activeState, setActiveState] = useState(0);
	const prevSlide = () => {
		setActiveState(activeState > 0 ? activeState - 1 : 0);
	};
	const nextSlide = () => {
		// setActiveState(activeState < peopleState.length - 1 ? activeState + 1 : 0);
		setActiveState((oldValue) => {
			console.log(oldValue);
			const result = (oldValue + 1) % peopleState.length;
			return result;
		});
	};
	useEffect(() => {
		let sliderId = setInterval(() => {
			nextSlide();
		}, 2000);
		return () => {
			clearInterval(sliderId);
		};
	}, [activeState]);

	return (
		<section className='slider-container'>
			{peopleState.map((person, personIndex) => {
				const { id, image, name, title, quote } = person;
				return (
					<article
						className='slide'
						style={{
							transform: `translateX(${100 * (personIndex - activeState)}%)`,
							opacity: personIndex === activeState ? 1 : 0,
							visibility: personIndex === activeState ? 'visible' : 'hidden',
						}}
						key={id}>
						<img
							src={image}
							alt={name}
							className='person-img'
						/>
						<h5 className='name'>{name}</h5>
						<p className='title'>{title}</p>
						<p className='text'>{quote}</p>
						<FaQuoteRight className='icon' />
					</article>
				);
			})}
			<button
				type='button'
				className='prev'
				onClick={prevSlide}>
				<FiChevronLeft />
			</button>
			<button
				type='button'
				className='next'
				onClick={nextSlide}>
				<FiChevronRight />
			</button>
		</section>
	);
};

export default Carousel;
