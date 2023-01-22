import   from "sanity-plugin-iframe-pane";
import type { DefaultDocumentNodeResolver } from "sanity/desk";
import { schemaTypes } from "./schemas";
import Iframe from "sanity-plugin-iframe-pane";

export const getDefaultDocumentNode: DefaultDocumentNodeResolver = (
    S,
    {schemaType}
) => {
    if (schemaType === 'post'){
        return S.document().views([
            S.view.form(),
            S.view
            .component(Iframe)
            .options({
               // Required: Accepts an async function
                   // OR a string
                   uel: `${
                    process.env.NEXT_PUBLIC_VERCEL_URL || "http://localhost:3000"
                   }/api/preview`,
                     // Optional: Set the default size
                     defaultSize: `desktop`, // default `desktop`
                         // Optional: Add a reload button, or reload on new document revisions
                         reload: {
                            button: true, // default `desktop`
                         },
                         

            })
        ])
    }
}