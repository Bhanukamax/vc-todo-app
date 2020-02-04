import { expect } from "chai";
import sinon from "sinon";
import { todoRepository } from "../../../modules/repository/todo.repository";
import { toggleAll } from "./toggle-all.resolver";

describe("toggle-all.resolver()", () => {
  const sandbox = sinon.createSandbox();

  beforeEach(() => {
    sandbox.stub(todoRepository, "toggleAllTodos");
  });

  afterEach(() => {
    sandbox.restore();
  });

  it("is capable of toggling status of all the todos to a given status using the repository", async () => {
    await toggleAll({}, { status: "foo" });
    // @ts-ignore
    expect(todoRepository.toggleAllTodos.callCount).to.equal(1);
    // @ts-ignore
    expect(todoRepository.toggleAllTodos.firstCall.args).to.deep.equal(["foo"]);
  });
});
