import React from 'react';
import { FaCode } from 'react-icons/fa';

function LandingPage() {
    return (
        <div>
            <section id="tours-overview">
                <h1>Top Travel Tours For you</h1>
                <form class="search-box">
                    <input
                        type="text"
                        class="search-field"
                        placeholder="Search tour..."></input>
                    <button class="search-btn">Search</button>
                </form>
                <form class="filter-box">
                    <input
                        type="text"
                        class="filter-field price"
                        placeholder="Price"></input>
                    <input
                        type="text"
                        class="filter-field location"
                        placeholder="Location"></input>
                    <button class="filter-btn">Filter</button>
                </form>
            </section>

            <section>
                <h1 style={{ textAlign: 'center' }}>CHOOSE YOUR TRAVEL</h1>
            </section>
        </div>
    );
}

export default LandingPage;
