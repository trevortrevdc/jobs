import React from 'react';

import './style.scss';

import Navbar from './navbar';

const Header = ({ siteTitle }) => (
	<section className="hero is-primary is-small">
		<Navbar />
		<div className="hero-body">
			<div className="container center">
				<article className="media">
					<div className="media-content">
						<div className="content">
							<h1 className="is-uppercase is-size-1 has-text-white">
							Help Wanted!
							</h1>
							<p className="subtitle has-text-white is-size-4">
							Now is the time to apply for summer jobs with Prince William County Parks. We need talented people to serve as lifeguards, camp counselors, concessions staff, and many other great summer positions. Are you in?
							</p>
						</div>
					</div>
				</article>
			</div>
		</div>
	</section>
);

export default Header;
