import "./portfolio.css";

import React from "react";

import ProjectCard from "./components/projectCard";
import ProjectsHeader from "./components/header/projectsHeaders";

import {
  DROP_N_GO,
  DROP_N_GO_README,
  FLUTTER_CHATBOT,
  FLUTTER_CHATBOT_README,
  FLUTTER_FIDGET,
  FLUTTER_FIDGET_README,
  FLUTTER_MISC_APPS,
  FLUTTER_MISC_APPS_README,
  PHP_MISC_PROJECTS,
  PHP_MISC_PROJECTS_README,
  POCKET_PUPS,
  POCKET_PUPS_README,
  KEYLOGGER_TIMER,
  KEYLOGGER_TIMER_README,
} from "./consts/projectURLS";

function Portfolio() {
  let html = (
    <div className="portfolio-main">
      <ProjectsHeader />
      <div className="portfolio-grid">
        <ProjectCard
          title="Drop N GO"
          url={DROP_N_GO}
          descriptionUrl={DROP_N_GO_README}
        />
        <ProjectCard
          title="Pocket Pups"
          url={POCKET_PUPS}
          descriptionUrl={POCKET_PUPS_README}
        />
        <ProjectCard
          title="Flutter Chat Bot"
          url={FLUTTER_CHATBOT}
          descriptionUrl={FLUTTER_CHATBOT_README}
        />
        <ProjectCard
          title="React Keylogger Timer"
          url={KEYLOGGER_TIMER}
          descriptionUrl={KEYLOGGER_TIMER_README}
          deploy="https://faythsix.co.za/tristan/keylogger/"
        />
        <ProjectCard
          title="Flutter Fidget"
          url={FLUTTER_FIDGET}
          descriptionUrl={FLUTTER_FIDGET_README}
        />
        <ProjectCard
          title="Flutter Misc Apps"
          url={FLUTTER_MISC_APPS}
          descriptionUrl={FLUTTER_MISC_APPS_README}
        />
        <ProjectCard
          title="PHP Misc Projects"
          url={PHP_MISC_PROJECTS}
          descriptionUrl={PHP_MISC_PROJECTS_README}
          deploy="https://faythsix.co.za/tristan/php/product-store/"
        />
      </div>
    </div>
  );
  return html;
}

export default Portfolio;
