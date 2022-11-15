import { Container, CssBaseline } from "@material-ui/core";

import EventsWithSelectors from "./EventsWithSelectors";
import Footer from "./Footer";
import Header from "./Header";
import SignInModal from "./SignInModal";
import React from "react";
// import mainlogo from "../images/mainlogo.svg";

const useStyles = makeStyles((theme) => ({
  picture: {
    // borderRadius: "200px",
    // width: "200px",
    // height: "200px",
    // margin: "auto",
    marginTop: "20px",
  },
  logo: {
    width: '80%',
    marginBottom: '30px',
    marginTop: '30px',
  },
}));

const filterBarSections = {
  all: "All",
  favorites: "My Favorites",
  filters: [
    "Care",
    "Education",
    "Food",
    "Goods",
    "Health",
    "Housing",
    "Legal",
    "Money",
    "Nature",
    "Transit",
    "Volunteering",
    "Work",
  ],
};

const title = {
  title: "Social Prescribing for Self-care",
  description:
    "Search 100+ curated links and resources for social prescriptions in your neighborhood",
  image: "https://source.unsplash.com/tvc5imO5pXk/2400x1275",
  imgText: "main image description",
};

export default function LandingPage(props) {
  const isModalOpen = props.signin;

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        {/* <img src={mainlogo} alt="Main Logo" className={`${classes.logo}`} /> */}
        <Header title="social prescribing usa" />
        <SignInModal isModalOpen={isModalOpen} />
        <main>
          <EventsWithSelectors
            title={title}
            filterBarSections={filterBarSections}
          />
        </main>
      </Container>
      <Footer
        title="social prescribing."
        description="Fill your social prescription today!"
      />
    </React.Fragment>
  );
}
