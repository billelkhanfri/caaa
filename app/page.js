

import History from "./components/History";
import Missions from "./components/Missions";
import Actions from "./components/Actions";
import Benevole from "./components/Benevole";

import OrganisationSection from "./components/Organisation";
export default async function Home() {


  return (
    <main >
  


      {/* Notre histoire */}
      <History></History>
      <Missions></Missions>
    
      <OrganisationSection></OrganisationSection>
      <Benevole></Benevole>
 
     
    </main>
  );
}
