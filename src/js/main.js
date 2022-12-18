
import modals from './modules/modals';
import slider from './modules/sliders';
import forms from './modules/forms';
import mask from './modules/mask';
import checkTextInputs from './modules/checkTextInputs';
import showMoreStiles from './modules/showMoreStiles';
import calc from './modules/calc';
import filter from './modules/filter';
import pictureSize from './modules/pictureSize';
import accordion from './modules/accordion';
import burger from './modules/burger';
import scrolling from './modules/scrolling';
import drop from './modules/drop';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    modals();

    slider('.feedback-slider-item', 'horiz', '.main-prev-btn', '.main-next-btn');
    slider('.main-slider-item', 'vertical');

    forms();
    mask('[name="phone"]');
    checkTextInputs('[name="name"]');
    checkTextInputs('[name="message"]');

    showMoreStiles('.button-styles', '#styles .row');

    calc('#size', '#material', '#options', '.promocode', '.calc-price');

    filter();

    pictureSize('.sizes-block');

    accordion('.accordion-heading');

    burger('.burger-menu', '.burger');

    scrolling('.pageup', 0.1);

    drop();
});