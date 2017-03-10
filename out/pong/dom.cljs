(ns pong.dom
  (:import [goog.dom query])
  (:require
   [goog.dom :as gdom]))

(defn add-menu-link_goog!
  [link link-text]
  (let [links (aget (query "#update") 0)
        a  (gdom/createElement "a")]
    (set! (.-href a) link)
    (gdom/setTextContent a link-text)
    (gdom/removeChildren links)
    (gdom/appendChild links a)))

(defn show-high-score []
  (let [url (-> js/window .-location) ]
  (add-menu-link_goog! url ">> play again")))
