import React from 'react';
import { Link } from 'react-router-dom';
import style from './LandingPage.module.css';
export default function LandingPage() {
    return (
        <div className={style.fondo}>
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
