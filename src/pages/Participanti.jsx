import { Link } from "react-router-dom";
import "./styles/Participanti.css";

const Participanti = () => {
  return (
    <div className="participanti-page">
      <h2>
        La acest concurs participă echipe de elevi din clasele IX-XII, din toate
        judeţele ţării, din municipiul Bucureşti şi din Republica Moldova.
        Nivelurile de concurs sunt următoarele:
      </h2>
      <div className="sortare"></div>
    </div>
  );
};
export default Participanti;
