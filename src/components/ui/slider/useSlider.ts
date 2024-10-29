import { useState } from 'react'

import { TDirection } from './slider.interface'

const defaultState = {
	currentIdx: 0,
	slideIn: true
}

export const useSlider = (length: number) => {
	const [currentIdx, setCurrentIdx] = useState<number>(defaultState.currentIdx)
	const [slideIn, setSlideIn] = useState<boolean>(defaultState.slideIn)

	const isExistsNext: boolean = currentIdx + 1 < length

	const isExistsPrev: boolean = currentIdx ? currentIdx - 1 < length : false

	const handleArrowClick = (direction: TDirection) => {
		const newIndex = direction === 'next' ? currentIdx + 1 : currentIdx - 1
		setSlideIn(false)

		setTimeout(() => {
			setCurrentIdx(newIndex)
			setSlideIn(true)
		}, 350)
	}

	return {
		slideIn,
		index: currentIdx,
		isNext: isExistsNext,
		isPrev: isExistsPrev,
		handleClick: handleArrowClick
	}
}
