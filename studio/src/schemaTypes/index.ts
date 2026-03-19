import {athleteCommitment} from "./collections/athleteCommitment";
import {coach} from "./collections/coach";
import {testimonial} from "./collections/testimonial";

import {pageHome} from "./singletons/pageHome";
import {pageAbout} from "./singletons/pageAbout";
import {pageAcademics} from "./singletons/pageAcademics";
import {pageAthletics} from "./singletons/pageAthletics";
import {pageFacilities} from "./singletons/pageFacilities";
import {pageAdmissions} from "./singletons/pageAdmissions";
import {pageContact} from "./singletons/pageContact";

export const schemaTypes = [
  // Singletons / pages
  pageHome,
  pageAbout,
  pageAcademics,
  pageAthletics,
  pageFacilities,
  pageAdmissions,
  pageContact,

  // Collections
  athleteCommitment,
  coach,
  testimonial,
];

