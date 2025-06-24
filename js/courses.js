/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Set Header
3. Init Menu
4. Init Header Search
5. Init Colorbox


******************************/

$(document).ready(function () {
  "use strict";

  /* 

	1. Vars and Inits

	*/

  var header = $(".header");
  var menuActive = false;
  var menu = $(".menu");
  var burger = $(".hamburger");

  setHeader();

  $(window).on("resize", function () {
    setHeader();
  });

  $(document).on("scroll", function () {
    setHeader();
  });

  initMenu();
  initHeaderSearch();
  initColorbox();

  /* 

	2. Set Header

	*/

  function setHeader() {
    if ($(window).scrollTop() > 100) {
      header.addClass("scrolled");
    } else {
      header.removeClass("scrolled");
    }
  }

  /* 

	3. Init Menu

	*/

  function initMenu() {
    if ($(".menu").length) {
      var menu = $(".menu");
      if ($(".hamburger").length) {
        burger.on("click", function () {
          if (menuActive) {
            closeMenu();
          } else {
            openMenu();

            $(document).one("click", function cls(e) {
              if ($(e.target).hasClass("menu_mm")) {
                $(document).one("click", cls);
              } else {
                closeMenu();
              }
            });
          }
        });
      }
    }
  }

  function openMenu() {
    menu.addClass("active");
    menuActive = true;
  }

  function closeMenu() {
    menu.removeClass("active");
    menuActive = false;
  }

  /* 

	4. Init Header Search

	*/

  function initHeaderSearch() {
    if ($(".search_button").length) {
      $(".search_button").on("click", function () {
        if ($(".header_search_container").length) {
          $(".header_search_container").toggleClass("active");
        }
      });
    }
  }

  /*

	5. Init Colorbox

	*/

  function initColorbox() {
    if ($(".gallery_item").length) {
      $(".colorbox").colorbox({
        rel: "colorbox",
        photo: true,
        maxWidth: "90%",
      });
    }
  }
});

// video
const videoSection = document.querySelector(".video_course_showcase");
const closeAndOpen = document.querySelector(".closeAndOpen");
const playBtn = document.querySelector(".play_option");
const videoPart = document.querySelector(".video_part");
const video = document.querySelector(".video_part video");

video.pause();
video.currentTime = 0;
let playEventCount = false;

videoSection.addEventListener("mouseenter", () => {
  video.play();
});
videoSection.addEventListener("mouseleave", () => {
  video.pause();
});

playBtn.addEventListener("click", () => {
  if (playEventCount === true) {
    videoPart.style.opacity = 0.5;
    playBtn.style.background = "#000";
    playBtn.children[0].innerHTML = `<i class="ri-play-circle-line"></i>`;
    playEventCount = false;
  } else {
    video.currentTime = 0;
    video.play();
    videoPart.style.opacity = 1;
    playBtn.style.background = "none";
    playBtn.children[0].innerHTML = `<i class="ri-pause-circle-line"></i>`;
    playEventCount = true;
  }
});

// explore courses
const courseData = [
  {
    title: "C++ with Data Structures",
    price: "₹999",
    desc: "Master DSA with C++ in real-world context. Includes recursion, linked lists, trees, sorting, and more.",
    img: "/images/courses/c++.jpg",
    category: "technical-core",
  },
  {
    title: "Embedded Systems",
    price: "₹1499",
    desc: "Hands-on microcontroller programming, interfacing, real-time debugging & projects.",
    img: "/images/courses/emdedd-system.jpg",
    category: "technical-core",
  },
  {
    title: "MATLAB for Engineers",
    price: "₹999",
    desc: "Explore signal processing, simulation, image handling, and advanced plotting.",
    img: "/images/courses/matlab.jpg",
    category: "technical-core",
  },
  {
    title: "Java Programming",
    price: "₹1199",
    desc: "Solid foundation in Java from scratch. OOP, collections, GUI & practical projects.",
    img: "/images/courses/java.jpg",
    category: "technical-core",
  },
  {
    title: "AutoCAD Basics",
    price: "₹1099",
    desc: "From 2D drafting to 3D CAD, hands-on projects for mechanical & civil engineers.",
    img: "/images/courses/autocad.jpg",
    category: "cad-cam",
  },
  {
    title: "SolidWorks 3D Design",
    price: "₹1299",
    desc: "Parametric modeling, simulation, assembly and rendering for product design.",
    img: "/images/courses/solidwork.jpg",
    category: "cad-cam",
  },
  {
    title: "CAM Manufacturing",
    price: "₹999",
    desc: "Get started with CNC programming, toolpath generation and G-code.",
    img: "/images/courses/cam.jpg",
    category: "cad-cam",
  },
  {
    title: "Python for Engineers",
    price: "₹1299",
    desc: "Python tailored for engineering problems: NumPy, Matplotlib, automation, simulations.",
    img: "/images/courses/pythan.jpg",
    category: "technical-core",
  },
  {
    title: "Revit Architecture",
    price: "₹1399",
    desc: "Master BIM tools for architecture, visualization and collaboration.",
    img: "/images/courses/Revit.jpg",
    category: "cad-cam",
  },
  {
    title: "CATIA V5",
    price: "₹1499",
    desc: "Learn surface and solid modeling for advanced aerospace & automotive applications.",
    img: "/images/courses/CATIA-V5.jpg",
    category: "cad-cam",
  },
  {
    title: "SEO Mastery",
    price: "₹999",
    desc: "Rank higher with keyword strategy, backlinks, technical SEO and audits.",
    img: "/images/courses/seo.jpg",
    category: "digital-marketing",
  },
  {
    title: "Google Ads Fundamentals",
    price: "₹1099",
    desc: "Setup and optimize Google campaigns, targeting, bidding & reporting.",
    img: "/images/courses/googlead.jpg",
    category: "digital-marketing",
  },
  {
    title: "Social Media Marketing",
    price: "₹1199",
    desc: "Use Instagram, LinkedIn & Facebook ads to drive engagement & conversions.",
    img: "/images/courses/smm.jpg",
    category: "digital-marketing",
  },
  {
    title: "Email Marketing Essentials",
    price: "₹899",
    desc: "Write high-converting campaigns, build automation and email sequences.",
    img: "/images/courses/Email-Marketing-Guide.jpg",
    category: "digital-marketing",
  },
  {
    title: "Digital Analytics",
    price: "₹1299",
    desc: "Google Analytics, Tag Manager, data dashboards and actionable insights.",
    img: "/images/courses/data-analytics.jpg",
    category: "digital-marketing",
  },
  {
    title: "AI with Python",
    price: "₹1599",
    desc: "Neural networks, image classification, NLP with TensorFlow/Keras in Python.",
    img: "/images/courses/python-for-ai-and-ml.jpg",
    category: "trending-tech",
  },
  {
    title: "Blockchain Fundamentals",
    price: "₹1399",
    desc: "Learn blockchain structure, smart contracts, Ethereum and Web3.",
    img: "/images/courses/blockchain.jpg",
    category: "trending-tech",
  },
  {
    title: "Cybersecurity Essentials",
    price: "₹1299",
    desc: "Threat analysis, malware protection, encryption and ethical hacking basics.",
    img: "/images/courses/cyber.jpg",
    category: "trending-tech",
  },
  {
    title: "IoT Applications",
    price: "₹1499",
    desc: "Sensor networks, MQTT protocol, smart automation projects.",
    img: "/images/courses/iot.jpg",
    category: "trending-tech",
  },
  {
    title: "Machine Learning",
    price: "₹1799",
    desc: "Supervised/unsupervised learning, regression, clustering & model deployment.",
    img: "/images/courses/ml.jpg",
    category: "trending-tech",
  },

  {
    title: "Excel with AI",
    price: "₹999",
    desc: "Master Excel with AI features for smarter data analysis and automation.",
    img: "/images/courses/excel-with-ai.jpg",
    category: "basic-computer",
  },
  {
    title: "Word with AI",
    price: "₹999",
    desc: "Create intelligent documents using AI-powered tools in Microsoft Word.",
    img: "/images/courses/word-with-ai.jpg",
    category: "basic-computer",
  },
  {
    title: "PowerPoint with AI",
    price: "₹999",
    desc: "Design stunning presentations with AI tools in PowerPoint.",
    img: "/images/courses/powerpoint-with-ai.jpg",
    category: "basic-computer",
  },
  {
    title: "Primavera",
    price: "₹999",
    desc: "Plan and manage large-scale projects effectively using Primavera.",
    img: "/images/courses/primavera.jpg",
    category: "project-and-planning",
  },
  {
    title: "Microsoft Project",
    price: "₹999",
    desc: "Efficiently manage tasks and timelines with MS Project.",
    img: "/images/courses/microsoft-project.jpg",
    category: "project-and-planning",
  },

  {
    title: "SketchUp",
    price: "₹999",
    desc: "Design 3D models quickly and easily with SketchUp.",
    img: "/images/courses/sketchup.jpg",
    category: "civil-tech",
  },
  {
    title: "3ds Max",
    price: "₹999",
    desc: "Create high-end 3D visualizations and animations with 3ds Max.",
    img: "/images/courses/3ds-max.jpg",
    category: "civil-tech",
  },
  {
    title: "ETABS",
    price: "₹999",
    desc: "Analyze and design building structures with ETABS.",
    img: "/images/courses/etabs.jpg",
    category: "civil-tech",
  },
  {
    title: "STAAD.Pro",
    price: "₹999",
    desc: "Perform structural analysis and design with STAAD.Pro.",
    img: "/images/courses/staad-pro.jpg",
    category: "civil-tech",
  },
  {
    title: "Blogging",
    price: "₹999",
    desc: "Start and grow your blog for income and audience building.",
    img: "/images/courses/blogging.jpg",
    category: "digital-marketing",
  },
  {
    title: "LinkedIn Lead Generation",
    price: "₹999",
    desc: "Generate leads using professional tools on LinkedIn.",
    img: "/images/courses/linkedin-lead-generation.jpg",
    category: "digital-marketing",
  },
  {
    title: "Digital Marketing Tools",
    price: "₹999",
    desc: "Use essential tools for analyzing and optimizing campaigns.",
    img: "/images/courses/digital-marketing-tools.jpg",
    category: "digital-marketing",
  },

  {
    title: "NX",
    price: "₹999",
    desc: "Develop CAD/CAM/CAE solutions using Siemens NX.",
    img: "/images/courses/nx.jpg",
    category: "cad-cam",
  },

  {
    title: "Creo",
    price: "₹999",
    desc: "3D CAD modeling and simulation with Creo.",
    img: "/images/courses/creo.jpg",
    category: "cad-cam",
  },
  {
    title: "SolidEdge",
    price: "₹999",
    desc: "Powerful 3D design and simulation with SolidEdge.",
    img: "/images/courses/solidedge.jpg",
    category: "cad-cam",
  },
  {
    title: "Inventor",
    price: "₹999",
    desc: "3D mechanical design and engineering with Inventor.",
    img: "/images/courses/inventor.jpg",
    category: "cad-cam",
  },
  {
    title: "Fusion 360",
    price: "₹999",
    desc: "Integrated CAD, CAM, and CAE tool for product design.",
    img: "/images/courses/fusion-360.jpg",
    category: "cad-cam",
  },
  {
    title: "Ansys",
    price: "₹999",
    desc: "Simulate engineering problems using Ansys tools.",
    img: "/images/courses/ansys.jpg",
    category: "cad-cam",
  },
  {
    title: "MasterCam",
    price: "₹999",
    desc: "CNC programming and CAM solutions with MasterCam.",
    img: "/images/courses/mastercam.jpg",
    category: "cad-cam",
  },
  {
    title: "NX CAM",
    price: "₹999",
    desc: "Advanced CAM programming with NX CAM.",
    img: "/images/courses/nx-cam.jpg",
    category: "cad-cam",
  },
  {
    title: "ArtCam",
    price: "₹999",
    desc: "3D relief modeling and engraving with ArtCam.",
    img: "/images/courses/artcam.jpg",
    category: "cad-cam",
  },
  {
    title: "DelCam",
    price: "₹999",
    desc: "CAD/CAM software for manufacturing automation.",
    img: "/images/courses/delcam.jpg",
    category: "cad-cam",
  },
  {
    title: "Full Stack Web Development",
    price: "₹999",
    desc: "Build complete web apps using frontend and backend technologies.",
    img: "/images/courses/full-stack-web-development.jpg",
    category: "technical-core",
  },
  {
    title: "Data Structure and Algorithm",
    price: "₹999",
    desc: "Learn efficient problem-solving with DSA.",
    img: "/images/courses/data-structure-and-algorithm.jpg",
    category: "technical-core",
  },
  {
    title: "Database Management System",
    price: "₹999",
    desc: "Understand and manage relational databases effectively.",
    img: "/images/courses/database-management-system.jpg",
    category: "technical-core",
  },
  {
    title: "3D Printing",
    price: "₹999",
    desc: "Bring digital designs to life with 3D printing.",
    img: "/images/courses/3d-printing.jpg",
    category: "trending-future-tech",
  },
  {
    title: "Robotics",
    price: "₹999",
    desc: "Explore robotics design, control, and automation.",
    img: "/images/courses/robotics.jpg",
    category: "trending-future-tech",
  },
  {
    title: "Cloud Computing",
    price: "₹999",
    desc: "Learn cloud infrastructure and services like AWS, Azure.",
    img: "/images/courses/cloud-computing.jpg",
    category: "trending-future-tech",
  },
  {
    title: "Data Science with Python/R",
    price: "₹999",
    desc: "Analyze data and build models using Python or R.",
    img: "/images/courses/data-science-with-python-r.jpg",
    category: "trending-future-tech",
  },
  {
    title: "PCB Design and Manufacturing",
    price: "₹999",
    desc: "Design and produce custom printed circuit boards.",
    img: "/images/courses/pcb-design-and-manufacturing.jpg",
    category: "trending-future-tech",
  },
  {
    title: "Drone Technology",
    price: "₹999",
    desc: "Understand UAV design, control, and applications.",
    img: "/images/courses/drone-technology.jpg",
    category: "trending-future-tech",
  },
];

let selectedCategory = "all";

function renderSlider() {
  const slider = document.getElementById("courseSlider");
  slider.innerHTML = "";

  const filtered =
    selectedCategory === "all"
      ? courseData
      : courseData.filter((c) => c.category === selectedCategory);

  filtered.forEach((course) => {
    const card = document.createElement("div");
    card.className = "slide-card";
    card.innerHTML = `
        <div class="course-card">
          <div class="course-img">
            <img src="${course.img}" alt="${course.title}" />
          </div>
          <div class="course-body">
            <h5 class="course-title">${course.title}</h5>
            <p class="course-desc">${course.desc}</p>
            <div class="course-price">${course.price}</div>
          </div>
          <div class="hover-line"></div>
        </div>
      `;
    slider.appendChild(card);
  });

  startAutoScroll(); // restart scrolling
}

// Handle category buttons
document.querySelectorAll(".filter-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document
      .querySelectorAll(".filter-btn")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    selectedCategory = btn.getAttribute("data-category");
    renderSlider();
  });
});

// ✅ Auto-scroll setup
let scrollInterval;

function startAutoScroll() {
  const container = document.getElementById("courseSlider");

  clearInterval(scrollInterval); // prevent multiple timers

  scrollInterval = setInterval(() => {
    if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
      container.scrollLeft = 0; // loop back
    } else {
      container.scrollLeft += 3; // scroll right
    }
  }, 15); // adjust for speed

  // Pause on hover
  container.addEventListener("mouseenter", () => clearInterval(scrollInterval));
  container.addEventListener("mouseleave", () => startAutoScroll());
}

// First load
renderSlider();

// co_skill
const seletAllHeading = document.querySelectorAll(".co_skill_bottom_top h1");
const coSkillShowCase = document.querySelectorAll(".co_skill_bottom_bottom");
seletAllHeading.forEach((heads, index) => {
  heads.addEventListener("click", () => {
    if (index === 0) {
      coSkillShowCase[0].style.display = "flex";
      coSkillShowCase[1].style.display = "none";
      coSkillShowCase[2].style.display = "none";
    } else if (index === 1) {
      heads.style.color = "#007bff"

      coSkillShowCase[1].style.display = "flex";
      coSkillShowCase[2].style.display = "none";
      coSkillShowCase[0].style.display = "none";
    } else {
      heads.style.color = "#007bff"

      coSkillShowCase[2].style.display = "flex";
      coSkillShowCase[1].style.display = "none";
      coSkillShowCase[0].style.display = "none";
    }
  });
});
