import React from 'react';
import { Link } from 'react-router-dom';
export default function NavBar() {
    return (
        <header>
            <nav>
                <div>
                    <Link to={'/'}>
                        <button>Back to LandingPage</button>
                    </Link>
                </div>
                <div>
                    <Link to={'/create'}>
                        <button>Create your own recipe</button>
                    </Link>
                </div>
            </nav>
        </header>
    );
}
