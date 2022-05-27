class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const year = new Date().getFullYear();
    this.innerHTML = `&copy; ${year} Copyright: arifz.com`;
  }
}

customElements.define("footer-component", Footer);
