const bars = document.querySelectorAll(".bar");
const sections = document.querySelectorAll("section");
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
  }
}

function clearAllHover() {
  bars.forEach(bar => {
    bar.classList.remove("hovered", "nearby-1", "nearby-2");
  });
}

bars.forEach((bar) => {
  // Scroll to section on click
  bar.addEventListener("click", () => {
    const targetId = bar.getAttribute("data-target");
    document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
  });
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