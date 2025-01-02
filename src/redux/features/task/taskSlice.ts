import { RootState } from "@/redux/store";
import { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
    tasks: ITask[];
}

const initialState:InitialState = {
    tasks : [
        {
            id: "t1",
            title:"Initial Task",
            description: "This is the initial task",
            dueDate: "2021-09-01",
            isCompleted: false,
            priority: "high"
        },
        {
            id: "t2",
            title:"Initial Task 2",
            description: "This is the initial task 2",
            dueDate: "2021-09-01",
            isCompleted: false,
            priority: "low"
        },

    ]
}

const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers:{
        
    }
})

// export const { } = taskSlice.actions; 
export const selectTasks = (state: RootState) => state.todo.tasks;
export default taskSlice.reducer;