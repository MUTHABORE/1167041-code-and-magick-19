'use strict';

var CLOUD_HEIGHT = 270;
var CLOUD_WIDTH = 420;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_COLOR = '#fff';
var CLOUD_SHADOW = 'rgba(0, 0, 0, 0.7)';
var GAP = 10;
var TEXT_GAP = 30;
var BAR_HEIGHT = 16;
var NAME_WIDTH = 80;
var GIST_WIDTH = 40;
var GIST_MAX_HEIGHT = 150;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

var getRandomInteger = function (min, max) {
  var randomNumber = min + Math.random() * (max - min);
  return randomNumber;
};

var getRandomBlue = function () {
  var randomBlue = 'hsl(230, ' + getRandomInteger(0, 100) + '%, 50%)';
  return randomBlue;
};

var getGistHeight = function (time, maxTime) {
  var gistHeight = (time * GIST_MAX_HEIGHT) / maxTime;
  return gistHeight;
};

window.renderStatistics = function (ctx, NAMES, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, CLOUD_SHADOW);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, CLOUD_COLOR);

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseLine = 'hanging';
  ctx.fillText('Ура вы победили!', CLOUD_X + TEXT_GAP, CLOUD_Y + TEXT_GAP);
  ctx.fillText('Список результатов: ', CLOUD_X + TEXT_GAP, CLOUD_Y + TEXT_GAP + GAP + BAR_HEIGHT);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < NAMES.length; i++) {
    var time = times[i].toFixed();

    ctx.fillStyle = '#000';
    ctx.fillText(NAMES[i], CLOUD_X + TEXT_GAP + (NAME_WIDTH + GAP) * i, CLOUD_HEIGHT - GAP);
    ctx.fillText(time, CLOUD_X + TEXT_GAP + (NAME_WIDTH + GAP) * i, CLOUD_HEIGHT - TEXT_GAP - getGistHeight(time, maxTime) - GAP);

    if (NAMES[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = getRandomBlue();
    }

    ctx.fillRect(CLOUD_X + TEXT_GAP + (NAME_WIDTH + GAP) * i, CLOUD_HEIGHT - TEXT_GAP, GIST_WIDTH, -getGistHeight(time, maxTime));
  }
};
