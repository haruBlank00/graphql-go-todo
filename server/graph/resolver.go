package graph

import "server/graph/model"

// This file will not be regenerated automatically.
//
// It serves as dependency injection for your app, add any dependencies you require here.

type Resolver struct {
	todos []*model.Todo
	users []*model.User
}

func (r *Resolver) PopulateDummyData() {
	// Populate users
	r.users = append(r.users, &model.User{
		ID:   "1",
		Name: "Alice",
	}, &model.User{
		ID:   "2",
		Name: "Bob",
	})

	// Populate todos
	r.todos = append(r.todos,
		&model.Todo{
			ID:     "1",
			Text:   "Learn GraphQL fundamentals",
			UserID: "1",
			Done:   true,
			
		},
		&model.Todo{
			ID:     "2",
			Text:   "Explore GraphQL schema design",
			UserID: "1",
			Done:   false,
		},
		&model.Todo{
			ID:     "3",
			Text:   "Practice React component composition",
			UserID: "1",
			Done:   false,
		},
		&model.Todo{
			ID:     "4",
			Text:   "Build a simple React app",
			UserID: "1",
			Done:   false,
		},
		&model.Todo{
			ID:     "5",
			Text:   "Learn Apollo Client basics",
			UserID: "1",
			Done:   true,
		},
		&model.Todo{
			ID:     "6",
			Text:   "Integrate Apollo Client with React",
			UserID: "1",
			Done:   false,
		},
		&model.Todo{
			ID:     "7",
			Text:   "Implement GraphQL queries in React app",
			UserID: "1",
			Done:   false,
		},
		&model.Todo{
			ID:     "8",
			Text:   "Work on Apollo Client caching strategies",
			UserID: "1",
			Done:   true,
		},
		&model.Todo{
			ID:     "9",
			Text:   "Practice GraphQL mutation operations",
			UserID: "2",
			Done:   false,
		},
		&model.Todo{
			ID:     "10",
			Text:   "Explore React Hooks",
			UserID: "2",
			Done:   false,
		},
		&model.Todo{
			ID:     "11",
			Text:   "Build a React component library",
			UserID: "2",
			Done:   false,
		},
		&model.Todo{
			ID:     "12",
			Text:   "Learn advanced GraphQL concepts",
			UserID: "2",
			Done:   false,
		},
		&model.Todo{
			ID:     "13",
			Text:   "Create a complex React application",
			UserID: "2",
			Done:   false,
		},
		&model.Todo{
			ID:     "14",
			Text:   "Implement Apollo Client subscriptions",
			UserID: "2",
			Done:   false,
		},
		&model.Todo{
			ID:     "15",
			Text:   "Work on performance optimization in React app",
			UserID: "2",
			Done:   false,
		},
	)
}
