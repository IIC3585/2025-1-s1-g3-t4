// suscripcionLit.js
import { LitElement, html, css } from 'lit';

export class SuscripcionLitItem extends LitElement {
  static properties = {
    titulo: { type: String },
    visitas: { type: String },
    precio: { type: String },
    precioFinal: { type: String, attribute: 'precio-final' },
    descripcion: { type: String },
    features: { type: Array }
  };

  static styles = css`
    :host {
      display: block;
      font-family: sans-serif;
    }

    .card {
      border: 1px solid #ccc;
      border-radius: 12px;
      padding: 16px;
      width: 250px;
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
      margin: 8px 0;
    }

    li::before {
      content: "✅ ";
    }

    button {
      margin-top: 12px;
      padding: 8px 16px;
      background-color: rgb(46, 198, 72);
      color: white;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      width: 100%;
      display: flex;
      justify-content: center;
    }

    button:hover {
      background-color: rgb(55, 155, 72);
    }
  `;

  constructor() {
    super();
    this.titulo = '';
    this.visitas = '';
    this.precio = '';
    this.precioFinal = '';
    this.descripcion = '';
    this.features = [];
  }

  updated(changedProperties) {
    if (changedProperties.has('features') && typeof this.features === 'string') {
      try {
        this.features = JSON.parse(this.features);
      } catch {
        this.features = [];
      }
    }
  }
  handleClick = () => {
    this.dispatchEvent(new CustomEvent('suscripcion-lit-click', {
      detail: { titulo: this.titulo },
      bubbles: true,
      composed: true
    }));
  };

  render() {
    return html`
      <div class="card">
        <h2>${this.titulo}</h2>
        <p class="visits"><strong>${this.visitas}</strong> monthly visits</p>
        <p><strong class="price">$${this.precio}</strong>/mo</p>
        <p class="price-final">$${this.precioFinal} incl. 21% Vat</p>
        <p class="description">${this.descripcion}</p>
        <ul>
          ${this.features.map((f) => html`<li>${f}</li>`)}
        </ul>
        <button @click=${this.handleClick}>Get Started</button>
      </div>
    `;
  }
}

customElements.define('suscripcion-lit-item', SuscripcionLitItem);
