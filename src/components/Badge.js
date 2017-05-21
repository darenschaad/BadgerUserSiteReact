import React, {Component} from 'react';
import Linkify from 'react-linkify';
import base from '../base';
import Loading from './Loading';
import FontAwesome from 'react-fontawesome';
import Modal from './Modal';

class Badge extends Component{
  constructor(params) {
    super();
    this.state = {
      loading : true,
      badge : {},
      bookmarkedBadges: {},
      bookmarked: false,
      bookmarkColor : '#eeeeee',
      bookmarkBorder: true,
      uid: '',
      complete: false,
      modalOpen: false,
    }
    this.bookmark = this.bookmark.bind(this);
    this.markComplete = this.markComplete.bind(this);
    this.onModalClose = this.onModalClose.bind(this);
  }

  componentDidMount() {
    console.log('mounted');
    if (this.props.currentBadge.category === undefined) {
      var url = window.location.pathname;
      var urlBadgeId = "";
      for (var i = url.length - 1; i > 0; i--) {
        if (url[i] !== '/' ) {
          urlBadgeId = url[i] + urlBadgeId;
        } else {
          break;
        }
      }
      this.props.getBadgeById(urlBadgeId);
    }
    if(this.props.bookmarked) {
      this.setState({
        bookmarkColor: '#20A282',
        bookmarked:true
      });
    }
  }

  markComplete() {
    if (this.props.currentUser.uid === '') {
      alert("You must be logged in to mark badges as complete.");
    }
    else {
      this.setState({modalOpen : true});
      let that = this;
      let uid = this.props.currentUser.uid;
      const badge = this.props.currentBadge;
      let completedBadgeId = badge.pushId;
      let dateCompleted = new Date();
      let completedBadgeObject= {dateCompleted:dateCompleted.toString(), pushId:completedBadgeId};
      if (!this.state.bookmarked) {
        base.post(`completedBadges/${uid}/${completedBadgeId}`, {
          data: completedBadgeObject,
          then(err){
            if (err){
            // }else {
            //   that.setState({
            //     bookmarkColor: '#20A282',
            //     completed:true
            //   });
            }
          }
        });
      } else  {
        // this.setState({
        //   bookmarkColor: '#eeeeee',
        //   bookmarked: false
        // })
        base.remove(`completedBadges/${uid}/${completedBadgeId}`, function(err){
          if(!err){
            // console.log("it worked");
          }
        })
      }
    }
  }

  bookmark() {
    if (this.props.currentUser.uid === '') {
      alert("You must be logged in to bookmark badges.");
    }
    else {
      let that = this;
      let uid = this.props.currentUser.uid;
      const badge = this.props.currentBadge;
      let bookmarkBadgeId = badge.pushId;
      let dateBookmarked = new Date();
      let bookmarkBadgeObject= {dateBookmarked:dateBookmarked.toString(), pushId:bookmarkBadgeId};
      if (!this.state.bookmarked) {
        base.post(`bookmarkedBadges/${uid}/${bookmarkBadgeId}`, {
          data: bookmarkBadgeObject,
          then(err){
            if (err){
            }else {
              that.setState({
                bookmarkColor: '#20A282',
                bookmarked:true
              });
            }
          }
        });
      } else  {
        this.setState({
          bookmarkColor: '#eeeeee',
          bookmarked: false
        })
        base.remove(`bookmarkedBadges/${uid}/${bookmarkBadgeId}`, function(err){
          if(!err){
          }
        })
      }
    }
  }

  onModalClose() {
    this.setState({modalOpen: false});
  }

  componentWillUnmount() {
    console.log('unmounting');
  }

  render() {
    document.body.scrollTop = 0;
    console.log(this.props.loading);
    if(this.props.loading) {
      return(
        <Loading />
      );
    } else {
      function titleCase(str) {
       var splitStr = str.split(' ');
       for (var i = 0; i < splitStr.length; i++) {
           // You do not need to check if i is larger than splitStr length, as your for does that for you
           // Assign it back to the array
           if (splitStr[i] !== "of" && splitStr[i] !== "for" && splitStr[i] !== "the" && splitStr[i] !== "in") {
             splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
           }
       }

       // Directly return the joined string
       return splitStr.join(' ');
      }

      let ourBadge = this.props.currentBadge;

      const categories = [0,100,200,300,400,500,600,700,800,900];

      const index = categories.indexOf(ourBadge.category);

      const categoryNames = ["000 - GENERAL KNOWLEDGE", "100 - PHILOSOPHY & PSYCHOLOGY", "200 - RELIGION", "300 - SOCIAL SCIENCE", "400 - LANGUAGES", "500 - SCIENCE", "600 - TECHNOLOGY", "700 - ARTS & RECREATION", "800 - LITERATURE", "900 - HISTORY & GEOGRAPHY"];

      const textColors = ["#4C4C4C", "#0079A5", "#66008D", "#4D782D", "#C97100", "#25895A", "#000073", "#988967", "#76193C", "#985721"];

      const backgroundColors = ["#989DA7", "#DCF0FF", "#D0C0D6", "#CEDFB0", "#EEC99A", "#9EBAAC", "#B5B5CA", "#FDE192", "#DBC2CC", "#D8C2A9"];

      const category = categoryNames[index];

      const textColor = textColors[index];

      const backgroundColor = backgroundColors[index];

      //split tags and challenges with space separation so you don't have one long string with no space
      let splitTags;
      let splitChallenges;
      if(ourBadge.tags !== undefined) {
        splitTags = titleCase(ourBadge.tags.split(',').join(', '));
        splitChallenges = ourBadge.challenges.split(',').join(', ');
      }

      let displayBookmark;

      displayBookmark = (
        <FontAwesome
          className="bookmark-icon hover-hand"
          name="bookmark"
          size="2x"
          border={this.state.bookmarkBorder}
          style={{ color: this.state.bookmarkColor}}
          onClick={this.bookmark}
          />
      );

      return(
        <div>
          {this.state.modalOpen &&
            <Modal onModalClose={this.onModalClose}>
              <p>Hello</p>
            </Modal>
          }
          <div
            className="badge-detail-page-tile"
            style={{backgroundColor: backgroundColor}}
            >
            <div className="category-div">
              <h1 style={{color: textColor}} className="category-name">{ category }</h1>
              {displayBookmark}
            </div>
            <div className="detail-body">
              <h1 className="badge-title" style={{color: textColor}}>{ourBadge.name}</h1>
              <div className="img-wrapper">
                <img className='badge-page-image' src={ourBadge.imageUrl} alt={ourBadge.name}></img>
              </div>
              <h3 style={{color: textColor}}><span className="badge-page-subtitle">To do:</span> {ourBadge.description}</h3>
              <Linkify properties={{target: '_blank'}}>
                <h3 style={{color: textColor}}>{ourBadge.comments}</h3>
                <h3 style={{color: textColor}}><span className="badge-page-subtitle">Proof:</span> {ourBadge.proof}</h3>
              </Linkify>
              <h3 style={{color: textColor}}><span className="badge-page-subtitle">Challenges:</span> {splitChallenges}</h3>
              <h3 style={{color: textColor}}><span className="badge-page-subtitle">Creator:</span> {ourBadge.creator}</h3>
              <h3 style={{color: textColor}}><span className="badge-page-subtitle">Date Created:</span> {ourBadge.date}</h3>
              <h3 style={{color: textColor}}><span className="badge-page-subtitle">Keywords:</span> {splitTags}</h3>
              <div>
              <button onClick={this.markComplete}>Mark Badge as Complete</button>
              </div>
            </div>
          </div>
        </div>

      );
    }
  }
}

export default Badge;
