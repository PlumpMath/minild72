(ns pong.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]
            [pong.setup :as ps]
            [pong.input :as pi]
            [pong.bot :as pb]
            [pong.physics :as pp]))

(defn draw-rect [r]
  (q/rect (:x r) (:y r) (:w r) (:h r)))

(defn draw-str [s point]
  (q/text s (:x point) (:y point)))

(defn next-ball [state ball [dx dy]]
  (let [hits (:hits (:player state))
        vel-bump (+ (/ hits 10) 1)] ; speed up 10 times slower than usual
        (assoc ball :x (+ (:x ball) (* dx vel-bump))
                    :y (+ (:y ball) dy))))

(defn update-fn [state]
  (-> state
    ; move the ball
    (assoc-in  [:ball] (next-ball state (:ball state) (:ball-dir state)))
    ; bot paddle move
    (pb/move)
    ; collide the ball (if any)
    (pp/collision)
    ))

; draw
(defn draw [state]
  ; set background color to dark gray, draw color to white
  (q/background-float 0x20)
  (q/fill 0xff)
  (draw-rect (:paddle (:bot state)))
  (draw-rect (:paddle (:player state)))
  (draw-rect (:ball state))
  (draw-str (:hits (:bot state)) (:score-pos (:bot state)))
  (draw-str (:hits (:player state)) (:score-pos (:player state)))
  )

; run
(q/defsketch pong
  :host "pong"
  :size [ps/court-width ps/court-height]
  :setup ps/setup
  :update update-fn
  :draw draw
  ;:key-pressed pi/key-pressed
  :mouse-moved pi/mouse
  :middleware [m/fun-mode])
