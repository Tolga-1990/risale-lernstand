# Risale-i Nur Lernstand

Persönliche Lern-App zur Risale-i Nur: Multiple-Choice-Fragen je Abschnitt, mit Musterlösung, Seitenangabe, Link zur Quelle und eigenen Notizen pro Seite. Richtig beantwortete Fragen kommen in wachsenden Abständen wieder, falsche am nächsten Tag.

## Auf dem Handy installieren

- **iPhone (Safari):** Seite öffnen, Teilen-Symbol, «Zum Home-Bildschirm».
- **Android (Chrome):** Seite öffnen, Menü ⋮, «App installieren» bzw. «Zum Startbildschirm hinzufügen».

Nach dem ersten Öffnen funktioniert die App auch offline.

## Daten

- Fortschritt, Selbsteinschätzung und Notizen werden nur im Browser des jeweiligen Geräts gespeichert. Sie werden nicht ins Repository hochgeladen.
- Übertragen auf ein anderes Gerät: in der App unter «Daten sichern und übertragen» eine Sicherung herunterladen und auf dem anderen Gerät einlesen. Bei Einträgen, die auf beiden Geräten geändert wurden, gilt der neuere Stand.

## Fragen

Die Fragen stehen in `questions.json`. Seitenangaben und Links folgen der Online-Külliyat des Risale-i Nur Enstitüsü (kulliyat.risaleinurenstitusu.org). Die Fragen und Erklärungen sind eigene Formulierungen; der Originaltext wird nicht wiedergegeben, sondern verlinkt.

## Dateien

| Datei | Zweck |
|---|---|
| `index.html` | die App |
| `questions.json` | Fragensammlung |
| `manifest.webmanifest`, `icons/` | Installation auf dem Startbildschirm |
| `sw.js` | Offline-Betrieb |
