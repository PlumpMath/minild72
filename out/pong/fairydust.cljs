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

(defn wall [x y]
  {
    :x x
    :y y
    :w ps/pb-width
    :h ps/pb-width
    :color [100 255 255]
    })

; (* 12 (rand-int N)) -> this leaves 2 pixels between walls
; and 12*N < court-height
(defn wallxy [courtwh]
  (let [spaced (+ ps/pb-width 2)]
  (* spaced (rand-int (/ (- courtwh spaced) spaced)))))
(defn wallx []
  (wallxy ps/court-width))
(defn wally []
  (wallxy ps/court-height))
(defn add-wall [walls]
  (conj walls (wall (wallx) (wally))))
(defn append-n-walls [state n walls]
  (cond
    (contains? (:walls-added state) n)
    walls
    :else
    ((apply comp (repeat n add-wall)) walls)))

(defn place-walls [state]
  (let [hits (:hits (:player state))]
  (cond
    (= (mod hits 5) 0)
    (-> state
      (update-in [:walls] (fn [w] (append-n-walls state (/ hits 5) w)))
      (update-in [:walls-added] (fn [coll] (conj coll (/ hits 5)))))
    :else state)))

(defn sprinkle [state]
  (-> state
    (place-walls)
    (paddles-height)
    (paddles-color)))
