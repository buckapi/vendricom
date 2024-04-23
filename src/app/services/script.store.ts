
interface Scripts {
    name: string;
    src: string;
    defer?: string; 
}  
export const ScriptStore: Scripts[] = [
  // { name: 'popper', src: 'assets/partsix/js/vendor/popper.js', defer: 'defer' },
  // { name: 'bootstrap', src: 'assets/partsix/js/vendor/bootstrap.min.js', defer: 'defer' },
  // { name: 'swiper-bundle', src: 'assets/partsix/js/plugins/swiper-bundle.min.js' },
  // { name: 'glightbox', src: 'assets/partsix/js/plugins/glightbox.min.js' },
  // { name: 'script', src: 'assets/partsix/js/script.js' }

  { name: 'script', src: 'assets/vikinger/app.bundle.min.js' }
];
