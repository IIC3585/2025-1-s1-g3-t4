class AcordionItem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const template = document.createElement('template');
    template.innerHTML = `
      <style>
        :host {
          display: block;
          font-family: sans-serif;
        }

        .item {
          border: 1px solid #ccc;
          margin: 8px 0;
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
      </style>
      <details>
        <summary><slot name="titulo">Título</slot></summary>
        <div class="content"><slot name="contenido">Contenido aquí</slot></div>
      </details>
    `;

    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    const details = this.shadowRoot.querySelector('details');

    details.addEventListener('toggle', () => {
      if (details.open) {
        document.querySelectorAll('acordion-item').forEach(el => {
          if (el !== this) {
            el.shadowRoot.querySelector('details').open = false;
          }
        });
      }
    });
  }
}

customElements.define('acordion-item', AcordionItem);
