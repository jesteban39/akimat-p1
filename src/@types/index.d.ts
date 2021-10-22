declare module "types" {
  export type user = {
    id: number;
    login: string;
    avatar_url: string;
  };

  export type repo = {
    id: number;
    name: string;
  };

  export type org = {
    id: number;
    login: string;
    description: string;
  };

  export type userDetail = {
    id: number;
    name: string;
    login: string;
    avatar_url: string;
    repos: repo[];
    orgs: org[];
  };
}
