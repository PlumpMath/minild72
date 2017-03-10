(ns pong.setup
  (:require [quil.core :as q :include-macros true]))

(def log (.-log js/console))

(def court-width 450)
(def paddle-height 70)
; paddle and ball width
(def pb-width 10)

(def court-height (* paddle-height 3))

(defn y [thing-height]
  (- (/ court-height 2) (/ thing-height 2)))
(def base-paddle
  {
    :y (y paddle-height)
    :w pb-width
    :h paddle-height
    :color [255 255 255]
  })
(def paddle-bot
  (assoc base-paddle :x pb-width))

(def paddle-player
  (assoc base-paddle :x (- court-width (* pb-width 2))))

(def ball
  {
    :x (/ court-width 1.5)
    :y (y pb-width)
    :w pb-width
    :h pb-width
    :color [255 255 255]
    })
(def ball-dir
  [1 0])

(def score-pos-bot
  {
    :x (- (/ court-width 2) (/ court-width 4))
    :y (/ court-height 6)
  })

(def score-pos-player
  {
    :x (+ (/ court-width 2) (/ court-width 4))
    :y (/ court-height 6)
  })

(def frame-rate 60)
(defn wall [x y]
  {
    :x x
    :y y
    :w pb-width
    :h pb-width
    :color [100 255 255]
    })

(defn setup []
  (q/smooth)
  (q/no-stroke)
  (q/frame-rate frame-rate)
  {
    :bot {
      :paddle paddle-bot
      :hits 0
      :score 0
      :score-pos score-pos-bot
    }
    :player {
      :paddle paddle-player
      :hits 0
      :score 0
      :score-pos score-pos-player
    }
    :ball ball
    ; initially it flies to the right, thus x=1 and y=0
    :ball-dir ball-dir
    :reset-ball true
    :walls [(wall 200 60) (wall 220 120) (wall 180 180)]
    :c {
      :court-height court-height
      :court-width court-width
    }
  })
