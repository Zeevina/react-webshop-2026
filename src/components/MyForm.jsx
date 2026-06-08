import useForm from "../hooks/useForm.js";

export default function MyForm({ onSubmit }) {
    const [formValues, handleInputChange] = useForm({ name: "", email: ""});

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(formValues); //Pass form values to parent
    };

    return(
        <form onSubmit={handleSubmit}>
            <input
                className="form-input-field"
                name="name"
                value={formValues.name}
                onChange={handleInputChange}
                placeholder="Name"
            />
            <input 
                className="form-input-field"
                name="email"
                value={formValues.email}
                onChange={handleInputChange}
                placeholder="Email"
            />
            <button className="checkout-button" type="submit" >Checkout</button>
        </form>
    );
}