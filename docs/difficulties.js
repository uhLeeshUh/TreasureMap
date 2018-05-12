//figuring out how to configure html elements to be correctly styled
//how to test components as I am building them when I don't have the other features built (article without cities and images)

//continually update reducers as new information comes in (forgetting to account for not having editors on an article)

// -My article page wasnt updating when I navigated to a new article in the url bar
// because the ComponentDidMount method wasnt being called. So, I researched component lifecycle methods and found ComponentDidUpdate and used that to compare
// this.props with prevProps to conditionally send off a network request to hit my database if I didn't have the needed article information already in my redux store
