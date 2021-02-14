window.addEventListener('load', function() {

	// comp
	(function(){
	  var text = document.getElementById("id_comp"),
	      testText;
	      text.onkeyup          =  function testKey() {
	         var testText       =  text.value;
	          if(testText*1 + 0  !=  text.value || (testText*1 + 0) > 500 ){
	            text.value      = testText.substring(0, testText.length - 1) 
	            
	          }
	      }
	})();

	// serv
	(function(){
	  var text = document.getElementById("id_serv"),
	      testText;
	      text.onkeyup          =  function testKey() {
	         var testText       =  text.value;
	          if(testText*1 + 0  !=  text.value || (testText*1 + 0) > 20 ){
	            text.value      = testText.substring(0, testText.length - 1) 
	            
	          }
	      }
	})();

	// office
	(function(){
	  var text = document.getElementById("id_offic"),
	      testText;
	      text.onkeyup          =  function testKey() {
	         var testText       =  text.value;
	          if(testText*1 + 0  !=  text.value || (testText*1 + 0) > 10 ){
	            text.value      = testText.substring(0, testText.length - 1) 
	            
	          }
	      }
	})();

	// budget
	(function(){
	  var text = document.getElementById("id_budget"),
	      testText;
	      text.onkeyup          =  function testKey() {
	         var testText       =  text.value;
	          if(testText*1 + 0  !=  text.value || (testText*1 + 0) > 50000 ){
	            text.value      = testText.substring(0, testText.length - 1) 
	            
	          }
	      }
	})();

});

window.addEventListener('load', function() {

/* --- Exchange of values --- */

	// Steps
	let step_1 = document.getElementById('step_1');
	let step_2 = document.getElementById('step_2');
	let step_3 = document.getElementById('step_3');
	let step_4 = document.getElementById('step_4');

	// locationRadios
	let locationButtons = document.getElementsByClassName('qz_city');

	// Buttons plus/minus arrays
	let buttonsPlusMinus = document.getElementsByClassName('qz_buttons'); 

	// Blade runners array
	let equipmentRunners = document.getElementsByClassName('qz_blade_runner');

	// Inputs in Step two
	let equipmentInputs = document.getElementsByClassName('qz_input_equipment');

	// Contacts buttons
	let contactButtons = document.getElementsByClassName('qz_contact');

	// Переменные для перехода на следующий/предыдущий шаг
	let toNextStep;
	let toPreviousStep;

	// Переменна допуска к след. шагу
	let stepIsDone = false;

	// Кнопки для перехода по шагам
	let nextButton = document.getElementsByClassName('qz_button_right')[0];
	let prevButton = document.getElementsByClassName('qz_button_left')[0];

	// Заголовок Шага
	let leftTitle = document.getElementsByClassName('qz_left_title')[0];
	
	// Комментарии Евгения
	let speachMobile = document.getElementsByClassName('qz_director_speech')[0];
	let speach = document.getElementsByClassName('qz_director_speech')[1];

	// Полоса прогресса
	let progress = document.getElementsByClassName('qz_point')[0];

	// Процент готовности
	let ready = document.getElementsByClassName('qz_ready_persent')[0];

	checkCurrenStep();
	toNextOrPrevious();

	// ***************************
	// *** ДАННЫЕ ДЛЯ ОТПРАВКИ ***
	// ***************************
	let data_city, data_computers, data_servers, data_offices, data_budget, data_contacts = {};


	// ************************************************
	// *************  LOCATION (STEP 1)  **************
	// ************************************************
	(function(radioButtonArray) {

		radioButtonArray = document.getElementsByClassName('qz_radio_city');

		for(let i = 0; i < locationButtons.length; i++) {

			locationButtons[i].addEventListener('click', function(e, clickedButton) {

				for(let j = 0; j < radioButtonArray.length; j++) {
					radioButtonArray[j].classList.remove('qz_chocen');
				}
				
				clickedButton = e.target.getElementsByClassName('qz_radio_city')[0] || e.target;
				clickedButton.classList.add('qz_chocen');


				// СЧЁТЧИК ПЕРЕХОДОВ
				ym(57444442, 'reachGoal', locationButtons[i].id);

			});
		}

	})();
	

	// ************************************************
	// **********  EQUIPMENTS and BUDGET (STEPS 2 & 3) 
	// ************************************************


	// ******************
	// Plus/Minus buttons
	// ******************
	(function() {

	 	for(let i = 0; i < buttonsPlusMinus.length; i++) {

	 		buttonsPlusMinus[i].addEventListener('click', function(e, buttonSimbol, buttonInput, inputValue, inputMin, 
	 															   inputMax, bladeRunnerType, bladeRunner, inputStep) {

	 			buttonSimbol = e.target.textContent;
	 			buttonParent = e.target.parentElement;
	 			buttonInput = buttonParent.getElementsByTagName('input')[0];
	 			inputMin = +( buttonParent.getElementsByTagName('input')[0].getAttribute('min') );
	 			inputMax = +( buttonParent.getElementsByTagName('input')[0].getAttribute('max') );
	 			inputStep = +( buttonParent.getElementsByTagName('input')[0].getAttribute('step') );
	 			
	 			if (buttonSimbol === '+' && buttonInput.value < inputMax) buttonInput.value = +buttonInput.value + inputStep;
	 			if (buttonSimbol === '-' && buttonInput.value > inputMin) buttonInput.value -= inputStep;

	 			bladeRunnerType = (buttonInput.id).replace('id_', ''); 
	 			bladeRunner = document.querySelector('input[data-type="' + bladeRunnerType + '"]');
	 			bladeRunner.value = buttonInput.value;

	 				// СЧЁТЧИК ПЕРЕХОДОВ
					ym(57444442, 'reachGoal', buttonInput.id);

	 		});
	 	}
	})();

	// **********************
	// Blade runners observer
	// **********************
	(function() {

		for(let j = 0; j < equipmentRunners.length; j++) {

			equipmentRunners[j].addEventListener('input', function(e, typeInput, numberInput, inputValue) {

				inputValue = e.target.value;
				typeInput = e.target.dataset.type;
				numberInput = document.getElementById('id_' + typeInput);
				numberInput.value = inputValue;

					// СЧЁТЧИК ПЕРЕХОДОВ
					ym(57444442, 'reachGoal', e.target.id);
			});
		}
	})();

	// ***************************
	// Input of equipment observer
	// ***************************
	(function() {

		for(let i = 0; i < equipmentInputs.length; i++) {

			equipmentInputs[i].addEventListener('input', function(e, inputValue, inputId, runnerDataType, bladeRunnerValue) {

				inputValue = e.target.value;
				inputId = e.target.id;
				runnerDataType = inputId.replace('id_', '');
				bladeRunnerValue = document.querySelector('input[data-type="' + runnerDataType + '"]');
				bladeRunnerValue.value = inputValue;	
				
					// СЧЁТЧИК ПЕРЕХОДОВ
					ym(57444442, 'reachGoal', inputId);
			});
		}
	})();




	// ************************************************
	// *********  CONTACTS ACTIVATE (STEP 4)  *********
	// ************************************************
	(function() {
		
		for (let i = 0, inputContent = []; i < contactButtons.length; i++) {

			inputContent[i] = document.getElementsByClassName('qz_contact_name')[i].textContent;

			contactButtons[i].addEventListener('click', function(e, offsetParent, contactInput, contactName, contactIcon,
													             focusTimeout, formOnTimeout, contactNameOpacityOn, iconCheck,
													             contactNameIndex = i, inpCount = 0) {
				
				// обнулим счётчик символов
				//inpCount = 0;

				// родительский блок 
				offsetParent = e.target.offsetParent;												
				offsetParent.classList.remove('qz_contact_hover');
				offsetParent.style.pointerEvents = 'none';

					// СЧЁТЧИК ПЕРЕХОДОВ
					ym(57444442, 'reachGoal', offsetParent.id);

				// тэг <div> с названием поля
				contactName = offsetParent.getElementsByClassName('qz_contact_name')[0];				
				contactName.style.opacity = 0;

				// выезжающий инпут
				contactInput = offsetParent.getElementsByTagName('input')[0];						
				contactInput.style.display = 'inline';

				// иконки
				contactIcon = offsetParent.getElementsByTagName('i')[0];	
				iconCheck = offsetParent.getElementsByTagName('i')[1];

				formOnTimeout = setTimeout(function() {
					contactInput.parentElement.classList.add('qz_contect_form_block_on');
					clearTimeout(formOnTimeout);
				}, 300);

				focusTimeout = setTimeout(function() {
					contactInput.focus();
					clearTimeout(focusTimeout);
				}, 600);
				

				
				// Добавим проверку на количество введённых символов,
				// и после ввода 9-го символа завершим ввод
				// contactInput.addEventListener('keydown', function(e, inputCoutTimeout) {

				// 	if ( contactInput.id !== 'qz_email' && (e.code).indexOf('Digit') != -1 ) {
				// 		inpCount += 1;
				// 		if (inpCount >= 9) {
				// 			inputCoutTimeout = setTimeout(function() {

				// 				contactInput.blur();

				// 				// выведем вместо названия введённые данные
								

				// 				// обнулим счётчик символов
				// 				inpCount = 0;

				// 				clearTimeout(inputCoutTimeout);
				// 			}, 500);
				// 		} else {
				// 			contactName.innerHTML = inputContent[contactNameIndex];
				// 		}
				// 	}
				// });
								
				contactInput.addEventListener('blur', function(contactNameOpacityOn, iconCheckTimeout, iconMessageTimeout) {

					contactName.innerHTML = inputContent[contactNameIndex];
					// обнулим счётчик символов
					//inpCount = 0;

					contactInput.parentElement.classList.remove('qz_contect_form_block_on');

					contactNameOpacityOn = setTimeout(function () {

						contactName.style.opacity = 1;

						offsetParent.classList.add('qz_contact_hover');
						contactInput.style.display = 'none';
						offsetParent.style.pointerEvents = 'auto';

						if (contactInput.value !== "") {

							contactName.innerHTML = contactInput.value;

							contactIcon.style.opacity = 0;

							iconCheckTimeout = setTimeout(function() {
								iconCheck.style.opacity = 1;

								weNeedJustOneContact();

								clearTimeout(iconCheckTimeout);
							}, 200);
						}  else {
							contactName.innerHTML = inputContent[contactNameIndex];

							iconCheck.style.opacity = 0;

							iconMessageTimeout = setTimeout(function() {
								contactIcon.style.opacity = 1;

								weNeedJustOneContact();

								clearTimeout(iconMessageTimeout);
							}, 200);
						}

						clearTimeout(contactNameOpacityOn);
					}, 100);
				});

			});
		}
	})();


	// *****************************************************
	// **************** WALKING IN STEPS *******************
	// *****************************************************

	function toTheNextStep(visibleId, visibleStepClass, nextStepClass, visibleStep, nextStepTimeout) {	


		// СЧЁТЧИК ПЕРЕХОДОВ
		ym(57444442, 'reachGoal', 'id_next_step');

		visibleStep = document.getElementsByClassName('qz_visible_step')[0];

		// Уберём текущий шаг влево
		visibleId = (visibleStep.id).replace('step_', '');
		visibleStepClass = document.getElementsByClassName('step_' + visibleId)[0];
		visibleStepClass.classList.add('toLeft');
		visibleStepClass.classList.remove('qz_visible_step');

		nextStepClass = document.getElementsByClassName('step_' + (+visibleId + 1) )[0];

		// Покажем следующий шаг
		nextStepTimeout = setTimeout(function() {
			
			nextStepClass.classList.add('qz_visible_step');

			// Проверим номер шага
			checkCurrenStep();
			toNextOrPrevious();

			clearTimeout(nextStepTimeout);
		}, 400);
	}

	function toThePrevStep(visibleId, visibleStepClass, nextStepClass, visibleStep, prevStepTimeout) {

		// СЧЁТЧИК ПЕРЕХОДОВ
		ym(57444442, 'reachGoal', 'id_back_step');

		changeOnButtonNext();

		visibleStep = document.getElementsByClassName('qz_visible_step')[0];

		// Уберём текущий шаг вправо
		visibleId = (visibleStep.id).replace('step_', '');
		visibleStepClass = document.getElementsByClassName('step_' + visibleId)[0];
		visibleStepClass.classList.add('toRight');
		visibleStepClass.classList.remove('qz_visible_step');
		
		nextStepClass = document.getElementsByClassName('step_' + (+visibleId - 1) )[0];

		// Покажем следующий шаг
		prevStepTimeout = setTimeout(function() {

			nextStepClass.classList.remove('toLeft');
			nextStepClass.classList.add('qz_visible_step');
			visibleStepClass.classList.remove('toRight');

			// Проверим номер шага
			checkCurrenStep();
			toNextOrPrevious();

			clearTimeout(prevStepTimeout);
		}, 400);
	}


	// **********
	// Start Page
	// **********
	(function() {

		let sideWrapper = document.getElementsByClassName('qz_start_wrapper')[0];
		let leftSide = document.getElementsByClassName('qz_start_first_wrapper')[0];
		let rightSide = document.getElementsByClassName('qz_start_second_wrapper')[0];
		let startButton = document.getElementsByClassName('qz_start_second_button')[0];

		document.getElementsByClassName('qz_backgorund')[0].style.display = 'none';

		startButton.addEventListener('click', function(startPageTimeout) {


				// СЧЁТЧИК ПЕРЕХОДОВ
				ym(57444442, 'reachGoal', startButton.id);


			leftSide.style.left = '-60%';

			if(document.documentElement.clientWidth <= 991) leftSide.style.opacity = 0;

			rightSide.style.right = '-40%';

			if(document.documentElement.clientWidth <= 991) rightSide.style.opacity = 0;

			document.getElementsByTagName('html')[0].style.overflow = 'auto';
			document.getElementsByTagName('body')[0].style.overflow = 'auto';
			
			document.getElementsByClassName('qz_backgorund')[0].style.minHeight = '568px';


			startPageTimeout = setTimeout(function() {

				// Step One
				document.getElementsByClassName('qz_backgorund')[0].style.display = 'flex';
				sideWrapper.style.display = 'none';

				if (document.documentElement.clientWidth <= 991) {

					document.getElementsByClassName('qz_backgorund')[0].style.minHeight = '680px';
				} else {
					document.getElementsByClassName('qz_backgorund')[0].style.minHeight = '780px';
				}

				clearTimeout(startPageTimeout);
			}, 500);

		});

	})();

	// ********
	// STEP ONE
	// ********
	function letsCheckStepOne(checkBoxesArray, isCheck = false) {

		checkBoxesArray = document.getElementsByClassName('qz_radio_city');

		for(let i = 0; i < checkBoxesArray.length; i++) {

			isCheck = checkBoxesArray[i].classList.contains('qz_chocen');
		}

		if(isCheck) return true;
	}

	// transitionFromTheFirstStep
	(function(checkBoxesLineArray) {

		checkBoxesLineArray = document.getElementsByClassName('qz_city');

		for(let i = 0; i < checkBoxesLineArray.length; i++) {
			checkBoxesLineArray[i].addEventListener('click', function(fromFirstStepTimeout) {
				stepIsDone = true;

				data_city = checkBoxesLineArray[i].textContent;

				fromFirstStepTimeout = setTimeout(function() {

					toTheNextStep();

					clearTimeout(fromFirstStepTimeout);
				}, 200);
			});
		}
	})();

	// *********
	// STEP FOUR
	// *********
	function weNeedJustOneContact(iCheck, iOpacity) {
		iCheck = document.getElementsByClassName('fa-check');

		for(let i = 0; i < iCheck.length; i++) {

			iOpacity = iCheck[i].style.opacity;
			
			if(+iOpacity === 1) {	// Завершим текущий шаг
				stepIsDone = true;
				toNextOrPrevious();

				changeOnButtonEnd();

				progress.style.borderRadius = '50px';
				progress.style.width = 'calc(100%)';

				ready.textContent = 100;

				return;
			} else {				// Откатим текущий шаг
				stepIsDone = false;
				toNextOrPrevious();

				changeOnButtonNext();

				ready.textContent = 75;

				progress.style.borderRadius = '50px 0 0 50px';
				progress.style.width = 'calc(100% / 1.333 - 6px)';

			}
		}
	}


	// ************************************
	// ****** AUXILIARY FUNCTIONS *********
	// ************************************

	// Смена id кнопки "Завершить" для установки счётчика кнопки завершения квиза
	function letsPassTheCounter() {
		// СЧЁТЧИК ПЕРЕХОДОВ
		ym(57444442, 'reachGoal', 'id_toComplete');
	}
	function changeOnButtonEnd() {

		let buttonNext;
		buttonNext = document.getElementsByClassName('qz_done')[0]; 

		buttonNext.setAttribute('id', 'id_toComplete');

		buttonNext.addEventListener('click', letsPassTheCounter);
	}
	function changeOnButtonNext() {

		let buttonNext;
		buttonNext = document.getElementsByClassName('qz_done')[0]; 

		buttonNext.setAttribute('id', 'id_done');

		buttonNext.removeEventListener('click', letsPassTheCounter);
	}
	// END Смена

	// Проверим номер текущего шага
	function checkCurrenStep(currentStep, currentStepNumber, completedTimeout) {

		// Текущий шаг
		currentStep = document.getElementsByClassName('qz_visible_step')[0];
		currentStepNumber = (currentStep.id).replace('step_', '');

		switch (+currentStepNumber) {

			case 1:

				if (document.documentElement.clientWidth <= 818) {

					document.getElementsByClassName('qz_backgorund')[0].style.minHeight = '680px';
				} else {

					//document.getElementsByClassName('qz_backgorund')[0].style.minHeight = '780px';
				}

				toPreviousStep = false;
				toNextStep = letsCheckStepOne();
				toNextStep = true;

				speach.textContent = 'Мы работаем по всей территории Беларуси, и готовы приехать в любую точку страны!';
				speachMobile.textContent = 'Мы работаем по всей территории Беларуси, и готовы приехать в любую точку страны!';

				progress.style.borderRadius = '50px';
				progress.style.width = '10px';

				ready.textContent = 0;

				leftTitle.textContent = 'Выберите ваше местоположение: ';
				break;
			case 2:

				document.getElementsByClassName('qz_contact_wrapper')[0].style.display = 'none';
				document.getElementsByClassName('qz_thanks')[0].style.display = 'none';

				if (document.documentElement.clientWidth <= 818) {

					document.getElementsByClassName('qz_backgorund')[0].style.minHeight = '735px';
				}

				toPreviousStep = true;
				stepIsDone = true;
				toNextStep = true;

				progress.style.borderRadius = '50px 0 0 50px';
				progress.style.width = 'calc(100% / 4 - 2px)';

				ready.textContent = 25;

				speach.textContent = 'Укажите количество Вашего оборудования и  офисов. Так мы сможем оценить сложность вызова.';
				speachMobile.textContent = 'Укажите количество Вашего оборудования и  офисов. Так мы сможем оценить сложность вызова.';

				leftTitle.textContent = 'Сколько у Вас...';
				break;
			case 3:

				document.getElementsByClassName('qz_contact_wrapper')[0].style.display = 'none';
				document.getElementsByClassName('qz_thanks')[0].style.display = 'none';

				nextButton.innerHTML = '<span>Далее</span>&rarr;';
				nextButton.classList.remove('qz_complete_button');

				if (document.documentElement.clientWidth <= 818) {

					document.getElementsByClassName('qz_backgorund')[0].style.minHeight = '640px';
				}

				toPreviousStep = true;
				stepIsDone = true;
				toNextStep = true;

				progress.style.borderRadius = '50px 0 0 50px';
				progress.style.width = 'calc(100% / 2 - 4px)';

				ready.textContent = 50;

				speach.textContent = 'Укажите примерный бюджет на системное администрирование Вашей организации.';
				speachMobile.textContent = 'Укажите примерный бюджет на системное администрирование Вашей организации.';

				leftTitle.textContent = 'Какую сумму вы готовы тратить в месяц на эффективную работу Вашей сети?';
				break;
			case 4:

				document.getElementsByClassName('qz_contact_wrapper')[0].style.display = 'flex';

				nextButton.textContent = 'Завершить';
				nextButton.classList.add('qz_complete_button');
				

				if (document.documentElement.clientWidth <= 818) {

					document.getElementsByClassName('qz_backgorund')[0].style.minHeight = '830px';
				} else {
					document.getElementsByClassName('qz_backgorund')[0].style.minHeight = '890px';
				}

				ready.textContent = 75;

				weNeedJustOneContact();

				//stepIsDone = false;
				//completeButton();

				//progress.style.width = 'calc(100% / 1.333 - 6px)';

				speach.textContent = 'Мы свяжемся с Вами в течение часа любым удобным для Вас способом.';
				speachMobile.textContent = 'Мы свяжемся с Вами в течение часа любым удобным для Вас способом.';

				leftTitle.textContent = 'Выберите наиболее удобный способ для связи с Вами:';
				break;
			case 5:	

				// СЧЁТЧИК ПЕРЕХОДОВ
				ym(57444442, 'reachGoal', 'id_done');

				document.getElementsByClassName('qz_thanks')[0].style.display = 'flex';

				toPreviousStep = false;
				toNextStep = false;
				completeButton();
				completed();
				speach.textContent = '';
				speachMobile.textContent = '';

				leftTitle.textContent = '';	

				step_1.style.display = 'none';
				step_2.style.display = 'none';
				step_3.style.display = 'none';
				step_4.style.display = 'none';

				// Обратный отсчёт
				(function(countdown, count = 5) {
					countdown = document.getElementById('qz_countdown');

					countdownInterval = setInterval(function() {
						
						count -= 1;
						countdown.innerHTML = count;

						if (count <= 0) {

							// СЧЁТЧИК ПЕРЕХОДОВ
							ym(57444442, 'reachGoal', 'zero_count');

							window.location.href="https://bypro.by";

							clearInterval(countdownInterval);
						}
					}, 1000);
				})();

				document.getElementsByClassName('qz_mobile_photo_speech_wrapper')[0].style.display = 'none';

				if(document.documentElement.clientWidth <= 818) {
					document.getElementsByClassName('qz_backgorund')[0].style.minHeight = '325px';

					document.getElementsByClassName('qz_mobile_logo_wrapper')[0].style.marginBottom = '50px';

					if (window.matchMedia("(orientation: landscape)").matches) {
					  document.getElementsByClassName('qz_backgorund')[0].style.minHeight = '525px';
					}
				}
								
				// Итоговые данные
				data_computers = document.getElementById('id_comp').value;
				data_servers = document.getElementById('id_serv').value;
				data_offices = document.getElementById('id_offic').value;
				data_budget = document.getElementById('id_budget').value;

				(function(contactArray, contactInput) {

					contactArray = document.getElementsByClassName('qz_contact_form_block');

					for (let i = 0; i < contactArray.length; i++) {

						contactInput = contactArray[i].getElementsByTagName('input')[0];
						contactName = (contactInput.id).replace('qz_', '');

						if (contactInput.value !== undefined) {

							data_contacts[contactName] = contactInput.value;
						}
					}
				})();

				// Sending
				dataSent();
				break;
		}		
	}

	// Появление кнопки "Завершить"
	function completeButton() {

		prevButton.style.display = 'none';
		nextButton.classList.add('qz_complete');
		nextButton.innerHTML = '<span>Завершить</span>';
	}

	// ЗАВЕРШЕНО
	function completed() {
		document.getElementsByClassName('qz_progress_bar_wrapper')[0].style.display = 'none'; 			// Уберём прогресс-бар
		document.getElementsByClassName('qz_navigation_wrapper')[0].classList.add('qz_completed'); 	// Преобразуем кнопку 
		nextButton.innerHTML = '<span>Завершено</span>';
		document.getElementsByClassName('qz_light_phrase')[0].textContent = 'Заявка отправлена';
		document.getElementsByClassName('qz_right')[0].style.display = 'none';
	}

	// Вкл/Выкл кнопок перехода по шагам
	function toNextOrPrevious() {

		if (toNextStep && stepIsDone) {

			nextButton.classList.add('qz_button_right_on');
			nextButton.addEventListener('click', toTheNextStep);
		} else {

			nextButton.classList.remove('qz_button_right_on');
			nextButton.removeEventListener('click', toTheNextStep);
		}

		if (toPreviousStep) {

			prevButton.classList.add('qz_button_left_on');
			prevButton.addEventListener('click', toThePrevStep);
		} else {

			prevButton.classList.remove('qz_button_left_on');
			prevButton.removeEventListener('click', toThePrevStep);
		}
	}

	// Отправка данных
	function dataSent() {

		let request = new XMLHttpRequest();

		let body = 'data_city=' + encodeURIComponent(data_city) +
		  '&data_computers=' + encodeURIComponent(data_computers) + 
		  '&data_servers=' + encodeURIComponent(data_servers) + 
		  '&data_offices=' + encodeURIComponent(data_offices) + 
		  '&data_budget=' + encodeURIComponent(data_budget) + 
		  '&data_whatsapp=' + encodeURIComponent(data_contacts.whatsapp) +
                  '&data_viber=' + encodeURIComponent(data_contacts.viber) +
                  '&data_telegram=' + encodeURIComponent(data_contacts.telegram) +
                  '&data_whatsapp=' + encodeURIComponent(data_contacts.whatsapp) +
                  '&data_sms=' + encodeURIComponent(data_contacts.sms) +
                  '&data_email=' + encodeURIComponent(data_contacts.email) +
                  '&data_phone=' + encodeURIComponent(data_contacts.phone);

		request.open("POST", 'php/validate.php', true);
		request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');

		request.addEventListener('readystatechange', function() {

		  if ((request.readyState == 4) && (request.status == 200)) {

		    console.log('this is good');
		  }
		}); 
		
		request.send(body);
	}

});
