import { useSelector , useDispatch} from 'react-redux'
import { deleteTask } from '../features/tasks/taskSlice';
import "./Tasklist.css";

function TaskList ( ) {

    const tasks = useSelector (state => state.tasks)
    const dispatch = useDispatch()

    const handleDelete = (id) => {
        dispatch(deleteTask(id))
    }


    return (
        <div className='text'>

         {tasks.map(task => (
            <div key={task.id}>
             <p>{task.title}</p>
             <button onClick={() => handleDelete(task.id)}>Delete</button>
            </div>
         ))}
        </div>
    )
}

export default TaskList;