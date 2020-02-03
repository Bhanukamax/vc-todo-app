import { expect } from "chai";
import sinon from "sinon";
import { stubInterface } from "ts-sinon";
import { TodoStatus } from "../enums/todo-status.enum";
import { ITodoQueryInput } from "../types/index.types";
import TodoRepository, { ITodoRepository } from "./todo.repository";

interface ITodoModel {
  find(): any;
}
describe("repository.todo.repository()", () => {
  const sandbox = sinon.createSandbox();
  let Model: any;
  let todoRepository: ITodoRepository;

  beforeEach(() => {
    Model = stubInterface<ITodoRepository>();
    Model.find.resolves([{ baz: "234243" }]);
    Model.updateMany.resolves({});
    Model.findById.resolves({ description: "onetodo" });
    Model.deleteCompleted.resolves({});
    todoRepository = new TodoRepository(Model);
  });

  afterEach(() => {
    sandbox.restore();
  });

  it("is capable of qurying todos from the db", async () => {
    const args: ITodoQueryInput = { ids: ["foo"], statuses: ["bar"] };
    const result = await todoRepository.queryTodos(args);

    expect(Model.find.callCount).to.equal(1);
    expect(result).to.deep.equal([{ baz: "234243" }]);
    expect(Model.find.firstCall.args).to.deep.equal([
      {
        _id: {
          $in: ["foo"],
        },
        status: {
          $in: ["bar"],
        },
      },
    ]);
  });

  it("is capable of toggling all todos for a given status", async () => {
    await todoRepository.toggleAllTodos(TodoStatus.ACTIVE);

    expect(Model.updateMany.callCount).to.equal(1);
    expect(Model.updateMany.firstCall.args).to.deep.equal([
      {},
      { $set: { status: "ACTIVE" } },
    ]);
  });

  it("is capable of getting a todo with a given id from db", async () => {
    const result = await todoRepository.findById("2332");

    expect(Model.findById.callCount).to.equal(1);
    expect(Model.findById.firstCall.args).to.deep.equal(["2332"]);
    expect(result).to.deep.equal({ description: "onetodo" });
  });

  it("is capable of deleting all completed todos from db", async () => {
    await todoRepository.deleteCompleted();

    expect(Model.remove.callCount).to.equal(1);
    expect(Model.remove.firstCall.args).to.deep.equal([
      { status: TodoStatus.COMPLETED },
    ]);
  });

  describe("toggleCompleted()", () => {
    it("is capable of toggling and ACTIVE todo item to COMPLETED", async () => {
      const obj = { status: TodoStatus.ACTIVE, save: sandbox.stub() };
      Model.findOne.resolves(obj);

      await todoRepository.toggleCompleted("foo");

      expect(Model.findOne.callCount).to.equal(1);
      expect(obj.status).to.equal(TodoStatus.COMPLETED);
      expect(obj.save.callCount).to.equal(1);
    });

    it("is capable of toggling and COMPLETED todo item to ACTIVE", async () => {
      const obj = { status: TodoStatus.COMPLETED, save: sandbox.stub() };
      Model.findOne.resolves(obj);

      await todoRepository.toggleCompleted("foo");

      expect(Model.findOne.callCount).to.equal(1);
      expect(obj.status).to.equal(TodoStatus.ACTIVE);
      expect(obj.save.callCount).to.equal(1);
    });
  });
});
