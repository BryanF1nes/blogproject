import Button from "../utils/Button";

const Navbar = () => {

    return (
        <div className="navbar_container">
            <div className="navbar_items">
                <h1>Blog API</h1>
                <ul>
                    <li>Posts</li>
                    <Button
                        handler={() => console.log('Hello click handler..')}
                        name="Sign in"
                        classes="navbar_button"
                    />
                </ul>
            </div>
        </div>
    )
}

export default Navbar;