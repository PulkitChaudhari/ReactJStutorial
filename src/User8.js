import {withRouter} from 'react-router-dom';

function User8(props) {
    console.warn(props.match.params.id);
    return (
        <div>
            <h1>User8 Component - User number is {props.match.params.id} </h1>
        </div>
    )
}

export default withRouter(User8);