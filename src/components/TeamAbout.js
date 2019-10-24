import React, { Component } from 'react';
import './TeamAbout.css';

export default class TeamAbout extends Component {
	render() {
		return (
			<div className="team">
				<header>
					<h1 className="top">
						{' '}
						All about the team: Kenny 's Log-Ins, who made this page!{' '}
					</h1>{' '}
					<h2 className="top">
						{' '}
						We made it: Brian, Eleni, Esin, and Vincent .
					</h2>{' '}
				</header>{' '}
				<section>
					<h3 className="top"> Why this team name and page name?</h3>
					<p className="top">
						Our professor for this project is Kenneth (Kenny) Cruz. We
						were trying to be clever with something like Kenny's G-Suite
						or Kenny Rogers Roasted Coders, but this combo had us the most
						entertained and happy.{' '}
						<a
							href="http://knnyczr.com/"
							target="_blank"
							rel="noopener noreferrer">
							Click for KNNYCZR's site
						</a>
					</p>
				</section>
				<h4 className="post-link">
					<a
						href="http://www.shakesville.com/2008/11/happy-birthday-deeky.html"
						target="_blank"
						rel="noopener noreferrer">
						{' '}
						original pic post
					</a>
				</h4>
				<img
					className="kenCakeZone"
					src={require('../Project-3-Pictures/other/ken-cake1.png')}
					alt="Kenny Loggins on a cake"></img>
				<section className="y">
					<h2 className="why"> Why we did this ?</h2>
					<p className="why">
						{' '}
						We wanted to have a desserts page that was easy to add and
						edit items. We also wanted one that wasn't chock full of popup
						ads, and commercial videos that autoplayed and slowed the page
						down to a crawl. We wanted a place people could share their
						tasty ideas freely. We wanted a place that was quick and easy
						to use.
					</p>
				</section>
				<section className="hw">
					<h2 className="how"> How did we do this?</h2>
					<h2 className="how"> We made our own express/mongo database.</h2>
					<h2 className="how">
						{' '}
						Then we made a react front-end to access it.
					</h2>
					<p className="how">
						{' '}
						Using our express, mongo, mongoose deployed via heroku /
						mongodb cloud atlas backend as our personal API. We can Create
						, Read, Update, and Delete the recipes all we want through our
						react front-end site deployed via GitHub Pages. We created
						some built in testing modules for both front and back side
						testing before we deployed it to ensure functionality.{' '}
					</p>
				</section>
				<section className="wh">
					<h2 className="who">
						{' '}
						So who is this motley crew that made this for you?
					</h2>
					<h3 className="who"> Brian Loveless</h3>
					<p className="brian">
						Just starting my journey on this side of the interwebs. I
						would love to crack into the gaming world someday.{' '}
						<a
							href="https://www.brianloveless.com"
							target="_blank"
							rel="noopener noreferrer">
							My site is here.
						</a>
					</p>
					<h3 className="who"> Eleni Goranites</h3>
					<p className="eleni">
						I enjoy being Fullstack Software Engineer continually learning
						new languages and solving problems. This project was a lot of
						fun to create.{' '}
						<a
							href="https://www.linkedin.com/in/eleni-goranites/"
							target="_blank"
							rel="noopener noreferrer">
							Check out my LinkedIn!
						</a>
					</p>
					<h3 className="who"> Esin Saribudak</h3>
					<p className="esin">
						I love using my fullstack knowledge to create applications
						that make people happier. My previous experiences in education
						and healthcare have helped me to realize my true passion:
						using technology to solve problems.{' '}
						<a
							href="https://www.linkedin.com/in/esinsaribudak/"
							target="_blank"
							rel="noopener noreferrer">
							Check out my LinkedIn!
						</a>
					</p>
					<h3 className="who"> Vincent Chen</h3>
					<p className="vincent">
						I am a fullstack developer with a passion for the front end
						side of developing but I am always looking to learn and
						incorporate new things. My portfolio is a work in progress but
						feel free to check it out:{' '}
						<a
							href="https://vbc221.github.io/Vincent-Portfolio-Choice/"
							target="_blank"
							rel="noopener noreferrer">
							My portfolio.
						</a>
					</p>
				</section>
				<h1 className="foot-team">Thanks for visiting our site!</h1>
			</div>
		);
	}
}
