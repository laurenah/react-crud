import React from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { ReactComponent as Logo } from '../laurenah_logo-08.svg';
import BlogPost from './subcomponents/BlogPost.js';

const Home = () => {
    const { authState, authService } = useOktaAuth();

    const login = async () => {
        // redirect to '/admin' after login
        authService.login('/admin');
    }

    const logout = async() => {
        // redirect to '/' after logout
        authService.logout('/');
    }

    if (authState.isPending) {
		return <div className='loader'><p>Loading...</p></div>;
    }

    const loginButton = authState.isAuthenticated ?
        <li onClick={logout}><a href='/'>logout</a></li> :
        <li onClick={login}><a href='/'>dev login</a></li>

    return (
        <div className='outer-container'>
		<div className='header'>
			<div className='header-content'>
				<div className='logo'>
					<Logo className='monstera' />
				</div>
				<div className='info'>
					<div className='nav-home'>
						<ul>
							<li><a href='/'>Home</a></li>
							<li><a href='/blog'>Blog</a></li>
							<li><a href='/contact'>Contact</a></li>
						</ul>
					</div>
					<div className='subtitle'>I'm a third generation programmer, passionate about problem solving and
						learning new things. I love to read, play card games and video games. Some of the most underrated things
						in life are: lying in the grass on a summer's day, seeing the starry sky in a place far from light
						pollution, camping with friends, the smell of rain on dry earth (petrichor!).</div>
				</div>
			</div>
		</div>
		<div className='container'>
			<div id='wrapper'>
				<div id='row'>
					<div id='blog'>
						
					</div>
					<div id='projects'>
						<div className="title">
							<h2>Projects</h2>
						</div>
						<ul className='style1'>
							<li>
								<h3>Portfolio Website</h3>
								<p>You're looking at it right now! This site is built using React with a
									Node/Express backend that communicates with a MySQL database.</p>
							</li>
							<li>
								<h3>University Capstone Project</h3>
								<p>In my final semesters at university I was the main developer behind a website for
									a real business using the CakePHP framework. We built the front and back-end from
									scratch, including a custom CMS, enabling the site's content to be customised.</p>
							</li>
							<li>
								<h3>ACNH Companion App for iOS</h3>
								<p>A companion app for Nintendo's Animal Crossing New Horizons. It fetches data from 
									<a href='https://acnhapi.com'> ACNH API</a> to display the fish and bugs in the
									game, and provides a guide to other mechanics in the game.</p>
							</li>
							<li>
								<div className='copyright'>
									<ul>
										<li>lauren hammond © 2020</li>
										<li><a href='https://github.com/laurenah'>Github</a></li>
										<li><a href='https://www.linkedin.com/in/lauren-h-81917ab4/'>Linkedin</a></li>
										{loginButton}
									</ul>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
    );
        
}    


export default Home;