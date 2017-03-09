(ns pong.util)

;; determine if two rectangles intersect
(defn rect-intersects? [a b]
  (let [top-left-corner-a-x (:x a)
        top-left-corner-a-y (:y a)
        bottom-right-corner-a-x (+ (:x a) (:w a))
        bottom-right-corner-a-y (+ (:y a) (:h a))
        top-left-corner-b-x (:x b)
        top-left-corner-b-y (:y b)
        bottom-right-corner-b-x (+ (:x b) (:w b))
        bottom-right-corner-b-y (+ (:y b) (:h b))]
    (cond
      (and
        (<= top-left-corner-a-x bottom-right-corner-b-x)
        (>= bottom-right-corner-a-x top-left-corner-b-x)
        (<= top-left-corner-a-y bottom-right-corner-b-y)
        (>= bottom-right-corner-a-y top-left-corner-b-y))
      true
      :else
      false)))

(defn clamp [x min max]
  (cond
   (> x max) max
   (< x min) min
   :default x))
