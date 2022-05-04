import type { TemplateResult } from "lit";
import { css, LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("button-counter")
export class Counter extends LitElement {
  static styles = css`
    p {
      color: var()
    }
`

  @property({ type: Number })
  private counter = 0;

  render(): TemplateResult {
    return html`
      <p class="">Hello, ${this.counter}</p>
      <button class="" @click="${() => (this.counter += 1)}">
        Click
      </button>
    `;
  }
}
