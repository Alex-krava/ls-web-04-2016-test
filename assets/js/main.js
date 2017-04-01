'use strict';

(function () {
    var config = {
        elem: {
            checkbox: document.querySelectorAll(".courses__checkbox > input[type='checkbox']"),
            success: document.querySelector(".success")
        },
        id: {
            coursesItem: '.courses__item',
            visibleItem: '.visible',
            visibleClass: 'visible',
            activeClass: 'active',
        }
    }

    if (config.elem.checkbox.length) {
        init();
    }

    function init() {
        document.addEventListener('change', checkedItem);

    }

    function checkedItem(e) {
        if (e.target.checked) {
            addClass(config.id.activeClass, e.target.parentNode.parentNode.parentNode);
            setTimeout(function () {
                removeClass(config.id.visibleClass, e.target.parentNode.parentNode.parentNode);
                removeClass(config.id.activeClass, e.target.parentNode.parentNode.parentNode);
                allDeleteItem();
            }, 1000);
        }
    }

    function getVisibleItems() {
        var items = document.querySelectorAll(config.id.coursesItem + config.id.visibleItem);
        return items;
    }

    function allDeleteItem() {
        if(getVisibleItems().length === 0) {
            addClass(config.id.visibleClass, config.elem.success);
        }
    }

    function addClass(classname, element) {
        var cn = element.className;
        if (cn.indexOf(classname) != -1) {
            return;
        }
        if (cn != '') {
            classname = ' ' + classname;
        }
        element.className = cn + classname;
    }

    function removeClass(classname, element) {
        var cn = element.className;
        var rxp = new RegExp("\\s?\\b" + classname + "\\b", "g");
        cn = cn.replace(rxp, '');
        element.className = cn;
    }

})();