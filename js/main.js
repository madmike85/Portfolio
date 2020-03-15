const dictionary = {
  menu: {
    about: {
      eng: 'About me',
      rus: 'Обо мне',
    },
    contacts: {
      eng: 'Contacts',
      rus: 'Контакты',
    },
    skills: {
      eng: 'My skills',
      rus: 'Мои навыки',
    },
    projects: {
      eng: 'My projects',
      rus: 'Мои проекты',
    },
  },
  about: {
    name: {
      eng: 'Mikhail Shcheglakov',
      rus: 'Михаил Щеглаков',
    },
    text: {
      eng:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum iusto tenetur, asperiores autem laboriosam sunt incidunt? Eos, fugit? Libero, nostrum aut! Porro itaque et deserunt sapiente error magnam, modi dolorem.',
      rus: `Задача организации, в особенности же новая модель организационной деятельности требуют определения и уточнения системы обучения кадров, соответствует насущным потребностям. Не следует, однако забывать, что сложившаяся структура организации позволяет выполнять важные задания по разработке модели развития. Идейные соображения высшего порядка, а также начало повседневной работы по формированию позиции позволяет оценить значение системы обучения кадров, соответствует насущным потребностям.`,
    },
    link: {
      eng: 'Download CV',
      rus: 'Скачать CV',
    },
  },
  contacts: {
    title: {
      eng: 'Contacts',
      rus: 'Контакты',
    },
    text: {
      eng: 'Contact me at:',
      rus: 'Связаться со мной:',
    },
  },
  skills: {
    title: {
      eng: 'My Skills',
      rus: 'Мои навыки',
    },
  },
  projects: {
    title: {
      eng: 'Projects',
      rus: 'Проекты',
    },
    commercial: {
      title: {
        eng: 'Commercial Projects',
        rus: 'Коммерчиские Проекты',
      },
      list: [
        {
          eng: 'Queen Elizabeth Hospitality And Tourism Institute',
          rus: 'Queen Elizabeth Hospitality And Tourism Institute',
        },
      ],
    },
    personal: {
      title: {
        eng: 'Personal Projects',
        rus: 'Персональные проекты',
      },
      list: [
        {
          eng: 'Virtual keyboard which duplicate the real one',
          rus: 'Виртуальная клавиатураб которая дублирует реальную',
        },
        {
          eng: 'A simple tetris',
          rus: 'Простой тетрис',
        },
        {
          eng: 'A weather forecast app',
          rus: 'Приложение прогноза погоды',
        },
        {
          eng: 'A simple clone of Piskel pixel editor',
          rus: 'Простой клон пиксельного редактора Piskel',
        },
      ],
    },
    link: {
      eng: 'learn more',
      rus: 'посмотреть',
    },
  },
  footer: {
    eng: '2020 Mikhail Shcheglakov All Rights Reserved',
    rus: '2020 Михаил Щеглаков Все права защищены',
  },
};

let language = 'rus';

const cvLinkEN = './assets/Mikhail_Shcheglakov_CV_EN.pdf';
const cvLinkRU = './assets/Mikhail_Shcheglakov_CV_RU.pdf';

const header = document.querySelector('.header');
const languageBtn = document.querySelector('.language');
const mobileLanguageBtn = document.querySelector('.mobile-nav__item.language');

const mainNav = document.querySelector('.main-nav-holder');
const mobileNav = document.querySelector('.mobile-nav-holder');
const hamburger = document.querySelector('.hamburger-container');

const mainNavTop = mainNav.offsetTop;
const hamburgerTop = hamburger.offsetTop;

const navigationItems = document.querySelectorAll('.main-nav__item > a');
const mobileNavigationItems = document.querySelectorAll('.mobile-nav__item > a');

const informationName = document.querySelector('.information__name');
const informationText = document.querySelector('.information__text');
const cvLink = document.querySelector('.download');

const contactsTitle = document.querySelector('.contacts__title');
const contactsText = document.querySelector('.contacts__text');

const skillsContainer = document.querySelector('.skills__container');
const skillsTitle = document.querySelector('.skills__title');
const skillBarValues = document.querySelectorAll('.skill-bar__container');

const projectsTitle = document.querySelector('.projects__title');
const commercialTitel = document.querySelector('.projects__subtitle.commercial');
const personalTitle = document.querySelector('.projects__subtitle.personal');

const projectCardLinks = document.querySelectorAll('.card__link');

const commercialProjects = document.querySelectorAll(
  '.projects__grid.commercial > .projects__card',
);

const personalProjects = document.querySelectorAll('.projects__grid.personal > .projects__card');

const footerCopyright = document.querySelector('.footer__copyright > span');

const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 300,
  easing: 'easeOutCubic',
});

function changeLanguage() {
  language = language === 'rus' ? 'eng' : 'rus';

  languageBtn.textContent = language === 'eng' ? 'Rus' : 'Eng';
  mobileLanguageBtn.textContent = language === 'eng' ? 'Rus' : 'Eng';

  changeMenuLanguage(language);

  informationName.textContent = dictionary.about.name[language];
  informationText.textContent = dictionary.about.text[language];
  cvLink.textContent = dictionary.about.link[language];

  setCVLink(language);

  contactsTitle.textContent = dictionary.contacts.title[language];
  contactsText.textContent = dictionary.contacts.text[language];

  skillsTitle.textContent = dictionary.skills.title[language];

  changeProjectsLanguage(language);

  footerCopyright.textContent = dictionary.footer[language];
}

function changeMenuLanguage(lang) {
  navigationItems.forEach((item) => {
    const title = item.className.replace('-nav', '');
    item.textContent = dictionary.menu[title][lang];
  });
  mobileNavigationItems.forEach((item) => {
    const title = item.className.replace('-nav', '');
    item.textContent = dictionary.menu[title][lang];
  });
}

function changeProjectsLanguage(lang) {
  projectsTitle.textContent = dictionary.projects.title[lang];
  commercialTitel.textContent = dictionary.projects.commercial.title[lang];
  personalTitle.textContent = dictionary.projects.personal.title[lang];

  projectCardLinks.forEach((link) => (link.textContent = dictionary.projects.link[lang]));

  commercialProjects.forEach((project, index) => {
    const projectText = project.querySelector('.card__text');
    projectText.textContent = dictionary.projects.commercial.list[index][lang];
  });

  personalProjects.forEach((project, index) => {
    const projectText = project.querySelector('.card__text');
    projectText.textContent = dictionary.projects.personal.list[index][lang];
  });
}

function setCVLink(lang) {
  if (lang === 'eng') {
    cvLink.setAttribute('href', cvLinkEN);
  } else {
    cvLink.setAttribute('href', cvLinkRU);
  }
}

function loadSkillPercentage() {
  skillBarValues.forEach((item) => {
    const value = item.querySelector('.skill-bar__value');
    const text = item.querySelector('span');
    text.textContent = `${value.dataset.value}%`;
    value.style.width = `${value.dataset.value}%`;
  });
}

function toggleMobileMenu() {
  hamburger.classList.toggle('change');
  mobileNav.classList.toggle('open');
}

function fixedNav() {
  if (window.scrollY > mainNavTop) {
    header.style.paddingTop = '140px';
    mainNav.classList.add('fixed');
  } else {
    header.style.paddingTop = '20px';
    mainNav.classList.remove('fixed');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  changeLanguage();
  loadSkillPercentage();
});

languageBtn.addEventListener('click', changeLanguage);

hamburger.addEventListener('click', toggleMobileMenu);

mobileNav.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    toggleMobileMenu();
  }

  if (e.target.classList.contains('language')) {
    changeLanguage();
  }
});

window.addEventListener('scroll', fixedNav);
