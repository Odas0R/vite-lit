import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

import "@components/button-counter";
import "@styles/main.css";
import { TW } from "@utils/tailwind-mixin";

@customElement("index-page")
export class IndexPage extends TW(LitElement) {
  render() {
    return html`
      <div class="container">
        <button-counter></button-counter>
      </div>
    `;
  }
}
