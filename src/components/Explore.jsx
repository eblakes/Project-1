import React from 'react';
import { Link } from 'react-router-dom';

const Explore = () => {
    return (
        <section id="explore">
            <div className="container">
                <div className="row row__column">
                    <div className="section__title">
                        <h2>Explore more <span className="purple">Books</span></h2>
                    <Link to="/books">
                    <button className="btn">Explore books</button></Link>
                    </div>
                    <p className="explore__para">
                        Dive into a world of knowledge and adventure with Library. Our extensive collection of books spans every genre and interest, ensuring that there's something for everyone. Whether you're seeking the latest bestsellers, timeless classics, or hidden gems, Library is your gateway to endless reading possibilities. Start your journey today and discover the perfect book to ignite your imagination and expand your horizons.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Explore;