
export async function register(config: any) {
    if("serviceWorker" in navigator) {
        const registration = await navigator.serviceWorker.register("./sw.ts")
          if (registration.installing) {
            console.log("Service worker installing");
          } else if (registration.waiting) {
            console.log("Service worker installed");
          } else if (registration.active) {
            console.log("Service worker active");
          }
          console.log("pobeda")
    }
}