import { registerApplication, start } from "single-spa";

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

registerApplication({
  name: "app-root",
  app: () => System.import("@my/holepage"),
  activeWhen: ["/"]
});

registerApplication({
  name: "app-react",
  app: () => System.import("@my/react"),
  activeWhen: ["/"]
});


start({
  urlRerouteOnly: true,
});
