import { expect } from "chai";
import sinon from "sinon";
import { todoRepository } from "../../../modules/repository/todo.repository";
import { toggleCompleted } from "./toggle-completed.resolver";
import { todoMutationResolver } from "./todo-item-mutation.resolver";

describe("todo-item-mutation.resolver()", () => {
  const sandbox = sinon.createSandbox();

  beforeEach(() => {
    sandbox.stub(todoRepository, "findById");
  });

  afterEach(() => {
    sandbox.restore();
  });

  it("is capable of getting the correct todo from the repository", async () => {
    await todoMutationResolver({}, { id: "bar" });
    // @ts-ignore
    expect(todoRepository.findById.callCount).to.equal(1);
    // @ts-ignore
    expect(todoRepository.findById.firstCall.args).to.deep.equal(["bar"]);
  });
});
