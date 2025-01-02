import AddTaskModel from "@/components/module/tasks/AddTaskModel";
import TaskCard from "@/components/module/tasks/TaskCard";
import { selectTasks } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hooks";

const Tasks = () => {

    const tasks = useAppSelector(selectTasks);
    
    return (
        <div >
            <div className="flex justify-between items-center">
                <h1>Tasks</h1>
                <AddTaskModel/>
            </div>
            {
                tasks.map((task) => <TaskCard key={task.id} task={task}/> )
            }
            {/* <TaskCard/> */}
        </div>
    );
};

export default Tasks;