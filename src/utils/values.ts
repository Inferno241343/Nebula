import { defaultStore } from "./storage"

type cloaks = "default" | "google" | "wikipedia" | "canvas" | "classroom" | "powerschool";

// Where all of our values like Search Engines, WispServers & SupportedSites live.
const SearchEngines: Record<string, string> = {
    ddg: "https://duckduckgo.com/?q=%s",
    //google: "https://google.com/search?q=%s",
    bing: "https://bing.com/search?q=%s"
}

const WispServers: Record<string, string> = {
    "default": (location.protocol === "https:" ? "wss://" : "ws://") + location.host + "/wisp/",
    "custom": defaultStore.getVal("customWispUrl")
}

interface SettingsVals {
    i18n: {
        lang: "selectedLanguage",
        languages: {
            en: string,
            jp: string
        }
    },
    proxy: {
      searchEngine: string,
      wispServer: string,
        transport: {
            key: string,
            available: { 
                epoxy: string; 
                libcurl: string;
            }
        },
    },
    tab: {
        cloak: string;
        ab: string;
    },
    marketPlace: {
        themes: string;
        plugins: string;
        appearance: {
            video: string;
            image: string;
            theme: {
                payload: string;
                name: string;
            }
        }
    }
}
/**
    * This object allows us to access things such as the wisp server url and other things that aren't just one offs
*/
const SettingsVals: SettingsVals = {
    i18n: {
        lang: "selectedLanguage",
        languages: {
            en: "en_US",
            jp: "jp"
        }
    },
  proxy: {
      searchEngine: "searchEngine",
      wispServer: "wispServer",
        transport: {
            key: "transport",
            available: {
                epoxy: "epoxy",
                libcurl: "libcurl"
            }
        }
    },
    tab: {
        cloak: "cloak",
        ab: "aboutblank"
    },
    marketPlace: {
        themes: "themes",
        plugins: "plugins",
        appearance: {
            video: "video",
            image: "image",
            theme: {
                name: "themeName",
                payload: "themePayload"
            }
        }
    }
}

export { SearchEngines, WispServers, SettingsVals, type cloaks }
