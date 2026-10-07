# checklisten_material

Lernmaterial zur individuellen Klausurvorbereitung in Chemie, Jahrgang 13.
Die Nummern der Lernangebote entsprechen den Punkten der Checkliste.

## Aktueller Stand

- Startseite und Übersicht über alle 25 Punkte der Reihe Konduktometrie
- Infomaterial **1.1 – Warum leiten wässrige Lösungen Strom?** mit eigenem Teilchenbild
- Weitere Angebote als „In Vorbereitung“ gekennzeichnet
- Suchfunktion, Filter für verfügbare Angebote und Druckansicht
- Mobile Darstellung und vollständig lesbare Inhalte auch ohne JavaScript

## GitHub Pages einschalten

1. Im Repository **Settings → Pages** öffnen.
2. Unter **Build and deployment → Source** die Option **Deploy from a branch** auswählen.
3. Branch **main** und Ordner **/docs** wählen.
4. **Save** anklicken und die von GitHub angezeigte Website-Adresse öffnen, sobald die Bereitstellung fertig ist.

Der Ordner `docs` enthält die vollständige Website. GitHub Pages wurde durch das Befüllen des Repositorys nicht konfiguriert. Es ist kein eigener Build-Workflow erforderlich. `.nojekyll` sorgt dafür, dass die fertigen Dateien direkt verwendet werden.

## Wo ändere ich etwas

| Datei | Inhalt |
| --- | --- |
| `docs/index.html` | Startseite |
| `docs/konduktometrie/index.html` | Übersicht, Checklistenformulierungen, Materialarten und Verfügbarkeit |
| `docs/konduktometrie/1-1/index.html` | Lerntext zu Punkt 1.1 |
| `docs/assets/styles.css` | Gestaltung, mobile Ansicht und Drucklayout |
| `docs/assets/site.js` | Suche, Verfügbarkeitsfilter und Druckschaltfläche |
| `docs/assets/ionenbewegung.svg` | Schematisches Teilchenbild |

Die HTML-Dateien sind die direkt editierbaren Quelldateien. Eine Änderung wird nach dem Commit auf `main` automatisch veröffentlicht, sobald Pages aktiviert ist.

### Einen Text auf GitHub ändern

1. Die passende HTML-Datei öffnen und das Stiftsymbol wählen.
2. Den sichtbaren Text zwischen den HTML-Tags bearbeiten. Tags wie `<p>` und `</p>` beibehalten.
3. Bei Formeln sind Unicode-Zeichen wie `Na⁺`, `Cl⁻` und `H₃O⁺` direkt möglich; alternativ funktionieren HTML-Tags wie `<sub>` und `<sup>`.
4. Die Änderung mit einer kurzen Beschreibung committen.
5. Nach der Veröffentlichung die betroffene Seite kontrollieren, am besten auch auf dem Smartphone.

### Ein weiteres Lernangebot ergänzen

1. Für Punkt 1.2 beispielsweise `docs/konduktometrie/1-2/index.html` anlegen. Die Struktur von 1.1 kann als Vorlage dienen; Titel, Beschreibung, Inhalt, Inhaltsnavigation und Quellen anpassen.
2. In der Übersicht die passende Zeile suchen, z. B. `id="punkt-1-2"`.
3. In dieser Zeile `data-ready="false"` auf `data-ready="true"` ändern und der Klasse `lesson-row` die Klasse `ready` hinzufügen.
4. Den Status „In Vorbereitung“ durch einen Link auf `1-2/index.html` ersetzen. Die Materialart kontrollieren.
5. Den Verfügbarkeitshinweis auf Startseite und Übersicht aktualisieren.

Nummern und bereits veröffentlichte Ordnernamen bleiben stabil. So behalten später gedruckte QR-Codes ihr Ziel. Die geplante Adresse für 1.1 endet in `/konduktometrie/1-1/`. QR-Codes erst nach Aktivierung und Prüfung der tatsächlichen Website-Adresse erzeugen.

## Lokal ansehen oder später umziehen

Die Dateien lassen sich direkt im Browser öffnen. Für eine lokale Vorschau per Webserver kann im Repository ausgeführt werden:

```sh
python3 -m http.server 8000 --directory docs
```

Danach `http://localhost:8000` aufrufen. Bei einem späteren Hostingwechsel wird der Inhalt von `docs` als Website übernommen. Links innerhalb der Website sind relativ und funktionieren auch unter einem Projektpfad wie `/checklisten_material/`.

## Inhalt und Quellen

Der erste Lerntext und das Teilchenbild sind eigenständig erstellt. Fachliche Quellen stehen beim Lernmaterial. Es werden keine externen Schriftarten, JavaScript-Bibliotheken, eingebetteten Videos oder zusätzlichen Analysedienste geladen. Die Website legt selbst keine Schülerkonten an und speichert keine Lernstände. Der Hostinganbieter kann unabhängig davon Zugriffsprotokolle führen.

Eine offene Lizenz für Texte und Abbildungen wurde noch nicht festgelegt.
