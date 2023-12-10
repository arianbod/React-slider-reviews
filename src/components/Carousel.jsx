import React, { useState } from 'react';
import { shortList, list, longList } from '../data';
import { FaQuoteRight } from 'react-icons/fa';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
const Carousel = () => {
	const [peopleState, setPeopleState] = useState(shortList);
	const prevSlide = () => {
		setPeopleState();
	};
	const nextSlide = () => {
		setPeopleState();
	};
	return (
		<section className='slider-container'>
			{peopleState.map((person) => {
				const { id, image, name, title, quote } = person;
				return (
					<article
						className='slide'
						key={id}>
						<img
							src={image}
							alt={name}
							className='person-img'
						/>
						<h5 className='name'>{name}</h5>
						<p className='title'>{title}</p>
						<p className='quote'>{quote}</p>
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
