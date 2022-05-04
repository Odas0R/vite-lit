import type { TemplateResult } from "lit";
import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

import styles from "./index.styles.css"

@customElement("index-page")
export class IndexPage extends LitElement {
  static styles = css`
  `;

  render(): TemplateResult {
    return html`
      <sl-button>
        <sl-icon slot="prefix" name="gear"></sl-icon>
        Settings
      </sl-button>
    `;
  }
}
