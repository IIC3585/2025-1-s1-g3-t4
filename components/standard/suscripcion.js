// suscripcion-item.js
class SuscripcionItem extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    const template = document.createElement('template');
    template.innerHTML = `
     <style>
      .card {
        border: 1px solid #ccc;
        border-radius: 12px;
        padding: 16px;
        width: 250px;
        font-family: sans-serif;
        box-shadow: 0 2px 5px rgba(21, 21, 21, 0.67);
        background: rgba(67, 67, 67, 0.67);
        color: white;
        transition: all 0.3s ease;
        transform-origin: center;
      }

      .card:hover {
        transform: scale(1.05); 
        background: rgba(100, 100, 100, 0.85);
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
      }

      h2 {
        margin: 0;
        font-size: 1.8rem;
      }
      .visits {
        margin: 0;
        font-size: 1rem;
      }
      .price {
        font-size: 1.5rem;
        color: rgb(46, 198, 72);
        font-weight: bold;
        margin: 8px 0;
      }
      .price-final {
        font-size: 1rem;
        color: rgba(46, 198, 72, 0.3);
        margin: 4px 0;
      }
      .description {
        font-size: 0.9rem;
        margin: 8px 0;
      }
      ul {
        padding-left: 1.2em;
      }
      button {
        margin-top: 12px;
        padding: 8px 16px;
        background-color: rgb(46, 198, 72);
        color: white;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        display: flex;
        width: 100%;
        justify-content: center;
      }
      button:hover {
        background-color: rgb(55, 155, 72);
      }
      </style>
      <div class="card">
        <h2 class="titulo"></h2>
        <p class="visits"><strong class="visitas"></strong> monthly visits</p>
        <p><strong class="price"></strong> /mo</p>
        <p class="price-final"></p>
        <p class="description"></p>
        <ul class="features-list"></ul>
        <button>Get Started</button>
      </div>
    `
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  static get observedAttributes() {
    return ['titulo', 'visitas', 'precio', 'precio-final', 'descripcion', 'features'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.updateComponent();
  }

  connectedCallback() {
    this.shadowRoot.querySelector('button').addEventListener('click', () => {
      this.dispatchEvent(new CustomEvent('suscripcion-click', {
        bubbles: true,
        composed: true,
        detail: { titulo: this.getAttribute('titulo') }
      }));
    });
    this.updateComponent();
  }

  updateComponent() {
    this.shadowRoot.querySelector('.titulo').textContent = this.getAttribute('titulo') || '';
    this.shadowRoot.querySelector('.visitas').textContent = this.getAttribute('visitas') || '';
    this.shadowRoot.querySelector('.price').textContent = `$${this.getAttribute('precio') || ''}`;
    this.shadowRoot.querySelector('.price-final').textContent = `$${this.getAttribute('precio-final') || ''}`;
    this.shadowRoot.querySelector('.description').textContent = this.getAttribute('descripcion') || '';

    const features = JSON.parse(this.getAttribute('features') || '[]');
    const featuresList = this.shadowRoot.querySelector('.features-list');
    featuresList.innerHTML = '';
    features.forEach(f => {
      const li = document.createElement('li');
      li.textContent = `✅ ${f}`;
      featuresList.appendChild(li);
    });
  }
}

customElements.define('suscripcion-item', SuscripcionItem);
