import { usestate } from 'react';

const useForm = (callback) => {
    
    const [formValues, setFormValues] = useState({});

    const handleChange = (event) => {
        event.persist();
        setFormValues({...formValues, [event.target.name]: event.target.value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        callback();
    }

    return {formValues, handleChange, handleSubmit};
}
 
export default useForm;