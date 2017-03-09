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

(def paddle-bot
  {
    :x pb-width
    :y (y paddle-height)
    :w pb-width
    :h paddle-height
  })

(def paddle-player
  {
    :x (- court-width (* pb-width 2))
    :y (y paddle-height)
    :w pb-width
    :h paddle-height
    })

(def ball
  {
    :x (/ court-width 2)
    :y (y pb-width)
    :w pb-width
    :h pb-width
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

(defn setup []
  (q/smooth)
  (q/no-stroke)
  (q/frame-rate 60)
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
    :c {
      :court-height court-height
      :court-width court-width
      :paddle-height paddle-height
      :paddle-width paddle-width
    }
  })
