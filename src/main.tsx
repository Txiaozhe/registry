import { h, render, rerender } from "preact";
import { App } from "./app";
import { enableFirebase } from "./db";
import { assert, IS_WEB } from "./util";

assert(IS_WEB);

enableFirebase();

window.addEventListener("load", async () => {
  render(<App />, document.body, document.body.children[0]);

  // If we're in a testing environment...
  if (window.navigator.webdriver) {
    // rerender to make sure the dom is up to date and then output a special
    // string which is used in tools/test_browser.js.
    rerender();
    console.log("Propel onload");
  }
});
