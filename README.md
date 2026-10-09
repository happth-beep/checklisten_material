# checklisten_material

Lernmaterial zur individuellen Wiederholung und Klausurvorbereitung in Chemie, Jahrgang 13.
Die Nummern der Lernangebote entsprechen den Punkten der Checkliste.

## Aktueller Stand

Es gibt zwei Unterrichtsreihen mit insgesamt **57 Checklistenpunkten**. Jeder Punkt hat ein eigenes Lernangebot mit stabiler Adresse. Die Nummern gelten jeweils innerhalb der gewählten Reihe.

### Elektrochemische Energiequellen und Spannungsreihe

Die neue Reihe enthält **32 Lernangebote** sowie eine **Abschlussübung** für etwa 25 bis 30 Minuten.

| Bereich | Punkte | Schwerpunkte |
| --- | --- | --- |
| Metallabscheidung und Redoxreihe | 1.1–1.4 | Beobachtung, Redoxpartner, Bilanzierung, qualitative Reihe |
| Galvanische Zellen und Potentialentstehung | 2.1–2.5 | Daniell-Element, Ladungswege, Doppelschicht, Messungen |
| Bezugselektrode und Spannungsreihe | 3.1–3.4 | Relative Potentiale, NWE, Standardpotentiale und Gültigkeit |
| Konzentrationsabhängigkeit der Potentiale | 4.1–4.4 | Konzentrationselement, Nernst-Gleichung bei 25 °C, Zellspannungen |
| Elektrolyse und ihre Umkehrung | 5.1–5.4 | Laden und Entladen, Elektrodenrollen, Ladung und Energie |
| Faradaysches Gesetz und Elementarladung | 6.1–6.4 | Stoffumsatz, Rechnen, Datenauswertung, F und e |
| Quantitative Arbeitsweise und Elektrogravimetrie | 7.1–7.4 | Messplan, Praxisnachweis, Fehleranalyse, Gehaltsbestimmung |
| Elektrochemische Energiequellen beurteilen | 8.1–8.3 | Primärzelle, Akku, PEM-Brennstoffzelle, begründetes Sachurteil |

Jede Seite bietet einen wählbaren Informationsteil, offene Aufgaben, gestufte Hilfen und begründete Musterlösungen. Hilfen und Lösungen sind anfangs geschlossen. Eigene Schemata sowie gekennzeichnete konstruierte Datensätze unterstützen die Bearbeitung. Die Reihe umfasst auch praktische Kompetenzen; das Onlineangebot zu 7.2 ersetzt die Durchführung im beaufsichtigten Unterricht nicht. Die Checkliste legt nicht automatisch den Umfang einer schriftlichen Klausur fest.

Nernst-Rechnungen beschränken sich auf Metall/Metallion-Halbzellen bei 25 °C. Die Konzentrationsnäherung wird benannt; pH- und Temperaturvariation werden nicht ergänzt. Erweiterungen, etwa die Trapezregel oder eine Wirkungsgradrechnung, sind entsprechend gekennzeichnet.

### Konduktometrie

Alle bisherigen **25 Lernangebote** bleiben unter ihren vorhandenen Adressen erreichbar.

| Bereich | Punkte | Schwerpunkte |
| --- | --- | --- |
| Leitfähigkeit und Ionenbeweglichkeit | 1.1–1.4 | Teilchenmodell, Salzvergleich, Protonenübertragung, Größen und Einheiten |
| Einflussgrößen und Summenparameter | 2.1–2.3 | Konzentration, Temperatur, Grenzen von Leitfähigkeitsmessungen |
| Titrationskurven | 3.1–3.6 | Ionengleichungen, starke/schwache Säuren, Fällung, Äquivalenzpunkt |
| Grafisch auswerten | 4.1–4.4 | Diagramme, Volumenkorrektur, Geradenbereiche, Schnittpunkt |
| Stoffmengen und Gehalte | 5.1–5.5 | Stoffmenge, Konzentration, Massenkonzentration, Wasserzugabe, Vorverdünnung |
| Ergebnisse beurteilen | 6.1–6.3 | Begleitionen, mitreagierende Stoffe, Plausibilität und Genauigkeit |

- Infomaterial und Übungen entsprechend der Materialplanung
- Gestufte Hilfen und begründete Musterlösungen, zunächst geschlossen
- Eigene Diagramme sowie druckbare Raster und Auswertungen in Bereich 4
- Suchfunktion, Filter und Druckansicht
- Mobile Gestaltung und lesbare Inhalte auch ohne JavaScript
- Keine praktischen Durchführungsschritte, Arbeitsablaufpläne oder Titeraufgaben

## Veröffentlichung auf GitHub Pages

1. Im Repository **Settings → Pages** öffnen.
2. Unter **Build and deployment → Source** die Option **Deploy from a branch** auswählen.
3. Branch **main** und Ordner **/docs** wählen.
4. **Save** anklicken und die von GitHub angezeigte Website-Adresse öffnen, sobald die Bereitstellung fertig ist.

Der Ordner `docs` enthält die vollständige Website. GitHub Pages ist bereits für `main` und `/docs` aktiviert. Es ist kein eigener Build-Workflow erforderlich. `.nojekyll` sorgt dafür, dass die fertigen Dateien direkt verwendet werden.

## Wo ändere ich etwas

| Datei | Inhalt |
| --- | --- |
| `docs/index.html` | Startseite mit beiden Unterrichtsreihen |
| `docs/impressum.html` | Anbieterkennzeichnung und Kontakt; von allen HTML-Seiten direkt verlinkt |
| `docs/elektrochemie/index.html` | Neue Übersicht mit 32 Checklistenpunkten und Suche |
| `docs/elektrochemie/4-3/index.html` | Beispiel: Nernst-Gleichung zu Punkt 4.3 |
| `docs/elektrochemie/abschluss/index.html` | Verbindende Abschlussübung mit Hilfen und Lösungen |
| `docs/assets/elektrochemie.css` | Ergänzende Gestaltung für Elektrochemie und die Startseite |
| `docs/konduktometrie/index.html` | Übersicht, Checklistenformulierungen, Materialarten und Verfügbarkeit |
| `docs/konduktometrie/1-1/index.html` | Lerntext zu Punkt 1.1 |
| `docs/konduktometrie/1-2/index.html` | Übung zu Punkt 1.2 mit Hilfen und Lösungen |
| `docs/assets/exercises.css` | Ergänzende Gestaltung der Übungen |
| `docs/assets/styles.css` | Gestaltung, mobile Ansicht und Drucklayout |
| `docs/assets/site.js` | Suche, Verfügbarkeitsfilter und Druckschaltfläche |
| `docs/assets/ionenbewegung.svg` | Schematisches Teilchenbild |

Alle Lernseiten liegen nach demselben Schema unter `docs/<Reihe>/<Nummer-mit-Bindestrich>/index.html`, also beispielsweise `docs/konduktometrie/1-1/index.html` und `docs/elektrochemie/1-1/index.html`. Zusätzliche Grafiken und Druckseiten befinden sich gegebenenfalls im jeweiligen Unterordner. Die HTML-Dateien sind vollständig und ohne Build-Schritt editierbar; die Darstellung benötigt keine externen JavaScript-Bibliotheken.

Die HTML-Dateien sind die direkt editierbaren Quelldateien. Eine Änderung wird nach dem Commit auf `main` automatisch veröffentlicht, sobald Pages aktiviert ist.

### Einen Text auf GitHub ändern

1. Die passende HTML-Datei öffnen und das Stiftsymbol wählen.
2. Den sichtbaren Text zwischen den HTML-Tags bearbeiten. Tags wie `<p>` und `</p>` beibehalten.
3. Bei Formeln sind Unicode-Zeichen wie `Na⁺`, `Cl⁻` und `H₃O⁺` direkt möglich; alternativ funktionieren HTML-Tags wie `<sub>` und `<sup>`.
4. Die Änderung mit einer kurzen Beschreibung committen.
5. Nach der Veröffentlichung die betroffene Seite kontrollieren, am besten auch auf dem Smartphone.

### Ein weiteres Lernangebot ergänzen

1. Für einen neuen Checklistenpunkt einen entsprechenden Ordner unter der passenden Reihe anlegen. Bereits belegte Nummern nicht neu verwenden. Eine bestehende Seite als Vorlage kopieren; Titel, Beschreibung, Inhalt, Inhaltsnavigation und Quellen anpassen.
2. In der Übersicht die passende Zeile anlegen oder eine vorhandene Zeile aktualisieren; Nummer und Zielordner müssen zusammenpassen.
3. In dieser Zeile `data-ready="false"` auf `data-ready="true"` ändern und der Klasse `lesson-row` die Klasse `ready` hinzufügen.
4. Den Status „In Vorbereitung“ durch einen Link auf die neue Seite ersetzen. Die Materialart kontrollieren.
5. Den Verfügbarkeitshinweis auf Startseite und Übersicht aktualisieren.

Nummern und bereits veröffentlichte Ordnernamen bleiben stabil. So behalten gedruckte QR-Codes ihr Ziel. Die Website liegt unter `https://happth-beep.github.io/checklisten_material/`. Die Adresse für Konduktometrie 1.1 endet in `/konduktometrie/1-1/`, für Elektrochemie 1.1 in `/elektrochemie/1-1/`. Vor dem Erzeugen und Drucken von QR-Codes die konkreten Zieladressen prüfen.

## Lokal ansehen oder später umziehen

Die Dateien lassen sich direkt im Browser öffnen. Für eine lokale Vorschau per Webserver kann im Repository ausgeführt werden:

```sh
python3 -m http.server 8000 --directory docs
```

Danach `http://localhost:8000` aufrufen. Bei einem späteren Hostingwechsel wird der Inhalt von `docs` als Website übernommen. Links innerhalb der Website sind relativ und funktionieren auch unter einem Projektpfad wie `/checklisten_material/`.

## Hilfen und Lösungen bearbeiten

Die Übung 1.2 nutzt native HTML-Elemente `<details>` und `<summary>`. Der Text in `<summary>` ist die sichtbare Schaltfläche; darunter stehen Hilfe oder Lösung. Ohne das Attribut `open` bleibt der Inhalt beim ersten Aufruf geschlossen. Die Bedienung funktioniert auch ohne JavaScript.

Die Druckschaltfläche öffnet vor dem Drucken alle Hilfen und Lösungen und stellt anschließend den vorherigen Zustand wieder her. Suchbegriffe, die nicht im sichtbaren Checklistenpunkt stehen, können in der Übersicht über `data-search-terms` ergänzt werden.

## Inhalt und Quellen

Die Lerntexte, Aufgaben, Musterlösungen und Abbildungen sind eigenständig erstellt. Fachliche Quellen stehen beim jeweiligen Lernmaterial. Synthetische Daten und schematische Kurven sind als solche gekennzeichnet; sie sind keine Messungen realer Schülerproben. Modellannahmen, etwa konstante Temperatur oder eine Volumenkorrektur, stehen bei den Aufgaben. Es werden keine externen Schriftarten, JavaScript-Bibliotheken, eingebetteten Videos oder zusätzlichen Analysedienste geladen. Die Website legt selbst keine Schülerkonten an und speichert keine Lernstände. Der Hostinganbieter kann unabhängig davon Zugriffsprotokolle führen.

Eine offene Lizenz für Texte und Abbildungen wurde noch nicht festgelegt.

## Anbieterkennzeichnung

Das Impressum liegt unter `docs/impressum.html`. Jede HTML-Seite, einschließlich der eigenständig aufrufbaren Druckvorlagen, enthält im Fußbereich einen direkten Link dorthin. Neue Seiten müssen diesen Link ebenfalls erhalten. Die Anschrift wird ausschließlich im Impressum gepflegt.

Die Impressumsseite bittet Suchmaschinen über `noindex` darum, sie nicht in Suchergebnisse aufzunehmen. Die Seite und die Repository-Historie bleiben öffentlich zugänglich; dies ist kein Zugriffsschutz. Ein späterer Wechsel der Anschrift entfernt ältere Angaben nicht automatisch aus der Versionsgeschichte.
