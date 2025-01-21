import AddTaskModel from "@/components/module/tasks/AddTaskModel";
import TaskCard from "@/components/module/tasks/TaskCard";
import { useGetTasksQuery } from "@/redux/api/baseApi";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ITask } from "@/types";


const Tasks = () => {

    const {data,isLoading,isError} = useGetTasksQuery(undefined,{
        pollingInterval: 3200000,
        refetchOnReconnect: true,
        refetchOnFocus: true,
        refetchOnMountOrArgChange: true,
    });
    if(isLoading) return <div>Loading...</div>
    return (

        <div >
            <div className="flex justify-between items-center">
                <h1>Tasks</h1>

                <Tabs defaultValue="all" >
                    <TabsList>
                        <TabsTrigger value="all">All</TabsTrigger>
                        <TabsTrigger value="high">High</TabsTrigger>
                        <TabsTrigger value="medium">Medium</TabsTrigger>
                        <TabsTrigger value="low">Low</TabsTrigger>
                        
                    </TabsList>
                </Tabs>

                <AddTaskModel/>
            </div>
            <div className="space-y-5 mt-5">
                {
                    !isLoading && data.tasks.map((task:ITask) => <TaskCard key={task.id} task={task}/> )
                }
            </div>
        </div>
    );
};

export default Tasks;