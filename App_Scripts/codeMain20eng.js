$(document).ready(function () {
  var IE = 0;
  var Page = "HOME";
  var Slider = 1;
  var About = "Group";

  var g = $(window).height();
  g -= ($(window).height() / 100) * 16 + 162;
  $("#PList-Products").height(g);
  g = $(window).height();
  g = (($(window).height() / 100) * 84) / 2;
  $("#ProductsList").css({ "margin-top": -g });
  $("#PDetails").css({ "margin-top": -g + 25 });

  var EPSX1 = $(window).width();
  var EPSX2 = EPSX1 / 1366;
  // $("#Certificate-BoxW").transition({ scale: EPSX2 }, 500);

  $(window).resize(function () {
    g = $(window).height();
    g -= ($(window).height() / 100) * 16 + 163;
    var EPSX1 = $(window).width();
    var EPSX2 = EPSX1 / 1366;
    $("#Certificate-BoxW").transition({ scale: EPSX2 }, 500);
    $("#PList-Products").height(g);
    g = $(window).height();
    g = (($(window).height() / 100) * 84) / 2;
    $("#ProductsList").css({ "margin-top": -g });
    $("#PDetails").css({ "margin-top": -g + 25 });
  });

  /////////////////////////////////////////////////////

  $("#PreBigLogoText")
    .delay(200)
    .fadeIn(function () {
      $("#PreBigLogoText").typed({ strings: ["MASTER BROTHER"], typeSpeed: 0 });
    });
  $("#Pre-Particles").transition({ opacity: 1 }, 100);
  $("#PreBigLogoStroke").fadeOut(1000);
  $("#PreLogo").transition({ opacity: 1 }, 100);
  $("#PreBigLogo").fadeIn(1000);
  $("#PreLogo").transition({ left: 0 }, 1000, function () {
    $("#LogoBack").delay(8000).transition({ top: 0 }, 500, "easeOutQuad");
    $("#CatalogBack").delay(8000).transition({ bottom: 0 }, 500, "easeOutQuad");
    $("#LoadInCircle").fadeIn(500, function () {
      myGallery = new mbBgndGallery({
        containment: "#Home-Slider",
        timer: 8000,
        effTimer: 2500,
        controls: "#SliderBtn",
        grayScale: false,
        shuffle: false,
        preserveWidth: false,
        effect: "zoom",
        images: [
          "../App_Images/bg (1).jpg",
          "../App_Images/bg (2).jpg",
          "../App_Images/bg (3).jpg",
          "../App_Images/bg (4).jpg",
          "../App_Images/bg (5).jpg",
          "../App_Images/bg (6).jpg",
          // "../App_Images/bg (1).jpg",
        ],
        onStart: function () {},
        onPause: function () {},
        onPlay: function (opt) {},
        onChange: function (opt, idx) {},
        onNext: function (opt) {
          if (Slider == 1) {
            Slider = 2;
          } else if (Slider == 2) {
            Slider = 3;
          } else if (Slider == 3) {
            Slider = 4;
          } else if (Slider == 4) {
            Slider = 5;
          } else if (Slider == 5) {
            Slider = 1;
          }
          if (Page == "HOME") {
            if (Slider == 2) {
              SliderWhite();
              $("#SB-CurrentSlide").html("02");
            } else if (Slider == 3) {
              SliderWhite();
              $("#SB-CurrentSlide").html("03");
            } else if (Slider == 4) {
              SliderWhite();
              $("#SB-CurrentSlide").html("04");
            } else if (Slider == 5) {
              SliderWhite();
              $("#SB-CurrentSlide").html("05");
            } else if (Slider == 1) {
              SliderBlack();
              $("#SB-CurrentSlide").html("01");
            }
          }
        },
        onPrev: function (opt) {
          if (Slider == 1) {
            Slider = 5;
          } else if (Slider == 2) {
            Slider = 1;
          } else if (Slider == 3) {
            Slider = 2;
          } else if (Slider == 4) {
            Slider = 3;
          } else if (Slider == 5) {
            Slider = 4;
          }
          if (Page == "HOME") {
            if (Slider == 5) {
              SliderWhite();
              $("#SB-CurrentSlide").html("05");
            } else if (Slider == 1) {
              SliderBlack();
              $("#SB-CurrentSlide").html("01");
            } else if (Slider == 2) {
              SliderWhite();
              $("#SB-CurrentSlide").html("02");
            } else if (Slider == 3) {
              SliderWhite();
              $("#SB-CurrentSlide").html("03");
            } else if (Slider == 4) {
              SliderWhite();
              $("#SB-CurrentSlide").html("04");
            }
          }
        },
      });
      $("#LoadPrecent")
        .radialProgress("init", { fill: 1 })
        .radialProgress("to", { perc: 100, time: 2000 });
      $("#LoadPrecent").delay(2500).fadeOut(200);
      $("#PreLogo").delay(2500).fadeOut(200);
      $("#LoadInCircle")
        .delay(2000)
        .fadeOut(function () {
          $("#Pre-Particles").fadeOut(500);
          $("#Logo").transition({ opacity: 1 }, 1000, "easeOutQuad");
          $("#DC-Download")
            .stop()
            .transition({ right: 48, opacity: 1 }, 500, "easeInOutCubic");
          $("#DC-Catalog")
            .stop()
            .transition({ right: 35, opacity: 1 }, 500, "easeInOutCubic");
          $("#Home-Box").transition(
            { opacity: 1 },
            500,
            "easeOutCubic",
            function () {
              $(".MainCircle").transition(
                { transform: "scale(1)" },
                1500,
                "easeOutQuart"
              );
              $("#Home-Slider")
                .delay(1500)
                .transition({ opacity: "1" }, 3000, "easeOutQuad");
              $("#MainText1")
                .delay(1000)
                .fadeIn(function () {
                  $("#MainText1").typed({
                    strings: ["About Company "],
                    typeSpeed: 20,
                  });
                });
              $("#MainText2")
                .delay(1300)
                .fadeIn(function () {
                  $("#MainText2").typed({
                    strings: ["Products"],
                    typeSpeed: 20,
                  });
                });
              $("#MainText3")
                .delay(1600)
                .fadeIn(function () {
                  $("#MainText3").typed({
                    strings: ["Licenses"],
                    typeSpeed: 40,
                  });
                });
              $("#MainText4")
                .delay(2000)
                .fadeIn(function () {
                  $("#MainText4").typed({
                    strings: ["Partners"],
                    typeSpeed: 40,
                  });
                });
              $("#MainText6")
                .delay(2500)
                .fadeIn(function () {
                  $("#MainText6").typed({
                    strings: ["News"],
                    typeSpeed: 40,
                  });
                });
              $("#MainText5")
                .delay(3000)
                .fadeIn(function () {
                  $("#MainText5").typed({
                    strings: ["Contact"],
                    typeSpeed: 40,
                  });
                });
              $(".Bullet1, .Bullet2")
                .delay(1500)
                .transition(
                  { opacity: "1" },
                  500,
                  "easeInOutCubic",
                  function () {
                    $("#SliderBtn")
                      .delay(1000)
                      .transition({ opacity: "1" }, 300, "easeInOutCubic");
                    $("#Reserved")
                      .delay(300)
                      .transition({ opacity: "0.5" }, 500);
                    $("#Copyright")
                      .delay(400)
                      .transition({ opacity: "0.5" }, 500);
                    $("#Auther").delay(500).transition({ opacity: "0.5" }, 500);
                    $("#FacebookBtn")
                      .delay(800)
                      .transition({ opacity: "1" }, 500);
                    $("#TwitterBtn")
                      .delay(900)
                      .transition({ opacity: "1" }, 500);
                    $("#GoogleBtn")
                      .delay(1000)
                      .transition({ opacity: "1" }, 500);
                    $("#LinkedInBtn")
                      .delay(1100)
                      .transition({ opacity: "1" }, 500);
                    $("#UzBtn").delay(1200).transition({ opacity: "1" }, 500);
                    $("#RusBtn").delay(1300).transition({ opacity: "1" }, 500);
                    $("#EngBtn").delay(1400).transition({ opacity: "1" }, 500);

                    $("#MenuBtn").delay(700).transition({ opacity: "1" }, 500);
                    $("#HomeBtn").delay(700).transition({ opacity: "1" }, 500);
                    $("#LangSep, #LangSep2")
                      .delay(600)
                      .transition({ opacity: "0.2" }, 500);
                    $("#LangBtn").delay(700).transition({ opacity: "1" }, 500);
                    $("#ParallexBtn")
                      .delay(1000)
                      .transition({ opacity: "1" }, 500);
                    $("#PageBack").fadeIn();
                    $("#PB-Home").addClass("ParallexBtnS");
                    mousewheel = true;
                  }
                );
            }
          );
        })
        .fadeOut();
    });
  });

  ////////////////////////////////////////////////////

  $(".ParallexBtn, .ParallexSubBtn").hover(
    function () {
      $(".ParallexBtn, .ParallexSubBtn").find("p").stop().fadeOut(200);
      $(this).find("p").stop().fadeIn(200);
    },
    function () {
      $(".ParallexBtn, .ParallexSubBtn").find("p").stop().fadeOut(200);
    }
  );

  $("#HomeCircle11, #HomeCircle11, HomeCircle13").click(function (e) {
    e.stopPropagation();
    PageOpen("ABOUT");
    AboutPage("Transport");
  });
  $(
    "#HomeCircle2, #HomeCircle2x, #HomeCircle3, HomeCircle4, #HomeCircle5, HomeCircle6"
  ).click(function (e) {
    e.stopPropagation();
    PageOpen("CERTIFICATE");
  });

  //////////

  function SliderWhite() {
    $(".ParallexBtn div, .ParallexSubBtn div, #LangSep, #LangSep2")
      .stop()
      .animate({ backgroundColor: "#fff" }, 300, "easeInOutCubic");
    $("#LangSep, #LangSep2").css({ "background-color": "#fff" });
    $("#HomeBtn p").css({ "background-position": "0 0" });
    $("#MainCircle1 .MainCircleBack")
      .stop()
      .animate({ opacity: "0.5" }, 400, "easeInOutCubic");
    $(".MainCircle .MainCircleBack")
      .stop()
      .animate({ borderColor: "#fff", opacity: "0.4" }, 400, "easeInOutCubic");
    $(
      "#MainText1, #MainText2, #MainText3, #MainText4, #MainText6,#MainText5, .Bullet1-Txt, .Bullet2-Txt, .Bullet3-Txt, .Bullet4-Txt, .ParallexBtn p, .ParallexSubBtn p, #LB-EN, #SB-Split, #SB-TotalSlide, #Reserved, #Copyright, #Auther"
    ).animate({ color: "#fff" }, 500);
    // $("#SliderBtn").css({ "font-family": "Mont" });
    $("#SB-NextBtn, #SB-PrevBtn").css({
      "background-position": "-200px 0",
      opacity: "0.5",
    });
    if (!$("#MenuBtn").hasClass("MenuOpen")) {
      $(".MenuBtnLine")
        .stop()
        .animate({ backgroundColor: "#fff" }, 400, "easeInOutCubic");
    }
    //$('#PhoneBtn div').css({ 'background-position': '-40px 0' });
    $("#FacebookBtn").css({ "background-position": "0 0" });
    $("#TwitterBtn").css({ "background-position": "-30px 0" });
    $("#GoogleBtn").css({ "background-position": "-60px 0" });
    $("#LinkedInBtn").css({ "background-position": "-90px 0" });
    $("#UzBtn").css({ "background-position": "-120px 0" });
    $("#RusBtn").css({ "background-position": "-150px 0" });
    $("#EngBtn").css({ "background-position": "-180px 0" });
    $(".ParallexBtnS div")
      .stop()
      .animate(
        { backgroundColor: "#ffea00", opacity: "1" },
        300,
        "easeInOutCubic"
      );
  }
  function SliderBlack() {
    $(".ParallexBtn div, .ParallexSubBtn div")
      .stop()
      .animate({ backgroundColor: "#000" }, 300, "easeInOutCubic");
    $("#LangSep, #LangSep2").css({ "background-color": "#000" });
    $("#HomeBtn p").css({ "background-position": "-40px 0" });
    $("#MainCircle1 .MainCircleBack")
      .stop()
      .animate({ opacity: "0.22" }, 400, "easeInOutCubic");
    $(".MainCircle .MainCircleBack")
      .stop()
      .animate({ borderColor: "#000", opacity: "0.08" }, 400, "easeInOutCubic");
    $(
      "#MainText1, #MainText2, #MainText3, #MainText4, #MainText6, #MainText5,.Bullet1-Txt, .Bullet2-Txt, .Bullet3-Txt, .Bullet4-Txt, .ParallexBtn p, .ParallexSubBtn p, #LB-EN, #SB-Split, #SB-TotalSlide, #Reserved, #Copyright, #Auther"
    ).animate({ color: "#000" }, 500);
    // $("#SliderBtn").css({ "font-family": "Mont" });
    $("#SB-NextBtn, #SB-PrevBtn").css({
      "background-position": "-160px 0",
      opacity: "0.5",
    });
    if (!$("#MenuBtn").hasClass("MenuOpen")) {
      $(".MenuBtnLine")
        .stop()
        .animate({ backgroundColor: "#000" }, 400, "easeInOutCubic");
    }
    //$('#PhoneBtn div').css({ 'background-position': '0 0' });
    $("#FacebookBtn").css({ "background-position": "-90px 0" });
    $("#TwitterBtn").css({ "background-position": "-120px 0" });
    $("#GoogleBtn").css({ "background-position": "-150px 0" });
    $("#LinkedInBtn").css({ "background-position": "-180px 0" });
    $("#UzBtn").css({ "background-position": "-210px 0" });
    $("#RusBtn").css({ "background-position": "-240px 0" });
    $("#EngBtn").css({ "background-position": "-270px 0" });
    $(".ParallexBtnS div")
      .stop()
      .animate(
        { backgroundColor: "#ffea00", opacity: "1" },
        300,
        "easeInOutCubic"
      );
  }
  SliderBlack();

  $("#LangBtn").hover(
    function () {
      $(this).css({ width: "175px" });
      //$('#PhoneBtn div, #PhoneBtn p').stop().animate({ 'right': '100px' }, 300);
      $("#LB-EN div").animate({ transform: "scale(1)" }, 400, "easeInOutCubic");
      $("#LB-TJ").animate(
        { right: "270px", opacity: "1" },
        300,
        "easeInOutCubic"
      );
      $("#LB-CN").animate(
        { right: "225px", opacity: "1" },
        300,
        "easeInOutCubic"
      );
      $("#LB-UZ").animate(
        { right: "180px", opacity: "1" },
        300,
        "easeInOutCubic"
      );
      $("#LB-RU").animate(
        { right: "135px", opacity: "1" },
        300,
        "easeInOutCubic"
      );
      $("#LB-TU").animate(
        { right: "90px", opacity: "1" },
        300,
        "easeInOutCubic"
      );
      $("#LB-FA").animate(
        { right: "45px", opacity: "1" },
        300,
        "easeInOutCubic"
      );
    },
    function () {
      $("#LB-TJ")
        .stop()
        .animate({ right: "0", opacity: "0" }, 300, "easeInOutCubic");
      $("#LB-CN")
        .stop()
        .animate({ right: "0", opacity: "0" }, 300, "easeInOutCubic");
      $("#LB-UZ")
        .stop()
        .animate({ right: "0", opacity: "0" }, 300, "easeInOutCubic");
      $("#LB-RU")
        .stop()
        .animate({ right: "0", opacity: "0" }, 300, "easeInOutCubic");
      $("#LB-TU")
        .stop()
        .animate({ right: "0", opacity: "0" }, 300, "easeInOutCubic");
      $("#LB-FA")
        .stop()
        .animate(
          { right: "0", opacity: "0" },
          300,
          "easeInOutCubic",
          function () {
            $("#LB-EN div").animate(
              { transform: "scale(0)" },
              200,
              "easeInOutCubic"
            );
            $(this).css({ width: "40px" });
          }
        );
      //$('#PhoneBtn div, #PhoneBtn p').stop().animate({ 'right': '0px' }, 300);
    }
  );
  $(".LangBtn").hover(
    function () {
      $(this)
        .not("#LB-EN")
        .find("div")
        .animate({ backgroundColor: "#ffea00" }, 100, "easeInOutCubic");
    },
    function () {
      $(this)
        .not("#LB-EN")
        .find("div")
        .animate({ backgroundColor: "#ccc" }, 100, "easeInOutCubic");
    }
  );

  $("#DownloadCatalog").hover(
    function () {
      $("#DC-Download")
        .stop()
        .animate({ right: "28px", opacity: "0" }, 200, "easeInOutCubic");
      $("#DC-Catalog")
        .stop()
        .animate({ right: "55px", opacity: "0" }, 200, "easeInOutCubic");
      $("#DC-IconLine")
        .stop()
        .delay(150)
        .animate({ opacity: "0.8" }, 200, "easeInOutCubic");
      $("#DC-Icon")
        .stop()
        .delay(150)
        .animate({ top: "-40px", opacity: "1" }, 200, "easeInOutCubic");
    },
    function () {
      $("#DC-Download")
        .stop()
        .delay(150)
        .animate({ right: "48px", opacity: "1" }, 200, "easeInOutCubic");
      $("#DC-Catalog")
        .stop()
        .delay(150)
        .animate({ right: "35px", opacity: "1" }, 200, "easeInOutCubic");
      $("#DC-IconLine").stop().animate({ opacity: "0" }, 200, "easeInOutCubic");
      $("#DC-Icon")
        .stop()
        .animate({ top: "-50px", opacity: "0" }, 200, "easeInOutCubic");
    }
  );

  //////////////////////////////////////////////////////////  MENU --------------------

  $("#MenuBtn").hover(
    function () {
      $(this)
        .find(".MenuBtnBack")
        .stop()
        .animate({ transform: "scale(1)" }, 400, "easeInOutCubic");
      if (!$(this).hasClass("MenuOpen")) {
        $("#MenuBtnLine1").animate({ top: "15px" }, 200, "easeInOutCubic");
        $("#MenuBtnLine3").animate({ top: "25px" }, 200, "easeInOutCubic");
      }
    },
    function () {
      $(this)
        .find(".MenuBtnBack")
        .stop()
        .animate({ transform: "scale(0)" }, 400, "easeInOutCubic");
      if (!$(this).hasClass("MenuOpen")) {
        $("#MenuBtnLine1").animate({ top: "13px" }, 200, "easeInOutCubic");
        $("#MenuBtnLine3").animate({ top: "27px" }, 200, "easeInOutCubic");
      }
    }
  );

  $("#HomeBtn").hover(
    function () {
      $(this)
        .find("div")
        .stop()
        .animate({ transform: "scale(1)" }, 300, "easeInOutCubic");
    },
    function () {
      $(this)
        .find("div")
        .stop()
        .animate({ transform: "scale(0)" }, 300, "easeInOutCubic");
    }
  );

  function MainMenuClose() {
    $("#MenuBtn").removeClass("MenuOpen");
    $(".MenuBtn").animate(
      { margin: "150px 0", opacity: "0" },
      1000,
      "easeInOutCubic"
    );
    $("#MenuCircle").animate({ transform: "scale(0)" }, 800, "easeInOutCubic");
    $("#MenuVideoBtn, #MenuPhotoBtn").animate(
      { opacity: "0" },
      300,
      "easeInOutCubic"
    );
    $("#MenuLangBtnW")
      .delay(100)
      .animate({ opacity: "0" }, 300, "easeInOutCubic");

    $("#MenuBox").delay(500).fadeOut(500);
    if (Slider == 1 || Page == "ABOUT") {
      $("#MenuBtnLine1").animate(
        { backgroundColor: "#000" },
        300,
        "easeInOutCubic"
      );
      $("#MenuBtnLine2").animate(
        { backgroundColor: "#000" },
        300,
        "easeInOutCubic"
      );
      $("#MenuBtnLine3").animate(
        { backgroundColor: "#000" },
        300,
        "easeInOutCubic"
      );
    } else {
      $("#MenuBtnLine1").animate(
        { backgroundColor: "#fff" },
        300,
        "easeInOutCubic"
      );
      $("#MenuBtnLine2").animate(
        { backgroundColor: "#fff" },
        300,
        "easeInOutCubic"
      );
      $("#MenuBtnLine3").animate(
        { backgroundColor: "#fff" },
        300,
        "easeInOutCubic"
      );
    }
    $("#MenuBtnLine2").delay(300).animate({ opacity: "1" }, 200);
    $("#MenuBtnLine1").animate(
      { transform: "rotate(0deg)", top: "13px", left: "8px" },
      300,
      "easeInOutCubic"
    );
    $("#MenuBtnLine3").animate(
      { transform: "rotate(0deg)", top: "27px", left: "8px" },
      300,
      "easeInOutCubic"
    );

    $("#MenuBtn-" + Page)
      .delay(200)
      .find(".MenuBtnBullet")
      .animate({ transform: "scale(0)" }, 100, "easeInOutCubic");
    $("#MenuBtn-" + Page)
      .find(".MenuBtnLineX")
      .animate({ width: "0", "margin-left": "-50px" }, 200, "easeInOutCubic");
    $("#MenuBtn-" + Page).css({ color: "#fff" });
    $("#MenuBtn-" + Page)
      .find("span")
      .animate({ color: "#aaa", opacity: "0.3" }, 200, "easeInOutCubic");
  }
  $("#MenuBtn").click(function () {
    $("#CDocCloseBtn").click();
    if (!$(this).hasClass("MenuOpen")) {
      $(this).addClass("MenuOpen");
      $("#MenuBox").fadeIn(500, function () {
        particlesJS("Menu-Particles", {
          particles: {
            number: { value: 200, density: { enable: true, value_area: 1000 } },
            color: { value: "#fff" },
            shape: {
              type: "circle",
              stroke: { width: 0, color: "#000000" },
              polygon: { nb_sides: 2 },
              image: { src: "img/github.svg", width: 100, height: 100 },
            },
            opacity: {
              value: 0.5,
              random: false,
              anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
            },
            size: {
              value: 3,
              random: true,
              anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#fdfdfd",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 6,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              attract: { enable: false, rotateX: 300, rotateY: 600 },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: { enable: true, mode: "repulse" },
              onclick: { enable: true, mode: "push" },
              resize: true,
            },
            modes: {
              grab: { distance: 400, line_linked: { opacity: 1 } },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
              },
              repulse: { distance: 150 },
              push: { particles_nb: 4 },
              remove: { particles_nb: 2 },
            },
          },
          retina_detect: true,
        });
      });
      $("#MenuBtnLine2").animate({ opacity: "0" }, 200);
      $("#MenuBtnLine1").animate(
        {
          transform: "rotate(45deg)",
          top: "20px",
          left: "8px",
          backgroundColor: "#fff",
        },
        300,
        "easeInOutCubic"
      );
      $("#MenuBtnLine3").animate(
        {
          transform: "rotate(-45deg)",
          top: "20px",
          left: "8px",
          backgroundColor: "#fff",
        },
        300,
        "easeInOutCubic"
      );
      $(".MenuBtn")
        .delay(200)
        .animate({ margin: "5px 0", opacity: "1" }, 1000, "easeInOutCubic");
      $("#MenuCircle")
        .delay(200)
        .animate({ transform: "scale(1)" }, 800, "easeInOutCubic");
      $("#MenuVideoBtn, #MenuPhotoBtn")
        .delay(800)
        .animate({ opacity: "1" }, 300, "easeInOutCubic");
      $("#MenuLangBtnW")
        .delay(900)
        .animate({ opacity: "1" }, 300, "easeInOutCubic");

      $("#MenuBtn-" + Page)
        .find(".MenuBtnBullet")
        .delay(1000)
        .animate({ transform: "scale(1)" }, 100, "easeInOutCubic");
      $("#MenuBtn-" + Page)
        .find(".MenuBtnLineX")
        .delay(1000)
        .animate(
          { width: "500px", "margin-left": "-550px" },
          400,
          "easeInOutCubic"
        );
      $("#MenuBtn-" + Page).css({ color: "#ffea00" });
      $("#MenuBtn-" + Page)
        .find("span")
        .delay(1000)
        .animate({ color: "#ffea00", opacity: "1" }, 200, "easeInOutCubic");
      $("#MenuBtn-" + Page).addClass("MenuBtnSelect");
    } else {
      MainMenuClose();
    }
  });

  $("#MenuBtn-HOME").click(function () {
    MainMenuClose();
    $("#PB-Home").click();
  });
  $("#MenuBtn-ABOUT").click(function () {
    MainMenuClose();
    $("#PB-About").click();
  });
  $("#MenuBtn-PRODUCTS").click(function () {
    MainMenuClose();
    $("#PB-Products").click();
  });
  $("#MenuBtn-CERTIFICATE").click(function () {
    MainMenuClose();
    $("#PB-Certificate").click();
  });
  $("#MenuBtn-TECHNOLOGY").click(function () {
    MainMenuClose();
    $("#PB-Technology").click();
  });
  $("#MenuBtn-EVENTS").click(function () {
    MainMenuClose();
    $("#PB-Events").click();
  });
  $("#MenuBtn-CONTACT").click(function () {
    MainMenuClose();
    $("#PB-Contact").click();
  });

  $(".MenuLangBtn").hover(
    function () {
      $(this)
        .not(".MenuLangBtnSelect")
        .animate({ color: "#ffea00" }, 100, "easeInOutCubic");
    },
    function () {
      $(this)
        .not(".MenuLangBtnSelect")
        .animate({ color: "#fff" }, 100, "easeInOutCubic");
    }
  );

  $("#MenuVideoBtn, #MenuPhotoBtn").hover(
    function () {
      $(this)
        .find(".MenuCircleBack1")
        .stop()
        .animate({ transform: "scale(0)" }, 300, "easeInOutCubic");
      $(this)
        .find(".MenuCircleBack2")
        .stop()
        .animate({ transform: "scale(1)" }, 300, "easeInOutCubic");
      //$(this).find('.MenuCircleTxt').stop().animate({ color: '#ffea00' }, 300, 'easeInOutCubic');
      $(this)
        .find(".MenuCircleIcon")
        .animate({ transform: "scale(0.9)" }, 300, "easeInOutCubic");
    },
    function () {
      $(this)
        .find(".MenuCircleBack1")
        .stop()
        .animate({ transform: "scale(1)" }, 300, "easeInOutCubic");
      $(this)
        .find(".MenuCircleBack2")
        .stop()
        .animate({ transform: "scale(0)" }, 300, "easeInOutCubic");
      //$(this).find('.MenuCircleTxt').stop().animate({ color: '#fff' }, 300, 'easeInOutCubic');
      $(this)
        .find(".MenuCircleIcon")
        .animate({ transform: "scale(1)" }, 300, "easeInOutCubic");
    }
  );
  $(".MenuBtn").hover(
    function () {
      $(this)
        .not(".MenuBtnSelect")
        .find(".MenuBtnBullet")
        .animate({ transform: "scale(1)" }, 100, "easeInOutCubic");
      $(this)
        .not(".MenuBtnSelect")
        .find("span")
        .animate({ color: "#fff", opacity: "1" }, 200, "easeInOutCubic");
      //$(this).not('.MenuBtnSelect').css({ color: '#ffea00' });
    },
    function () {
      $(this)
        .not(".MenuBtnSelect")
        .find(".MenuBtnBullet")
        .animate({ transform: "scale(0)" }, 100, "easeInOutCubic");
      $(this)
        .not(".MenuBtnSelect")
        .find("span")
        .animate({ color: "#aaa", opacity: "0.3" }, 200, "easeInOutCubic");
      //$(this).not('.MenuBtnSelect').css({ color: '#fff' });
    }
  );
  $(".Bullet1, .Bullet2").hover(
    function () {
      $(this).css("animation-play-state", "paused");
      $(this).parent().css("animation-play-state", "paused");
    },
    function () {
      $(this).css("animation-play-state", "running");
      $(this).parent().css("animation-play-state", "running");
    }
  );

  ///////////////////////////////////////////////////     ABOUT  ----------------------------

  $("#AboutCircle3").height($("#AboutCircle3").width());

  function PageOpen(A) {
    if (Page != A) {
      $("#CDocCloseBtn").click();
      $(".ParallexBtn, .ParallexSubBtn").removeClass("ParallexBtnS");
      if (Page == "HOME") {
        $(".MainCircle").animate(
          { transform: "scale(0)" },
          1000,
          "easeInCubic"
        );
      } else if (Page == "ABOUT") {
        AboutClose();
        $("#ParallexBtn").css({ "margin-top": "-80px" });
        $("#PB-AboutSub1").stop().fadeOut(100);
        $("#PB-AboutSub2, #PB-AboutSub3, #PB-AboutSub4")
          .delay(100)
          .stop()
          .fadeOut(100);
        $("#AboutCircle3, #AboutCircle4, #AboutCircle5, #AboutCircle6")
          .stop()
          .animate({ opacity: 0 }, 1000, "easeInQuart");
      } else if (Page == "TECHNOLOGY") {
        $("#Technology-Box").css({ "z-index": "101" }).delay(1000).fadeOut();
        $(".TechnologyB ").animate(
          { left: "45%", opacity: 0 },
          1000,
          "easeInQuart"
        );
      } else if (Page == "CONTACT") {
        $("#Contact-Box").css({ "z-index": "101" }).delay(1000).fadeOut();
        $("#MailBox-Icon").delay(500).fadeIn(300);
        $("#MailBox").delay(400).animate(
          {
            width: "600px",
            height: "200px",
            "margin-top": "-80px",
            "margin-left": "-265px",
          },
          500,
          "easeInQuart"
        );
        $("#MailBox")
          .find("#MailBox-Back")
          .delay(1500)
          .animate(
            { opacity: "0.8", backgroundColor: "#000" },
            500,
            "easeInOutCubic"
          );
        $("#ContactCloseBtn")
          .delay(500)
          .animate({ opacity: 0 }, 500, "easeOutQuart");
        $("#MailBox-Title").animate(
          { opacity: 0, "margin-left": "50px" },
          500,
          "easeOutQuart"
        );
        $(".TextBox").animate(
          { opacity: 0, "margin-left": "50px" },
          500,
          "easeOutQuart"
        );
        $("#MailBox-SendBtn").animate(
          { opacity: 0, "margin-left": "50px" },
          500,
          "easeOutQuart"
        );
        Mail = false;
        $("#ContactInfo-Line").animate({ opacity: 0 }, 800, "easeOutQuart");
        $("#ContactInfo-Back").animate(
          { transform: "scale(0)" },
          800,
          "easeOutQuart",
          function () {
            $("#ContactInfo-Pre").animate(
              { left: "80px", opacity: 0 },
              700,
              "easeOutQuart"
            );
            $("#ContactInfo-Title").animate(
              { left: "80px", opacity: 0 },
              800,
              "easeOutQuart"
            );
            $(
              "#ContactInfo-Addr1, #ContactInfo-Addr2, #ContactInfo-Addr3,  #ContactInfo-Tel, #ContactInfo-Fax, #ContactInfo-Email"
            ).animate({ left: "180px", opacity: 0 }, 1000, "easeOutQuart");
            $("#ContactInfo-Barcode").animate(
              { opacity: 0 },
              800,
              "easeOutQuart"
            );
            $("#ContactBtn").animate({ opacity: 0 }, 800, "easeOutQuart");
            $("#MailBox").animate(
              { width: "0", "margin-left": "-175px" },
              750,
              "easeOutQuart"
            );
            $("#Contact-Box iframe").animate(
              { opacity: 0 },
              1000,
              "easeOutQuart"
            );
          }
        );
      } else if (Page == "PRODUCTS") {
        $("#Products-Box").css({ "z-index": "101" }).delay(1000).fadeOut();
        $("#ParallexBtn").css({ "margin-top": "-80px" });
        $("#PB-ProductsSub1").delay(300).stop().fadeOut(100);
        $("#PB-ProductsSub2").delay(200).stop().fadeOut(100);
        $("#PB-ProductsSub3").delay(100).stop().fadeOut(100);
        $("#PB-ProductsSub4").stop().fadeOut(100);
        ProductBtnClick(1, 103);
        $("#ProductsList")
          .delay(100)
          .animate({ left: "500", opacity: 0 }, 1000, "easeOutQuart");
        $("#ProductsMenu")
          .delay(200)
          .animate({ left: "90", opacity: 0 }, 500, "easeOutQuart");
        $("#ProductsLogo-Back")
          .delay(300)
          .animate({ transform: "scale(0)", opacity: 0 }, 500, "easeOutQuart");
        $("#ProductsLogo-Line")
          .delay(400)
          .animate({ opacity: 0 }, 500, "easeOutQuart");
        $("#ProductsCircle2, #ProductsCircle3, #ProductsCircle4").animate(
          { transform: "scale(0)", opacity: 0 },
          500,
          "easeOutQuart"
        );
        $("#ProductsLogo-Title")
          .delay(300)
          .animate({ left: "100", opacity: 0 }, 500, "easeOutQuart");
        $("#ProductsLogo-Pre")
          .delay(400)
          .animate({ left: "100", opacity: 0 }, 500, "easeOutQuart");
        $("#ProductsList").fadeIn();
        $("#PDetails")
          .animate({ left: "450px", opacity: "0" }, 500, "easeInOutQuad")
          .fadeOut();
      } else if (Page == "CERTIFICATE") {
        $("#Certificate-Box").css({ "z-index": "101" }).delay(1000).fadeOut();
        $("#ParallexBtn").css({ "margin-top": "-80px" });
        $("#PB-CertificateSub1").delay(300).stop().fadeOut(100);
        $("#PB-CertificateSub2").delay(200).stop().fadeOut(100);
        $("#PB-CertificateSub3").delay(100).stop().fadeOut(100);
        $("#PB-CertificateSub4").stop().fadeOut(100);
        $("#Certificate-StandardBox")
          .animate({ left: "550", opacity: 0 }, 1000, "easeOutQuart")
          .fadeOut();
        $("#CertificateMenu")
          .delay(200)
          .animate({ left: "0", opacity: 0 }, 500, "easeOutQuart");
        $("#CertificateLogo-Back")
          .delay(300)
          .animate({ transform: "scale(0)", opacity: 0 }, 500, "easeOutQuart");
        $("#CertificateLogo-Line")
          .delay(400)
          .animate({ opacity: 0 }, 500, "easeOutQuart");
        $("#CertificateCircle2, #ProductsCircle3, #ProductsCircle4").animate(
          { transform: "scale(0)", opacity: 0 },
          500,
          "easeOutQuart"
        );
        $("#CertificateLogo-Title")
          .delay(300)
          .animate({ left: "100", top: "50", opacity: 0 }, 500, "easeOutQuart");
        $("#CertificateLogo-Pre")
          .delay(400)
          .animate({ left: "100", opacity: 0 }, 500, "easeOutQuart");
      } else if (Page == "EVENTS") {
        $("#Events-Box").css({ "z-index": "101" }).delay(1000).fadeOut();
        $("#EventsLogo-Back").animate(
          { transform: "scale(0)", opacity: 0 },
          500,
          "easeOutQuart"
        );
        $("#EventsLogo-Line").animate({ opacity: 0 }, 500, "easeOutQuart");
        $("#EventsCircle2, #EventsCircle3, #EventsCircle4").animate(
          { transform: "scale(0)", opacity: 0 },
          1500,
          "easeOutQuart"
        );
        $("#EventsLogo-Title").animate(
          { left: "100", opacity: 0 },
          500,
          "easeOutQuart"
        );
        $("#EventsLogo-Pre").animate(
          { left: "100", opacity: 0 },
          500,
          "easeOutQuart"
        );
        $("#EventsDetails").animate({ opacity: 0 }, 500, "easeOutQuart");
        $("#EventsList").animate(
          { left: "0", opacity: 0 },
          500,
          "easeOutQuart"
        );
        $("#EDW").animate(
          { "margin-left": "40", opacity: 0 },
          500,
          "easeOutQuart"
        );
      }

      Page = A;
      if (A == "HOME") {
        if (Slider == 1) SliderBlack();
        else SliderWhite();
        $("#ParallexBtn").css({ "margin-top": "-80px" });
        $(".PageBox").stop().fadeOut(500);
        $(".MainCircle")
          .delay(500)
          .stop()
          .animate({ transform: "scale(1)" }, 1000, "easeOutCubic");
        $("#PB-Home").addClass("ParallexBtnS");
        $(".ParallexSubBtn").stop().fadeOut();
        //$('#HB-Product').animate({ 'transform': 'scale(1)' }, 300, 'easeOutQuart');
        //$('#HB-Technology').delay(50).animate({ 'transform': 'scale(1)' }, 300, 'easeOutQuart');
        //$('#HB-About').delay(100).animate({ 'transform': 'scale(1)' }, 300, 'easeOutQuart');
        //$('#HB-Certificate').delay(150).animate({ 'transform': 'scale(1)' }, 300, 'easeOutQuart');
        //$('#HB-Contact').delay(200).animate({ 'transform': 'scale(1)' }, 300, 'easeOutQuart');
        //$('#HB-Events').delay(250).animate({ 'transform': 'scale(1)' }, 300, 'easeOutQuart');
        //$('#HB-Gallery').delay(300).animate({ 'transform': 'scale(1)' }, 300, 'easeOutQuart');
        //$('#HB-Video').delay(350).animate({ 'transform': 'scale(1)' }, 300, 'easeOutQuart');
        mousewheel = true;
      } else if (A == "ABOUT") {
        $("#About-Box").delay(500).fadeIn();
        $("#ParallexBtn").css({ "margin-top": "-110px" });
        $("#PB-AboutSub1").stop().fadeIn(100);
        $("#PB-AboutSub2").delay(100).stop().fadeIn(100);
        $("#PB-AboutSub3").delay(200).stop().fadeIn(100);
        $("#PB-AboutSub4").delay(300).stop().fadeIn(100);
        AboutPage(About);
        $("#AboutBtn")
          .stop()
          .delay(2500)
          .fadeIn(1000, function () {
            mousewheel = true;
          });
      } else if (Page == "TECHNOLOGY") {
        $("#PB-Technology").addClass("ParallexBtnS");
        SliderBlack();
        $("#Technology-Box")
          .css({ "z-index": "102" })
          .delay(500)
          .fadeIn(function () {});
        $("#TechnologyB1")
          .delay(1000)
          .animate(
            { left: "42%", opacity: 1 },
            1000,
            "easeOutQuart",
            function () {
              mousewheel = true;
            }
          );
      } else if (Page == "CONTACT") {
        $("#PB-Contact").addClass("ParallexBtnS");
        SliderBlack();
        $("#Contact-Box")
          .css({ "z-index": "102" })
          .delay(500)
          .fadeIn(function () {
            $("#ContactInfo-Line").animate({ opacity: 1 }, 800, "easeOutQuart");
            $("#ContactInfo-Back")
              .delay(500)
              .animate(
                { transform: "scale(1)" },
                800,
                "easeOutQuart",
                function () {
                  $("#ContactInfo-Pre").animate(
                    { left: "40px", opacity: 1 },
                    700,
                    "easeOutQuart"
                  );
                  $("#ContactInfo-Title")
                    .delay(200)
                    .animate({ left: "0", opacity: 1 }, 1000, "easeOutQuart");
                  $(
                    "#ContactInfo-Addr1, #ContactInfo-Addr2, #ContactInfo-Addr3,  #ContactInfo-Tel, #ContactInfo-Fax, #ContactInfo-Email"
                  )
                    .delay(400)
                    .animate(
                      { left: "150px", opacity: 1 },
                      1000,
                      "easeOutQuart"
                    );
                  $("#ContactInfo-Barcode")
                    .delay(600)
                    .animate({ opacity: 1 }, 1000, "easeOutQuart");
                  $("#ContactBtn")
                    .delay(600)
                    .animate({ opacity: 1 }, 1000, "easeOutQuart");
                  $("#MailBox")
                    .delay(600)
                    .animate(
                      { width: "630px", "margin-left": "-285px" },
                      750,
                      "easeOutQuart"
                    );
                  $("#Contact-Box iframe")
                    .delay(1200)
                    .animate({ opacity: 1 }, 1500, "easeOutQuart", function () {
                      mousewheel = true;
                    });
                }
              );
          });
      } else if (Page == "PRODUCTS") {
        $("#PB-ProductsSub1").addClass("ParallexBtnS");
        SliderBlack();
        $("#ParallexBtn").css({ "margin-top": "-110px" });
        $("#PB-ProductsSub1").stop().fadeIn(100);
        $("#PB-ProductsSub2").delay(100).stop().fadeIn(100);
        $("#PB-ProductsSub3").delay(200).stop().fadeIn(100);
        $("#PB-ProductsSub4").delay(300).stop().fadeIn(100);
        $("#Products-Box")
          .css({ "z-index": "102" })
          .delay(500)
          .fadeIn(function () {
            $("#ProductsLogo-Back")
              .delay(100)
              .animate(
                { transform: "scale(1)", opacity: 1 },
                500,
                "easeOutQuart"
              );
            $("#ProductsLogo-Line")
              .delay(300)
              .animate({ opacity: 1 }, 500, "easeOutQuart");
            $("#ProductsCircle2, #ProductsCircle3, #ProductsCircle4")
              .delay(300)
              .animate(
                { transform: "scale(1)", opacity: 0.2 },
                1500,
                "easeOutQuart"
              );
            $("#ProductsLogo-Title")
              .delay(300)
              .animate({ left: "70", opacity: 1 }, 500, "easeOutQuart");
            $("#ProductsLogo-Pre")
              .delay(400)
              .animate({ left: "70", opacity: 1 }, 500, "easeOutQuart");
            $("#ProductsMenu")
              .delay(500)
              .animate({ left: "120", opacity: 1 }, 500, "easeOutQuart");
            $("#ProductsList")
              .delay(800)
              .animate(
                { left: "430", opacity: 1 },
                1000,
                "easeOutQuart",
                function () {
                  mousewheel = true;
                }
              );
          });
      } else if (Page == "CERTIFICATE") {
        $("#PB-CertificateSub1").addClass("ParallexBtnS");
        SliderBlack();
        $("#ParallexBtn").css({ "margin-top": "-110px" });
        $("#PB-CertificateSub1").stop().fadeIn(100);
        $("#PB-CertificateSub2").delay(100).stop().fadeIn(100);
        $("#PB-CertificateSub3").delay(200).stop().fadeIn(100);
        $("#PB-CertificateSub4").delay(300).stop().fadeIn(100);
        $("#Certificate-Box")
          .css({ "z-index": "102" })
          .delay(500)
          .fadeIn(function () {
            $("#CertificateLogo-Back")
              .delay(100)
              .animate(
                { transform: "scale(1)", opacity: 1 },
                500,
                "easeOutQuart"
              );
            $("#CertificateLogo-Line")
              .delay(300)
              .animate({ opacity: 1 }, 500, "easeOutQuart");
            $("#CertificateCircle2, #CertificateCircle3, #CertificateCircle4")
              .delay(300)
              .animate(
                { transform: "scale(1)", opacity: 0.1 },
                1500,
                "easeOutQuart"
              );
            $("#CertificateLogo-Title")
              .delay(300)
              .animate(
                { left: "35", top: "50", opacity: 1 },
                500,
                "easeOutQuart"
              );
            $("#CertificateLogo-Pre")
              .delay(400)
              .animate(
                { left: "35", top: "80px", opacity: 1 },
                500,
                "easeOutQuart"
              );
            $("#CertificateMenu")
              .delay(500)
              .animate({ left: "10px", opacity: 1 }, 500, "easeOutQuart");
            $("#Certificate-StandardBox")
              .fadeIn()
              .delay(800)
              .animate(
                { left: "500", opacity: 1 },
                1000,
                "easeOutQuart",
                function () {
                  mousewheel = true;
                }
              );
          });
      } else if (Page == "EVENTS") {
        $("#PB-Events").addClass("ParallexBtnS");
        SliderBlack();
        $("#ParallexBtn").css({ "margin-top": "-80px" });
        $("#Events-Box")
          .css({ "z-index": "102" })
          .delay(500)
          .fadeIn(function () {
            $("#EventsLogo-Back")
              .delay(100)
              .animate(
                { transform: "scale(1)", opacity: 1 },
                500,
                "easeOutQuart"
              );
            $("#EventsLogo-Line")
              .delay(300)
              .animate({ opacity: 1 }, 500, "easeOutQuart");
            $("#EventsCircle2, #EventsCircle3, #EventsCircle4")
              .delay(300)
              .animate(
                { transform: "scale(1)", opacity: 0.12 },
                1500,
                "easeOutQuart"
              );
            $("#EventsLogo-Title")
              .delay(300)
              .animate({ left: "70", opacity: 1 }, 500, "easeOutQuart");
            $("#EventsLogo-Pre")
              .delay(400)
              .animate({ left: "70", opacity: 1 }, 500, "easeOutQuart");
            $("#EventsDetails")
              .delay(800)
              .animate({ opacity: 1 }, 500, "easeOutQuart");
            $("#EventsList")
              .delay(1000)
              .animate({ left: "20px", opacity: 1 }, 500, "easeOutQuart");
            $("#EDW")
              .delay(1000)
              .animate(
                { "margin-left": "40", opacity: 1 },
                500,
                "easeOutQuart",
                function () {
                  mousewheel = true;
                }
              );
          });
      }
    }
  }
  $("#PB-Home, #Logo, #HomeBtn").click(function () {
    PageOpen("HOME");
  });
  $("#PB-About, #MainText1").click(function () {
    PageOpen("ABOUT");
  });
  $("#PB-Products, #MainText2").click(function () {
    PageOpen("PRODUCTS");
  });
  $("#PB-Certificate, #MainText3").click(function () {
    PageOpen("CERTIFICATE");
  });
  $("#PB-Technology, #MainText4").click(function () {
    PageOpen("TECHNOLOGY");
  });
  $("#PB-Events, #MainText6,").click(function () {
    PageOpen("EVENTS");
  });
  $("#PB-Contact, #MainText5").click(function () {
    PageOpen("CONTACT");
  });

  //////////////

  $(
    "#AboutPrevBtn, #AboutNextBtn, #TechnologyPrevBtn, #TechnologyNextBtn, #ContactPrevBtn, #ContactNextBtn, .CBtn, #ContactCloseBtn, #CDocCloseBtn, #PDetailsCloseBtn"
  ).hover(
    function () {
      $(this)
        .find(".CircleBack1 ")
        .animate({ transform: "scale(0)" }, 200, "easeInOutCubic");
      $(this)
        .find(".CircleBack2 ")
        .animate({ transform: "scale(1)" }, 200, "easeInOutCubic");
      $(this)
        .find(".CircleIcon")
        .animate({ transform: "scale(0.9)" }, 200, "easeInOutCubic");
    },
    function () {
      $(this)
        .find(".CircleBack1 ")
        .animate({ transform: "scale(1)" }, 200, "easeInOutCubic");
      $(this)
        .find(".CircleBack2 ")
        .animate({ transform: "scale(0)" }, 200, "easeInOutCubic");
      $(this)
        .find(".CircleIcon")
        .animate({ transform: "scale(0.8)" }, 200, "easeInOutCubic");
    }
  );

  function AboutClose() {
    if (About == "Group") {
      //$('#AboutCircle1').stop().animate({ 'transform': 'scale(0)' }, 1000, 'easeInQuart');
      $("#AboutPic1")
        .stop()
        .animate({ transform: "scale(0)" }, 1000, "easeInQuart");
      $("#AboutGroupTextBox")
        .stop()
        .animate({ left: "45%", opacity: "0" }, 1500, "easeInQuart");
      $("#AboutGroupBox")
        .css({ "z-index": "101" })
        .delay(1000)
        .stop()
        .fadeOut(500);
    } else if (About == "Mission") {
      $("#AboutMissionD0")
        .stop()
        .animate(
          { opacity: "0", "margin-left": "-500px" },
          1000,
          "easeInQuart"
        );
      $("#AboutMissionD1")
        .delay(1000)
        .stop()
        .animate(
          { opacity: "0", "margin-top": "-273px", "margin-left": "50px" },
          800,
          "easeInQuart"
        );
      $("#AboutMissionD2")
        .delay(1000)
        .stop()
        .animate(
          { opacity: "0", "margin-top": "110px", "margin-left": "-431px" },
          800,
          "easeInQuart"
        );
      $("#AboutMissionD3")
        .delay(1000)
        .stop()
        .animate(
          { opacity: "0", "margin-top": "140px", "margin-left": "242px" },
          800,
          "easeInQuart"
        );
      $("#AboutMissionTitle1")
        .stop()
        .animate({ opacity: "0", "margin-left": "0px" }, 1000, "easeInQuart");
      $("#AboutMissionTitle2")
        .stop()
        .animate({ opacity: "0", "margin-left": "-57px" }, 1000, "easeInQuart");
      $("#AboutMissionPic")
        .delay(500)
        .stop()
        .animate({ transform: "scale(0)" }, 1000, "easeInQuart");
      $("#AboutMissionBox")
        .css({ "z-index": "101" })
        .delay(1000)
        .stop()
        .fadeOut(500);
    } else if (About == "Export") {
      $("#AE-MapLine").stop().animate({ opacity: "0" }, 500, "easeInQuart");
      $("#AboutExportBox2 .Text")
        .stop()
        .animate({ "margin-left": "-330px", opacity: "0" }, 800, "easeInQuart");
      $("#AboutExportBox2 .Text2")
        .stop()
        .animate({ "margin-left": "97px", opacity: "0" }, 800, "easeInQuart");
      $("#MapEuropeanBtn")
        .delay(100)
        .stop()
        .animate({ "margin-left": "-125px", opacity: "0" }, 800, "easeInQuart");
      $("#MapAfricanBtn")
        .delay(200)
        .stop()
        .animate({ "margin-left": "-290px", opacity: "0" }, 800, "easeInQuart");
      $("#AboutExportBox1")
        .css({ "z-index": "100" })
        .delay(1000)
        .stop()
        .fadeOut(500);
      $("#AboutExportBox2")
        .css({ "z-index": "101" })
        .delay(1000)
        .stop()
        .fadeOut(500);
    } else if (About == "Transport") {
      $("#TransportLine").fadeOut(300);
      $("#AboutTransportTextBox")
        .stop()
        .animate({ "margin-left": "80px", opacity: "0" }, 500, "easeInQuart");
      $(".AT-Bullet, .AT-Bullet1, .AT-Bullet2, .AT-Bullet3")
        .delay(500)
        .stop()
        .animate({ opacity: "0" }, 500, "easeInQuart");
      $("#TransportBtn-Road")
        .stop()
        .animate({ opacity: "0", "margin-top": "-326px" }, 500, "easeInQuart");
      $("#TransportBtn-SEA")
        .stop()
        .animate({ opacity: "0", "margin-top": "198px" }, 500, "easeInQuart");
      $("#TransportBtn-Rail")
        .stop()
        .animate({ opacity: "0", "margin-left": "300px" }, 500, "easeInQuart");
      $("#TransportPic").delay(500).stop().animate(
        {
          transform: "scale(0)",
          "margin-top": "-230px",
          "margin-left": "-305px",
        },
        500,
        "easeInQuart"
      );
      $("#AboutTransportBox")
        .css({ "z-index": "101" })
        .delay(1000)
        .stop()
        .fadeOut(500);
    }
  }

  var AboutNext = true;

  function AboutPage(X) {
    if (AboutNext) {
      AboutNext = false;
      $(".ParallexSubBtn").removeClass("ParallexBtnS");
      AboutClose();
      $(
        "#AboutGroupBox, #AboutMissionBox, #AboutExportBox1, #AboutExportBox2, AboutTransportBox"
      )
        .stop()
        .fadeOut();
      About = X;
      var N,
        S3,
        S4,
        S5,
        S6,
        L3,
        L4,
        L5,
        L6,
        O3,
        O4,
        O5,
        O6,
        AC3,
        AC4,
        AC5,
        AC6,
        BColor;
      if (X == "Group") {
        $("#AboutGroupBox")
          .css({ "z-index": "102" })
          .delay(1000)
          .stop()
          .fadeIn(500);
        $("#PB-AboutSub1").addClass("ParallexBtnS");
        //$('#AboutCircle1').delay(800).stop().animate({ 'transform': 'scale(1)' }, 1000, 'easeOutQuart');
        $("#AboutPic1")
          .delay(800)
          .stop()
          .animate({ transform: "scale(1)" }, 1000, "easeOutQuart");
        $("#AboutGroupTextBox")
          .delay(800)
          .stop()
          .animate(
            { left: "50%", opacity: "1" },
            1500,
            "easeOutQuart",
            function () {
              AboutNext = true;
            }
          );
        SliderBlack();
        $("#AboutPrevBtn .CircleIcon, #AboutNextBtn .CircleIcon").css({
          "background-position": "-520px 0",
        });
        BColor = "#f8f8f8";
        $("#About-Box .PageBack2")
          .delay(1000)
          .stop()
          .animate({ opacity: "0.02" }, 500, "easeInOutSine");
        $("#About-Box .PageBack3")
          .delay(1000)
          .stop()
          .animate({ opacity: "0" }, 500, "easeInOutSine");
        $("#About-Box .PageBackPattern")
          .stop()
          .animate({ opacity: "0.3" }, 500, "easeInOutSine");
        $(".AboutCircleBack")
          .stop()
          .animate({ borderColor: "#000" }, 500, "easeInOutSine");
        (S3 = 472), (S4 = 612), (S5 = 800), (S6 = 1000);
        L3 = 530;
        L4 = 580;
        L5 = 630;
        L6 = 680;
        O3 = 0.07;
        O4 = 0.06;
        O5 = 0.05;
        O6 = 0.04;
        AC3 = "AC3";
        AC4 = "AC4";
        AC5 = "AC5";
        AC6 = "AC6";
        Speed = " 25s";
        N = 3;
        About = "Group";
      } else if (X == "Mission") {
        $("#AboutMissionBox")
          .css({ "z-index": "102" })
          .delay(1000)
          .stop()
          .fadeIn(500);
        $("#PB-AboutSub2").addClass("ParallexBtnS");
        $("#AboutMissionPic")
          .delay(800)
          .stop()
          .animate({ transform: "scale(1)" }, 1000, "easeOutQuart");
        $("#AboutMissionTitle1")
          .delay(700)
          .stop()
          .animate(
            { opacity: "1", "margin-left": "-10px" },
            1000,
            "easeOutQuart"
          );
        $("#AboutMissionTitle2")
          .delay(700)
          .stop()
          .animate(
            { opacity: "1", "margin-left": "-47px" },
            1000,
            "easeOutQuart"
          );
        $("#AboutMissionD0")
          .delay(1300)
          .stop()
          .animate(
            { opacity: "0.95", "margin-left": "-450px" },
            1000,
            "easeOutQuart"
          );
        $("#AboutMissionD1")
          .delay(1500)
          .stop()
          .animate(
            { opacity: "0.9", "margin-top": "-258px", "margin-left": "40px" },
            800,
            "easeOutQuart"
          );
        $("#AboutMissionD2")
          .delay(1500)
          .stop()
          .animate(
            { opacity: "0.9", "margin-top": "97px", "margin-left": "-411px" },
            800,
            "easeOutQuart"
          );
        $("#AboutMissionD3")
          .delay(1500)
          .stop()
          .animate(
            { opacity: "0.9", "margin-top": "125px", "margin-left": "222px" },
            800,
            "easeOutQuart",
            function () {
              AboutNext = true;
            }
          );

        SliderBlack();
        $("#AboutPrevBtn .CircleIcon, #AboutNextBtn .CircleIcon").css({
          "background-position": "-560px 0",
        });
        BColor = "#f8f8f8";
        $("#About-Box .PageBack2")
          .delay(1000)
          .stop()
          .animate({ opacity: "0" }, 500, "easeInOutSine");
        $("#About-Box .PageBack3")
          .delay(1000)
          .stop()
          .animate({ opacity: "0.02" }, 500, "easeInOutSine");
        $("#About-Box .PageBackPattern")
          .stop()
          .animate({ opacity: "0.3" }, 500, "easeInOutSine");
        $(".AboutCircleBack")
          .stop()
          .animate({ borderColor: "#000" }, 500, "easeInOutSine");
        (S3 = 760), (S4 = 600), (S5 = 940), (S6 = 1140);
        L3 = 380;
        L4 = 300;
        L5 = 470;
        L6 = 570;
        O3 = 0.07;
        O4 = 0.06;
        O5 = 0.05;
        O6 = 0.04;
        AC3 = "AC32";
        AC4 = "AC42";
        AC5 = "AC52";
        AC6 = "AC62";
        Speed = " 25s";
        N = 4;
        About = "Mission";
      } else if (X == "Export") {
        $("#AboutExportBox1")
          .css({ "z-index": "102" })
          .delay(1000)
          .stop()
          .fadeIn(1000, function () {
            $("#AboutExportBox2").css({ "z-index": "103" }).stop().fadeIn(800);
            $("#AE-MapLine")
              .delay(600)
              .stop()
              .animate({ opacity: "0.4" }, 500, "easeOutQuart");
            $("#AboutExportBox2 .Text")
              .delay(500)
              .stop()
              .animate(
                { "margin-left": "-300px", opacity: "1" },
                800,
                "easeOutQuart"
              );
            $("#AboutExportBox2 .Text2")
              .delay(500)
              .stop()
              .animate(
                { "margin-left": "67px", opacity: "1" },
                800,
                "easeOutQuart"
              );
            $("#MapEuropeanBtn")
              .delay(600)
              .stop()
              .animate(
                { "margin-left": "-95px", opacity: "1" },
                800,
                "easeOutQuart"
              );
            $("#MapAfricanBtn")
              .delay(700)
              .stop()
              .animate(
                { "margin-left": "-260px", opacity: "1" },
                800,
                "easeOutQuart",
                function () {
                  AboutNext = true;
                }
              );
          });
        $("#PB-AboutSub3").addClass("ParallexBtnS");
        SliderWhite();
        $("#AboutPrevBtn .CircleIcon, #AboutNextBtn .CircleIcon").css({
          "background-position": "-560px 0",
        });
        BColor = "#746cde";
        $("#About-Box .PageBack2")
          .delay(1000)
          .stop()
          .animate({ opacity: "0" }, 500, "easeInOutSine");
        $("#About-Box .PageBack3")
          .delay(1000)
          .stop()
          .animate({ opacity: "0.0" }, 500, "easeInOutSine");
        $("#About-Box .PageBackPattern")
          .stop()
          .animate({ opacity: "0.3" }, 500, "easeInOutSine");
        $(".AboutCircleBack")
          .stop()
          .animate({ borderColor: "#fff" }, 500, "easeInOutSine");
        (S3 = 900), (S4 = 1040), (S5 = 760), (S6 = 1200);
        L3 = 450;
        L4 = 520;
        L5 = 380;
        L6 = 600;
        O3 = 0.07;
        O4 = 0.06;
        O5 = 0.05;
        O6 = 0.04;
        AC3 = "AC33";
        AC4 = "AC43";
        AC5 = "AC32";
        AC6 = "AC63";
        Speed = " 25s";
        N = 5;
        About = "Export";
      } else if (X == "Transport") {
        $("#AboutTransportBox")
          .css({ "z-index": "102" })
          .delay(1000)
          .stop()
          .fadeIn(500, function () {
            $("#TransportPic").stop().animate(
              {
                transform: "scale(1)",
                "margin-top": "-250px",
                "margin-left": "-360px",
              },
              1000,
              "easeOutQuart"
            );
            $("#TransportBtn-Road")
              .delay(1000)
              .stop()
              .animate(
                { opacity: "1", "margin-top": "-306px" },
                1000,
                "easeOutQuart"
              );
            $("#TransportBtn-SEA")
              .delay(1000)
              .stop()
              .animate(
                { opacity: "1", "margin-top": "178px" },
                1000,
                "easeOutQuart"
              );
            $("#TransportBtn-Rail")
              .delay(1000)
              .stop()
              .animate(
                { opacity: "1", "margin-left": "280px" },
                1000,
                "easeOutQuart"
              );
            $(".AT-Bullet, .AT-Bullet1, .AT-Bullet2, .AT-Bullet3")
              .delay(500)
              .stop()
              .animate({ opacity: "1" }, 500, "easeOutQuart", function () {
                $("#TransportLine").stop().fadeIn(1000);
                $("#AboutTransportTextBox")
                  .stop()
                  .animate(
                    { "margin-left": "40px", opacity: "1" },
                    1000,
                    "easeOutQuart",
                    function () {
                      AboutNext = true;
                    }
                  );
              });
          });
        $("#PB-AboutSub4").addClass("ParallexBtnS");
        SliderBlack();
        $("#AboutPrevBtn .CircleIcon, #AboutNextBtn .CircleIcon").css({
          "background-position": "-560px 0",
        });
        BColor = "#f8f8f8";
        $("#About-Box .PageBack2")
          .delay(1000)
          .stop()
          .animate({ opacity: "0" }, 500, "easeInOutSine");
        $("#About-Box .PageBack3")
          .delay(1000)
          .stop()
          .animate({ opacity: "0.03" }, 500, "easeInOutSine");
        $("#About-Box .PageBackPattern")
          .stop()
          .animate({ opacity: "0.3" }, 500, "easeInOutSine");
        $(".AboutCircleBack")
          .stop()
          .animate({ borderColor: "#000" }, 500, "easeInOutSine");
        (S3 = 900), (S4 = 1040), (S6 = 760), (S5 = 1200);
        L3 = 450;
        L4 = 520;
        L6 = 380;
        L5 = 600;
        O3 = 0.07;
        O4 = 0.06;
        O5 = 0.05;
        O6 = 0.04;
        AC3 = "AC33";
        AC4 = "AC43";
        AC6 = "AC32";
        AC5 = "AC63";
        Speed = " 25s";
        N = 6;
        About = "Transport";
      }
      $(
        "#AboutBCircle3, #AboutBCircle4, #AboutBCircle5, #AboutBCircle6"
      ).addClass("Bullet2-ds");
      $("#AboutBCircle" + N).removeClass("Bullet2-ds");
      $("#AboutCircle3")
        .stop()
        .animate({ opacity: 0 }, 1200, "easeInQuart", function () {
          $("#About-Box .PageBack").animate(
            { backgroundColor: BColor },
            500,
            "easeOutCubic"
          );
          $("#AboutCircle3")
            .css({
              width: S3 + "px",
              height: S3 + "px",
              "margin-top": -(S3 / 2) + "px",
              "margin-left": -L3 + "px",
            })
            .animate(
              { transform: "scale(1)", opacity: 1 },
              1000,
              "easeOutQuart"
            );
          $("#AboutBCircle3").css({
            animation: AC3 + Speed + " infinite linear",
          });
          $("#AboutBCircle4").css({
            animation: AC4 + Speed + " infinite linear",
          });
          $("#AboutBCircle5").css({
            animation: AC5 + Speed + " infinite linear",
          });
          $("#AboutBCircle6").css({
            animation: AC6 + Speed + " infinite linear",
          });
        });
      $("#AboutCircle3 .AboutCircleBack").animate(
        { opacity: O3 },
        1000,
        "easeInOutSine"
      );
      $("#AboutCircle4")
        .stop()
        .animate({ opacity: 0 }, 1200, "easeInQuart", function () {
          $("#About-Box .PageBack").animate(
            { backgroundColor: BColor },
            500,
            "easeOutCubic"
          );
          $("#AboutCircle4")
            .css({
              width: S4 + "px",
              height: S4 + "px",
              "margin-top": -(S4 / 2) + "px",
              "margin-left": -L4 + "px",
            })
            .animate(
              { transform: "scale(1)", opacity: 1 },
              1000,
              "easeOutQuart"
            );
          $("#AboutBCircle3").css({
            animation: AC3 + Speed + " infinite linear",
          });
          $("#AboutBCircle4").css({
            animation: AC4 + Speed + " infinite linear",
          });
          $("#AboutBCircle5").css({
            animation: AC5 + Speed + " infinite linear",
          });
          $("#AboutBCircle6").css({
            animation: AC6 + Speed + " infinite linear",
          });
        });
      $("#AboutCircle4 .AboutCircleBack").animate(
        { opacity: O4 },
        1000,
        "easeInOutSine"
      );
      $("#AboutCircle5")
        .stop()
        .animate({ opacity: 0 }, 1200, "easeInQuart", function () {
          $("#About-Box .PageBack").animate(
            { backgroundColor: BColor },
            500,
            "easeOutCubic"
          );
          $("#AboutCircle5")
            .css({
              width: S5 + "px",
              height: S5 + "px",
              "margin-top": -(S5 / 2) + "px",
              "margin-left": -L5 + "px",
            })
            .animate(
              { transform: "scale(1)", opacity: 1 },
              1000,
              "easeOutQuart"
            );
          $("#AboutBCircle3").css({
            animation: AC3 + Speed + " infinite linear",
          });
          $("#AboutBCircle4").css({
            animation: AC4 + Speed + " infinite linear",
          });
          $("#AboutBCircle5").css({
            animation: AC5 + Speed + " infinite linear",
          });
          $("#AboutBCircle6").css({
            animation: AC6 + Speed + " infinite linear",
          });
        });
      $("#AboutCircle5 .AboutCircleBack").animate(
        { opacity: O5 },
        1000,
        "easeInOutSine"
      );
      $("#AboutCircle6")
        .stop()
        .animate({ opacity: 0 }, 1200, "easeInQuart", function () {
          $("#About-Box .PageBack").animate(
            { backgroundColor: BColor },
            500,
            "easeOutCubic"
          );
          $("#AboutCircle6")
            .css({
              width: S6 + "px",
              height: S6 + "px",
              "margin-top": -(S6 / 2) + "px",
              "margin-left": -L6 + "px",
            })
            .animate(
              { transform: "scale(1)", opacity: 1 },
              1000,
              "easeOutQuart"
            );
          $("#AboutBCircle3").css({
            animation: AC3 + Speed + " infinite linear",
          });
          $("#AboutBCircle4").css({
            animation: AC4 + Speed + " infinite linear",
          });
          $("#AboutBCircle5").css({
            animation: AC5 + Speed + " infinite linear",
          });
          $("#AboutBCircle6").css({
            animation: AC6 + Speed + " infinite linear",
          });
        });
      $("#AboutCircle6 .AboutCircleBack").animate(
        { opacity: O6 },
        1000,
        "easeInOutSine"
      );
    }
  }

  $("#PB-AboutSub1").click(function () {
    AboutPage("Group");
  });
  $("#PB-AboutSub2").click(function () {
    AboutPage("Mission");
  });
  $("#PB-AboutSub3").click(function () {
    AboutPage("Export");
  });
  $("#PB-AboutSub4").click(function () {
    AboutPage("Transport");
  });

  function AEHover(A, B) {
    $("#AE-Map" + A)
      .stop()
      .animate({ opacity: "0." + B }, 300, "easeInOutCubic");
  }

  $("#AE-Afghanistan").hover(
    function () {
      AEHover("Afghanistan", 9);
    },
    function () {
      AEHover("Afghanistan", 0);
    }
  );
  $("#AE-Uzbekistan").hover(
    function () {
      AEHover("Uzbekistan", 9);
    },
    function () {
      AEHover("Uzbekistan", 0);
    }
  );
  $("#AE-Pakistan").hover(
    function () {
      AEHover("Pakistan", 9);
    },
    function () {
      AEHover("Pakistan", 0);
    }
  );
  $("#AE-India").hover(
    function () {
      AEHover("India", 9);
    },
    function () {
      AEHover("India", 0);
    }
  );
  $("#AE-Iraq").hover(
    function () {
      AEHover("Iraq", 9);
    },
    function () {
      AEHover("Iraq", 0);
    }
  );
  $("#AE-Turkey").hover(
    function () {
      AEHover("Turkey", 9);
    },
    function () {
      AEHover("Turkey", 0);
    }
  );
  $("#AE-Bulgaria").hover(
    function () {
      AEHover("Bulgaria", 9);
    },
    function () {
      AEHover("Bulgaria", 0);
    }
  );
  $("#AE-Ukraine").hover(
    function () {
      AEHover("Ukrain", 9);
    },
    function () {
      AEHover("Ukrain", 0);
    }
  );
  $("#AE-Russia").hover(
    function () {
      AEHover("Russia", 9);
    },
    function () {
      AEHover("Russia", 0);
    }
  );
  $("#AE-Georgia").hover(
    function () {
      AEHover("Georgia", 9);
    },
    function () {
      AEHover("Georgia", 0);
    }
  );
  $("#AE-Armenia").hover(
    function () {
      AEHover("Armenia", 9);
    },
    function () {
      AEHover("Armenia", 0);
    }
  );
  $("#AE-Azerbaijan").hover(
    function () {
      AEHover("Azerbaijan", 9);
    },
    function () {
      AEHover("Azerbaijan", 0);
    }
  );

  $("#MapEuropeanBtn").hover(
    function () {
      AEHover("Europe", 6);
      $(this)
        .find(".MapBtnBack")
        .animate({ opacity: "0.8" }, 200, "easeInOutCubic");
    },
    function () {
      AEHover("Europe", 0);
      $(this)
        .find(".MapBtnBack")
        .animate({ opacity: "0.3" }, 200, "easeInOutCubic");
    }
  );
  $("#MapAfricanBtn").hover(
    function () {
      AEHover("African", 6);
      $(this)
        .find(".MapBtnBack")
        .animate({ opacity: "0.8" }, 200, "easeInOutCubic");
    },
    function () {
      AEHover("African", 0);
      $(this)
        .find(".MapBtnBack")
        .animate({ opacity: "0.3" }, 200, "easeInOutCubic");
    }
  );

  $("#AboutNextBtn").click(function () {
    if (About == "Group") {
      AboutPage("Mission");
    } else if (About == "Mission") {
      AboutPage("Export");
    } else if (About == "Export") {
      AboutPage("Transport");
    } else if (About == "Transport") {
      AboutPage("Group");
    }
  });
  $("#AboutPrevBtn").click(function () {
    if (About == "Group") {
      AboutPage("Transport");
    } else if (About == "Mission") {
      AboutPage("Group");
    } else if (About == "Export") {
      AboutPage("Mission");
    } else if (About == "Transport") {
      AboutPage("Export");
    }
  });

  ///////////////////////////////////////////////////    Technology  ----------------------------------

  var Tech = 1;
  $("#TechnologyNextBtn").click(function () {
    if (Tech == 1) {
      $("#TechnologyB1").animate(
        { left: "45%", opacity: 0 },
        1000,
        "easeOutQuart"
      );
      $("#TechnologyB2")
        .delay(1000)
        .animate({ left: "42%", opacity: 1 }, 1000, "easeOutQuart");
      Tech = 2;
    } else if (Tech == 2) {
      $("#TechnologyB2").animate(
        { left: "45%", opacity: 0 },
        1000,
        "easeInQuart"
      );
      $("#TechnologyB3")
        .delay(1000)
        .animate({ left: "42%", opacity: 1 }, 1000, "easeOutQuart");
      Tech = 3;
    } else if (Tech == 3) {
      $("#TechnologyB3").animate(
        { left: "45%", opacity: 0 },
        1000,
        "easeInQuart"
      );
      $("#TechnologyB4")
        .delay(1000)
        .animate({ left: "42%", opacity: 1 }, 1000, "easeOutQuart");
      Tech = 4;
    } else if (Tech == 4) {
      $("#TechnologyB4").animate(
        { left: "45%", opacity: 0 },
        1000,
        "easeInQuart"
      );
      $("#TechnologyB5")
        .delay(1000)
        .animate({ left: "42%", opacity: 1 }, 1000, "easeOutQuart");
      Tech = 5;
    } else if (Tech == 5) {
      $("#TechnologyB5").animate(
        { left: "45%", opacity: 0 },
        1000,
        "easeInQuart"
      );
      //   // new new new
      //   $("#TechnologyB6")
      //     .delay(1000)
      //     .animate({ left: "42%", opacity: 1 }, 1000, "easeOutQuart");
      //   Tech = 6;
      // } else if (Tech == 6) {
      //   $("#TechnologyB6").animate(
      //     { left: "45%", opacity: 0 },
      //     1000,
      //     "easeInQuart"
      //   );

      //   $("#TechnologyB7")
      //     .delay(1000)
      //     .animate({ left: "42%", opacity: 1 }, 1000, "easeOutQuart");
      //   Tech = 7;
      // } else if (Tech == 7) {
      //   $("#TechnologyB7").animate(
      //     { left: "45%", opacity: 0 },
      //     1000,
      //     "easeInQuart"
      //   );

      //   $("#TechnologyB8")
      //     .delay(1000)
      //     .animate({ left: "42%", opacity: 1 }, 1000, "easeOutQuart");
      //   Tech = 8;
      // } else if (Tech == 8) {
      //   $("#TechnologyB8").animate(
      //     { left: "45%", opacity: 0 },
      //     1000,
      //     "easeInQuart"
      //   );

      //   $("#TechnologyB9")
      //     .delay(1000)
      //     .animate({ left: "42%", opacity: 1 }, 1000, "easeOutQuart");
      //   Tech = 9;
      // } else if (Tech == 9) {
      //   $("#TechnologyB9").animate(
      //     { left: "45%", opacity: 0 },
      //     1000,
      //     "easeInQuart"
      //   );

      //   $("#TechnologyB10")
      //     .delay(1000)
      //     .animate({ left: "42%", opacity: 1 }, 1000, "easeOutQuart");
      //   Tech = 10;
      // } else if (Tech == 10) {
      //   $("#TechnologyB10").animate(
      //     { left: "45%", opacity: 0 },
      //     1000,
      //     "easeInQuart"
      //   );
      // new new new

      $("#TechnologyB1")
        .delay(1000)
        .animate({ left: "42%", opacity: 1 }, 1000, "easeOutQuart");
      Tech = 1;
    }
  });
  $("#TechnologyPrevBtn").click(function () {
    if (Tech == 1) {
      $("#TechnologyB1").animate(
        { left: "45%", opacity: 0 },
        1000,
        "easeInQuart"
      );
      $("#TechnologyB5")
        .delay(1000)
        .animate({ left: "42%", opacity: 1 }, 1000, "easeOutQuart");
      Tech = 5;
    } else if (Tech == 2) {
      $("#TechnologyB2").animate(
        { left: "45%", opacity: 0 },
        1000,
        "easeInQuart"
      );
      $("#TechnologyB1")
        .delay(1000)
        .animate({ left: "42%", opacity: 1 }, 1000, "easeOutQuart");
      Tech = 1;
    } else if (Tech == 3) {
      $("#TechnologyB3").animate(
        { left: "45%", opacity: 0 },
        1000,
        "easeInQuart"
      );
      $("#TechnologyB2")
        .delay(1000)
        .animate({ left: "42%", opacity: 1 }, 1000, "easeOutQuart");
      Tech = 2;
    } else if (Tech == 4) {
      $("#TechnologyB4").animate(
        { left: "45%", opacity: 0 },
        1000,
        "easeInQuart"
      );
      $("#TechnologyB3")
        .delay(1000)
        .animate({ left: "42%", opacity: 1 }, 1000, "easeOutQuart");
      Tech = 3;
    } else if (Tech == 5) {
      $("#TechnologyB5").animate(
        { left: "45%", opacity: 0 },
        1000,
        "easeInQuart"
      );
      $("#TechnologyB4")
        .delay(1000)
        .animate({ left: "42%", opacity: 1 }, 1000, "easeOutQuart");
      Tech = 4;
    }
    // new new new
    // else if (Tech == 5) {
    //   $("#TechnologyB5").animate(
    //     { left: "45%", opacity: 0 },
    //     1000,
    //     "easeInQuart"
    //   );
    //   $("#TechnologyB4")
    //     .delay(1000)
    //     .animate({ left: "42%", opacity: 1 }, 1000, "easeOutQuart");
    //   Tech = 4;
    // } else if (Tech == 6) {
    //   $("#TechnologyB6").animate(
    //     { left: "45%", opacity: 0 },
    //     1000,
    //     "easeInQuart"
    //   );
    //   $("#TechnologyB5")
    //     .delay(1000)
    //     .animate({ left: "42%", opacity: 1 }, 1000, "easeOutQuart");
    //   Tech = 5;
    // } else if (Tech == 6) {
    //   $("#TechnologyB6").animate(
    //     { left: "45%", opacity: 0 },
    //     1000,
    //     "easeInQuart"
    //   );
    //   $("#TechnologyB5")
    //     .delay(1000)
    //     .animate({ left: "42%", opacity: 1 }, 1000, "easeOutQuart");
    //   Tech = 5;
    // } else if (Tech == 7) {
    //   $("#TechnologyB7").animate(
    //     { left: "45%", opacity: 0 },
    //     1000,
    //     "easeInQuart"
    //   );
    //   $("#TechnologyB6")
    //     .delay(1000)
    //     .animate({ left: "42%", opacity: 1 }, 1000, "easeOutQuart");
    //   Tech = 6;
    // }
    // //
    // else if (Tech == 7) {
    //   $("#TechnologyB7").animate(
    //     { left: "45%", opacity: 0 },
    //     1000,
    //     "easeInQuart"
    //   );
    //   $("#TechnologyB6")
    //     .delay(1000)
    //     .animate({ left: "42%", opacity: 1 }, 1000, "easeOutQuart");
    //   Tech = 6;
    // } else if (Tech == 8) {
    //   $("#TechnologyB8").animate(
    //     { left: "45%", opacity: 0 },
    //     1000,
    //     "easeInQuart"
    //   );
    //   $("#TechnologyB7")
    //     .delay(1000)
    //     .animate({ left: "42%", opacity: 1 }, 1000, "easeOutQuart");
    //   Tech = 7;
    // }

    // //
    // else if (Tech == 8) {
    //   $("#TechnologyB8").animate(
    //     { left: "45%", opacity: 0 },
    //     1000,
    //     "easeInQuart"
    //   );
    //   $("#TechnologyB7")
    //     .delay(1000)
    //     .animate({ left: "42%", opacity: 1 }, 1000, "easeOutQuart");
    //   Tech = 7;
    // } else if (Tech == 9) {
    //   $("#TechnologyB9").animate(
    //     { left: "45%", opacity: 0 },
    //     1000,
    //     "easeInQuart"
    //   );
    //   $("#TechnologyB8")
    //     .delay(1000)
    //     .animate({ left: "42%", opacity: 1 }, 1000, "easeOutQuart");
    //   Tech = 8;
    // }

    // //
    // else if (Tech == 9) {
    //   $("#TechnologyB9").animate(
    //     { left: "45%", opacity: 0 },
    //     1000,
    //     "easeInQuart"
    //   );
    //   $("#TechnologyB8")
    //     .delay(1000)
    //     .animate({ left: "42%", opacity: 1 }, 1000, "easeOutQuart");
    //   Tech = 8;
    // } else if (Tech == 10) {
    //   $("#TechnologyB10").animate(
    //     { left: "45%", opacity: 0 },
    //     1000,
    //     "easeInQuart"
    //   );
    //   $("#TechnologyB9")
    //     .delay(1000)
    //     .animate({ left: "42%", opacity: 1 }, 1000, "easeOutQuart");
    //   Tech = 9;
    // }

    // //
    // else if (Tech == 10) {
    //   $("#TechnologyB10").animate(
    //     { left: "45%", opacity: 0 },
    //     1000,
    //     "easeInQuart"
    //   );
    //   $("#TechnologyB9")
    //     .delay(1000)
    //     .animate({ left: "42%", opacity: 1 }, 1000, "easeOutQuart");
    //   Tech = 9;
    // } else if (Tech == 1) {
    //   $("#TechnologyB1").animate(
    //     { left: "45%", opacity: 0 },
    //     1000,
    //     "easeInQuart"
    //   );
    //   $("#TechnologyB10")
    //     .delay(1000)
    //     .animate({ left: "42%", opacity: 1 }, 1000, "easeOutQuart");
    //   Tech = 10;
    // }

    // new new new
  });

  ///////////////////////////////////////////////////     Contact  ----------------------------------

  var Con = 1;
  $("#ContactNextBtn").click(function () {
    if (Con == 1) {
      $("#ContactInfo-Title").animate(
        { left: "80px", opacity: 0 },
        500,
        "easeOutQuart"
      );
      $("#ContactInfo-TitleX2")
        .delay(200)
        .animate({ left: "0", opacity: 1 }, 500, "easeOutQuart");
      $(
        "#ContactInfo-Addr1, #ContactInfo-Addr2, #ContactInfo-Addr3,  #ContactInfo-Tel, #ContactInfo-Fax, #ContactInfo-Email"
      )
        .delay(100)
        .animate({ left: "180px", opacity: 0 }, 500, "easeOutQuart");
      $(
        "#ContactInfo-Addr1X2, #ContactInfo-Addr2X2, #ContactInfo-Addr3X2,  #ContactInfo-TelX2, #ContactInfo-FaxX2, #ContactInfo-EmailX2, #ContactInfo-EmailX3"
      )
        .delay(300)
        .animate({ left: "150px", opacity: 1 }, 500, "easeOutQuart");
    } else if (Con == 2) {
      $("#ContactInfo-TitleX2").animate(
        { left: "80px", opacity: 0 },
        500,
        "easeOutQuart"
      );
      $("#ContactInfo-TitleX3")
        .delay(200)
        .animate({ left: "0", opacity: 1 }, 500, "easeOutQuart");
      $(
        "#ContactInfo-Addr1X2, #ContactInfo-Addr2X2, #ContactInfo-Addr3X2,  #ContactInfo-TelX2, #ContactInfo-FaxX2, #ContactInfo-EmailX2, #ContactInfo-EmailX3"
      )
        .delay(100)
        .animate({ left: "180px", opacity: 0 }, 500, "easeOutQuart");
      $(
        "#ContactInfo-Addr1X3, #ContactInfo-Addr2X3, #ContactInfo-Addr3X3,  #ContactInfo-TelX3, #ContactInfo-FaxX3"
      )
        .delay(300)
        .animate({ left: "150px", opacity: 1 }, 500, "easeOutQuart");
    }
    Con += 1;
  });

  $("#ContactPrevBtn").click(function () {
    if (Con == 2) {
      $("#ContactInfo-TitleX2").animate(
        { left: "80px", opacity: 0 },
        500,
        "easeOutQuart"
      );
      $("#ContactInfo-Title")
        .delay(200)
        .animate({ left: "0", opacity: 1 }, 500, "easeOutQuart");
      $(
        "#ContactInfo-Addr1X2, #ContactInfo-Addr2X2, #ContactInfo-Addr3X2,  #ContactInfo-TelX2, #ContactInfo-FaxX2, #ContactInfo-EmailX2, #ContactInfo-EmailX3"
      )
        .delay(100)
        .animate({ left: "180px", opacity: 0 }, 500, "easeOutQuart");
      $(
        "#ContactInfo-Addr1, #ContactInfo-Addr2, #ContactInfo-Addr3,  #ContactInfo-Tel, #ContactInfo-Fax, #ContactInfo-Email"
      )
        .delay(300)
        .animate({ left: "150px", opacity: 1 }, 500, "easeOutQuart");
    } else if (Con == 3) {
      $("#ContactInfo-TitleX3").animate(
        { left: "80px", opacity: 0 },
        500,
        "easeOutQuart"
      );
      $("#ContactInfo-TitleX2")
        .delay(200)
        .animate({ left: "0", opacity: 1 }, 500, "easeOutQuart");
      $(
        "#ContactInfo-Addr1X3, #ContactInfo-Addr2X3, #ContactInfo-Addr3X3,  #ContactInfo-TelX3, #ContactInfo-FaxX3"
      )
        .delay(100)
        .animate({ left: "180px", opacity: 0 }, 500, "easeOutQuart");
      $(
        "#ContactInfo-Addr1X2, #ContactInfo-Addr2X2, #ContactInfo-Addr3X2,  #ContactInfo-TelX2, #ContactInfo-FaxX2, #ContactInfo-EmailX2, #ContactInfo-EmailX3"
      )
        .delay(300)
        .animate({ left: "150px", opacity: 1 }, 500, "easeOutQuart");
    }
    Con -= 1;
  });

  $("#MailBox").hover(
    function () {
      if (!Mail)
        $(this)
          .find("#MailBox-Back")
          .stop()
          .animate(
            { opacity: "1", backgroundColor: "#ffea00" },
            100,
            "easeInOutCubic"
          );
    },
    function () {
      if (!Mail)
        $(this)
          .find("#MailBox-Back")
          .stop()
          .animate(
            { opacity: "0.9", backgroundColor: "#000" },
            100,
            "easeInOutCubic"
          );
    }
  );

  var Mail = false;
  $("#MailBox-Icon").click(function () {
    if (!Mail) {
      Mail = true;
      $("#MailBox-Icon").fadeOut(300);
      $("#MailBox").animate(
        {
          width: "1100px",
          height: "500px",
          "margin-top": "-250px",
          "margin-left": "-280px",
        },
        1200,
        "easeOutQuart"
      );
      $("#MailBox")
        .find("#MailBox-Back")
        .animate(
          { opacity: "1", backgroundColor: "#fff" },
          100,
          "easeInOutCubic"
        );
      $("#ContactCloseBtn")
        .delay(500)
        .animate({ opacity: 1 }, 800, "easeOutQuart");
      $("#MailBox-Title")
        .delay(1000)
        .animate({ opacity: 1, "margin-left": "70px" }, 800, "easeOutQuart");
      $(".TextBox")
        .delay(1100)
        .animate({ opacity: 1, "margin-left": "70px" }, 800, "easeOutQuart");
      $("#MailBox-SendBtn")
        .delay(1200)
        .animate({ opacity: 1, "margin-left": "70px" }, 800, "easeOutQuart");
    }
  });

  $("#MailBox-SendBtn").hover(
    function () {
      $(this)
        .stop()
        .animate({ backgroundColor: "#ffea00" }, 200, "easeInOutCubic");
    },
    function () {
      $(this)
        .stop()
        .animate({ backgroundColor: "#5b99ff" }, 200, "easeInOutCubic");
    }
  );

  var Send = false;
  $("#MailBox-SendBtn").click(function () {
    if (!Send) {
      Send = true;
      var Err = "Please Check Below Items : \n";
      if ($("#MailBox-Name input").val() == "") Err += "- Name Required\n ";
      if ($("#MailBox-EMail input").val() == "") Err += "- Email Required\n ";
      if ($("#MailBox-Subject input").val() == "")
        Err += "- Subject Required\n ";
      if ($("#MailBox-Message input").val() == "")
        Err += "- Message Required\n ";
      if (Err != "") {
        var eBody = "";
        eBody +=
          '<table style="width:100%;direction:ltr;line-height:20px;margin-bottom:5px;">';
        eBody +=
          '<col width="18%"/><col width="32%"/><col width="18%"/><col width="32%"/>';
        eBody +=
          '<tr style="background-color:#efefef;margin:1px;border-bottom:1px dotted #fff;">';
        eBody +=
          '<td colspan="4" width="100%" style="background-color:#00566f;border-left:1px solid #fff;padding:7px 7px 10px;text-align:center;font-size:11pt;color:#fff;">Contact Form</td>';
        eBody += "</tr>";
        eBody +=
          '<tr style="background-color:#efefef;margin:1px;border-bottom:1px dotted #fff;">';
        eBody +=
          '<td style="background-color:#c2edf9;border-left:1px solid #fff;padding:5px 7px 7px;">Name :</td>';
        eBody +=
          '<td colspan="3" style="padding:5px;line-height:28px">' +
          $("#MailBox-Name input").val() +
          "</td>";
        eBody += "</tr>";
        eBody +=
          '<tr style="background-color:#efefef;margin:1px;border-bottom:1px dotted #fff;">';
        eBody +=
          '<td style="background-color:#c2edf9;border-left:1px solid #fff;padding:5px 7px 7px;">Email :</td>';
        eBody +=
          '<td colspan="3" style="padding:5px;line-height:28px">' +
          $("#MailBox-EMail input").val() +
          "</td>";
        eBody += "</tr>";
        eBody +=
          '<tr style="background-color:#efefef;margin:1px;border-bottom:1px dotted #fff;">';
        eBody +=
          '<td style="background-color:#c2edf9;border-left:1px solid #fff;padding:5px 7px 7px;">Subject :</td>';
        eBody +=
          '<td colspan="3" style="padding:5px;line-height:28px">' +
          $("#MailBox-Subject input").val() +
          "</td>";
        eBody += "</tr>";
        eBody +=
          '<tr style="background-color:#efefef;margin:1px;border-bottom:1px dotted #fff;">';
        eBody +=
          '<td style="background-color:#c2edf9;border-left:1px solid #fff;padding:5px 7px 7px;">Message :</td>';
        eBody +=
          '<td colspan="3" style="padding:5px;line-height:28px">' +
          $("#MailBox-Message textarea").val() +
          "</td>";
        eBody += "</tr>";
        eBody += "</table>";
        $.ajax({
          type: "POST",
          url: "./Code.aspx/ContactMail",
          data: JSON.stringify({
            Name: $("#MailBox-Name").val(),
            Subject: $("#MailBox-Subject").val(),
            Message: eBody,
          }),
          contentType: "application/json; charset=utf-8",
          dataType: "json",
          success: function (data) {
            Send = false;
            sweetAlert("Contact Us", "Message Send Successfuly.", "success");
            $("#Loading2").fadeOut(600);
          },
          error: function (x, e) {
            sweetAlert(
              "Contact Us",
              "Message Sending Failed, try again",
              "error"
            );
            Send = false;
            $("#Loading2").fadeOut(600);
          },
        });
      } else {
        Send = false;
        sweetAlert("Contact Us", "Message Sending Failed, try again", "error");
      }
    }
  });

  $("#ContactCloseBtn").click(function () {
    if (Mail) {
      $("#MailBox-Icon").delay(1200).fadeIn(300);
      $("#MailBox").delay(1000).animate(
        {
          width: "630px",
          height: "200px",
          "margin-top": "-80px",
          "margin-left": "-285px",
        },
        1200,
        "easeInQuart"
      );
      $("#MailBox")
        .find("#MailBox-Back")
        .delay(1500)
        .animate(
          { opacity: "0.8", backgroundColor: "#000" },
          1200,
          "easeInOutCubic"
        );
      $("#ContactCloseBtn")
        .delay(500)
        .animate({ opacity: 0 }, 800, "easeOutQuart");
      $("#MailBox-Title").animate(
        { opacity: 0, "margin-left": "50px" },
        800,
        "easeOutQuart"
      );
      $(".TextBox").animate(
        { opacity: 0, "margin-left": "50px" },
        800,
        "easeOutQuart"
      );
      $("#MailBox-SendBtn").animate(
        { opacity: 0, "margin-left": "50px" },
        800,
        "easeOutQuart"
      );
      Mail = false;
    }
  });

  ///////////////////////////////////////////////////     Products  -----------------------------------

  $(".FilterItem").hover(
    function () {
      $(this)
        .stop()
        .animate(
          { backgroundColor: "#ffea00", color: "#000" },
          100,
          "easeInOutCubic"
        );
    },
    function () {
      $(this)
        .stop()
        .animate(
          { backgroundColor: "#357b7e", color: "#fff" },
          100,
          "easeInOutCubic"
        );
    }
  );
  $("#SearchCloseBtn, #FilterCloseBtn, #FilterReturnBtn").hover(
    function () {
      $(this)
        .find(".CircleBack2 ")
        .animate({ transform: "scale(1)" }, 200, "easeInOutCubic");
      $(this)
        .find(".CircleIcon")
        .animate({ transform: "scale(0.7)" }, 200, "easeInOutCubic");
    },
    function () {
      $(this)
        .find(".CircleBack2 ")
        .animate({ transform: "scale(0)" }, 200, "easeInOutCubic");
      $(this)
        .find(".CircleIcon")
        .animate({ transform: "scale(0.6)" }, 200, "easeInOutCubic");
    }
  );

  var SearchCount = 0;
  function Filter(A) {
    $("#PB-ProductsSub1").addClass("ParallexBtnS");
    $(".ProductsMenuBtn, .ProductsSubMenuBtn").removeClass(
      "ProductsMenuSelect"
    );
    $("#PM-Btn1").addClass("ProductsMenuSelect");
    $("#PM-W2, #PM-W3, #PM-W4").fadeOut(400);
    $("#PList-Count span").html(98);
    SearchCount = 0;
    $(".TR").fadeOut(300);
    if (A == "") {
      $(".TR").fadeIn(300);
      $("#PList-Count span").html(98);
      $("#SearchCloseBtn").fadeOut();
    } else {
      $(".TR").each(function (index) {
        if (
          $(this)
            .find(".TD1")
            .text()
            .match("^" + A)
        ) {
          $(this).fadeIn(300);
          SearchCount += 1;
        }
      });
      $("#PList-Count span").html(SearchCount);
      $("#SearchCloseBtn").fadeIn();
      $("#FilterCloseBtn").fadeOut();
    }
  }
  $("#PList-SearchInput input").keyup(function () {
    Filter($(this).val());
  });
  $("#SearchCloseBtn").click(function () {
    $(this).fadeOut(300);
    $("#PList-SearchInput input").val("");
    $("#FilterCloseBtn").fadeOut();
    $("#PB-ProductsSub1").addClass("ParallexBtnS");
    $(".TR").fadeIn(500);
    $(".ProductsMenuBtn, .ProductsSubMenuBtn").removeClass(
      "ProductsMenuSelect"
    );
    $("#PM-Btn1").addClass("ProductsMenuSelect");
    $("#PM-W2, #PM-W3, #PM-W4").fadeOut(400);
    $("#PList-Count span").html(98);
  });

  var PFilterOpen = false;
  $("#PList-FilterBox").hover(
    function () {
      $(this)
        .find("#PList-FilterBack")
        .stop()
        .animate({ backgroundColor: "#ffea00" }, 100, "easeInOutCubic");
    },
    function () {
      $(this)
        .find("#PList-FilterBack")
        .stop()
        .animate({ backgroundColor: "#3b898c" }, 100, "easeInOutCubic");
    }
  );

  $(".FilterItem").click(function (e) {
    e.stopPropagation();
    $("#PB-ProductsSub1").addClass("ParallexBtnS");
    $(".ProductsMenuBtn, .ProductsSubMenuBtn").removeClass(
      "ProductsMenuSelect"
    );
    $("#PM-Btn1").addClass("ProductsMenuSelect");
    $("#PM-W2, #PM-W3, #PM-W4").fadeOut(400);
    $("#PList-Count span").html(98);
    $(".TR").fadeOut(300);
    $('.TR:contains("' + $(this).text() + '")').fadeIn(300);
    $("#PList-Count span").html(
      $('.TR:contains("' + $(this).text() + '")').length
    );
    $("#FilterCloseBtn").fadeIn();
    $("#SearchCloseBtn").fadeOut();
    $("#PList-SearchInput input").val("");
    $("#PList-FilterBox")
      .delay(500)
      .animate({ width: "135px" }, 300, "easeInQuart");
    $("#PList-FilterItemW").animate(
      { height: "0", bottom: "20px" },
      500,
      "easeInQuart"
    );
    PFilterOpen = false;
  });

  $("#PList-FilterBox").click(function () {
    if (!PFilterOpen) {
      $("#PList-FilterBox").animate({ width: "460px" }, 300, "easeOutQuart");
      $("#PList-FilterItemW")
        .delay(300)
        .animate({ height: "480px", bottom: "0" }, 500, "easeOutQuart");
      PFilterOpen = true;
    }
  });

  $(
    "#ProductsLogo, #ProductsMenu, #PList-Title, #PList-Head, #PList-Products, .PageBack"
  ).click(function () {
    if (PFilterOpen) {
      $("#PList-FilterBox")
        .delay(500)
        .animate({ width: "135px" }, 300, "easeInQuart");
      $("#PList-FilterItemW").animate(
        { height: "0", bottom: "20px" },
        500,
        "easeInQuart"
      );
      PFilterOpen = false;
    }
  });

  $("#FilterCloseBtn").click(function (e) {
    e.stopPropagation();
    $(this).fadeOut(300);
    $("#PList-SearchInput input").val("");
    $(".TR").fadeIn(500);
    $(".ProductsMenuBtn, .ProductsSubMenuBtn").removeClass(
      "ProductsMenuSelect"
    );
    $("#PM-Btn1").addClass("ProductsMenuSelect");
    $("#PM-W2, #PM-W3, #PM-W4").fadeOut(400);
    $("#PList-Count span").html(98);
  });

  $(".TR .TD1, .TR .TD2, .TR .TD3, .TR .TD4, .TR .TD5").click(function () {
    var Z = $(this).parent().find(".TD1").text();
    var Name = "RG " + Z;
    $("#PD-Item0").html(Z);
    $("#PDetailsDownloadBtn").attr({
      href: "../Product/" + Z.replace(" ", "") + ".pdf",
    });
    $.ajax({
      type: "POST",
      url: "./Code.aspx/PDetails",
      data: JSON.stringify({ Name: Name }),
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      success: function (data) {
        $("#PD-Item1").html(data.d[0]);
        $("#PD-Item2").html(Name);
        $("#PD-Item3").html(data.d[1]);
        $("#PD-Item4").html(data.d[2]);
        $("#PD-Item5").html(data.d[3]);
        $("#PD-Item6").html(data.d[4]);
        $("#PD-Item7").html(data.d[5]);
        $("#ProductsList").fadeOut();
        $("#PDetails")
          .fadeIn()
          .animate({ left: "400px", opacity: "1" }, 500, "easeInOutQuad");
      },
      // error: function (x, e) {
      //   $("#loading").fadeOut();
      //   if (x.status == 0)
      //     sweetAlert("Login", "Please Check Internet Connection", "error");
      //   else if (x.status == 404)
      //     sweetAlert("Login", "Address not Found!", "error");
      //   else if (x.status == 500)
      //     sweetAlert("Login", "Internal server Error", "error");
      //   else if (e == "parsererror")
      //     sweetAlert("Login", "Data Stracture Error ", "error");
      //   else if (e == "timeout") sweetAlert("Login", "Time Out Error", "error");
      //   else alert("Send Failed!\n" + x.responseText);
      // },
    });
  });

  $("#PDetailsCloseBtn").click(function () {
    $("#ProductsList").fadeIn();
    $("#PDetails")
      .animate({ left: "480px", opacity: "0" }, 500, "easeInOutQuad")
      .fadeOut();
  });

  $("#PD-Box").mCustomScrollbar({
    scrollButtons: { enable: true },
    theme: "dark",
    scrollbarPosition: "outside",
  });
  $("#PDetailsDownloadBtn").hover(
    function () {
      $(this).animate(
        { backgroundColor: "#ffea00", borderColor: "#ffea00" },
        200,
        "easeInOutQuad"
      );
    },
    function () {
      $(this).animate(
        { backgroundColor: "#fff", borderColor: "#f2f2f2" },
        200,
        "easeInOutQuad"
      );
    }
  );

  ///////////////////////////////////////////////////     Certificate  ----------------------------------------

  $(
    "#StandardBtn1, #StandardBtn2, #HealthBtn1, #HealthBtn2,  #HealthBtn3,  #HealthBtn4"
  ).hover(
    function () {
      $(this)
        .find(".CircleBack2 ")
        .animate({ transform: "scale(1)" }, 200, "easeInOutCubic");
    },
    function () {
      $(this)
        .find(".CircleBack2 ")
        .animate({ transform: "scale(0)" }, 200, "easeInOutCubic");
    }
  );

  $("#StandardBtn1").click(function () {
    $(this)
      .find(".CircleBack1 ")
      .animate({ transform: "scale(1)" }, 200, "easeInOutCubic");
    $("#StandardBtn2")
      .find(".CircleBack1 ")
      .animate({ transform: "scale(0)" }, 200, "easeInOutCubic");
    $("#CST-SubBox2").fadeOut(300);
    $("#CST-SubBox1").delay(300).fadeIn(300);
  });
  $("#StandardBtn2").click(function () {
    $(this)
      .find(".CircleBack1 ")
      .animate({ transform: "scale(1)" }, 200, "easeInOutCubic");
    $("#StandardBtn1")
      .find(".CircleBack1 ")
      .animate({ transform: "scale(0)" }, 200, "easeInOutCubic");
    $("#CST-SubBox1").fadeOut(300);
    $("#CST-SubBox2").delay(300).fadeIn(300);
  });

  $("#HealthBtn1").click(function () {
    $(this)
      .find(".CircleBack1 ")
      .animate({ transform: "scale(1)" }, 200, "easeInOutCubic");
    $("#HealthBtn2, #HealthBtn3, #HealthBtn4")
      .find(".CircleBack1 ")
      .animate({ transform: "scale(0)" }, 200, "easeInOutCubic");
    $("#CH-SubBox2, #CH-SubBox3, #CH-SubBox4").fadeOut(300);
    $("#CH-SubBox1").delay(300).fadeIn(300);
  });
  $("#HealthBtn2").click(function () {
    $(this)
      .find(".CircleBack1 ")
      .animate({ transform: "scale(1)" }, 200, "easeInOutCubic");
    $("#HealthBtn1, #HealthBtn3, #HealthBtn4")
      .find(".CircleBack1 ")
      .animate({ transform: "scale(0)" }, 200, "easeInOutCubic");
    $("#CH-SubBox1, #CH-SubBox3, #CH-SubBox4").fadeOut(300);
    $("#CH-SubBox2").delay(300).fadeIn(300);
  });
  $("#HealthBtn3").click(function () {
    $(this)
      .find(".CircleBack1 ")
      .animate({ transform: "scale(1)" }, 200, "easeInOutCubic");
    $("#HealthBtn1, #HealthBtn2, #HealthBtn4")
      .find(".CircleBack1 ")
      .animate({ transform: "scale(0)" }, 200, "easeInOutCubic");
    $("#CH-SubBox1, #CH-SubBox2, #CH-SubBox4").fadeOut(300);
    $("#CH-SubBox3").delay(300).fadeIn(300);
  });
  $("#HealthBtn4").click(function () {
    $(this)
      .find(".CircleBack1 ")
      .animate({ transform: "scale(1)" }, 200, "easeInOutCubic");
    $("#HealthBtn1, #HealthBtn2, #HealthBtn3")
      .find(".CircleBack1 ")
      .animate({ transform: "scale(0)" }, 200, "easeInOutCubic");
    $("#CH-SubBox1, #CH-SubBox2, #CH-SubBox3").fadeOut(300);
    $("#CH-SubBox4").delay(300).fadeIn(300);
  });

  var Cer = 1;
  function CertificateBtnClick(A) {
    if (A != Cer) {
      $(".CertificateMenuBtn").removeClass("CertificateMenuSelect");
      $(".CertificateBox")
        .animate({ left: "550", opacity: 0 }, 700, "easeOutQuart")
        .fadeOut();
      $("#CM-Btn" + A).addClass("CertificateMenuSelect");
      $(".ParallexSubBtn").removeClass("ParallexBtnS");
      if (A == 1) {
        $("#PB-CertificateSub1").addClass("ParallexBtnS");
        $("#Certificate-StandardBox")
          .fadeIn()
          .animate({ left: "500", opacity: 1 }, 700, "easeOutQuart");
      } else if (A == 2) {
        $("#PB-CertificateSub2").addClass("ParallexBtnS");
        $("#Certificate-HealthBox")
          .fadeIn()
          .animate({ left: "500", opacity: 1 }, 700, "easeOutQuart");
      } else if (A == 3) {
        $("#PB-CertificateSub3").addClass("ParallexBtnS");
        $("#Certificate-TechnicalBox")
          .fadeIn()
          .animate({ left: "500", opacity: 1 }, 700, "easeOutQuart");
      } else if (A == 4) {
        $("#PB-CertificateSub4").addClass("ParallexBtnS");
        $("#Certificate-SelfBox")
          .fadeIn()
          .animate({ left: "500", opacity: 1 }, 700, "easeOutQuart");
      }
      Cer = A;
    }
  }
  $("#CM-Btn1, #PB-CertificateSub1").click(function () {
    CertificateBtnClick(1);
  });
  $("#CM-Btn2, #PB-CertificateSub2").click(function () {
    CertificateBtnClick(2);
  });
  $("#CM-Btn3, #PB-CertificateSub3").click(function () {
    CertificateBtnClick(3);
  });
  $("#CM-Btn4, #PB-CertificateSub4").click(function () {
    CertificateBtnClick(4);
  });

  function CerShow(A, B, C) {
    $("#CDoc-Item1 .CS-Item1Logo1").css({ "background-position": A + " 0" });
    $("#CDoc-Item1 .CS-Item1Title").html(B);
    $("#CDoc-Item1 .CS-Item1Sub").html("CERTIFICATE");
    $("#CDocPic img").attr({ src: "../App_Images/guvohnoma.jpg" });
    $("#CDoc").animate(
      { width: "900px", "margin-left": "-450px" },
      800,
      "easeOutQuart"
    );
    $("#CDocPic").delay(200).animate({ width: "420px" }, 800, "easeOutQuart");
    $("#CDocSep, #CDocCloseBtn")
      .delay(400)
      .animate({ opacity: "1" }, 800, "easeOutQuart");
    $("#CDoc-Item1")
      .delay(400)
      .animate({ opacity: "1", left: "150px" }, 800, "easeOutQuart");
  }
  // // //

  function CerShow(A, B, C) {
    $("#CDoc-Item3 .CS-Item1Logo1").css({ "background-position": A + " 0" });
    $("#CDoc-Item3 .CS-Item1Title").html(B);
    $("#CDoc-Item3 .CS-Item1Sub").html("CERTIFICATE");
    $("#CDoc-Item3 #CDocPic img").attr({
      src: "..",
    });
    $("#CDoc").animate(
      { width: "900px", "margin-left": "-450px" },
      800,
      "easeOutQuart"
    );
    $("#CDocPic3").delay(200).animate({ width: "420px" }, 800, "easeOutQuart");
    $("#CDocSep3, #CDocCloseBtn")
      .delay(400)
      .animate({ opacity: "1" }, 800, "easeOutQuart");
    $("#CDoc-Item3")
      .delay(400)
      .animate({ opacity: "1", left: "150px" }, 800, "easeOutQuart");
  }

  $("#CStandards-Item1").click(function () {
    CerShow("0", " <span>GUVOHNOMA</span>", "GUVOHNOMA");
  });
  $("#CStandards-Item2").click(function () {
    CerShow("0", " <span>Business license </span>", "ISO-9001x");
  });
  $("#CStandards-Item3").click(function () {
    CerShow("0", "ISO <span>14001</span>", "ISO-14001x");
  });
  $("#CStandards-Item4").click(function () {
    CerShow("0", "ISO <span>45001</span>", "ISO-45001x");
  });
  $("#CStandards-Item5").click(function () {
    CerShow("0", "ISO <span>9001</span>", "ISO-9001x");
  });
  $("#CStandards-Item6").click(function () {
    CerShow("-125px", "ISO 14001", "ISO 14001");
  });
  $("#CStandards-Item7").click(function () {
    CerShow("-250px", "IFDA", "IFDA");
  });

  $("#CDocCloseBtn").click(function () {
    $("#CDoc").animate({ width: "0", "margin-left": "0" }, 800, "easeOutQuart");
    $("#CDocPic").animate({ width: "0" }, 800, "easeOutQuart");
    $("#CDocSep, #CDocCloseBtn").animate({ opacity: "0" }, 800, "easeOutQuart");
    $("#CDoc-Item1").animate(
      { opacity: "0", left: "250px" },
      800,
      "easeOutQuart"
    );
  });

  ///////////////////////////////////////////////////    Events -------------------------------------

  $("#EventsDetails").mCustomScrollbar({
    scrollButtons: { enable: true },
    theme: "dark",
    scrollbarPosition: "outside",
  });
});
