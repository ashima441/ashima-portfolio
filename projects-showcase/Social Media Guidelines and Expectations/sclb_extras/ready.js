/**
 *
 *  ==================================================
 *  Copyright 2003-2019 SoftChalk LLC
 *  All Rights Reserved.
 *
 *  http://www.softchalk.com
 *  ==================================================
 *
 *  File date: September 30, 2019
 */

// for function isVideoEmbed
var _supportedVideoTypes = [".avi",".mpg",".mpeg",".mp4", ".m4v", ".mov",".wmv",".ogg"];

sidebar_justification = null;
var _windowWidth = null;

$(document).ready(function () {
    _windowWidth = $(window).width();

    var appSidebar = new sideBar(sidebarTocDefaultState);
    var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    if (iOS === true) {
        $("body").css("overflow","auto");
    }

    appSidebar.init();

    showHtmlInserts();
    buildLessonInteractives();
    initPageNum(currentPageNumber);
    initTocState();
    initPopovers();
    sidebar_justification = getSidebarJustification();
    setSidebarJustification(sidebar_justification);
    initResizeListener();
    scoreCenterFinishButton();
    docShort();
    setCurrentYear();
    courseScore();
    removeSideBarMenuIcon('sidebar');

    wrapMediaInDocument(document);


    // Fix for Donny Activities: Align, Identify, Pairs, Presenter, Selection, Sequence
    $('.modal').on('shown.bs.modal', function (event) {
        var target = $(event.relatedTarget);
        if (target.data('target')) {
            act_div_id = target.data('target').replace('container-', '');
            act_div = $(act_div_id);
            if (act_div.length > 0) {
                act_div.trigger('resize');
            }
        }
    });

    setTimeout(
        function () { $(".calc-size").removeClass("calc-size"); },
        3000
    );
});


function setCurrentYear() {
    var els = document.getElementsByClassName('current-year');
    for (var i = 0; i < els.length; i++) els[i].innerHTML = new Date().getFullYear();
}

/**
 * @function removeSideBarMenuIcon: used to hide the sidebar-toggle-btn and a numnber of other elements using a css class.
 * @param {*} id
 */
function removeSideBarMenuIcon(id){
    var sidebar = document.getElementById(id);
    if(sidebar == null){
        //the following selectors are for each different template type #classic-navbar, #modern-navbar, #content-main
        $("#classic-navbar, #modern-navbar, #content-main").addClass('showContentsMenu');
    }
}

function initTocState() {
    try {
        sidebarTocState = sessionStorage.getItem('sidebarTocState');
        coverTocState = sessionStorage.getItem('coverTocState');
        if (!sidebarTocState) {
            sessionStorage.setItem('sidebarTocState', sidebarTocDefaultState);
        }
        if (!coverTocState) {
            sessionStorage.setItem('coverTocState', coverTocDefaultState);
        }

        if (currentPageNumber === 0) {
            if (sessionStorage.getItem('coverTocState') == 'collapsed') {
                $('#coverTOC').removeClass('in');
                $('#cover-toc-toggle').addClass('collapsed');
                $('#cover-toc-toggle').attr('aria-expanded', 'false');
            } else {
                $('#coverTOC').addClass('in');
                $('#cover-toc-toggle').removeClass('collapsed');
                $('#cover-toc-toggle').attr('aria-expanded', 'true');
            }
        } else {

            if (sessionStorage.getItem('sidebarTocState') == 'collapsed') {
                $('#sidebarTOC').removeClass('in');
                $('#sidebar-toc-title').addClass('collapsed');
                $('#sidebar-toc-title').attr('aria-expanded', 'false');
            } else {

                $('#sidebarTOC').addClass('in');
                $('#sidebar-toc-title').removeClass('collapsed')
                $("#sidebar-toc-title").attr("aria-expanded", "true");
            }
        }
    } catch (err) {if (window.console) console.log(err);}
}

function sideBar(sidebarTocDefaultState) {
    /**
     * This allows us to access sidebar methods.
     * @param sidebarTocDefaultState : gets the global sidebarTocDefaultState
     * @prop expandClass: set to expanded in order to update the main container to display sidebar menu and peform css animations
     * @prop menuState: set to the global sidebarTocDefaultState value.
     */
    this.show = false;
    this.expandClass = 'expanded';
    this.menuState = sidebarTocDefaultState;
}

sideBar.prototype.toggleBar = function () {
    /**
     * This toggles our sidebar to show or hide based on updating css class. Do not set widths since computed properties always give us pixels.
     */

    try {
      if (sessionStorage.getItem('sidebarState') == 'closed') {
        $('#main-container').removeClass(this.expandClass);
      }
    } catch (err) {if (window.console) console.log(err);}

    var _this = this;
    $(".sidebar-toggle-btn").click(function () {
        _this.toggleValues();
    });
}

sideBar.prototype.toggleValues = function () {
    /**
     * Allows us to show or hid items based on looking for a class value
     */

    $('#main-container').removeClass('expandedOnload hiddenOnLoad');

    try {
      if ($('#main-container').hasClass(this.expandClass)) {
          $('#main-container').removeClass(this.expandClass);
          sessionStorage.setItem('sidebarState', 'closed');
      }
      else {
          $('#main-container').addClass(this.expandClass);
          sessionStorage.setItem('sidebarState', 'open');
      }
    } catch (err) {if (window.console) console.log(err);}
}

sideBar.prototype.init = function () {
    this.checkLocalStorage();
    this.toggleBar();
}

sideBar.prototype.checkLocalStorage = function () {
    /**
     * Check local storage to see if we can display menus for users or hide them
     */
    try {
      if (sessionStorage.getItem('sidebarState') === 'closed') {
          $('#main-container').addClass('hiddenOnLoad');;
      }
      else if (sessionStorage.getItem('sidebarState') === 'open') {
          $('#main-container').addClass('expandedOnload expanded');
      }
      else if (sessionStorage.getItem('sidebarState') == null) {
          $('#main-container').addClass(sidebarTocDefaultState);
      }
    } catch (err) {if (window.console) console.log(err);}
}



function scoreCenterFinishButton() {
    $('#sc-modal-button').bind('click touchstart', function (e) {
        e.stopPropagation();
        e.preventDefault();
        window.quit_lesson();
    });
}

function wrapMediaInAttribute(el, attr) {
    var div = parseHTML(el.attributes[attr].textContent);
    wrapMediaInDocument(div);
    el.setAttribute(attr, div.innerHTML);
}

function wrapMediaInDocument(document) {
    wrapMediaBasedIframes('iframe', document);
    //wrapMediaBasedIframes('embed', document);
    //wrapMediaBasedIframes('video', document);
}

/**
 * @function wrapMediaBasedIframes: wraps a media tag in responsive class based on attributes
 * @param {*} tag
 */
function wrapMediaBasedIframes(tag, document){
    var collection = document.querySelectorAll(tag);
    for (var item in collection) {
      if (!isNaN(item)) {
        var isVideo = false;
        if (tag == 'video') {
          isVideo = true;
        }
        else {
          var source = collection[item].getAttribute('src');
          if (tag == 'iframe') {
            //isVideo = isYoutubeVideo(source);
            isVideo = true;
          }
          else if (tag == 'embed') {
            isVideo = isVideoEmbed(source);
          }
        }

        if (isVideo == true) {
          $(collection[item]).wrap('<div class="sc-embed-responsive sc-embed-responsive-16by9"></div>');
        }
      }
    }
}

/**
 * @function isYoutubeVideo: check if the source has '.youtube.com'
 * @param {*} source: the value of the 'src' attribute
 */
function isYoutubeVideo (source) {
  var isVideo = false;
  if (source != null) {
    var low = source.toLowerCase();
    if (low.indexOf('.youtube.com') > -1) {
      isVideo = true;
    }
  }
  return isVideo;
}

/**
 * @function isVideoEmbed : return if embeded video is a supported video type.
 * @param {*} source: the value of the 'src' attribute
 */
function isVideoEmbed(source) {
  var isVideo = false;
  if (source != null) {
    var lastIndexOfPeriod = source.lastIndexOf('.');
    if (lastIndexOfPeriod != -1) {
      var extension = source.substring(lastIndexOfPeriod);
      if (extension != null) {
        var low = extension.toLowerCase();
        if (_supportedVideoTypes.indexOf(low) > -1) {
          isVideo = true;
        }
      }
    }
  }
  return isVideo;
}

function docShort() {
    // On vertical layout, show previous button on short pages.
    var body = document.body,
        html = document.documentElement,
        winHeight = $(window).height();

    var height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    if ((height - winHeight) < 200) {
        $('#vertical-top-nav-row').css({ 'position': 'relative', 'top': '0' });
    }
}

function toggleSidebar() {
    try {
        $("#sidebar").toggleClass("toggled");
        if ($("#sidebar").hasClass("toggled")) {
            sessionStorage.setItem('sidebarState', 'open');
            $("#main-col").addClass("sb-toggled");
            $("#sidebar").css('height', 'auto');
            $("#sidebar").animate({
                width: sbWidth
            }, 500, function () {

            });
        } else {
            sessionStorage.setItem('sidebarState', 'closed');
            $("#main-col").removeClass("sb-toggled");
            // $("#sidebar").css('height', '0');
            $("#sidebar").animate({
                width: "0"
            }, 500, function () {
                // Animation complete.
                $("#sidebar").css('height', '0');
            });
        }
    } catch (err) {if (window.console) console.log(err);}
}

function initPageNum(currentPageNumber) {
    try {
        sessionStorage.setItem('currentPageNumber', currentPageNumber);
        var lessonManifest = $.xml2json(xmlManifest);
        var totalPages = parseInt(lessonManifest.number_of_pages);
        if (currentPageNumber == 1) {
            $('body').addClass('initpage');
        }
        var lang = lessonManifest.ContentItems.ContentItem.Language.text;
        var page_count_div = $('.page-count');
        if (page_count_div.length > 0) {
            if (lang == 'English') {
                page_count_div.html(sessionStorage.getItem('currentPageNumber') + " of " + totalPages);
            } else {
                page_count_div.html(sessionStorage.getItem('currentPageNumber') + "/" + totalPages);
            }
        }
    } catch (err) {if (window.console) console.log(err);}
}

function toggleBasedOnSize() {
    try {
        if (_windowWidth < 540) {
            if ($("#sidebar").hasClass("toggled")) {
                $("#sidebar").removeClass("toggled");
                $('.container-main').removeClass('expanded');
            }
        } else {
            ss = sessionStorage.getItem('sidebarState');
            if (ss == "open") {
                if (!$("#sidebar").hasClass("toggled")) {
                    $("#sidebar").addClass("toggled");
                    $('.container-main').addClass('expanded');
                }
            }
        }
    } catch (err) {if (window.console) console.log(err);}
}

function initResizeListener() {
    /* Resize Event */
    $(window).on('resize', function (e) {
        if ($(window).width() != _windowWidth) {
            _windowWidth = $(window).width();
            toggleBasedOnSize();
        }
    });
}

/**
 * @function closeOtherPopOvers: this function closes popovers that were opened via tabbing if another popover is initiated via hovering.
 * @param {*} currentElement : this should be the current element being hovered on.
 */
function closeOtherPopOvers(currentElement) {
    var openPopovers = $('.popover');//get all popovers that are open.
    var currentId = $(currentElement).attr('aria-describedby');// this allows us to get the popup id bootstrap assigns to elements
    if (openPopovers.length > 1) {
        for (var item in openPopovers) {
            if (!isNaN(item) && openPopovers[item].id !== currentId) {
                $('#' + openPopovers[item].id).popover('hide');
            }
        }
    }
}

function initPopovers() {
    $('[data-toggle="tooltip"]').tooltip();

    var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    if (iOS === true) {
        $('[data-toggle="popover"]').popover({
                html: true,
                animation: true,
                title: '',
                placement: 'bottom auto',
                trigger: 'click focus',
                template:'<div class="popover" role="tooltip"><div class="arrow"></div><div class="popover-title"></div><div class="popover-content"></div></div>'
        });
    } else {
        $('[data-toggle="popover"]').popover({
                html: true,
                animation: true,
                title: '',
                placement: 'bottom auto',
                trigger: 'click hover focus',
                template:'<div class="popover" role="tooltip"><div class="arrow"></div><div class="popover-title"></div><div class="popover-content"></div></div>'
                });
        };

    $('[data-toggle="popover"]').on('inserted.bs.popover', function () {
        closeOtherPopOvers(this);
        $('.popover-title').prepend('<button type="button" class="close closepopover" aria-label="Close"><span aria-hidden="true">&times;</span></button>');
    })
    // if it is iOS, add cursor to body to allow click to close on mobile ios
    if (iOS === true) {
        $('body').css('cursor', 'pointer');
    }
    // Close popovers on click on close icon
    $(document).on('click', '.close', function (e) {
        $('[data-toggle="popover"]').popover('hide');
    });
    // Close popovers on click outside of popover window.
    $(document).on('click', function (e) {
        $('[data-toggle="popover"],[data-original-title]').each(function () {
            if (!$(this).is(e.target) && !$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
                $(this).popover('hide');
            }
        });
    });
    // @rliver bugfix supposed to be cleared up in BS4
    $('body').on('hidden.bs.popover', function (e) {
        $(e.target).data("bs.popover").inState = { click: false, hover: false, focus: false }
    });
}

function setSidebarJustification(side) {
    if (side == "left") {
        $("body").addClass("sidebar-left");
    } else  {
        $("body").addClass("sidebar-right");
    }
}

function getSidebarJustification() {
    var sidebar_left_disp = $('#sidebar-left').css('display');
    var sidebar_right_disp = $('#sidebar').css('display');
    if (sidebar_left_disp !== 'none') {
        return 'left';
    } else if (sidebar_right_disp !== 'none') {
        return 'right';
    }
}


function buildModal(obj) {
    var gen_modal = $("#generic_modal");
    if (gen_modal.length > 0) {
        data = decodeURIComponent(obj.content["body-html"]);
        var modal = gen_modal.clone();
        modal.attr('id', obj.id);
        if (obj.hasOwnProperty('activityType')) {
            modal.addClass(obj.activityType + '-modal');
        }
        modal.find('.modal-title').text(obj.content["header-html"]);
        modal.find('.modal-body').html(data);
        modal.insertAfter(gen_modal);
    }
}

function buildQuizpopper(obj) {
    if (obj.modal) {
        buildModal(obj);
    } else {
        obj_wrapper = $('#' + obj.id);
        if (obj_wrapper.length > 0) {
            data = decodeURIComponent(obj.content["body-html"]);
            obj_wrapper.html(data);
        }
    }
}

function buildQuizgroup(obj) {
    if (obj.modal) {
        buildModal(obj);
    } else {
        obj_wrapper = $('#' + obj.id);
        if (obj_wrapper.length > 0) {
            data = decodeURIComponent(obj.content["body-html"]);
            obj_wrapper.html(data);
        }
    }
}

function buildActivity(obj) {
    if (obj.modal) {
        buildModal(obj);
    } else {
        obj_wrapper = $('#' + obj.id);
        if (obj_wrapper.length > 0) {
            data = decodeURIComponent(obj.content["body-html"]);
            obj_wrapper.html(data);
        }
    }
}

/**
 * NB: the parsed HTML is wrapped in a div.
 *     Call div.firstChild to get the first child.
 *     Call div.innerHTML to get the contents back.
 */
function parseHTML(str) {
    var div = document.createElement('div');
    div.innerHTML = str.trim();
    return div;
}

function buildPopover(obj) {
    obj_wrapper = $('#' + obj.id);
    if (obj_wrapper.length > 0) {
        data = decodeURIComponent(obj.content["body-html"]);
        var popover_link = parseHTML(data);
        //wrapMediaInAttribute(popover_link.firstChild, 'data-content');
        //if (popover_link.firstChild.attributes['data-original-title']) {
        //    wrapMediaInAttribute(popover_link.firstChild, 'data-original-title');
        //}
        obj_wrapper.replaceWith(popover_link.innerHTML);
    }
}

function buildLessonInteractives() {
    if (typeof (lesson_data) != 'undefined') {
        try {
            for (interactive_type in lesson_data) {
                var objs = lesson_data[interactive_type];
                for (index in objs) {
                    var obj = objs[index];
                    switch (obj.type) {
                        case 'quizpopper':
                            buildQuizpopper(obj);
                            break;
                        case 'activity':
                            buildActivity(obj);
                            break;
                        case 'quizgroup':
                            buildQuizgroup(obj);
                            break;
                        case 'popover':
                            buildPopover(obj);
                            break;
                    }
                }
            }
        } catch (e) {
            if (window.console) console.log('issue building Lesson Interactives');
            if (window.console) console.log(e);
        }
    }
}

function showHtmlInserts() {
    if (typeof (html_inserts) != 'undefined') {
        for (var i = 0; i < html_inserts.length; i++) {
            var insert = html_inserts[i];
            if (insert.container_id != 'null') {
                var theDiv = document.getElementById(insert.container_id);
                if (theDiv != null) {
                  var myInnerHtml = theDiv.innerHTML;
                  theDiv.innerHTML = insert.html + myInnerHtml;
                }
            }
        }
    }
}

/**
 * @function stickyNav: this allows our navigation to be sticky on classic and horizontal layouts.
 * @param {*} threshold: this should be a number an will be used to add a class of sticky to our navbar element.
 * @param {*} navbar: this should be the navbar selector.
 */
function stickyNav(threshold, navbar) {
  if (typeof navbar[0] != "undefined") {
    if (window.pageYOffset >= threshold) {
        navbar[0].classList.add("sticky")
    } else {
        navbar[0].classList.remove("sticky");
    }
  }
}

// Hide Header on on scroll down
$(window).load(function () {
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('.navbar').outerHeight();
    var jumboHeight = $('.jumbotron').outerHeight();
    var maxheight = navbarHeight + jumboHeight;

    // Get the navbar
    var navbar = document.getElementsByClassName('navbar');

    // Get the offset position of the navbar
    var threshold = navbarHeight + jumboHeight;

    function hasScrolled() {
        var st = $(this).scrollTop();

        // Make sure they scroll more than delta
        if( Math.abs(lastScrollTop - st) <= delta  )
            return;
        // If they scrolled down and are past the navbar, add class .nav-up.
        // This is necessary so you never see what is "behind" the navbar.
        if(st > maxheight){
            if (st > lastScrollTop && st > navbarHeight){

                // Scroll Down
                //$('.navbar').removeClass('nav-down').addClass('nav-up');
            } else {
                // Scroll Up
                if(st + $(window).height() < $(document).height()) {
                    //$('.navbar').removeClass('nav-up').addClass('nav-down');
                }
            }
        } else {
            $('.navbar').removeClass('nav-down').removeClass('nav-up');
        }
        if(st > 200){
            $('#vertical-top-nav-row').css({'position':'relative','top':'0'});
        }

        lastScrollTop = st;
      }


    window.onscroll = function () {
        stickyNav(threshold, navbar);
        didScroll = true;
    };

    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);


    $('#modal-master').on('show.bs.modal', function (event) {
        var modalMaster = $(event.relatedTarget);
        $('#modal-header-content').html = modalMaster.data('header');
        $('#modal-body-content').html = modalMaster.data('body');
        $('#modal-footer-content').html = modalMaster.data('footer');
    });

    $('#coverTOC').on('hidden.bs.collapse', function () {
      try {
        sessionStorage.setItem('coverTocState', 'collapsed');
      } catch (err) {if (window.console) console.log(err);}
        $('#cover-toc-toggle').attr('aria-expanded', 'false');
    });

    $('#coverTOC').on('shown.bs.collapse', function () {
      try {
        sessionStorage.setItem('coverTocState', 'expanded');
      } catch (err) {if (window.console) console.log(err);}
        $('#cover-toc-toggle').attr('aria-expanded', 'true');
    });

    $('#sidebarTOC').on('hidden.bs.collapse', function () {
      try {
        sessionStorage.setItem('sidebarTocState', 'collapsed');
      } catch (err) {if (window.console) console.log(err);}
        $('#sidebar-toc').attr('aria-expanded', 'false');
    });

    $('#sidebarTOC').on('shown.bs.collapse', function () {
      try {
        sessionStorage.setItem('sidebarTocState', 'expanded');
      } catch (err) {if (window.console) console.log(err);}
        $("#sidebar-toc").attr("aria-expanded", "true");
    });

});
