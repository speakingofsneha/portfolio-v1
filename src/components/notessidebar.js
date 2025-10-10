const bars = document.querySelectorAll(".bar");
const sections = document.querySelectorAll("p[id^='section']"); // Look for p elements with IDs starting with 'section'
const sidebar = document.getElementById("sidebar");

// Track the mouse position relative to the sidebar
let mouseY = -1;
let hoveredIndex = -1;
let isHoveringOverSidebar = false;

sidebar.addEventListener("mouseenter", () => {
  isHoveringOverSidebar = true;
  updateHoverEffects();
});

sidebar.addEventListener("mouseleave", () => {
  isHoveringOverSidebar = false;
  clearAllHover();
});

sidebar.addEventListener("mousemove", (e) => {
  const rect = sidebar.getBoundingClientRect();
  mouseY = e.clientY - rect.top;
  updateHoverEffects();
});

function updateHoverEffects() {
  if (!isHoveringOverSidebar) return;
  
  // Find the closest bar to the mouse position
  let closestBar = null;
  let closestDistance = Infinity;
  
  bars.forEach((bar, index) => {
    const rect = bar.getBoundingClientRect();
    const barCenter = rect.top + rect.height / 2;
    const distance = Math.abs(mouseY - (barCenter - sidebar.getBoundingClientRect().top));
    
    if (distance < closestDistance) {
      closestDistance = distance;
      closestBar = bar;
      hoveredIndex = index;
    }
  });
  
  // Apply hover effects
  clearAllHover();
  if (closestBar) {
    // Apply the wave effect
    closestBar.classList.add("hovered");
    
    // Add effects to nearby bars (creating a wave effect)
    if (bars[hoveredIndex - 1]) {
      bars[hoveredIndex - 1].classList.add("nearby-1");
    }
    if (bars[hoveredIndex + 1]) {
      bars[hoveredIndex + 1].classList.add("nearby-1");
    }
    
    // Add second level nearby effect
    if (bars[hoveredIndex - 2]) {
      bars[hoveredIndex - 2].classList.add("nearby-2");
    }
    if (bars[hoveredIndex + 2]) {
      bars[hoveredIndex + 2].classList.add("nearby-2");
    }

    // Add third level nearby effect
    if (bars[hoveredIndex - 3]) {
      bars[hoveredIndex - 3].classList.add("nearby-3");
    }
    if (bars[hoveredIndex + 3]) {
      bars[hoveredIndex + 3].classList.add("nearby-3");
    }

    // Add fourth level nearby effect
    if (bars[hoveredIndex - 4]) {
      bars[hoveredIndex - 4].classList.add("nearby-4");
    }
    if (bars[hoveredIndex + 4]) {
      bars[hoveredIndex + 4].classList.add("nearby-4");
    }

    // Add fifth level nearby effect
    if (bars[hoveredIndex - 5]) {
      bars[hoveredIndex - 5].classList.add("nearby-5");
    }
    if (bars[hoveredIndex + 5]) {
      bars[hoveredIndex + 5].classList.add("nearby-5");
    }

    // Add sixth level nearby effect
    if (bars[hoveredIndex - 6]) {
      bars[hoveredIndex - 6].classList.add("nearby-6");
    }
    if (bars[hoveredIndex + 6]) {
      bars[hoveredIndex + 6].classList.add("nearby-6");
    }
  }
}

function clearAllHover() {
  bars.forEach(bar => {
    bar.classList.remove(
      "hovered",
      "nearby-1",
      "nearby-2",
      "nearby-3",
      "nearby-4",
      "nearby-5",
      "nearby-6"
    );
  });
}

// Function to find the closest bar to a given Y position
function findClosestBar(clickY) {
  let closestBar = null;
  let closestDistance = Infinity;
  
  bars.forEach((bar) => {
    const rect = bar.getBoundingClientRect();
    const barCenter = rect.top + rect.height / 2;
    const distance = Math.abs(clickY - barCenter);
    
    if (distance < closestDistance) {
      closestDistance = distance;
      closestBar = bar;
    }
  });
  
  return closestBar;
}

// Function to scroll to section with offset
function scrollToSection(targetId, offset = 30) {
  const element = document.getElementById(targetId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - offset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
}

// Add click functionality to individual bars
bars.forEach((bar) => {
  // Scroll to section on click
  bar.addEventListener("click", () => {
    const targetId = bar.getAttribute("data-target");
    scrollToSection(targetId, 45);
  });
});

// Add click functionality to the entire sidebar area
sidebar.addEventListener("click", (e) => {
  // If clicking directly on a bar, let the bar's click handler deal with it
  if (e.target.classList.contains("bar")) {
    return;
  }
  
  // Otherwise, find the closest bar to the click position
  const closestBar = findClosestBar(e.clientY);
  if (closestBar) {
    const targetId = closestBar.getAttribute("data-target");
    scrollToSection(targetId, 45);
  }
});

// Scrollspy
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - sectionHeight / 2) {
      current = section.getAttribute("id");
    }
  });

  bars.forEach(bar => {
    bar.classList.remove("active");
    if (bar.getAttribute("data-target") === current) {
      bar.classList.add("active");
    }
  });
});