# What is this ?

Everyday custom hooks for react developers.

# Installation

`npm i dr-hooks`

# How to use them ?

### useInputState hook (example)
```
import { useInputState } from 'dr-hooks';

function App(){
    const init = {
        password: "",
        username: ""
    }

    const {password, username, update} = useInputState(init)
    
    const handleChange = (e) => {
        update(e)
    }  
    
    const handleSubmit = (e) => {
        e.preventDefault()
        // handle form submit
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="username" placeholder="username" onChange={handleChange} value={username} />
            <input type="password" name="password" placeholder="password" onChange={handleChange} value={password} />
            <button>SUBMIT</button>
        </form>
    )
}
```

**Arguments for useInputState hook function**

* *init* - initial value is required