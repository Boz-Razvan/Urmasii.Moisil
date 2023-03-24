import React, { useState } from "react";
import "./styles/Participanti.css";
import { Footer } from "../components";

const Participanti = () => {
  const [participants, setParticipants] = useState([
    {
      numar: "1",
      nume: "Șoimaru Samuel",
      scoala: "Colegiul Național de Informatică, Piatra-Neamț",
      clasa: "clasa a IX-a",
    },
    {
      numar: "2",
      nume: "Anghel Mihaela",
      scoala: "Liceul Teoretic Alexandru Ghica Alexandria",
      clasa: "clasa a IX-a",
    },
    {
      numar: "3",
      nume: "Brebenel Mihnea Ștefan",
      scoala: "Colegiul Național „Nicolae Bălcescu” Brăila",
      clasa: "clasa a IX-a",
    },

    {
      numar: "4",
      nume: "Dobre Darius",
      scoala: "Colegiul Național de Informatică „Matei Basarab” Râmnicu Vâlcea",
      clasa: "clasa a IX-a",
    },
    {
      numar: "5",
      nume: "Despa Fabian-Ștefan",
      scoala:
        "Palatul Copiilor Craiova, Centrul de Pregătire pentru Performanță în Informatică Craiova",
      clasa: "clasa a IX-a",
    },
    {
      numar: "6",
      nume: "APOPUȚOAIE VLAD CRISTIAN",
      scoala: "LICEUL TEORETIC 'EMIL RACOVIȚĂ' VASLUI",
      clasa: "clasa a IX-a",
    },
    {
      numar: "7",
      nume: "LENSU ALEXANDRU",
      scoala: "Colegiul Național 'Unirea' Focșani",
      clasa: "clasa a IX-a",
    },
    {
      numar: "8",
      nume: "MOVILĂ ANA AMELIA",
      scoala: "COLEGIUL NAȚIONAL 'IENĂCHITĂ VĂCĂRESCU' TÂRGOVIȘTE",
      clasa: "clasa a IX-a",
    },
    {
      numar: "9",
      nume: "Mihai Alex Ioan",
      scoala: "Colegiul Național RADU GRECEANU Slatina",
      clasa: "clasa a IX-a",
    },
    {
      numar: "10",
      nume: "BINȚINȚAN  VLAD-COSMIN",
      scoala: "COLEGIUL NAȚIONAL ”HOREA, CLOȘCA ȘI CRIȘAN” - ALBA  IULIA",
      clasa: "clasa a IX-a",
    },
    {
      numar: "11",
      nume: "Tomiță Matei Alexandru",
      scoala: "Colegiul Național Emil Racoviță Iași",
      clasa: "clasa a IX-a",
    },
    {
      numar: "12",
      nume: "Petcu Antonio",
      scoala: "Colegiul Național ”M. Eminescu” Botoșani",
      clasa: "clasa a IX-a",
    },
    {
      numar: "13",
      nume: "State Matei Valentin",
      scoala: "Colegiul Național ”Mihai Viteazul” / Sfântu Gheorghe",
      clasa: "clasa a IX-a",
    },
    {
      numar: "14",
      nume: "Nedelcu Alexandru Ionuț",
      scoala: "Colegiul Național ”B. P. Hasdeu” Buzău",
      clasa: "clasa a IX-a",
    },
    {
      numar: "15",
      nume: "Poinaru Rareș-Aurel",
      scoala: "Colegiul Național ”Stefan cel Mare” Suceava",
      clasa: "clasa a IX-a",
    },
    {
      numar: "16",
      nume: "Alin Popescu",
      scoala: "Liceul Teoretic Orizont-Chișinău",
      clasa: "clasa a IX-a",
    },
    {
      numar: "17",
      nume: "CRIȘAN BOGDAN-ANDREI",
      scoala: 'Liceul Teoretic "Grigore Moisil" Timișoara/CEX',
      clasa: "clasa a IX-a",
    },
    {
      numar: "18",
      nume: "Savu Stefan Catalin",
      scoala: "Colegiul National ”I.L.Caragiale” Ploiesti",
      clasa: "clasa a IX-a",
    },
    {
      numar: "19",
      nume: "Ion Paul",
      scoala: "Colegiul Naţional Gheorghe Lazăr București",
      clasa: "clasa a IX-a",
    },
    {
      numar: "20",
      nume: "Runcan Cristian",
      scoala: "Colegiul Național „Decebal” Deva",
      clasa: "clasa a IX-a",
    },
    {
      numar: "21",
      nume: "ȚIGĂU F. ALEXANDRU",
      scoala: "Colegiul National Grigore Moisil București",
      clasa: "clasa a IX-a",
    },
    {
      numar: "22",
      nume: "TĂTAR Mihai",
      scoala: "Colegiul Național Al. Papiu Ilarian Tg. Mureș",
      clasa: "clasa a IX-a",
    },
    {
      numar: "23",
      nume: "Vartic Rihard",
      scoala: "Liceul Teoretic Internațional De Informatică București",
      clasa: "clasa a IX-a",
    },
    {
      numar: "24",
      nume: "Minoiu Teodor",
      scoala: "Colegiul Național de Informatică Gr. Moisil Brașov",
      clasa: "clasa a IX-a",
    },
    {
      numar: "25",
      nume: "Luchian Cristian",
      scoala: "Colegiul Național de Informatică Piatra-Neamț",
      clasa: "clasa a X-a",
    },
    {
      numar: "26",
      nume: "Gheorghe Mihnea Florentin",
      scoala: "Liceul Teoretic Alexandru Ghica Alexandria",
      clasa: "clasa a X-a",
    },
    {
      numar: "27",
      nume: "Nistor Mario Peter",
      scoala: "Colegiul Național Gheorghe Munteanu Murgoci Brăila",
      clasa: "clasa a X-a",
    },
    {
      numar: "28",
      nume: "Dragomir Ionuț-Daniel",
      scoala: "Colegiul Național Mircea cel Bătrân Rm. Vâlcea",
      clasa: "clasa a X-a",
    },
    {
      numar: "29",
      nume: "Mitri Robert Cristian",
      scoala:
        "Colegiul Național Frații Buzești Centrul de Pregătire pentru Performanță în Informatică Craiova",
      clasa: "clasa a X-a",
    },
    {
      numar: "30",
      nume: "PUICĂ ANDREI",
      scoala: "LICEUL TEORETIC EMIL RACOVIȚĂ VASLUI",
      clasa: "clasa a X-a",
    },
    {
      numar: "31",
      nume: "UNGUREANU BOGDAN",
      scoala: "Colegiul Național Unirea Focșani",
      clasa: "clasa a X-a",
    },
    {
      numar: "32",
      nume: "NECHITESCU ALEXANDRU NICOLAE",
      scoala: "COLEGIUL NAȚIONAL VLADIMIR STREINU GĂEȘTI",
      clasa: "clasa a X-a",
    },
    {
      numar: "33",
      nume: "Vlad Andrei Robert",
      scoala: "Colegiul Național ION MINULESCU Slatina",
      clasa: "clasa a X-a",
    },
    {
      numar: "34",
      nume: "MORGOVAN ȘTEFAN-ANDREI",
      scoala: "COLEGIUL NAȚIONAL HOREA CLOȘCA ȘI CRIȘAN - ALBA IULIA",
      clasa: "clasa a X-a",
    },
    {
      numar: "35",
      nume: "Cozma Tiberiu Ştefan",
      scoala: "Liceul Teoretic de Informatică Grigore Moisil Iași",
      clasa: "clasa a X-a",
    },
    {
      numar: "36",
      nume: "Neaună Mădălin",
      scoala: "Liceul Regina Maria Dorohoi",
      clasa: "clasa a X-a",
    },
    {
      numar: "37",
      nume: "Mihăilescu Ana",
      scoala: "Colegiul Național B. P. Hasdeu Buzău",
      clasa: "clasa a X-a",
    },
    {
      numar: "38",
      nume: "Bărîlă Ștefana",
      scoala: "Colegiul Național Stefan cel Mare Suceava",
      clasa: "clasa a X-a",
    },
    {
      numar: "39",
      nume: "Alexei Sizichin",
      scoala: "Liceul Teoretic Orizont-Chișinău",
      clasa: "clasa a X-a",
    },
    {
      numar: "40",
      nume: "BRIHĂCESCU TOMA",
      scoala: "Liceul Teoretic Grigore Moisil Timișoara/CEX",
      clasa: "clasa a X-a",
    },
    {
      numar: "41",
      nume: "Arsenoiu Iulian George",
      scoala: "Colegiul National I.L.Caragiale Ploiesti",
      clasa: "clasa a X-a",
    },
    {
      numar: "42",
      nume: "Andrei-Sebastian Aionesei",
      scoala: "Liceul Dimitrie Cantemir Darabani",
      clasa: "clasa a X-a",
    },
    {
      numar: "43",
      nume: "Chifor Darius-Octavian",
      scoala: "Liceul Teoretic Avram Iancu Brad Hunedoara",
      clasa: "clasa a X-a",
    },
    {
      numar: "44",
      nume: "ŞTEFAN A.B. IOAN ",
      scoala: "COLEGIUL NATIONAL GRIGORE MOISIL BUCUREȘTI",
      clasa: "clasa a X-a",
    },
    {
      numar: "45",
      nume: "IACOB Tudor",
      scoala: "Colegiul National Al. Papiu Ilarian Tg. Mureș",
      clasa: "clasa a X-a",
    },
    {
      numar: "46",
      nume: "Tudose Rareș-Felix",
      scoala: "Liceul Teoretic Internațional De Informatică București",
      clasa: "clasa a X-a",
    },
    {
      numar: "47",
      nume: "Bleotu Alexandru",
      scoala: "Colegiul Național de Informatică Gr. Moisil Brașov",
      clasa: "clasa a X-a",
    },
    {
      numar: "48",
      nume: "Ciobanu Cosmin",
      scoala: "Colegiul Național Roman-Vodă Roman",
      clasa: "XI-XII",
    },
    {
      numar: "49",
      nume: "Filip Claudiu",
      scoala: "Liceul Teoretic Alexandru Ghica Alexandria",
      clasa: "XI-XII",
    },
    {
      numar: "50",
      nume: "Cotigă David-Gabriel",
      scoala: "Colegiul Național „Gheorghe Munteanu Murgoci” Brăila",
      clasa: "clasa XI-XII",
    },
    {
      numar: "51",
      nume: "Răducu Ioan Ștefan",
      scoala: "Colegiul Național „Mircea cel Bătrân”",
      clasa: "clasa XI-XII",
    },
    {
      numar: "52",
      nume: "Stamatescu Mihai",
      scoala:
        "Colegiul Național Frații Buzești, Centrul de Pregătire pentru Performanță în Informatică",
      clasa: "clasa XI-XII",
    },
    {
      numar: "53",
      nume: "PÎSLARU VLAD RAREȘ",
      scoala: "LICEUL TEORETIC EMIL RACOVIȚĂ VASLUI",
      clasa: "clasa XI-XII",
    },
    {
      numar: "54",
      nume: "LEȚU ANDREI",
      scoala: "Colegiul Național Unirea Focșani",
      clasa: "clasa XI-XII",
    },
    {
      numar: "55",
      nume: "BALICA ANDREI SEBASTIAN",
      scoala: "Colegiul Național ”Constantin Carabella” Târgoviște",
      clasa: "clasa XI-XII",
    },
    {
      numar: "56",
      nume: "Popescu George Vlad",
      scoala: "Colegiul Național Radu Greceanu Slatina",
      clasa: "clasa XI-XII",
    },
    {
      numar: "57",
      nume: "LORINTZ ALEXANDRU",
      scoala: "Colegiul Național ”Lucian Blaga” - Sebeș",
      clasa: "clasa XI-XII",
    },
    {
      numar: "58",
      nume: "Boacă Andrei",
      scoala: "Colegiul Național Emil Racoviță Iași",
      clasa: "clasa XI-XII",
    },
    {
      numar: "59",
      nume: "Iordăchioaiei Alexandru",
      scoala: "Colegiul Național ”M. Eminescu” Botoșani",
      clasa: "clasa XI-XII",
    },
    {
      numar: "60",
      nume: "Chiper Alex",
      scoala: "Colegiul Național ”Mihai Viteazul” / Sfântu Gheorghe",
      clasa: "clasa XI-XII"
    },
    {
        numar:"61", 
        nume:"Ganea Eric George", 
        scoala:"Colegiul Național ”B. P. Hasdeu” Buzău", 
        clasa:"clasa XI-XII"
    },
    {
        numar:"62", 
        nume:"Ispir Alexandru", 
        scoala:"Colegiul Național ”Stefan cel Mare” Suceava", 
        clasa:"clasa XI-XII"
    },
    {
        numar:"63", 
        nume:"Timur Degteari", 
        scoala:"Liceul Teoretic Orizont-Chișinău", 
        clasa:"clasa XI-XII"
    },
    {
        numar:"64", 
        nume:"PINTEA VLAD-CRISTIAN", 
        scoala:"Colegiul Național C.D. Loga Timișoara", 
        clasa:"clasa XI-XII"
    },
    {
        numar:"65", 
        nume:"Dobleagă Alexandru", 
        scoala:"Colegiul National ”I.L.Caragiale” Ploiesti", 
        clasa:"clasa XI-XII"
    },
    {
        numar:"66", 
        nume:"Boţocan Andrei", 
        scoala:"Colegiul Naţional Gheorghe Lazăr București", 
        clasa:"clasa XI-XII"
    },
    {
        numar : '67',
        nume : 'Gherasă Rareș-Horațiu',
        scoala : 'Liceul Teoretic „Aurel Vlaicu” Orăștie',
        clasa : 'clasa XI-XII'
    },  
    {  
        numar : '68',
        nume : 'BĂDULESCU G.L. ANDREI-MARCEL',
        scoala : 'COLEGIUL NATIONAL ”GRIGORE MOISIL” BUCUREȘTI',
        clasa : 'clasa XI-XII'
    },  
    {  
        numar : '69',
        nume : 'PETRUȚ Raul',
        scoala : 'Colegiul național „Al. Papiu Ilarian” Tg. Mureș',
        clasa : 'clasa XI-XII'
    },  
    {
      numar: "70",
      nume: "Ion Andrei Robert",
      scoala: "Liceul Teoretic Internațional De Informatică București",
      clasa: "clasa XI-XII",
    },
    {
      numar: "71",
      nume: "Chiribuță Robert Adrian",
      scoala: "Colegiul Național Dr. Ioan Meșotă Brașov",
      clasa: "clasa XI-XII",
    },
  ]);

  const participantsSec = [
    {
      numar: "1",
      nume: "Alexandru Andrei",
      scoala: "Liceul Teoretic Orizont-Chișinău",
      clasa: "clasa XI-XII",
    },
    {
      numar: "2",
      nume: "Guzun Veaceslav",
      scoala: "Liceul Teoretic Orizont-Chișinău",
      clasa: "clasa XI-XII",
    },
    {
      numar: "3",
      nume: "Arsenie Vlas",
      scoala: "Liceul Teoretic Orizont-Chișinău",
      clasa: "clasa XI-XII",
    },
    {
      numar: "4",
      nume: "Ovidiu Cojocari",
      scoala: "Liceul Teoretic Orizont-Chișinău",
      clasa: "clasa XI-XII",
    },
    {
      numar: "5",
      nume: "Amarie Tudor",
      scoala: "Liceul Regina Maria Dorohoi",
      clasa: "clasa a X-a",
    },
    {
      numar: "6",
      nume: "Andrei-Sebastian Aionesei",
      scoala: 'Liceul “Dimitrie Cantemir” Darabani',
      clasa: 'clasa a X-a',
    },
    {
        numar:"7", 
        nume:"Penciuc Robert Bogdan", 
        scoala:"Colegiul Național ”A.T. Laurian” Botoșani", 
        clasa:"clasa a IX-a"
    },
    {
        numar:"8", 
        nume:"Ungureanu Maia", 
        scoala:"Colegiul Național ”M. Eminescu” Botoșani", 
        clasa:"clasa XI-XII"
    },
    {
        numar:"9", 
        nume:"Fedeleș Flavius ", 
        scoala:"Colegiul Național ”M. Eminescu” Botoșani", 
        clasa:"clasa XI-XII"
    }
  ];

  return (
    <>
          <div className="bg2">
        <div className="banner">
          <img className="Logo-ATL" src={require("./assets/ATLaurian.webp")} />
          <p className="npm">
            Concursul Național de Informatică Urmașii lui Moisil
          </p>
          <img className="Logo-sepi" src={require("./assets/sepi.webp")} />
        </div>
        <h1 className="title-participanti">Participanți</h1>
        </div>
      <div className="divider1"></div>
        <table className="table">
          <thead>
            <tr>
              <th>Numar</th>
              <th>Nume</th>
              <th>Scoala</th>
              <th>Clasa</th>
            </tr>
          </thead>
          <tbody>
            {participants.map((participant) => (
              <tr className="Label" key={participant.id}>
                <td>{participant.numar}</td>
                <td>{participant.nume}</td>
                <td>{participant.scoala}</td>
                <td>{participant.clasa}</td>
              </tr>
            ))}
          </tbody>
        </table>
      <h2 className="PinA">Participanți în afara concursului</h2>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Nr. crt.</th>
              <th>Nume și prenume</th>
              <th>Școala de proveniență a elevului care concurează</th>
              <th>Clasa</th>
            </tr>
          </thead>
          <tbody>
            {participantsSec.map((participantsSec) => (
              <tr className="Label" key={participantsSec.numar}>
                <td>{participantsSec.numar}</td>
                <td>{participantsSec.nume}</td>
                <td>{participantsSec.scoala}</td>
                <td>{participantsSec.clasa}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
};

export default Participanti;
