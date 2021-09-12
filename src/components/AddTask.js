import {useState} from 'react';


const AddTask = ({onAdd}) => {
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();

        if(!text){
            alert('Please add task!');
            return;
        }

        onAdd({text,day,reminder});

        setText('');
        setDay('');
        setReminder(false);
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
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
                <input className='form-control-check' type="checkbox" checked={reminder}
                    value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>   
            </div>
            <input className='btn btn-block' type='submit' value='Save'/>
        </form>
    );

};

export default AddTask;