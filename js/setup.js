'use strict';

var similarListElement = document.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var getRandomInteger = function (min, max) {
  var randomNumber = Math.floor(min + Math.random() * (max - min));
  return randomNumber;
};

var wizardFirstnames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var wizardSurnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var wizardCoatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var wizardEyesColor = ['black', 'red', 'blue', 'yellow', 'green'];

var wizards = [
  {
    name: wizardFirstnames[getRandomInteger (0, wizardFirstnames.length)],
    surname: wizardSurnames[getRandomInteger (0, wizardSurnames.length)],
    coatColor: wizardCoatColor[getRandomInteger (0, wizardCoatColor.length)],
    eyesColor: wizardEyesColor[getRandomInteger (0, wizardEyesColor.length)]
  } ,
  {
    name: wizardFirstnames[getRandomInteger (0, wizardFirstnames.length)],
    surname: wizardSurnames[getRandomInteger (0, wizardSurnames.length)],
    coatColor: wizardCoatColor[getRandomInteger (0, wizardCoatColor.length)],
    eyesColor: wizardEyesColor[getRandomInteger (0, wizardEyesColor.length)]
  } ,
  {
    name: wizardFirstnames[getRandomInteger (0, wizardFirstnames.length)],
    surname: wizardSurnames[getRandomInteger (0, wizardSurnames.length)],
    coatColor: wizardCoatColor[getRandomInteger (0, wizardCoatColor.length)],
    eyesColor: wizardEyesColor[getRandomInteger (0, wizardEyesColor.length)]
  } ,
  {
    name: wizardFirstnames[getRandomInteger (0, wizardFirstnames.length)],
    surname: wizardSurnames[getRandomInteger (0, wizardSurnames.length)],
    coatColor: wizardCoatColor[getRandomInteger (0, wizardCoatColor.length)],
    eyesColor: wizardEyesColor[getRandomInteger (0, wizardEyesColor.length)]
  }
];

var renderWizard = function () {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name + ' ' + wizards[i].surname;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();

for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
};

similarListElement.appendChild(fragment);

document.querySelector('.setup').classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');
console.log(wizards[0].name);
