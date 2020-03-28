import {expect} from "chai";
import {getJsonSchema} from "../utils/getJsonSchema";
import {Const} from "./const";

describe("@Const", () => {
  it("should declare prop", () => {
    // WHEN
    class Model {
      @Const("10")
      num: string = "10";

      constructor() {}
    }

    // THEN
    expect(getJsonSchema(Model)).to.deep.equal({
      properties: {
        num: {
          const: "10",
          type: "string"
        }
      },
      type: "object"
    });
  });
});
