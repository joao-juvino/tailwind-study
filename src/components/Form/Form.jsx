import Input from "../Input/Input"

const Form = ({ onSubmit }) => {
    const safeSubmit = event => {
        event.preventDefault()
        event.stopPropagation()
        const name = event.target[0].value
        const email = event.target[1].value
        onSubmit({ name, email })
    }
    return <form onSubmit={safeSubmit} className="flex flex-col items-center justify-center h-full -mt-30 gap-10 mx-5">
        <Input type="text" required placeholder="Insira seu nome..." />
        <Input type="email" required placeholder="Insira seu e-mail..." />
        <button type="submit" className="bg-alura-200 w-full max-w-sm dark:bg-dark-200 rounded-full text-gray-200 py-3 px-5 uppercase outline-none hover:animate-pulse cursor-pointer hover:shadow-md hover:shadow-gray-500 hover:dark:shadow-black">Seguir</button>
    </form>
}

export default Form
