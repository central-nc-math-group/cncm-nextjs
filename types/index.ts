import type { Theme } from "@material-ui/core";

export type { Theme };

export type Redirect = {
  source: string;
  destination: string;
  permanent?: boolean;
};

export type AutoRedirect = {
  name: string;
  redirect: string;
  link: string;
};
