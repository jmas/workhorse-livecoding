import { createInertiaApp } from "@inertiajs/react";
import { createRoot } from "react-dom/client";
import { createElement } from "react";

createInertiaApp({
    resolve: (name) => {
        const pages = import.meta.glob("./Pages/**/*.tsx", { eager: true });

        return pages[`./${name}.tsx`];
    },
    setup({ el, App, props }) {
        createRoot(el).render(createElement(App, props));
    },
});
