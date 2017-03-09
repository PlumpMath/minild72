(ns pong.leaderboard
  ;(:import goog.Uri)
  (:require [goog.net.XhrIo :as xhr]
    [goog.Uri :as uri]
            ))

; this is an optional part of the app
; and hey - at least we're not storing the API key here.
; https://dollarone.games/elympics/getHighscores?gamename=p_ng

(defn leaderboard [state]
  (let [url (-> js/window .-location .-href)
        url (goog.Uri. url)
        user (.getParameterValue url "name")
        score (:hits (:player state))]
      (xhr/send (str "https://hooks.zapier.com/hooks/catch/175623/mqwd5m/?user=" user "&score=" score)

      )))
