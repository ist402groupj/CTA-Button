import { html, css, LitElement } from 'lit';
import '@lrnwebcomponents/simple-icon/lib/simple-icon-lite.js';
import '@lrnwebcomponents/simple-icon/lib/simple-icons.js';

export class JBtn extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--j-btn-text-color, #000);
      }
      a {
        text-decoration: none;
        font-size: 20px;
        color: black;
      }
      a:hover,
      a:focus {
        color: white;
        background-color: darkgray;
        transition: 0.2s;
      }
      button { 
        border-radius: 10px;
        border-width: 1px;
        text-decoration: none;
        background-color: lightgray;
        padding: 10px 12px 10px 12px;
        font-size: 15px;
        color: black;
        transition: 0.2s;
      }
      button:hover,
      button:focus {
        color: white;
        background-color: darkgray;
        transition: 0.2s;
      }
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      counter: { type: Number }
      link: { type: String },
    };
  }

  constructor() {
    super();
    this.title = 'Hey there';
    this.counter = 5;
    this.link = 'https://www.youtube.com/watch?v=DTmFIB8Gu10'
  }

  __increment() {
    this.counter += 1;
  }

  render() {
    return html`
      <h2>${this.title} Counter: ${this.counter}!</h2>
      <a
        href="${this.link}"
        tabindex="-1"
        role="button"
        rel="noopener"
        target="_blank"
        @click=${this.__increment}
      >
      <button>
          <simple-icon-lite icon="social:public"></simple-icon-lite>
          Open GitHub
        </button>
      </a>
    `;
  }
}
