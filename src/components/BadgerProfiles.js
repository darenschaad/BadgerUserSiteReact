import React, {Component} from 'react';

class BadgerProfiles extends Component {
  constructor(props) {
    super();
    this.state={
      "badgerNames" : []
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    this.setState({[name]: event.target.value})
  }
  componentDidMount() {
    let badgerArray = Object.values(this.props.users);
    // console.log(Object.values(this.props.users)[0]);
    console.log(badgerArray);
    let numberOfBadgers = Object.keys(this.props.users).length;
    // for (var i = 0; i < numberOfBadgers; i++) {
    //   console.log(this.props.users);
    // }

    // let badgerProfiles = this.props.users;
    // console.log(badgerProfiles);
    // let badgerMap =
    //       {Object.keys(badgerProfiles).map((badger, idx) => {
    //         return(
    //           <div key={idx}>
    //             <h4>
    //               {badger.pushId}
    //             </h4>
    //           </div>
    //         );
    //       })}
    //
    this.setState({
      "badgerNames" : badgerArray
    });

    // let badgerMap = badgerProfiles.map((badger, idx) => {
    //   return(
    //     <div key={idx}>
    //       {badger.pushId}
    //     </div>
    //   );
    // });
    // console.log(badgerMap);
  }





  render() {
    return(
      <div>
        <h1>Badgers</h1>
          {this.state.badgerNames.map((badger, idx) => {
            return(
              <div key={idx}>
                <p>
                  {badger.name}{badger.firstName} {badger.lastName}
                </p>
              </div>
            );
          })}
      </div>
    );
  }
}


BadgerProfiles.contextTypes = {
  router: React.PropTypes.object
}
export default BadgerProfiles;
