import React from "react";
import { Link } from "react-router-dom";
import GETPicture from "./images/GETPicture.jpg";
import POSTPicture from "./images/POSTPicture.jpg";
import "./Home.css";

export const Home = () => {
  return (
    <div className='Home'>
      <h1 className='pageHeader'>TheBaer.One🐻</h1>
      <h4 className='subHeader'>made by Dennis Bär🐻</h4>
      <div className='text'>
        <p>
          Diese Seite ist für Studierende die die API des Informatik 2
          Semesterprojekt testen wollen ohne die offizielle API der Aufgabe zu
          verwenden.
        </p>
        <br />
        <p>
          Die Website hat einerseits eine GUI zum einsehen aller Einträge in dem
          Gästebuch von dieser Website und von der Offiziellen API und zum
          hinzufügen von Einträgen durch eine GUI.
        </p>
        <br />
        <p>
          Dazu bietet die Website hier aber auch an dass Einträge wieder
          Gelöscht werden von der Datenbank der Website, dies geht leider nicht
          für die offizelle API Außerdem ist auf dieser Seite weiter unten
          Dokumentiert wie http anfragen an diese Website/ generell an Websiten
          gemacht werden können.
        </p>
      </div>

      <Link className='button-container' to='/gui'>
        <button className='nav-Button'>GUI </button>
      </Link>

      <p className='button_subtext'>
        GUI für alle Einträge/ erstellen von Einträgen
      </p>

      <div className='TutorialSection'>
        <div className='tutorial_row'>
          <div className='flex-row'>
            <div className='tutorial_text_container'>
              <h2 className='Tutorial-header'>GET Data von einer API</h2>
              <p className='Tutorial-Text'>
                Um Daten von einer API zu bekommen gibt es die Funktion
                <strong>fetch()</strong>, wenn nur eine URL als Parameter
                gegeben wird ist <strong>fetch()</strong> automatisch eine GET
                anfrage. Die Anfragen sind http anfragen und liefern viele
                Sachen zurück, nicht nur die Daten die wir wollen. Die Antwort
                der Anfrage ist in der Variable "response" gespeichert. Die
                variable "response" hat jetzt mehrere Attribute wie "status" das
                uns den Status code der Antwort gibt. Um an die Daten der
                Antwort zu kommen benutzen wir "response.json()", dies liefert
                den "daten" Inhalt der Antwort als
                <strong>JSON</strong> uns zur Verfügung. Damit haben wir jetzt
                in "data" die Daten aus der Antwort. Wir können das Objekt jetzt
                auf die Console ausgeben was uns zeigt was in dem Objekt ist.
              </p>
            </div>
            <img
              src={GETPicture}
              alt='Picture of a GET function'
              className='tutorial_img'
            />
          </div>
        </div>

        <div className='tutorial_row'>
          <div className='flex-row'>
            <div className='tutorial_text_container'>
              <h2 className='Tutorial-header'>POST Data zu einer API</h2>
              <p className='Tutorial-Text'>
                Um Daten an eine API zu schicken verwendet man die POST Methode.
                Der einzige Unterschied zu der GET Methode ist dass wir jetzt
                Daten versenden und nicht empfangen, obwohl wir auch hier eine
                JSON Antwort bekommen können. Um eine POST Anfrage zu versenden
                müssen wir <strong>fetch</strong> ein zweiten Parameter geben.
                An erster stelle kommt die url als String und als zweiter
                Parameter ein Objekt dass fetch sagt dass es eine POST anfrage
                sein soll und die Daten. Das "Options-Objekt" (2ter Parameter
                von fetch) konfiguriert <strong>fetch</strong>, wir können
                vieles an der Anfrage ändern, aber wir brauchen jetzt hierfür
                nur 3 Sachen ändern. Als erstes welche Methode wir verwenden
                wollen für die Anfrage, hier könnten wir auch "GET" schreiben
                aber wir wollen eine POST anfrage senden. Dann Headers, hier
                sind noch weitere Einstellungen möglich. Aber uns interessiert
                nur "Content-Type": "application/json" was dem Server mitteilt
                das wir ihm Daten im JSON Format schicken. Als Letztes haben wir
                Body, Body ist das was unsere Daten hält die wir schicken
                wollen. Hier wird ein JavaScript Objekt zu einem string (JSON)
                umgewandelt von der Methode JSON.stringify() Als Antwort können
                wieder Daten sein, die können wir gleich extrahieren wie bei
                einer GET anfrage und printen.
              </p>
            </div>
            <img
              src={POSTPicture}
              alt='Picture of a POST function'
              className='tutorial_img'
            />
          </div>
        </div>

        <div className='tutorial_row'>
          <h2 className='Tutorial-header'>API Dokumentation</h2>
          <h3 className='routen-header'>Routen</h3>
          <div className='apiDokRow'>
            <div className=' MethodBox'>
              <h5 className='methodHead'>GET</h5>
              <p>
                https://www.thebear.one/api/guestbook/entries <br /> liefert ein
                JSON Objekt zurück mit allen Einträgen <br />
                <br /> ein Eintrag hat die Eigenschaften <br />
                <br /> id - eine ID als INT <br />
                name - einen Namen als String <br /> date - ein Datum formatiert
                nach ISO also String <br />
                entry - ein Text als String
              </p>
            </div>
            <div className=' MethodBox'>
              <h5 className='methodHead'>POST</h5>
              <p>
                https://www.thebear.one/api/guestbook/entries <br /> Empfängt
                ein JSON Object mit den Eigenschaften <br /> <br /> name -
                String
                <br /> entry - String <br /> <br /> Antwort der Anfrage: <br />{" "}
                <br />
                Statuscode 200 <br /> und ein JSON objekt: status- als String
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
