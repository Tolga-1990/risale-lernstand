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

Die Fragen stehen in `questions.json`.

- **Sözler:** Seitenangaben nach der deutschen Ausgabe «Worte», wie sie im Buch «Worte» der Lese-App «Risale-i Nur Okuma Programı» erscheint (Seitenmarken #7, #8 …). Der Link «In Lese-App öffnen» springt in die Nähe der Seite; die Position ist aus fünf in der App gemessenen Punkten (S. 7, 26, 84, 150, 194) hochgerechnet und kann um etwa eine Seite abweichen.
- **Mektubat:** Seitenangaben nach der deutschen Ausgabe «Briefe», übersetzt von Davut Korkmaz (Lichtstrasse, Köln). Dieselbe Ausgabe und Seitenzählung wie im Buch «Briefe» der Lese-App «Risale-i Nur Okuma Programı». Der Link «In Lese-App öffnen» springt in die Nähe der Seite; die Position ist aus zwei gemessenen Punkten hochgerechnet und kann um eine Seite abweichen.

Fragen und Erklärungen sind eigene Formulierungen. Der Text der Werke wird nicht wiedergegeben.

## Dateien

| Datei | Zweck |
|---|---|
| `index.html` | die App |
| `questions.json` | Fragensammlung |
| `manifest.webmanifest`, `icons/` | Installation auf dem Startbildschirm |
| `sw.js` | Offline-Betrieb |
