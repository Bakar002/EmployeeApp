import Spinner from 'react-bootstrap/Spinner';


function Loading() {
    return (
        <div className='text-center' style={{'marginTop':'10rem'}}>
            <Spinner animation="border" variant="danger" />
        </div>
    );
}


export default Loading;