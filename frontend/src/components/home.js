import React from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { ReactComponent as Logo } from '../laurenah_logo-08.svg';

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
        return <div>Loading...</div>;
    }

    const loginButton = authState.isAuthenticated ?
        <li onClick={logout}><a href='/'>Logout</a></li> :
        <li onClick={login}><a href='/'>Login</a></li>

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
                            {loginButton}
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
						<div className='entry'>
							<div className='title'>
								<h2>The Odd One Out</h2>
								<span className='byline'>Aug 28. 2020</span>
							</div>
							<p>For my last two years of high school, I decided to leave the school I had attended for
								the first 16 years of my life in order to specialise for the university degree I wanted. This meant
								leaving behind most of my friends, but I gained so much more than I expected. The best friend
								who I've lived on the same street as for my entire life was at the school I transferred to. Tuition
								fees went down to around $1,000, which \meant my family could afford to knock down and entirely rebuild
								our house (with a pool!) instead of only renovating a bathroom. Private school didn't offer nearly
								half as many courses as my new school did. Straight away I knew I wanted to sign up for as many
								computer-related courses I could. Software Development (if you could call it that, more on
								this later) and VET Game Design were my first choices.</p>
							<p>Of course, the Australian Curriculum exists, so I couldn't do every single
								computer-related course at my disposal. The core units I went with were: English Language, Chemistry, Math Methods.
								My other picks changed between Year 11 and Year 12. 11: Did Physics. 12: Dropped Physics and Game
								Design and picked up this funky course made by the University of Melbourne and Monash University
								called Algorithmics.</p>
							<p>Okay, now that you know my name and my story, let's get to the title of this post. My
								time in VCE Software Development was rocky to start. I, along with one other girl, were the only
								females in this class during Year 11. That one girl and I became good friends during our time in this
								class, helping each other with the exercises and assignments whilst the teacher berated the absolute
								ears off every other person in the class for constantly slacking off (Halo LAN game anyone?) and gave
								thrilling 100+ page PowerPoint presentations about each learning outcome.</p>
						</div>
						<div className='entry'>

						</div>
					</div>
					<div id='projects'>
						<div className="title">
							<h2>Projects</h2>
						</div>
						<ul className='style1'>
							<li className='first'>
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
									<a href='https://acnhapi.com'>ACNH API</a> to display the fish and bugs in the
									game, and provides a guide to other mechanics in the game.</p>
							</li>
							<li>
								<div className='copyright'>
									<ul>
										<li>lauren hammond © 2020</li>
										<li><a href='https://github.com/laurenah'>Github</a></li>
										<li><a href='https://www.linkedin.com/in/lauren-h-81917ab4/'>Linkedin</a></li>
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