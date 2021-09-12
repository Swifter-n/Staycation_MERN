import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import {connect} from 'react-redux';
import Header from 'parts/Header';
import PageDetailTitle from 'parts/PageDetailTitle';
import FeaturedImage from 'parts/FeaturedImage';
import PageDetailDescription from 'parts/PageDetailDescription';
import ItemDetails from '../json/itemDetails.json';
import BookingForm from 'parts/BookingForm';
import Activities from 'parts/Activities';
import Testimony from 'parts/Testimony';
import Footer from 'parts/Footer';
import {fetchPage} from '../store/action/page';
import { checkoutBooking} from 'store/action/checkout';


class DetailsPage extends Component{
    componentDidMount(){
        window.title = "Details Page";
        window.scrollTo(0, 0);

        if(!this.props.page[this.props.match.params.id]);
        this.props.fetchPage(`/detail-page/${this.props.match.params.id}`, this.props.match.params.id)

    }

    render(){
        const {page, match} = this.props;
        console.log(page);
        if(!page[match.params.id]) return null;

        const breadcrumb = [
            {pageTitle: "Home", pageHref: ""},
            {pageTitle: "House Details", pageHref: ""}
        ];

        return(
            <>
            <Header {...this.props}></Header>
            <PageDetailTitle breadcrumb={breadcrumb} data={page[match.params.id]}></PageDetailTitle>
            <FeaturedImage data={page[match.params.id].imageId}></FeaturedImage>
            <section className="container">
                <div className="row">
                <div className="col-7 pr-5 ">
                    <Fade bottom>
                    <PageDetailDescription data={page[match.params.id]}></PageDetailDescription>
                    </Fade>
                </div>
                <Fade bottom>
                <div className="col-5"><BookingForm itemDetails={page[match.params.id]} startBooking={this.props.checkoutBooking} />
                </div>
                </Fade>
                <Activities data={page[match.params.id].activityId}/>
                <Testimony data={page[match.params.id].testimonial}/>
                <Footer/>
                </div>
            </section>
            </>
        )
}
}

const mapStateToProps = (state) =>({
    page : state.page,
});

export default connect(mapStateToProps, {checkoutBooking, fetchPage})(DetailsPage);