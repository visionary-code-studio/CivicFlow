import { NextResponse } from 'next/server';

// Realistic mock data for Indian Election News
const MOCK_DATABASE = [
  {
    title: "Election Commission of India announces dates for upcoming assembly elections",
    link: "https://eci.gov.in",
    snippet: "The Election Commission of India (ECI) today announced the schedule for the general elections to the legislative assemblies. Voting will take place in multiple phases starting next month.",
    source: "Election Commission of India"
  },
  {
    title: "Voter Turnout Reaches Record High in First Phase of Polling",
    link: "#",
    snippet: "Initial reports indicate a record-breaking voter turnout in the first phase of the national elections. Citizens braved early morning heat to cast their ballots, with EVMs and VVPATs functioning smoothly across major constituencies.",
    source: "National News Agency"
  },
  {
    title: "How to check your name in the Voter List online",
    link: "https://electoralsearch.eci.gov.in/",
    snippet: "Are you prepared for voting day? Citizens can easily verify their enrollment in the electoral roll by visiting the official NVSP portal. A valid EPIC number or personal details can be used for the search.",
    source: "Civic Guide Daily"
  },
  {
    title: "Supreme Court issues new guidelines on Electoral Bonds",
    link: "#",
    snippet: "In a landmark judgment regarding electoral transparency, the Supreme Court has issued strict new compliance guidelines concerning the disclosure of political funding and electoral bonds.",
    source: "Legal Watch India"
  },
  {
    title: "New EVM security protocols introduced ahead of vote counting",
    link: "#",
    snippet: "To ensure absolute transparency and prevent tampering, new physical and digital security layers have been added to EVM strong rooms ahead of the final counting day.",
    source: "Tech & Democracy"
  }
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q');

  if (!query) {
    return NextResponse.json({ error: 'Query parameter "q" is required' }, { status: 400 });
  }

  // Simulate network delay to make the UI loading state visible
  await new Promise((resolve) => setTimeout(resolve, 1200));

  // In a real app, this is where we would call:
  // fetch(`https://customsearch.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.GOOGLE_CX}&q=${encodeURIComponent(query + ' "Indian election"')}`)

  // Simple mock search logic: filter mock database if query matches, otherwise return all (for demo purposes)
  const lowerQuery = query.toLowerCase();
  const results = MOCK_DATABASE.filter(item => 
    item.title.toLowerCase().includes(lowerQuery) || 
    item.snippet.toLowerCase().includes(lowerQuery)
  );

  // If no exact match, just return a random subset or the whole list so the UI always has something to show
  const finalResults = results.length > 0 ? results : MOCK_DATABASE.slice(0, 3);

  return NextResponse.json({
    items: finalResults,
    searchInformation: {
      totalResults: finalResults.length.toString(),
      searchTime: 0.45
    }
  });
}
