import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { useTasks } from "../context/TaskContext";

export default function KanbanBoard() {
  const { tasks, dispatch } = useTasks();

  const columns = {
    Pending: tasks.filter(t => !t.completed),
    Completed: tasks.filter(t => t.completed),
  };

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const taskId = Number(result.draggableId);

    dispatch({
      type: "TOGGLE",
      payload: taskId,
    });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">

        {Object.entries(columns).map(([columnId, columnTasks]) => (
          <Droppable droppableId={columnId} key={columnId}>
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="bg-gray-100 dark:bg-gray-800 p-4 rounded"
              >
                <h2 className="font-bold mb-4">{columnId}</h2>

                {columnTasks.map((task, index) => (
                  <Draggable
                    key={task.id}
                    draggableId={task.id.toString()}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="bg-white dark:bg-gray-700 p-3 mb-3 rounded shadow"
                      >
                        {task.title}
                      </div>
                    )}
                  </Draggable>
                ))}

                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}

      </div>
    </DragDropContext>
  );
}