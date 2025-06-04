import { LitElement, html, css } from 'lit';

export class AcordionLit extends LitElement {
  static properties = {
    titulo: { type: String },
    abierto: { type: Boolean, reflect: true }
  };

  static styles = css`
    :host {
      display: block;
      font-family: sans-serif;
      margin-bottom: 12px;
    }

    .card {
      border: 1px solid #ccc;
      border-radius: 8px;
      overflow: hidden;
    }

    summary {
      background-color: #007BFF;
      color: white;
      padding: 12px;
      cursor: pointer;
      font-weight: bold;
      user-select: none;
    }

    summary::-webkit-details-marker {
      display: none;
    }

    details[open] summary {
      background-color: #0056b3;
    }

    .content {
      padding: 12px;
      background: #f9f9f9;
      color: #333;
    }
  `;

  constructor() {
    super();
    this.titulo = 'Título';
    this.abierto = false;
  }

  render() {
    return html`
      <details ?open=${this.abierto} @toggle=${this._onToggle}>
        <summary>${this.titulo}</summary>
        <div class="content">
          <slot></slot>
        </div>
      </details>
    `;
  }

  _onToggle(e) {
    if (e.target.open) {
      const all = document.querySelectorAll('acordion-lit');
      all.forEach(el => {
        if (el !== this) el.abierto = false;
      });
      this.abierto = true;
    } else {
      this.abierto = false;
    }
  }
}

customElements.define('acordion-lit', AcordionLit);
