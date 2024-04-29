const sidebarSectionInfo = document.querySelector('.sidebar-section-info');
const descriptionSection = document.querySelector('.description');
const middleSection = document.querySelector('.middle-section');
const backStepSection = document.querySelector('#back-step-btn');
const nextStepButton = document.querySelector('#next-step-btn');
const inputContainer = document.querySelector('.input-container');
const plansContainer = document.querySelector('.plans-container');
const addOnsContainer = document.querySelector('.add-ons-container');
const finishingUpContainer = document.querySelector('.finishing-up-container');
const thankyouContainer = document.querySelector('.thankyou-container');
const sidebarNumberSections = document.querySelectorAll('.sidebar-number');
const summaryServiceSection = document.querySelector(
  '.summary-service-section'
);
const totalPriceSection = document.querySelector('.total-price-section');

let page = 1;
let selectService = {
  name: '',
  email: '',
  phone: '',
  plan: {
    name: 'Arcade',
    price: 9,
    planType: 'Monthly',
  },
  addOns: [],
};

function createHeaderSection(headingText, description) {
  descriptionSection.innerHTML = '';
  const h1 = document.createElement('h1');
  h1.innerText = headingText;

  const p = document.createElement('p');
  p.innerText = description;

  descriptionSection.appendChild(h1);
  descriptionSection.appendChild(p);
}

function removeActiveOnSidebarNumber() {
  sidebarNumberSections.forEach((sidebarNumber) => {
    sidebarNumber.classList.remove('sidebar-number-active');
  });
}
