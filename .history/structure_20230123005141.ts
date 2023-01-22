import   from "sanity-plugin-iframe-pane";
import type { DefaultDocumentNodeResolver } from "sanity/desk";
import { schemaTypes } from "./schemas";

export const getDefaultDocumentNode: DefaultDocumentNodeResolver = (
    S,
    {schemaType}
) => {
    if (schemaType === 'post'){
        return S.document().views([
            S
        ])
    }
}