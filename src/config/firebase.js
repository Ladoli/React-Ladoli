import { database, initializeApp } from "firebase";

import { FirebaseConfig } from "../config/keys";
initializeApp(FirebaseConfig);

const databaseRef = database().ref();
export const ladoliProjects = databaseRef.child("ladoli-resume/projects");
