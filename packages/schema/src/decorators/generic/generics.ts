import {StoredJson} from "../../domain/StoredJson";

/**
 * Define generics list. This list is used by @@GenericOf@@ and the @@getJsonSchema@@ function to build the correct JsonSchema.
 *
 * See @@GenericOf@@ decorator for more details.
 *
 * @param generics
 * @decorator
 */
export function Generics(...generics: string[]) {
  return (target: any) => {
    const storedSchema = StoredJson.from(target);

    storedSchema.schema.genericLabels = generics;
  };
}
