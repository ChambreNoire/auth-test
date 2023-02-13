import { useNavigate } from 'react-router-dom';

export const ErrorView = ({ error, resetErrorBoundary }) => {
    const navigate = useNavigate();

    const errorStatus = error.response?.status;

    const handleReset = () => {
        resetErrorBoundary();
        navigate('/');
    };

    return (
        <div>
            <div>{errorStatus}</div>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
};
