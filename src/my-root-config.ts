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
  // app: () => System.import("app-root"),
  app: () => System.import("@my/holepage"),
  activeWhen: ["/"]
});

start({
  urlRerouteOnly: true,
});
