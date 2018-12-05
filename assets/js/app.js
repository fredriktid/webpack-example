'use strict';
import $ from 'jquery';
global.jQuery = $;
import 'bootstrap';
import 'jquery-tags-input/dist/jquery.tagsinput.min.js';
import '../css/app.scss';

$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
    $('.some-element').tagsInput();
});
