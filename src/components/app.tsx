"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function App() {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<string[] | null>(null);

  const addTodo = () => {
    if (todo !== "") {
      setTodos((prev) => (prev ? [...prev, todo] : [todo]));
      setTodo("");
    }
  };

  const complete = (text: string) => {
    const uncompletedTodos = todos?.filter((todo) => todo !== text);
    setTodos(uncompletedTodos || null);
  };

  return (
    <>
      <div className="flex w-full max-w-2xl justify-center gap-12 bg-[#242424] py-8">
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center">
            <Input
              className="rounded-none border-r-0 border-[#d197ff] bg-transparent"
              placeholder="Create a todo"
              onChange={(e) => setTodo(e.target.value)}
              value={todo}
            />
            <Button
              className="rounded-none border border-[#d197ff] bg-transparent text-[#00c875]"
              onClick={addTodo}
            >
              Add
            </Button>
          </div>
          {todos && todos.length > 0 ? (
            <div className="mt-8 flex w-full flex-col gap-2">
              {todos.map((todo, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between border-l-[3px] border-[#d197ff] bg-[#2c2c2c]"
                >
                  <div className="pl-2.5">{todo}</div>
                  <Button
                    className="rounded-none border border-[#d197ff] bg-transparent text-[#ffa44f]"
                    onClick={() => complete(todo)}
                  >
                    Complete
                  </Button>
                </div>
              ))}
            </div>
          ) : (
            todos?.length === 0 && (
              <p className="mt-4 text-[#00c875]">All tasks completed!</p>
            )
          )}
        </div>
      </div>
    </>
  );
}
