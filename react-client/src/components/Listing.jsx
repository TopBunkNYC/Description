import React from 'react';
// import stlye './style.css';

import ReactTextCollapse from 'react-text-collapse'


const TEXT_COLLAPSE_OPTIONS = {
  collapse: false,
  collapseText: 'Read more about the space',
  expandText: 'Hide',
  minHeight: 10,
  maxHeight: 820,
  textStyle: {
    color: "#008489",
    fontSize: '16px',
    fontWeight: 600,
  }
}


class Listing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    }

  }


  toggle(){
    this.setState({ isOpen: !this.state.isOpen });
  }


  render () {
    return (
	    <div style={styles.container}>
	      <div style={styles.roomType}>
	      		<p>{this.props.listing.room_type} </p>
	    	</div>

	    	<div style={styles.cityDecalContainter}>
		    	<div style={styles.roomTypeDetails}>
		      		<h1>{this.props.listing.room_details} </h1>
		      </div>
					<div style={styles.iconeNameContainer}>
      			<div style={styles.avatar}>
      				<img style={styles.avatar} src={this.props.listing.avatar}/>
      			</div>
      			<div style={styles.nameText}>{this.props.listing.username}</div>
      		</div>
	    	</div>
		    	<div style={styles.city}>
		      		<p>{this.props.listing.city}</p>
		    	</div>

	    	<div style={styles.iconContainter}>
    			<div style={styles.iconContainer}>
    				<img style={styles.imgIcon} src="./guests.png" />
    					<p style={styles.sampleCont}>{this.props.listing.num_guests} {this.props.listing.num_guests === 1 ? 'Guest' : 'Guests'}</p>
    				<img style={styles.imgIcon} src="bedrooms.png" />
    					<p style={styles.sampleCont}>{this.props.listing.num_bedrooms} {this.props.listing.num_bedrooms === 1 ? 'Bedroom' : 'Bedrooms'}</p>
    				<img style={styles.imgIcon} src="./beds.png" />
    					<p style={styles.sampleCont}>{this.props.listing.num_beds} {this.props.listing.num_beds === 1 ? 'Bed' : 'Beds'}</p>
    				<img style={styles.imgIcon} src="./bath.png" />
    					<p style={styles.sampleCont}>{this.props.listing.num_baths} {this.props.listing.num_baths === 1 ? 'Bath' : 'Baths'}</p>
    			</div>
	    	</div>

	    	<div style={styles.highlightContainter}>
	    		<p style={styles.homeHighlight}>HOME HIGHLIGHTS</p>
	    		<div style={styles.checkInContainer}>
	    			<p style={styles.checkIn}>Self check-in</p>
	    			<p style={styles.checkInEasy}>· Easily check yourself in with the lockbox.</p>
	    		</div>

	    		<div style={styles.helpfulContainer}>
	    			<div style={styles.helpfulText}>Helpful</div>
	    			<img style={styles.helpfulIcon} src="./thumbs-up.png" />
	    			<div style={styles.notHelpfulText}>· Not helpful</div>
	    		</div>
	    	</div>

	    	<div style={styles.city_details}>
	      		<p>{this.props.listing.city_details}</p>
	    	</div>

        <ReactTextCollapse options={TEXT_COLLAPSE_OPTIONS}>

	    	<div style={styles.space}>
	      		<p>The space</p>
	    	</div>
	    	<div style={styles.listing_details}>
	      		<p>{this.props.listing.listing_details}</p>
	    	</div>
	    	<div style={styles.space}>
	      		<p>Guest access</p>
	    	</div>
	    	<div style={styles.listing_details}>
	      		<p>{this.props.listing.guest_access}</p>
	    	</div>	    	
	    	<div style={styles.space}>
	      		<p>Interaction with guests</p>
	    	</div>
	    	<div style={styles.listing_details}>
	      		<p>{this.props.listing.interaction}</p>
	    	</div>
	    	<div style={styles.space}>
	      		<p>Other things to note</p>
	    	</div>
	    	<div style={styles.listing_details}>
	      		<p>{this.props.listing.other}</p>
	    	</div>
        </ReactTextCollapse>
        <br/>
        <br/>
        <a className="" style={styles.contact}>Contact Host</a>
	    </div>

    )
  }
}


const styles = {
  container: {
  	paddingLeft: 24,
  	marginLeft: -8,
  	marginRight: -8,
  	width: 664, 
  	backgroundColor: "FFFFFF",
  	lineHeight: 1.43,
  	borderWidth: 1,
  	fontFamily: "'Roboto', sans-serif",
  	marginLeft: 94.500,
    border: "0px 0px 1px 0px solid #EBEBEB",
  },roomType: {
  	fontSize: 12,
  	backgroundColor: "#FFFFFF",
  	fontFamily: "'Roboto',sans-serif",
  	color: "#585a3a",
  	fontWeight: 800,
  	marginBottom:-30,
  },roomTypeDetails:{
  	fontFamily: "'Roboto',sans-serif",
  	fontSize: 19,
  	fontWeight: 800,
  	color: "#484848",
  	display: "inline",
  	lineHeight: "normal",
  },city: {
  	color: "#484848",
  	fontSize: 16,
  	fontWeight: 400,
  	marginTop:-30,
  }, city_details: {
  	fontSize: 14,
  	fontFamily: "'Roboto',sans-serif",
  	color: "#484848",
  }, space: {
  	fontSize: 16,
  	fontFamily: "'Roboto',sans-serif",
  	color: "#484848",
  	fontWeight: 600,
  }, listing_details: {
  	fontSize: 16,
  	fontFamily: "'Roboto',sans-serif",
  	color: "#484848",
  	fontWeight: 400,
  }, iconContainter:{
  	backgroundColor: "#FFFFFF",
  	width: 664,
  	height: 20,
  	flex: 1, 
  	flexDirection: 'row',
  }, imgIcon:{
  	paddingLeft: 20,
  	height: "100%",
  	width: "auto",
  }, iconContainer:{
  	height: "100%",
  	flexDirection: 'row',
  	display: "flex",
  }, iconText:{
  	fontSize: 16,
  	fontFamily: "'Roboto',sans-serif",
  	fontWeight: 400,
  	flexDirection: 'row',
  }, sampleCont:{
  	flexDirection: 'row',
  	backgroundColor: "#FFFFFF",
  	color: "#484848",
  	fontFamily: "'Roboto',sans-serif",
  	fontWeight: 400,
  	height: 12.5,
  	marginTop:-1,
  	paddingLeft: 10,
  },highlightContainter: {
  	marginTop: 20,
  	width: 598,
  	height: 80,
  	padding: 20, 
  	border: "1px solid #EBEBEB", 
  	shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1
    }, 
  }, homeHighlight: {
  	color: "#767676",
  	fontSize: 12,
  	fontWeight: 800,
  	fontFamily: "'Roboto',sans-serif",
  }, checkInContainer:{
  	width: 598,
  	height: 22,
  	flexDirection: 'row',
  	display: "flex",
  }, checkIn:{
  	marginTop: -5,
  	fontSize: 16,
  	fontFamily: "'Roboto',sans-serif",
  	color: "#484848",
  	fontWeight: 600,
  },checkInEasy: {
  	marginTop: -5,
  	fontSize: 16,
  	fontFamily: "'Roboto',sans-serif",
  	color: "#484848",
  	fontWeight: 400,
  }, helpfulContainer: {
  	width: 598,
  	height: 18,
  	flexDirection: 'row',
  	display: "flex",
  }, helpfulText:{
  	width: 48,
  	height: 18,
  	color: "#767676",
  	fontFamily: "'Roboto',sans-serif",
  	fontSize: 14,
  	fontWeight: 400,
  }, helpfulIcon: {	
  	height: "100%",
  	width: "auto",
  }, notHelpfulText:{
  	width: 1000,
  	height: 18,
  	color: "#767676",
  	fontFamily: "'Roboto',sans-serif",
  	fontSize: 14,
  	fontWeight: 400,
  }, cityDecalContainter: {
  	flexDirection: 'row',
  	display: "flex",
  	backgroundColor: "#FFFFFF",
  	width: 648,
  	height: 136,
  }, iconeNameContainer: {
  	backgroundColor: "#FFFFFF",
  	flexDirection: 'column',
  	alignItems: 'flex-end',
  	justifyContent: 'center',
  	paddingTop: 30
  }, avatar: {
  	width: 60, 
  	height: 60 , 
  	borderRadius: "50%",
  	paddingLeft: 10,
  }, nameText: {
  	color: "#767676",
  	fontFamily: "'Roboto',sans-serif",
  	fontSize: 14,
  	fontWeight: 400,
  	width: 94, 
  	height: 18 ,
    textAlign: 'center'
  }, contact: {
  	color: "#008489",
  	fontFamily: "'Roboto',sans-serif",
  	fontSize: 16,
  	fontWeight: 600,

  }
};

export default Listing;