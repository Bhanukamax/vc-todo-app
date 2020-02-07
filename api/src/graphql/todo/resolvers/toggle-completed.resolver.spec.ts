import { expect } from "chai";
import sinon from "sinon";
import { todoRepository } from "../../../modules/repository/todo.repository";
import { toggleCompleted } from "./toggle-completed.resolver";

describe("toggle-completed.resolver()", () => {
  const sandbox = sinon.createSandbox();

  beforeEach(() => {
    sandbox.stub(todoRepository, "toggleCompleted");
  });

  afterEach(() => {
    sandbox.restore();
  });

  it("is capable of toggling the status of a given todo using the repository", async () => {
    await toggleCompleted({ id: "bar" });
    // @ts-ignore
    expect(todoRepository.toggleCompleted.callCount).to.equal(1);
    // @ts-ignore
    expect(todoRepository.toggleCompleted.firstCall.args).to.deep.equal([
      "bar",
    ]);
  });
});
