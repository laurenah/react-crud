import React from 'react';
import '../../blog.css';

const BlogPost = () =>{

    return (
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
        
    );
}

export default BlogPost;