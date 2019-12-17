import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import './style.scss';


const Footer = () => (
	<StaticQuery
		query={graphql`
			query SocialQuery {
				site {
					siteMetadata {
						gatsby
						bulma
						twitter
						medium
						github
					}
				}
			}
		`}
		render={data => (
			<footer className="footer center has-background-primary">
				<div className="content has-text-white has-text-centered">
					Prince William County is an Equal Opportunity Employer and supports workforce diversity.
					
				</div>
			</footer>
		)}
	/>
);

export default Footer;
