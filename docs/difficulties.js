//figuring out how to configure html elements to be correctly styled
//how to test components as I am building them when I don't have the other features built (article without cities and images)

//continually update reducers as new information comes in (forgetting to account for not having editors on an article)

// -My article page wasnt updating when I navigated to a new article in the url bar
// because the ComponentDidMount method wasnt being called. So, I researched component lifecycle methods and found ComponentDidUpdate and used that to compare
// this.props with prevProps to conditionally send off a network request to hit my database if I didn't have the needed article information already in my redux store

//created a new slice of state for lastUpdatedArticleId so I could navigate to the show
//page when an article is created

//upload images simultaneously with articles, requires one large FormData object

//created custom routes for top cities and countries

//find a way to circumvent the initial country show page render if we don't have all the needed information for the page
//by setting a ui "country_detail_loaded" slice of state

//when on a country show page and I enter a different wildcard in the url bar, i was getting an issue that
//it was hitting mapStateToProps before hitting componentWillReceiveProps to fetch the new country. So I created a
//different ui slice of state with the id of the current country (set every time a country is fetched via hitting countries#show)
//and I can compare that value in mapStateToProps to the ownProps.match.params.countryId and will return early from MSTPs if
// these do not match
