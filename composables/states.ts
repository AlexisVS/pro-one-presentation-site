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
      name: "home",
      path: "/",
    },
    {
      name: "shop",
      path: "/shop",
    },
    {
      name: "gravity",
      path: "/gravity",
    },
    {
      name: "pressure",
      path: "/pressure",
    },
    {
      name: "about_us",
      path: "/about",
    },
  ]);
};
