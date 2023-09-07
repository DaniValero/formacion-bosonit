import { Country } from "./country.type";

export interface University {
  "state-province": null | string;
  name:             string;
  web_pages:        string[];
  country:          Country;
  domains:          string[];
}

