import React from "react";
import Layout from "../components/layout";
//import bigLogo from "../images/WebtechLogo2.png";

export default function Home() {
  return (
    <Layout>
      <h1>Konsulentbistand</h1>
      {/* <p className="mt-6">Mitt firma kan hjelpe ...</p> */}
      <table>
        <thead>

        <tr>
          <th>...med drift/devops</th>
          <th>...med utvikling</th>
          <th>...med felles statlige integrasjoner</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>
            <ul>
              <li>Linux</li>
              <li>Azure AKS</li>
              <li>Databaser</li>
              <li>PKI</li>
            </ul>
          </td>
          <td>
            <ul>
              <li>Java, spring boot</li>
              <li>C</li>
              <li>Docker / Kubernetes</li>
              <li>Automatisering, unix scripting</li>
            </ul>
          </td>
          <td>
            <ul>
              <li>
                Digdir - eFormidling, Integrasjonspunktet
                <ul>
                  <li>Digital Postkasse Innbygger - DPI</li>
                  <li>Digital Postkasse Virksomheter - DPV</li>
                </ul>
              </li>
              <li>Altinn</li>
              <li>Maskinporten</li>
              <li>Folkeregisteret</li>
              <li>Kontakt- og Reservasjonsregister-tjenesten</li>
            </ul>
          </td>
        </tr>
        </tbody>
      </table>
      {/* <img
        className="rounded-md shadow-md"
        style={{ width: "200px", height: "100px" }}
        src={bigLogo}
        alt="corporate,office,building"
    /> */}
     
      {/* <img src="https://source.unsplash.com/random/400x200" alt="" /> */}
    
    </Layout>
  );
}