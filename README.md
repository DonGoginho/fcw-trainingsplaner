# FCW Trainingsplaner

Mobile-first Website für die Trainingsplanung beim **FC Wiedikon**. Optimiert für Smartphone am Spielfeldrand.

## Aktive Saison

**D7b-Junioren 2026/2027** — 7er-Fussball, 12 Spieler (Jahrgang 2014/2015), System 1-3-2-1

Spielbetrieb nach FVRZ-Merkblatt Junioren D/7: 7er-Spielfeld (55–41 m × 35–25 m).

### Trainingsbestand D7b

Stand 07.09.2026: 25 Trainingseinheiten (je 90 Min., ausser EL-1) + D7-Regeln zum Nachschlagen.

Alle 24 Trainingseinheiten à 90 Min. folgen dem Trainingsschema des J+S-Manuals (Einstieg – Hauptteil – Abschluss),
beginnen mit einem SFV-Lernbaustein und nutzen die Good-Practice-Formen des Manuals.

| Nr | Titel | Kategorie | Datei |
|---|---|---|---|
| T-1 | Ankommen & Kennenlernen | Team | `team-ankommen.html` |
| T-2 | Gemeinsam Regeln setzen | Team | `team-regeln.html` |
| T-3 | Stärken entdecken | Team | `team-staerken.html` |
| O-1 | Zusammen spielen | Ballbesitz | `ballbesitz-zusammenspiel.html` |
| O-2 | Spielaufbau von hinten | Ballbesitz | `ballbesitz-spielaufbau.html` |
| O-3 | Flügelspiel & Seitenwechsel | Ballbesitz | `ballbesitz-fluegelspiel.html` |
| O-4 | Überzahl herausspielen | Ballbesitz | `ballbesitz-ueberzahl.html` |
| O-5 | Tempowechsel & Spielkontrolle | Ballbesitz | `ballbesitz-tempowechsel.html` |
| O-6 | Kopfball | Ballbesitz | `ballbesitz-kopfball.html` |
| D-1 | 1v1 Verteidigen | Verteidigen | `verteidigen-1v1.html` |
| D-2 | Pressing als Team | Verteidigen | `verteidigen-pressing.html` |
| D-3 | Verschieben & Kompaktheit | Verteidigen | `verteidigen-verschieben.html` |
| D-4 | Absichern & Doppeln | Verteidigen | `verteidigen-doppeln.html` |
| E-1 | Balleroberung im 1v1 | Ball erobern | `erobern-1v1.html` |
| E-2 | Zusammen den Ball jagen | Ball erobern | `erobern-zusammen.html` |
| E-3 | Pressing-Fallen stellen | Ball erobern | `erobern-pressing-falle.html` |
| E-4 | Umschalten nach Ballgewinn | Ball erobern | `erobern-umschalten.html` |
| R-1 | Sofort nachsetzen | Gegenpressing | `gegenpressing-nachsetzen.html` |
| R-2 | Geordnet zurückfallen | Gegenpressing | `gegenpressing-zurueckfallen.html` |
| R-3 | Konter verhindern | Gegenpressing | `gegenpressing-konter-verhindern.html` |
| A-1 | Schnelligkeit & Reaktion | Athletik | `athletik-schnelligkeit.html` |
| A-2 | Koordination & Wendigkeit | Athletik | `athletik-koordination.html` |
| A-3 | Ausdauer durch Spielformen | Athletik | `athletik-ausdauer.html` |
| A-4 | Rumpfstabilität & Zweikampfkraft | Athletik | `athletik-zweikampf.html` |
| EL-1 | Einlaufen Spieltag (25 Min.) | Einlaufen | `einlaufen-spieltag.html` |
| — | D7-Regeln Kurzüberblick | Regeln (Nachschlagen) | `d7-regeln.html` |

## Archiv

**E2-Junioren 2025/2026** — 7er-Fussball, 13 Spieler. 33 Trainingseinheiten + 2 Coaching-Leitfäden. Erreichbar via Footer-Link auf der D7b-Startseite.

## Aufbau

Drei Ebenen. Was mehrere Teams brauchen, liegt oben; was nur eine Saison betrifft, liegt unten.

```
/                          Root — Redirect auf die aktive Saison
├── css/ js/ img/          gemeinsam für alle Teams
├── d7b-2026-2027/         eine Saison = ein Ordner
│   ├── index.html         Kartenübersicht mit Filter
│   └── trainings/         eine Trainingseinheit = eine HTML-Datei
└── e2-2025-2026/          abgeschlossene Saison, bleibt als Archiv stehen
```

### Kürzel und Kategorien

Jedes Training trägt ein Kürzel `X-N` — Kategorie und laufende Nummer, gezählt **pro Kategorie und pro Team**. Die Kategorien unterscheiden sich je Team, weil sie unterschiedlichen Ordnungssystemen folgen:

**D7b — nach den Spielphasen des J+S-Spielkompass** (Manual Fussball Jugendliche, S. 21). Die Frage lautet: *In welcher Spielsituation befinden wir uns?*

| Kürzel | Filter | Spielphase |
|---|---|---|
| **O** | Ballbesitz | Wir haben den Ball |
| **D** | Verteidigen | Wir haben den Ball nicht |
| **E** | Ball erobern | Wir erobern den Ball |
| **R** | Gegenpressing | Wir verlieren den Ball |
| **A** | Athletik | spielphasenübergreifend |
| **T** | Team | spielphasenübergreifend |
| **EL** | Einlaufen | Spieltag-Aufwärmen |

**E2 (Archiv) — nach Technik.** Die Frage lautete: *Welche Fertigkeit üben wir?* Kürzel S (Spielaufbau), V (Verteidigen), T (Torschuss), P (Passspiel), D (Dribbling), K (Kondition), X (Spezial).

Der Wechsel ist Absicht: Auf der Stufe D wird nicht mehr die Einzeltechnik zum Trainingsthema, sondern die Spielsituation, in der sie gebraucht wird.

### Aufbau einer Trainingseinheit

Alle D7b-Trainings folgen dem Trainingsschema des J+S-Manuals (S. 43) — **90 Minuten**, drei Teile:

| Teil | Dauer | Inhalt |
|---|---|---|
| **Einstieg** | 20–30 Min. | Aufwärmen mit Ball → Körperstabilität (Big 4) → Explosivität |
| **Hauptteil** | 30–45 Min. | Übung → Spielform → Basisspielform, vom Einfachen zum Komplexen |
| **Abschluss** | 15–20 Min. | Spiel, dann Cool-down und Entwicklungsfragen |

Auf der Seite selbst: Überblick mit rotem Faden, Zeitübersicht, Feldaufbau und Material, die Übungen mit Ablauf und Coaching, ein Plan B («Wenn es anders kommt») und die Quellenangaben.

Jede Übung ist ein `<div class="uebung">`. Die Sticky-Navigation liest diese Blöcke automatisch aus — es braucht keine Konfiguration, nur die Klasse.

### Übungsskizzen

Zwei Quellen, klar getrennt:

- **`img/diagramme/`** — nachgezeichnete Diagramme aus dem Good-Practice-Kapitel des J+S-Manuals, per `<img>` eingebunden. Wird verwendet, wo eine Manual-Vorlage existiert.
- **Inline-SVG** in der Trainingsseite — eigene Skizzen für alles ohne Vorlage: Platzaufteilung, Einstiegsformen aus den SFV-Lernbausteinen, Rotationspläne.

Weicht der Aufbau von der Vorlage ab (andere Spielerzahl, Feldgrösse), werden **beide** gezeigt: oben das Manual-Diagramm, darunter die eigene Skizze als «So steht es heute».

Farbschema der Skizzen: Blau `#2268B2` (Team A), Gelb `#FFD200` (Team B / Pässe), Rot `#D42027` (Gegner), Grau `#9e9e9e` (Neutrale / Joker).

Jede Trainingsseite zeigt im Block «Feldaufbau und Material» eine **Platzaufteilung** – welches Feld
wofür gebraucht wird und was in der Pause umgebaut werden muss. Grundsatz: nur einmal aufbauen.

## Features

- **Spielphasen-Filter** (Ballbesitz, Verteidigen, Erobern, Gegenpressing, Athletik, Team, Einlaufen, Regeln)
- **Übungsskizzen** als Inline-SVG und Manual-Diagramme
- **Sticky-Navigation** am unteren Bildschirmrand zum Blättern zwischen Übungen
- **Mobile-optimiert** für die Nutzung am Spielfeldrand
- **Druckbar** mit sauberem Print-Layout
- **Home-Screen App** via Web-App Manifest (FCW-Logo als Icon)

## Technik

Reines HTML/CSS/JS — kein Framework, kein Build-Tool. Einfach `index.html` im Browser öffnen oder via GitHub Pages hosten.

Farben aus dem FCW-Logo: Blau `#2268B2`, Gelb `#FFD200`, Rot `#D42027`.

## Neues Training anlegen

1. HTML-Datei in `<team-ordner>/trainings/` anlegen, Namensschema `thema-untertitel.html`
2. Aufbau nach dem Trainingsschema (Einstieg – Hauptteil – Abschluss), jede Übung als `<div class="uebung">`
3. Relative Pfade beachten: Trainingsseiten liegen zwei Ebenen unter Root (`../../css/`, `../../js/`, `../../img/`)
4. `<script src="../../js/uebung-nav.js"></script>` vor `</body>` einbinden
5. Karte in der Team-`index.html` ergänzen, mit `data-thema` und der nächsten Nummer der Kategorie
6. Diese Datei aktualisieren (Trainingsbestand)

## GitHub Pages

1. Repository Settings → Pages
2. Source: "Deploy from a branch"
3. Branch: `master`, Ordner: `/ (root)`
4. Save

## Lizenz

Erstellt für den internen Gebrauch des FC Wiedikon Trainerteams.
Trainingskonzepte mit Unterstützung von KI (Claude, Anthropic).
Fachliche Grundlage: J+S-Manual Fussball Jugendliche (BASPO/SFV, 2022) und die SFV-Lernbausteine.
