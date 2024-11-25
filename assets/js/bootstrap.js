// Import the Bootstrap components we want to use.
// See https://github.com/twbs/bootstrap/blob/main/js/index.umd.js

import Alert from 'js/bootstrap/src//alert.js'
import Button from 'js/bootstrap/src//button.js'
import Carousel from 'js/bootstrap/src//carousel.js'
import Collapse from 'js/bootstrap/src//collapse.js'
import Dropdown from 'js/bootstrap/src//dropdown.js'
import Modal from 'js/bootstrap/src//modal.js'
import Offcanvas from 'js/bootstrap/src//offcanvas.js'
import Popover from 'js/bootstrap/src//popover.js'
import ScrollSpy from 'js/bootstrap/src//scrollspy.js'
import Tab from 'js/bootstrap/src//tab.js'
import Toast from 'js/bootstrap/src//toast.js'
import Tooltip from 'js/bootstrap/src//tooltip.js'

(function () {
  let toastElList = [].slice.call(document.querySelectorAll('.toast'));
  let toastList = toastElList.map(function (toastEl) {
    return new Toast(toastEl);
  });

  toastList.forEach(function (toast) {
    toast.show();
  });

  let popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
  popoverTriggerList.map(function (popoverTriggerEl) {
    return new Popover(popoverTriggerEl);
  });
})();