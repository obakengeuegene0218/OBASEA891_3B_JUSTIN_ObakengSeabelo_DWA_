class BookPreview extends HTMLElement {
    constructor() {
      super();
  
      // Create a shadow root
      this.attachShadow({ mode: 'open' });
  
      // Create the component's HTML structure
      this.shadowRoot.innerHTML = `
      <img
                   class="preview__image"
                   src="${image}"
               />
              <div class="preview__info">
                  <h3 class="preview__title">${title}</h3>
                   <div class="preview__author">${authors[author]}</div>
              </div>
           `
        <button class="preview" data-preview>
          <img class="preview__image">
          <div class="preview__info">
            <h3 class="preview__title"></h3>
            <div class="preview__author"></div>
          </div>
        </button>
      ;  
    connectedCallback() {
      // Retrieve book data from attributes
      const author = this.getAttribute('author');
      const id = this.getAttribute('id');
      const image = this.getAttribute('image');
      const title = this.getAttribute('title');
  
      // Set book data in the component
      this.shadowRoot.querySelector('button').setAttribute('data-preview', id);
      this.shadowRoot.querySelector('.preview__image').src = image;
      this.shadowRoot.querySelector('.preview__title').textContent = title;
      this.shadowRoot.querySelector('.preview__author').textContent = author;
    }
  }
  
  // Define the custom element
  customElements.define('book-preview', BookPreview);