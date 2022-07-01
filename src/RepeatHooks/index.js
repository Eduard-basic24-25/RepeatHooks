import style from './index.module.css'

import Button from './Button'


import { useEffect, useState } from 'react';
import {theme, LangContext} from './useContext'


function RepeatHooks() {
	const [inputText, setInputText] = useState('')
	const [inputSelect, setInputSelect] = useState('light');
	const [inputCheckbox, setInputCheckbox] = useState(false);
	



	const [showInformation, setShowInformation] = useState(false);
	let result = `${inputText}, ${inputSelect}, ${inputCheckbox}`
	function form(e) {
		e.preventDefault()
		setShowInformation(true);
	
	}
	// useState

	// 1 возьмите под контроль react этои jsx элементы (input text, select, input checkbox) c помощью useState
	// 2 вместо отправки формы по submit отобразите в элементе c классом show значения элементов формы
	
	
	useEffect(
		function title() {
		  document.title = `${inputText}`;
		}, [inputText]
	  )
	return (

		<>
			<form 
				onSubmit={(e) => form(e)}>

				<label>input</label>
				<input 
					type="text"
					value={inputText}
					onChange={(e) => setInputText(e.target.value)}
				/>

				<LangContext.Provider value={theme[inputSelect]}> {/* ????? */}
					<select 
						value={inputSelect}
						onChange={(e) => setInputSelect(e.target.value)}>
						<option value="dark">dark</option>
						<option value="light">light</option>
					</select>

					<input 
						type='checkbox'  
						checked={inputCheckbox}
						onChange={() => setInputCheckbox(!inputCheckbox)}
					/>
					<Button/>
				</LangContext.Provider>	
			</form >


			<div className='increment'>{  }</div>


			<div className={`${style.show} ${showInformation ? style.shown : ''}`}>
				{
			`${result}`
				}
			</div>

		</>

	)


	// useEffect
	// 1 при изменении text input отобразите его значение в document.title браузера



	// useContext
	// создайте файл с цветовой темой 
	// theme={dark:{color:white,background:black},light:{color:black,background:gray}}
	// вынесите button в отдельный компонент и используйте контекст, чтобы менять её style
	// смена value у Context.Provider должна происходить в зависимости от выбора темы в select



	// useRef
	// при клике на label поместите фокус в text input, не используя htmlFor



	// useMemo
	// в элемент с классом increment отобразите количество изменений(onChange) 
	// мемоизируйте функцию расчета изменений, исключив из неё события изменения чекбокса



	// custom hooks
	// придумайте или найдите в сети возможности улучшить ваш код с помощью кастомных хуков

}





export default RepeatHooks;