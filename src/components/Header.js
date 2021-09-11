import PropTypes from 'prop-types';
import Button from './Button';


const Header = ({title}) => {
    const onClick = () => {
        const newDiv = document.createElement('div');
        newDiv.appendChild(document.createTextNode('New div made by button click'));
        document.body.appendChild(newDiv);
    }
    
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button bgColor='green' text='Add' onClick={onClick}/>
            
        </header>
    )
};

Header.defaultProps = {
    title: 'Task Tracker'
};

Header.propTypes = {
    title: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func
};


export default Header;