import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { regular } from "@fortawesome/fontawesome-svg-core/import.macro";

const Envelope = () => <FontAwesomeIcon icon={regular("envelope")} />;
const File = () => <FontAwesomeIcon icon={regular("file")} />;

export { Envelope, File };
