(ns pong.input
  (:require [pong.util :as pu]))

; might we use keyboard control again?
(defn key-pressed [state event]
  (cond ; case ?
      ; left paddle up
      (= (:key event) :w)
        (update-in state [:player :paddle :y] dec)
      ; left paddle down
      (= (:key event) :s)
        (update-in state [:player :paddle :y] inc)

      ; right side ignore for now...
      :else state
      ))

(defn mouse [state event]
  (let [y (:y event)
        court-height (:court-height (:c state))
        paddle-height (:h (:paddle (:player state)))
        ; middle of paddle
        y-middle (- y (/ paddle-height 2))
        y-clamped (pu/clamp y-middle 0 (- court-height paddle-height))]
  (assoc-in state [:player :paddle :y] y-clamped)))
