import { Link } from "./Link"

export const Footer = () => {
    return (
        <footer className="flex justify-center items-center flex-col mt-10 p-5">
            <p>
                &copy; &nbsp;
                <Link
                    caption="Ahmad Girach"
                    link="https://github.com/ahmadgirach/startup-name-generator"
                />&nbsp;
                {new Date().getFullYear()}
            </p>
            <p>
                Inspired by &nbsp;
                <Link caption="The Lean Programmer's Project" link="" />
            </p>
        </footer>
    )
}
