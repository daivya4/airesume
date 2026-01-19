import {Link} from "react-router";
import {usePuterStore} from "~/lib/puter";
import {useNavigate} from "react-router";

const Navbar = ({ showSignOut = false }: { showSignOut?: boolean }) => {
    const { auth } = usePuterStore();
    const navigate = useNavigate();

    const handleSignOut = async () => {
        await auth.signOut();
        navigate('/auth');
    };

    return (
        <nav className="navbar">
            <Link to="/">
                <p className="text-2xl font-bold text-gradient">RESUMIND</p>
            </Link>
            <div className="flex gap-4 items-center">
                <Link to="/upload" className="primary-button w-fit">
                    Upload Resume
                </Link>
                {showSignOut && (
                    <button onClick={handleSignOut} className="secondary-button w-fit">
                        Sign Out
                    </button>
                )}
            </div>
        </nav>
    )
}
export default Navbar