(ns pong.defs)

(def HEIGHT 200)
(def PADDLE_HEIGHT 70)
(def log (.-log js/console))
(def paddle-bot {:x 10 :y 65 :w 10 :h PADDLE_HEIGHT})
(def paddle-player {:x 430 :y 65 :w 10 :h PADDLE_HEIGHT})
(def ball {:x 225 :y 100 :w 10 :h 10})
