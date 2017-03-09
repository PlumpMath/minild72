(ns pong.bot
  (:require [pong.util :as pu]))

; bot basically follows ball
(defn move [state]
  (let [ball (:ball state)
        paddle-height (:h (:paddle (:bot state)))
        y (- (:y ball) (/ paddle-height 2))
        y1 (+ y (/ (:h ball) 2))
        court-height (:court-height (:c state))
        dy (pu/clamp y1 0 (- court-height paddle-height))]
  (assoc-in state [:bot :paddle :y] dy)))
