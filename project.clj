(defproject acme "0.1.0-SNAPSHOT"
  :description "Clojure and Om Tutorial - http://zaiste.net/2014/02/web_applications_in_clojure_all_the_way_with_compojure_and_om/"
  :url "http://example.com/FIXME"
  :min-lein-version "2.0.0"
  :dependencies [[org.clojure/clojure "1.7.0-alpha5"]
                 [compojure "1.3.2"]
                 [ring/ring-core "1.3.2"]
                 [ring/ring-json "0.3.1"]
                 [ring/ring-defaults "0.1.4"]]
  :plugins [[lein-ring "0.8.13"]]
  :ring {:handler acme.handler/app}
  :profiles
  {:dev {:dependencies [[javax.servlet/servlet-api "2.5"]
                        [ring-mock "0.1.5"]]}})

