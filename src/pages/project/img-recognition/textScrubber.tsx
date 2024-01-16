import "./textScrubber.css"

import TestState from "../components/test/testState";
import ShowString from "../img-recognition/components/show-string";
import SearchStringInput from "../img-recognition/components/input/searchStringInput";
import { useState } from "react";

function TextScrubber() {

   const [searchWord, setsearchWord] = useState<string>('');

   function handleWord(word: string) {
      setsearchWord(word.toLocaleLowerCase().replaceAll(' ', ''));
   }

   return (
      <div className="project-main">
         <div><h1>Text Scrubber</h1></div>
         <div>
            <SearchStringInput handleWord={handleWord} />
         </div>
         <ShowString stringLen={1000} searchString={searchWord} />
      </div>
   );

}

export default TextScrubber