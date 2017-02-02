import React, {Component} from 'react';

class About extends Component {
  render() {
    console.log(this.props);
    return(
      <div className="about-page">
        <div className="about-page-content">
          <div className="about-page-left-col">
            <h1 className="about-title">About our group</h1>
            <h2>Hello.</h2>
            <h3>
              We are the Badgers.
              We are an adult scout troop.
              Our motto is simple: Do Cool Shit.
              So what do you want to do?
              . . . submit a new or completed badge?
            </h3>
            <p>
            <a target="_blank" href="https://docs.google.com/spreadsheet/viewform?usp=drive_web&formkey=dDdxLVk3czdIUUpabXdfaWNZc3F1Zmc6MQ#gid=0">Go straight to the Badgers Form here.</a>
            </p>

            <h3>. . . see what Badgers are up to?</h3>
            <p>
            Weve been busy Badgers lately -- Snow Sporting, Volunteering, Giving Blood, Getting Geeky, Touring Distilleries, and all kinds of adventures!
            </p>
            <p>
              <a target="_blank" href="http://badgerrific.tumblr.com/">Check out some of our recent activities here.</a>
            </p>
            <p>
              <a target="_blank" href="http://thebadgers.wikispaces.com/Badger+Calendar">Visit the Badgers Calendar here.</a>
            </p>
            <p>
              <a target="_blank" href="https://docs.google.com/spreadsheet/ccc?key=0ApgD9Dta5lkZdDdxLVk3czdIUUpabXdfaWNZc3F1Zmc">See the Big List o' Badges here!</a>
            </p>
            <p>
            If you see an activity that's on the list and you'd like to earn it with a group of other Badgers, announce it at a Badgers meeting or   <a target="_blank" href="http://thebadgers.wikispaces.com/Badger+Worksheet">get on the email distribution list</a> and let's make it happen!
            </p>
            <h3>. . . get busy doing stuff? </h3>
            <p>
            Use the <a target="_blank" href="http://thebadgers.wikispaces.com/Badger+Worksheet">Badgers Form</a> or come to a Badgers meeting to:
            </p>
            <ul>
            <li>introduce yourself as a new Badger</li>
            <li>add ideas for badges that are not on the list, and</li>
            <li>report the completion of a badge!</li>
            </ul>
            <h3>. . . learn more about Badges?</h3>
            <p>

            <a target="_blank" href="http://thebadgers.wikispaces.com/Types+of+Badges">Click through</a> to find out about the various Types of Badges you can earn.
            </p>
             <h3>. . . become a Badger?</h3>
             <p>
            You can! <a target="_blank" href="http://thebadgers.wikispaces.com/Types+of+Badges">Click here</a> to find out how.

            ... see the latest Badger Stats?
            You are in luck! <a target="_blank" href="https://docs.google.com/spreadsheet/ccc?key=0ApgD9Dta5lkZdEwtb0g0S0pSS0o3X2JPbmh2bzJ5aEE&usp=sharing">Click here</a> to see the latest results!
            </p>
            <img className="about-graph-image" src={require('../img/graph.jpg')} alt="graph"/>

            <h2>We meet every 3rd Friday.</h2>
            <p>

            See the <a target="_blank" href="http://thebadgers.wikispaces.com/Badger+Calendar">Badgers Calendar</a> for details.
            </p>
            <p>
            Our monthly meetings are an excellent opportunity to:
            </p>
            <ul>
              <li>Show your work</li>
              <li>Receive your badges and Badger Books</li>
              <li>Drink some wine and eat some snacks</li>
              <li>Conspire and collaborate</li>
            </ul>
            <p>
            We often have small activities at the meetings, but most badge-earning activities take place outside of these meetings (independently, organized between Badgers, or using the distribution list).
            </p>
            <p>
            You can see all group activities on the <a target="_blank" href="http://thebadgers.wikispaces.com/Badger+Calendar">Badgers Calendar.</a>
            </p>
            <div className="about-image-div">
              <img className="about-badge-image" src={require('../img/about.jpg')} alt="badge"/>
            </div>
          </div>
          <div className="about-page-right-col">
            <h3><a target="_blank" href="http://badgerrific.tumblr.com/post/117645057594">Voting is open!</a></h3>
              <p><a target="_blank" href="https://www.surveymonkey.com/s/ZCS3MV3">Voting is open!</a></p>
              <h5>Posted: Wed 29th of April, 2015</h5>
              <h3><a target="_blank" href="http://badgerrific.tumblr.com/post/86908778244">Badgers Backyard Cinema! Twelve Badgers and buddies gathered...</a></h3>
              <p>
              Badgers Backyard Cinema!
              Twelve Badgers and buddies gathered together last night for the first installment of Badgers Backyard Cinema!
              We wanted to go with a scouting theme, so we chose <a target="_blank" href="http://www.moonrisekingdom.com/">Moonrise Kingdom</a> and cozied up at the “drive-in” with pizza and popcorn and pillows and blankets.
              We’re cooking up a tarpaulin badge, too, because rigging that up to channel the rain is way harder than it looks!
              Thanks a million to Badger Mary (with assistance from buddy Seth and Badger Sarah C) for the tarp magic, and to buddy Felim for the sound system!
            </p>
              <h5>Posted: Mon 26th of May, 2014</h5>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
