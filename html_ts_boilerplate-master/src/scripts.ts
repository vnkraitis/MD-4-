document.addEventListener('DOMContentLoaded', (): void => {
    const hamburger: HTMLDivElement | null = document.querySelector('.hamburger');
    const navMenu: HTMLUListElement | null = document.querySelector('.nav-menu');
  
    hamburger?.addEventListener('click', (): void => {
      navMenu?.classList.toggle('active');
    });
  
    // To close the nav menu when a link is clicked
    document.querySelectorAll('.nav-link').forEach((link: Element) => {
      link.addEventListener('click', (): void => {
        navMenu?.classList.remove('active');
      });
    });
  });
  