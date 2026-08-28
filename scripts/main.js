// Initialize AOS Animations
AOS.init({
  anchorPlacement: 'top-left',
  duration: 1000
});

// Download / Print Resume as PDF
function generatePDF() {
  window.print();
}
