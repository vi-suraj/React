import { useState } from "react";
import { EXAMPLES } from "../data";
import TabButton from "./TabButton";
import Section from "./Section";
import Tabs from "./Tabs";

export default function Example() {
  const [selectedTopic, setSelectedTopic] = useState("");

  function handleSelect(selectedBtn) {
    setSelectedTopic(selectedBtn);

    // console.log(selectedTopic);

    // the above will always show the previous state because when you use useState it store the value and tell react to reexecute the component where it is and compare the new component with old component and only update those value that are get updated (eg selectedTopic)
  }

  let tabContent = <p>Please Select a Topic!</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }
  return (
    // working with multiple jsx slots

    <Section id="examples">
      {/* <TabButton label="Components" /> */}

      <Tabs
        // setting Component type dynamically

        // buttonContainer="menu"
        // ButtonContainer="menu"
        button={
          <>
            <TabButton isSelected={selectedTopic === "components"} onClick={() => handleSelect("components")}>
              Components
            </TabButton>
            <TabButton isSelected={selectedTopic === "jsx"} onClick={() => handleSelect("jsx")}>
              JSX
            </TabButton>
            <TabButton isSelected={selectedTopic === "props"} onClick={() => handleSelect("props")}>
              Props
            </TabButton>
            <TabButton isSelected={selectedTopic === "state"} onClick={() => handleSelect("state")}>
              State
            </TabButton>
          </>
        }
      />

      {/* condionally rendering content

       First Method */}

      {/* {!selectedTopic && <p className="text-center">Please Select a Topic!</p>}
      {selectedTopic && (
        <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
          </pre>
        </div>
      )} */}

      {/* second Method  */}

      {/* {!selectedTopic ? (
         <p>Please Select a Topic!</p>
       ) : (
         <div id="tab-content">
           <h3>{EXAMPLES[selectedTopic].title}</h3>
           <p>{EXAMPLES[selectedTopic].description}</p>
           <pre>
             <code>{EXAMPLES[selectedTopic].code}</code>
           </pre>
         </div>
       )} */}

      {/* third method  */}
      {tabContent}
    </Section>
  );
}
