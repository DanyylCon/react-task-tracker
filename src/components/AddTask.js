import {useState} from 'react';


const AddTask = () => {
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);

    return (
        <form className='add-form' action="">
            <div className="form-control">
                <label className='form-control'>Task</label>
                <input className='form-control' type="text" placeholder='Add Task'
                    value={text} onChange={(e) => setText(e.target.value)}/>
            </div>
            <div className="form-control">
                <label className='form-control'>Day & Time</label>
                <input className='form-control' type="text" placeholder='Add Day & Time'
                    value={day} onChange={(e) => setDay(e.target.value)}/>
            </div>
            <div className="form-control-check">    
                <label className='form-control-check'>Reminder</label>
                <input className='form-control-check' type="checkbox"
                    value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>   
            </div>
            <input className='btn btn-block' type='submit' value='save'/>
        </form>
    );

};

export default AddTask;