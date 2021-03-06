import React from 'react';
import { Gradient } from 'react-gradient';
import { useOktaAuth } from '@okta/okta-react';
import { ReactComponent as Logo } from '../laurenah_logo-08.svg';
import BlogLatest from './subcomponents/BlogLatest';
import ProjectLatest from './subcomponents/ProjectLatest';

const gradients = [
	['#FF8A5B', '#ffc75c']
];

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
		<Gradient
          gradients={gradients}
          property='background'
          className='header'
		  duration={6000}
		  transitionType='sequential'
		  angle='45deg'
        >
			<div className='header-content'>
				<div className='logo'>
					<div className='card'>
						<div className='card-side front'>
							<Logo className='monstera' />
						</div>
						<div className='card-side back'>

						</div>
					</div>
					
				</div>
				<div className='info'>
					<h1 style={{color: '#27474E'}}>Lauren Hammond</h1>
					<div className='subtitle'>Hey, I'm Lauren, and I'm a third generation programmer. Right now my main interest is
					in front-end development, but I have lots of experience in full stack development. I'm a huge fan of
					card games, books, and video games. Coding is what I love to do, so I'll never work a day in my life.</div>
				</div>
			</div>
		</Gradient>
		<div className='container'>
			<div id='wrapper'>
				<div className='nav-stick'>
					<ul>
						<li><a href='/'>Home</a></li>
						<li><a href='/blog'>Blog</a></li>
						<li><a href='/contact'>Contact</a></li>
					</ul>
				</div>
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