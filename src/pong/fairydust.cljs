(ns pong.fairydust
  (:require [quil.core :as q :include-macros true]
            [pong.setup :as ps]))

; here we inject some trouble into the games

(defn paddles-height [state]
  (let [paddle-player (:paddle (:player state))
        paddle-bot (:paddle (:bot state))
        hits (:hits (:player state))]
        (cond
          (and
            ; don't shrink smaller than paddle width
            (> (:h paddle-player) ps/pb-width)
            ; every few seconds, make the paddle smaller
            (= (mod (q/frame-count) (* ps/frame-rate 5)) 0))
          (-> state
            (update-in [:player :paddle :h] dec)
            ; just to rub it in
            (update-in [:bot :paddle :h] inc))

            :else state)))

(defn paddles-color [state]
  (let [hits (:hits (:player state))
        c1 (mod (q/frame-count) 256)
        c2 (+ 128 (rand-int 128))]
        (cond
          (> hits 9)
          (-> state
            (assoc-in [:player :paddle :color] [c1 c2 c2]))

            :else state)))

(defn sprinkle [state]
  (-> state
    (paddles-height)
    (paddles-color)))
