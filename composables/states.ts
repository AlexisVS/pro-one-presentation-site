// craft a nuxt global state

type navigationItem = {
  name: string;
  path: string;
};
export const useNavigation = () =>
  useState("navigation", () => navigationState().value);

export const navigationState = () => {
  return ref<Array<navigationItem>>([
    {
      name: "Accueil",
      path: "/",
    },
    {
      name: "Boutique",
      path: "/shop",
    },
    {
      name: "Gravité",
      path: "/gravity",
    },
    {
      name: "Pression",
      path: "/pressure",
    },
    {
      name: "A propos",
      path: "/about",
    },
  ]);
};
