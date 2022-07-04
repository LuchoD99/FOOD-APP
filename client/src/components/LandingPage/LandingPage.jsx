import React from 'react';
import { Link } from 'react-router-dom';
export default function LandingPage() {
    return (
        <div>
            <div>
                <h2>Who wants to see some recipes?</h2>
            </div>
            <div>
                <Link to={'/home'}>
                    <button>Go to</button>
                </Link>
            </div>
        </div>
    );
}
