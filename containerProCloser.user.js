// ==UserScript==
// @name         Container Pro Auto-Closer
// @namespace    http://tampermonkey.net/
// @version      1.3
// @description  Chiude la scheda quando il titolo diventa CLOSE_NOW1 e segnala la presenza alla pagina
// @author       HeroWarsTools
// @match        file:///*
// @match        https://herowarstools.github.io/support/*
// @grant        window.close
// ==/UserScript==

(function() {
    'use strict';

    // Controllo ogni secondo
    setInterval(function() {
        // 1. SEGNALO ALLA PAGINA CHE LO SCRIPT È ATTIVO
        // Questo permette all'HTML di nascondere il tasto di download
        if (!document.body.hasAttribute('data-cp-closer-active')) {
            document.body.setAttribute('data-cp-closer-active', 'true');
        }

        // 2. CONTROLLO IL TITOLO PER LA CHIUSURA
        if (document.title === "CLOSE_NOW1") {
            console.log("Trigger rilevato: CLOSE_NOW1. Tentativo di chiusura...");
            
            // Tenta la chiusura standard
            window.close();
            
            // Fallback
            self.close();
        }
    }, 1000);
})();
