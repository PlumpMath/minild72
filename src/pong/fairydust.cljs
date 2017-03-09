(ns pong.fairydust
  (:require [quil.core :as q :include-macros true]
            [pong.setup :as ps]))

; here we inject some trouble into the games

(defn paddles [state]
  (let [paddle-player (:paddle (:player state))
        paddle-bot (:paddle (:bot state))
        hits (:hits (:player state))]
        (cond
          (and
            ; don't shrink smaller than paddle width
            (> (:h paddle-player) ps/pb-width)
            ; every few seconds, make the paddle smaller
            (= (mod (q/frame-count) (* ps/frame-rate 10)) 0))
          (-> state
            (update-in [:player :paddle :h] dec)
            ; just to rub it in
            (update-in [:bot :paddle :h] inc))

            :else state)))
