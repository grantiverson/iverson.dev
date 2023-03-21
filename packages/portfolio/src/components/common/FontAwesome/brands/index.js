import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands } from "@fortawesome/fontawesome-svg-core/import.macro";

const GitHub = () => <FontAwesomeIcon icon={brands("github")} />;
const LinkedIn = () => <FontAwesomeIcon icon={brands("linkedin")} />;

export { GitHub, LinkedIn };
