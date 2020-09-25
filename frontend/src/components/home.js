import React from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { ReactComponent as Logo } from '../laurenah_logo-08.svg';
import BlogLatest from './subcomponents/BlogLatest';
import ProjectLatest from './subcomponents/ProjectLatest';

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
						<BlogLatest />
					</div>
					<div id='projects'>
						<div className="title">
							<h2>Projects</h2>
						</div>
						<ul className='style1'>
							<ProjectLatest />
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