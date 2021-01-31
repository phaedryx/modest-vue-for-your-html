import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

import { createApp } from 'vue'

// standard Rails stuff
Rails.start()
Turbolinks.start()
ActiveStorage.start()

// Vue stuff here
import Widget from '../components/Widget'
// I could import more components here

const components = { Widget } // Maybe more components?

// Normally this would be done with 'DOMContentLoaded', but Turbolinks breaks that
document.addEventListener("turbolinks:load", () => {
  // Find everything with a data-component
  document.querySelectorAll('[data-component]').forEach((node) => {
    // mount the respective Vue component
    createApp(components[node.dataset.component]).mount(node)
  })
})
