import { Container, CssBaseline } from '@material-ui/core';

import EventsWithSelectors from './EventsWithSelectors';
import Footer from './Footer';
import Header from './Header';
import React from 'react';

const headerSections = [
  { title: 'About', url: '#' },
  { title: 'For Healthcare Workers', url: '#' },
  { title: 'For Leaders', url: '#' },
  { title: 'Resources', url: '#' },
  { title: 'Sign In', url: '#' },
]

const filterBarSections = {
  all: 'All',
  favorites: 'My Favorites',
  filters: [
    'Volunteering',
    'Nature',
    'Food',
    'Housing',
    'Goods',
    'Transit',
    'Health',
    'Money',
    'Care',
    'Education',
    'Work',
    'Legal',
  ],
};

const title = {
  title: 'Social Prescribing for Self-care',
  description: 'Search 100+ curated links and resources for social prescriptions in your neighborhood',
  image: 'https://source.unsplash.com/random/?sig=123',
  imgText: 'main image description',
};


export default function LandingPage() {

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" >
        <Header title="social prescribing." headerSections={headerSections} />
        <main>
          <EventsWithSelectors title={title} filterBarSections={filterBarSections} />
        </main>
      </Container>
      <Footer title="social prescribing." description="Fill your social prescription today!" />
    </React.Fragment>
  );
}
