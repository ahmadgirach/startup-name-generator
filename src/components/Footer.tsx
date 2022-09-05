import { Link } from "./Link"

export const Footer = () => {
    return (
        <footer className="text-center mx-auto mt-10 p-5">
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
                <Link
                    caption="The Lean Programmer's Project"
                    link="https://www.youtube.com/watch?v=OjlqjmKsedY&list=PLGyA74h_S9NqJvvQ7-l9bUHHS6bMCkgo0"
                />
            </p>
            <p>
                Made with <span className="text-red-900">&#9829;</span> using React, TypeScript and Tailwind CSS.
            </p>
        </footer>
    )
}
