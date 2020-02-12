'use strict';

var similarListElement = document.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var getRandomInteger = function (min, max) {
  var randomNumber = Math.floor(min + Math.random() * (max - min));
  return randomNumber;
};

var WIZARDS = [''];
var WIZARD_FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COATS_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

for (var i = 0; i < 4; i++) {
  var wizard = {
    name: WIZARD_FIRST_NAMES[getRandomInteger(0, WIZARD_FIRST_NAMES.length)],
    surname: WIZARD_SURNAMES[getRandomInteger(0, WIZARD_SURNAMES.length)],
    coatColor: WIZARD_COATS_COLOR[getRandomInteger(0, WIZARD_COATS_COLOR.length)],
    eyesColor: WIZARD_EYES_COLOR[getRandomInteger(0, WIZARD_EYES_COLOR.length)]
  };

  WIZARDS[i] = wizard;
}

var renderWizard = function () {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = WIZARDS[j].name + ' ' + WIZARDS[j].surname;
  wizardElement.querySelector('.wizard-coat').style.fill = WIZARDS[j].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = WIZARDS[j].eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();

for (var j = 0; j < WIZARDS.length; j++) {
  fragment.appendChild(renderWizard(WIZARDS[j]));
}

similarListElement.appendChild(fragment);

document.querySelector('.setup').classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');
