(ns pong.physics
  (:require [pong.util :as pu]
            [pong.setup :as ps]
            [pong.audio :as pa]
            [pong.leaderboard :as pl]
            [pong.dom :as pd]))

; collision with the paddle returns a value in the range
; -0.5 to 0.5 from top (of paddle) to bottom.
(defn collision-factor-x [paddle ball]
 (let [t (- (/ (- (:y ball) (:y paddle)) (:h paddle)) 0.5)]
    ;(ps/log "t" t)
    t))

(defn collision-factor [paddle ball]
  (let [t (/ (- (:y ball) (:y paddle)) (:h paddle))]
  ;(ps/log "t" t)
  (if (> t 0.5)
    t
    (- t 1))))

(defn collision [state]
  (let [ball (:ball state)
        ball-y (:y ball)
        ball-x (:x ball)
        paddle-player (:paddle (:player state))
        paddle-bot (:paddle (:bot state))
        court-height (:court-height (:c state))
        court-width (:court-width (:c state))]

        (cond
          ; collide with top/bottom wall
          (or (> ball-y (- court-height (:h ball))) (< ball-y 0))
          (do
            (pa/beep-wall)
            ; invert y
            (update-in state [:ball-dir] (fn [[x y]] [x (- y)])))


          ; collide with player paddle?
          (pu/rect-intersects? paddle-player ball)
            (let [t (collision-factor paddle-player ball)]
              ; beep
              (pa/beep-paddle)

              (-> state
                ; invert x direction, set y direction to collision factor
                (update-in [:ball-dir] (fn [[x _]] [(- x) t]))
                ; up the paddle count
                (update-in [:player :hits] inc)))

          ; collide with bot paddle?
          (pu/rect-intersects? paddle-bot ball)
            (let [t (collision-factor paddle-bot ball)]
              ; beep
              (pa/beep-paddle)

              (-> state
                ; invert x direction, set y direction to collision factor
                (update-in [:ball-dir] (fn [[x _]] [(- x) t]))
                ; up the paddle count
                (update-in [:bot :hits] inc)))

          ; collide with left/right wall (scoring)
          (> ball-x court-width)

          (do
            (pl/leaderboard state)
            (pd/show-high-score)
            (-> state
              (update-in [:bot :score] inc)
              (assoc-in [:ball] ps/ball)
              (assoc-in [:ball-dir] ps/ball-dir))
              {:game :over})

          (< ball-x 0)
          (-> state
            (update-in [:player :score] inc)
            (assoc-in [:ball] ps/ball)
            (assoc-in [:ball-dir] ps/ball-dir))

          :else state)))
