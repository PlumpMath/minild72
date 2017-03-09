(ns pong.audio
  (:require [hum.core :as hum]
            [cljs.core.async :refer [chan close!]])
  (:require-macros
    [cljs.core.async.macros :as m :refer [go]]))

(def ctx (hum/create-context))
(def vco (hum/create-osc ctx :sawtooth))
(def vcf (hum/create-biquad-filter ctx))
(def output (hum/create-gain ctx))

; connect the VCO to the VCF and on to the output gain node
(hum/connect vco vcf output)

(hum/start-osc vco)

(hum/connect-output output)

; prime
(do
  (hum/note-on output vco 440)
  (hum/note-off output))

(defn timeout [ms]
  (let [c (chan)]
    (js/setTimeout (fn [] (close! c)) ms)
    c))

(defn beep [freq & {:keys [duration] :or {duration 100}}]
  (go
    (hum/note-on output vco freq)
    (<! (timeout duration))
    (hum/note-off output)))



(defn note-num-to-frequency [note-num]
  (let [expt-numerator (- note-num 49)
        expt-denominator 12
        expt (/ expt-numerator expt-denominator)
        multiplier (.pow js/Math 2 expt)
        a 440]
  (* multiplier a)))

(defn beep-paddle []
  (beep (note-num-to-frequency (+ 30 (rand-int 20)))))

(defn beep-wall []
  (beep (note-num-to-frequency 15) :duration 10))
