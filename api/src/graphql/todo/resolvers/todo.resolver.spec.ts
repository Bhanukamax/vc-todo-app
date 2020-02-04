import { expect } from "chai";
import sinon from "sinon";
import { todoRepository } from "../../../modules/repository/todo.repository";
import { todoResolver } from "./todo.resolver";

describe("todo.resolver()", () => {
  const sandbox = sinon.createSandbox();

  beforeEach(() => {
    sandbox.stub(todoRepository, "queryTodos");
  });

  afterEach(() => {
    sandbox.restore();
  });

  it("is capable of getting the todos from repositories", async () => {
    await todoResolver({}, { ids: ["foo"], statuses: ["ACTIVE"] });
    // @ts-ignore
    expect(todoRepository.queryTodos.callCount).to.equal(1);
    // @ts-ignore
    expect(todoRepository.queryTodos.firstCall.args).to.deep.equal([
      { ids: ["foo"], statuses: ["ACTIVE"] },
    ]);
  });
});

